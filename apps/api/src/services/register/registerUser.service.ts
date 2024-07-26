import { prisma } from '@/connections/prisma.connections';
import { IRegisterUser } from '../../types/types';
import { formatUserData } from '@/helpers/formatData.helper';
import { createReferralCode } from '@/helpers/createReferalCode.helper';

export const registerUserService = async ({
  email,
  password,
  first_name,
  last_name,
  gender,
  birthdate: { year, month, day },
  phone_number,
  email_notification,
}: IRegisterUser) => {
  // Check if the user already exists
  const existingUser = await prisma.user.findFirst({
    where: { email },
  });

  if (existingUser) {
    throw { message: 'Email Address has already been registered', status: 401 };
  }

  // Format user data
  const birth_date = new Date(year, month - 1, day);
  const formattedUserData = await formatUserData(
    first_name,
    last_name,
    email,
    password
  );

  if (!formattedUserData) {
    throw new Error('User data formatting failed');
  }

  const {
    uppercasedFirstName,
    uppercasedLastName,
    lowercasedEmail,
    hashedPassword,
  } = formattedUserData;

  if (
    !hashedPassword ||
    !lowercasedEmail ||
    !uppercasedFirstName ||
    !uppercasedLastName
  ) {
    throw new Error('Password hashing failed');
  }

  // Start transaction
  const [newUser, referralCode] = await prisma.$transaction(async (transaction: any) => {
    // Generate a unique referral code
    let uniqueReferralCode: string = '';
    let isUnique = false;

    while (!isUnique) {
      uniqueReferralCode = createReferralCode();
      const existingCoupon = await transaction.coupon.findFirst({
        where: { code: uniqueReferralCode },
      });
      if (!existingCoupon) {
        isUnique = true;
      }
    }

    // Create new user and assign referral code
    const newUser = await transaction.user.create({
      data: {
        email: lowercasedEmail,
        password: hashedPassword,
        firstName: uppercasedFirstName,
        lastName: uppercasedLastName,
        gender,
        roleId: 1,
        birthDate: birth_date,
        phoneNumber: phone_number,
        emailNotification: email_notification,
      },
    });

    const expirationDate = new Date();
    expirationDate.setFullYear(expirationDate.getFullYear() + 1);

    const newCoupon = await transaction.coupon.create({
      data: {
        name: 'REFERRAL CODE',
        details: `${newUser.firstName} ${newUser.lastName} Referral Coupon`,
        code: uniqueReferralCode,
        activeDate: new Date(),
        expirationDate: expirationDate,
      },
    });

    const newReferal = await transaction.referral.create({
      data:{
        customerId: newUser.uid,
        couponId: newCoupon.id,
        expirationDate: newCoupon.expirationDate
      }
    })

    if (!newCoupon || !newReferal) {
      throw new Error('Referral code generation failed');
    }

    return [newUser, uniqueReferralCode];
  });

  // Make sure referralCode is not undefined before returning
  if (!referralCode) {
    throw new Error('Referral code generation failed');
  }

  return { user: newUser, referralCode };
};

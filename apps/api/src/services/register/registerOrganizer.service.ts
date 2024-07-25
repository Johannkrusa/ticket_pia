import { prisma } from '@/connections/prisma.connections';
import { IRegisterOrganizer } from './types';

export const registerOrganizerService = async ({
  email,
  organizer_name,
  phone_number,
  organizer_email,
}: IRegisterOrganizer) => {
  const existingVerifiedUser = await prisma.user.findFirst({
    where: { email, verified: true },
    include: { organizer: true },
  });

  console.log("hello")

  if (!existingVerifiedUser) {
    throw {
      message: 'Cannot find existing verified user with the provided email address',
      status: 404,
    };
  }

  if (existingVerifiedUser.organizer) {
    throw {
      message: 'This email address is already associated with an organizer',
      status: 409,
    };
  }

  const existingOrganizer = await prisma.organizer.findFirst({
    where: { email: organizer_email },
  });

  if (existingOrganizer) {
    throw {
      message: 'Organizer email address is already in use',
      status: 409,
    };
  }

  console.log("hello")

  const newOrganizer = await prisma.$transaction(async (transaction) => {
    const createdOrganizer = await transaction.organizer.create({
      data: {
        userId: existingVerifiedUser.uid,
        name: organizer_name,
        email: organizer_email,
        phoneNumber: phone_number,
      },
    });

    await transaction.user.update({
      where: { uid: existingVerifiedUser.uid },
      data: { roleId: 2 },
    });

    return createdOrganizer;
  });

  if(!newOrganizer){
    throw({message:'Failed at creating organizer', status:404})
  }

  return { organizer: newOrganizer };
};

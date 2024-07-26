import { NextFunction, Request, Response } from 'express';
import { registerUserService } from '@/services/register/registerUser.service';
import { registerOrganizerService } from '@/services/register/registerOrganizer.service';
import { createEmailVerifyPageToken, createToken } from '@/helpers/createToken.helper';
import { sendEmailVerificationService } from '@/services/authenticate/sendVerificationEmail.service';
import { prisma } from '@/connections/prisma.connections';

export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const {
      email,
      password,
      first_name,
      last_name,
      gender,
      birthdate: { year, month, day },
      phone_number,
      email_notification,
    } = req.body;

    const { user } = await registerUserService({
      email,
      password,
      first_name,
      last_name,
      gender,
      birthdate: { year, month, day },
      phone_number,
      email_notification,
    });

    const token = createEmailVerifyPageToken({userId: user.uid})

    try {
      await sendEmailVerificationService({
        userId: user.uid,
        roleId: user.roleId,
        userEmail: user.email,
      });

      res.send({
        error: false,
        message: 'Register User Successful',
        data: {
          user,
          token,
        },
      });
    } catch (emailError) {

      const existingReferal = await prisma.referral.findFirst({
        where:{
          customerId: user.uid
        }
      })

      await prisma.referral.deleteMany({
        where:{
          customerId: user.uid
        }
      })

      await prisma.coupon.delete({
        where:{
          id: existingReferal?.couponId
        }
      })

      await prisma.user.delete({
        where: { uid: user.uid },
      });

      throw new Error('Cannot send email');
    }
  } catch (error) {
    next(error);
  }
};

export const registerOrganizer = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { email, organizer_name, organizer_email, phone_number } = req.body;

    const newOrganizer = await registerOrganizerService({
      email,
      organizer_name,
      organizer_email,
      phone_number,
    });

    if (!newOrganizer) {
      throw { message: 'Register organizer error', status: 409 };
    }

    res.send({
      error: false,
      message: 'Register Organizer Successful',
      data: {
        newOrganizer,
      },
    });
  } catch (error) {
    next(error);
  }
};

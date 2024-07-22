import { NextFunction, Request, Response } from 'express';
import { createToken } from '../helpers/createToken.helper';
import { authenticateUserService } from '@/services/authenticate/authenticateUser.service';
import { keepAuthUserService } from '@/services/authenticate/keepAuthUser.service';

interface IRequest extends Request {
  payload?: any;
}

export const authenticateUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { email, password } = req.body;

    const {user} = await authenticateUserService({ email, password });

    const token = createToken({
      userId: user.uid,
      roleId: user.roleId
    });

    res.send({
      error: false,
      message: 'Login successful',
      data: {
        token: token,
        id: user.uid,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        organizer:{
            name: user.organizer?.name,
        } ,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const keepAuth = async (
  req: IRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { userId } = req.payload;
    const user = await keepAuthUserService({userId});

    res.send({
      error: false,
      message: 'Keep login successful',
      data: {
        id: user.user.uid,
        firstName: user.user.firstName,
        lastName: user.user.lastName,
        email: user.user.email,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const emailVerification = async (
  req: IRequest,
  res: Response,
  next: NextFunction,
) => {
//   try {
//     const { userId } = req.payload;
//     const { currentPassword, newPassword } = req.body;

//     await emailVerificationService({
//       userId,
//       currentPassword,
//       newPassword,
//     });

//     res.status(200).send({
//       message: 'Email successfully verified',
//     });
//   } catch (error) {
//     next(error);
//   }
};

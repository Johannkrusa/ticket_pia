import { PRIVATE_KEY } from '@/config';
import { IRequest } from '@/types/types';
import { NextFunction, Request, Response } from 'express';
import jwt, { JsonWebTokenError } from 'jsonwebtoken';


export const verifyToken = (
  req: IRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { authorization } = req.headers;

    const privateKey = PRIVATE_KEY;

    if (!authorization) {
      return res.status(401).json({ message: 'Token is missing' });
    }

    const token = authorization.split(' ')[1];

    const decodedToken = jwt.verify(token, privateKey);

    req.payload = decodedToken;
    next();
  } catch (error) {
    if (error instanceof JsonWebTokenError) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    next(error);
  }
};

import jwt from 'jsonwebtoken';
import { PRIVATE_KEY } from '@/config';
import { ITokenPayload } from '@/types/types';


export const createToken = ({ userId, roleId }: ITokenPayload) => {
  const expiresIn = '5d';
  return jwt.sign({ userId, roleId }, PRIVATE_KEY, {
    algorithm: 'HS256',
    expiresIn 
  });
};

export const createEmailVerifyPageToken = ({ userId }: ITokenPayload) => {
  const expiresIn = '1d';
  return jwt.sign({ userId }, PRIVATE_KEY, {
    algorithm: 'HS256',
    expiresIn 
  });
};

import jwt from 'jsonwebtoken';
import { PRIVATE_KEY } from '@/config';

export const createToken = ({ userId, roleId }: any) => {
  const expiresIn = '5d';
  return jwt.sign({ userId, roleId }, PRIVATE_KEY, {
    algorithm: 'HS256',
    expiresIn 
  });
};


import { prisma } from '@/connections/prisma.connections';

export interface IUser {
  userId: string;
}

export const keepAuthUserService = async ({ userId }: IUser) => {
  const user = await prisma.user.findFirst({
    where: { uid : userId },
    include: {
      organizer: true,
    },
  });

  if (!user) {
    throw { message: 'User is not found', status: 400 };
  }

  if (!user.verified) {
    throw { message: 'User is not yet verified', status: 400 };
  }
  return {
    user,
  };
};

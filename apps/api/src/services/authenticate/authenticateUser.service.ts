import { prisma } from "@/connections/prisma.connections";
import { IUser } from "./types";
import { comparePassword } from "@/helpers/hashPassword.helper";

export const authenticateUserService = async ({
  email,
  password,
}: Pick<IUser, 'email' | 'password'>) => {
  const user = await prisma.user.findFirst({
    where: { email },
    include: {
      organizer: true
    },
  });

  if (!user) {
    throw { message: 'Invalid email', status: 401 };
  }

  if (!user.verified){
    throw ({message: 'User is not yet verified, please verify through your email', status:401} )
  }

  const isPasswordMatch = await comparePassword(password, user.password);

  if (!isPasswordMatch) {
    throw { message: 'Invalid password', status: 401 };
  }

  return {
    user
  };
};

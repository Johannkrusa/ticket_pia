export interface IUser {
    firstName: string;
    lastName: string;
    gender: string;
    birthDate: Date;
    phoneNumber: string;
    email: string;
    password: string;
    jobPositionId: number;
    shiftId: number;
    verified?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
  }


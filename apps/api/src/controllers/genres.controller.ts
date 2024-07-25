import { getGenresService } from "@/services/genres/genres.service";
import { NextFunction, Request, Response } from 'express';

export const getGenres = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { genres } = await getGenresService();

    if (!genres || genres.length === 0) {
      throw new Error('Failed fetching genres');
    }

    res.status(200).json({
      error: false,
      message: 'Fetch genres successful',
      data: {
        genres
      }
    });
  } catch (error) {
    next(error);
  }
};

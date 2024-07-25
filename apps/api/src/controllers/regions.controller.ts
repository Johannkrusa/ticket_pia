import { getRegionsService } from "@/services/regions/regions.service";
import { NextFunction, Request, Response } from 'express';

export const getRegions = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { regions } = await getRegionsService();

    if (!regions || regions.length === 0) {
      throw new Error('Failed fetching regions');
    }

    res.status(200).json({
      error: false,
      message: 'Fetch regions successful',
      data: {
        regions
      }
    });
  } catch (error) {
    next(error);
  }
};

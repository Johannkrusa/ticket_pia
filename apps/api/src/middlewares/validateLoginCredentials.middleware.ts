import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';

export const validateLoginCredentials = [
  // Define validation rules
  body('email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Email must be valid'),
  body('password')
    .notEmpty()
    .withMessage('Password is required')
    .isLength({ min: 8, max: 32 })
    .withMessage('Password must be at least 8 characters and under 32 characters'),

  // Middleware to handle validation results
  (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log('Request Body:', req.body);
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next();
    } catch (error) {
      next(error);
    }
  },
];

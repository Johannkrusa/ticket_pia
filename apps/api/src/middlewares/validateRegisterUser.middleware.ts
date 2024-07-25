import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';

export const validateRegisterUser = [
  body('email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Email must be valid'),

  body('password')
    .notEmpty()
    .withMessage('Password is required')
    .isLength({ min: 8, max: 32 })
    .withMessage(
      'Password must be at least 8 characters and under 32 characters',
    ),

  body('first_name').notEmpty().withMessage('First name is required'),

  body('last_name').notEmpty().withMessage('Last name is required'),

  body('birthdate.year')
    .notEmpty()
    .withMessage('Birthdate year is required')
    .isInt({ min: 1900, max: new Date().getFullYear() })
    .withMessage('Invalid year'),

  body('birthdate.month')
    .notEmpty()
    .withMessage('Birthdate month is required')
    .isInt({ min: 1, max: 12 })
    .withMessage('Invalid month'),

  body('birthdate.day')
    .notEmpty()
    .withMessage('Birthdate day is required')
    .isInt({ min: 1, max: 31 })
    .withMessage('Invalid day'),

  body('phone_number')
    .notEmpty()
    .withMessage('Phone number is required')
    .withMessage('Invalid phone number format')
    .isLength({ min: 10, max: 15 })
    .withMessage('Phone number must be between 10 and 15 characters'),

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

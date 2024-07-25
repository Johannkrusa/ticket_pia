import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';

export const validateRegisterOrganizer = [
  body('email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Email must be valid'),
  body('organizer_name').notEmpty().withMessage('Organizer name is required'),
  body('organizer_email')
    .notEmpty()
    .withMessage('Organizer email is required')
    .isEmail()
    .withMessage('Must be a valid email address'),
  body('phone_number')
    .notEmpty()
    .withMessage('Phone number is required')
    .withMessage('Invalid phone number format')
    .isLength({ min: 10, max: 15 })
    .withMessage('Phone number must be between 10 and 15 characters'),

  (req: Request, res: Response, next: NextFunction) => {
    try {
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

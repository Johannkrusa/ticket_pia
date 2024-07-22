import * as Yup from 'yup';

export const registerSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .max(32, 'Password can be at most 32 characters')
    .required('Password is required'),
  confirm_password: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
  first_name: Yup.string().required('First name is required'),
  last_name: Yup.string().required('Last name is required'),
  gender: Yup.string().required('Gender is required').nullable(),
  birthdate: Yup.object()
    .shape({
      year: Yup.number()
        .required('Year is required')
        .min(1900, 'Invalid year')
        .max(new Date().getFullYear(), 'Invalid year'),
      month: Yup.number()
        .required('Month is required')
        .min(1, 'Invalid month')
        .max(12, 'Invalid month'),
      day: Yup.number()
        .required('Day is required')
        .min(1, 'Invalid day')
        .max(31, 'Invalid day'),
    })
    .test('valid-date', 'Invalid date', function (value) {
      const { year, month, day } = value;
      if (year && month && day) {
        const date = new Date(year, month - 1, day);
        return (
          date.getFullYear() === year &&
          date.getMonth() === month - 1 &&
          date.getDate() === day
        );
      }
      return false;
    }),
  phone_number: Yup.string()
    .required('Phone number is required')
    .matches(/^\d{10,15}$/, 'Phone number must be between 10 and 15 digits')
    .nullable(),
  terms_checkbox: Yup.boolean().oneOf(
    [true],
    'You must agree to the terms and conditions',
  ),
});

import * as Yup from 'yup';

export const registerOrganizerSchema = Yup.object().shape({
  email: Yup.string().required('Email is required'),
  confirm_email: Yup.string()
    .oneOf([Yup.ref('email')], 'Email must match')
    .required('Email confirmation is required'),
  organizer_name: Yup.string().required('Organizer name is required'),
  organizer_email: Yup.string()
    .required('Organizer Email is required')
    .email('Must be a valid Email Address'),
  phone_number: Yup.string()
    .required('Phone number is required')
    .matches(/^\d{10,15}$/, 'Phone number must be between 10 and 15 digits')
    .nullable(),
  terms_checkbox: Yup.boolean().oneOf(
    [true],
    'You must agree to the terms and conditions',
  ),
});

import * as Yup from 'yup';

export const authSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(32, "Password must be at max 32 characters")
    .required("Password is required"),
  keep_login: Yup.boolean().default(false)
});

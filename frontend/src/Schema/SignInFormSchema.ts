import { ObjectSchema, object, string } from "yup";
export const signInFormSchema: ObjectSchema<SignInForm> = object({
  email: string().email("Invalid email address").required("Required"),
  password: string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
});

interface SignInForm {
  email: string;
  password: string;
}

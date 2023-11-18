import { ObjectSchema, object, string } from "yup";
export const signupFormSchema: ObjectSchema<SignUpForm> = object({
  email: string().email("Invalid email address").required("Required"),
  password: string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
});
interface SignUpForm {
  email: string;
  password: string;
}

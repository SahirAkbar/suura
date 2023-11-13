import { ObjectSchema ,object,string,} from "yup";
export const signupFormSchema: ObjectSchema<SigninForm> = object({
  email: string()
    .email("Invalid email address")
    .required("Required"),
  password: string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
});
interface SigninForm {
  email: string,
  password:string
}
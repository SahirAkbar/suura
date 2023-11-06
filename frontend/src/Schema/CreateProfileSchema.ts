import { InferType, object, string } from "yup";
export const CreateProfileSchema = object({
  email: string().email("Invalid email address").required("Email id is Required"),
  firstName: string()
    .required("First Name is Required")
    .min(2, " Min length is 2 characters"),
  surName: string()
    .required("Surame is Required")
    .min(2, " Min length is 2 characters"),
  username: string()
    .required("User Name is Required")
    .min(2, " Min length is 2 characters"),
  BusinessName: string()
    .required("Business Name is Required")
    .min(2, " Min length is 2 characters"),
  location: string()
    .required("Location is Required")
    .min(2, " Min length is 2 characters"),
  timezone: string()
    .required("TimeZone is Required")
    .min(2, " Min length is 2 characters"),
  currency: string()
    .required("Currency  is Required")
    .min(2, " Min length is 2 characters"),
});
export type createProfileType = InferType<typeof CreateProfileSchema>;

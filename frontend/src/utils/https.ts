import { QueryClient } from "react-query";
import axiosInstance from "./axiosMiddleWare";

export const queryClient = new QueryClient();
export const signUp = async (values: any) => {
  console.log("signUp", { values });
  try {
    const response = await axiosInstance.post(
      "/user/register/email-password",
      values
    );
    return response.data;
  } catch (error: any) {
    throw error.response;
  }
};

export const signIn = async (values: any) => {
  console.log("signIn", { values });
  try {
    const response = await axiosInstance.post("/user/login", values);
    return response.data;
  } catch (error: any) {
    throw error.response;
  }
};

export const registration = async (values: any) => {
  console.log("register", { values });
  try {
    const response = await axiosInstance.post(
      "/user/register/user-info/1",
      values
    );
    return response.data;
  } catch (error: any) {
    throw error.response;
  }
};

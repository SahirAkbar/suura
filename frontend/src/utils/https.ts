import { QueryClient } from "react-query";
import axiosInstance from "./axiosMiddleWare";

export const queryClient = new QueryClient();
export const signUp = async (values: any) => {
  console.log("signUp", { values });
  try {
    const response = await axiosInstance.get(
      "/user/register/user-info",
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
    const response = await axiosInstance.get(
      "/user/register/user-info",
      values
    );
    return response.data;
  } catch (error: any) {
    throw error.response;
  }
};

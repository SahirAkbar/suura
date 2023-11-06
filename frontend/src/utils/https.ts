import { QueryClient } from "react-query";
import axiosInstance from "./axiosMiddleWare";

export const queryClient = new QueryClient()
export const signin = async (values:any) => {
  console.log(values,"is Values");
  try {
    const response =await axiosInstance.get('/signIn', values)
    return response.data
  } catch (error:any) {
    throw error.response
  }
}
//@ts-nocheck
import { QueryClientProvider } from "react-query";
import CreateProfile from "./_auth/forms/CreateProfile";
import SignInForm from "./_auth/forms/SignInForm/SignInForm";
import SignupForm from "./_auth/forms/SignupForm";
import HomePage from "./_root/pages/HomePage/HomePage";
import "./globals.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { queryClient } from "./utils/https";

import ProfilePictureUpload from "./_auth/forms/ProfilePictureUpload";
import SignUpForm from "./_auth/forms/SignUpForm/SignUpForm";
import UserRegistration from "./_auth/forms/UserRegistration/UserRegistration";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/CreateProfile",
    element: <CreateProfile />,
    children: [
      {
        path: "",
        element: <ProfilePictureUpload />,
      },
    ],
  },
  {
    path: "/signUp",
    element: <SignUpForm />,
  },
  {
    path: "/login",
    element: <SignInForm />,
  },
  {
    path: "/registration",
    element: <UserRegistration />,
  },
]);
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="flex h-full w-full">
        <RouterProvider router={router} />
      </main>
    </QueryClientProvider>
  );
};

export default App;
//   <Routes>
//        {/* public Routes */}
//  <Route   path='/' element={<SignInForm />} />
//  <Route index path='/' element={<SignInForm/>} />
//        {/* Private Routes */}
//   </Routes  >

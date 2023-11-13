import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { signupFormSchema } from "../../Schema/SignupFormSchema";
import { useMutation } from "react-query";
import { signin } from "../../utils/https";

const SignupForm = () => {
  const { mutate } = useMutation(signin);
  const { errors, handleSubmit, handleChange, handleBlur, values, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: signupFormSchema,
      onSubmit: (values) => {
        mutate(values);
        // action.resetForm();
      },
    });
  console.log(errors);
  return (
    <div className="flex ">
      <div className="w-1/2  rounded-xl bg-white shadow-xl p-4">
        <form onSubmit={handleSubmit}>
          <div className="relative pt-14 bg-gradient-to-br to-gray-200 ">
            <div className="absolute top-3 left-4">
              <p className="text-2xl font-bold text-primary">Suura</p>
            </div>
            <div className="relative container m-auto px-0   md:px-4 xl:px-4 h-4 ">
              <div className=" ">
                <div className="px-10 sm:px-16">
                  <div className="grid space-y-4 m-10">
                    <p className="font-bold  italic text-2xl">
                      Welcome To Suura!
                    </p>
                    <p className="text-md text-gray-400">
                      Lets create an account and start enjoying Surra
                    </p>
                    <div>
                      <input
                        type="text"
                        placeholder="Email"
                        onChange={handleChange("email")}
                        onBlur={handleBlur("email")}
                        value={values.email}
                        className="w-full
                                   rounded-md
                                   
                                   border
                                   bordder-[#E9EDF4]
                                   py-2
                                   px-5
                                   bg-[#FCFDFE]
                                   text-base text-body-color
                                   placeholder-[#ACB6BE]
                                   outline-none
                                   focus-visible:shadow-none
                                   focus:border-primary
                                   "
                      />
                      {errors.email && touched.email ? (
                        <p className="form-error">{errors.email}</p>
                      ) : null}
                    </div>
                    <div className="mb-6">
                      <input
                        type="password"
                        placeholder="Password"
                        className="
                                        w-full 
                                        rounded-md
                                        border
                                        border-[#E9EDF4]
                                        py-2
                                        px-5
                                        bg-[#FCFDFE]
                                        text-base text-body-color
                                        placeholder-[#ACB6BE]
                                        outline-none
                                        focus-visible:shadow-none
                                        focus:border-primary
                                    "
                        id="password-input"
                        onChange={handleChange("password")}
                        onBlur={handleBlur("password")}
                        value={values.password}
                      />
                      {errors.password && touched.password ? (
                        <p className="form-error">{errors.password}</p>
                      ) : null}

                      <button className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-primary"></button>
                    </div>
                    {/* {isError && <p> {siginError }</p>} */}
                    <div className="flex items-start mb-6">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                          required
                        />
                      </div>
                      <label
                        htmlFor="remember"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        keep me loged in
                      </label>
                      <a
                        href="#"
                        className="ml-auto text-sm font-medium text-lime-700 hover:text-lime-700"
                      >
                        Forgot Password?
                      </a>
                    </div>
                    <button
                      type="submit"
                      className="h-12 rounded-lg text-white bg-orange-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                    >
                      Log in
                    </button>
                    <div className="text-center">
                      <p className="text-gray-500">
                        By clicking on login u agree with the Sura's
                      </p>
                      <p className="text-gray-500">
                        Terms of service & privancy guidelines
                      </p>
                      <div className="relative py-2">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-b border-black"></div>
                        </div>
                        <div className="relative flex justify-center">
                          <span className="bg-white px-4 text-sm text-gray-500">
                            or log in using
                          </span>
                        </div>
                      </div>{" "}
                    </div>
                    <button
                      className=" group h-14 px-6 border-2 border-gray-300 rounded-lg transition duration-300 
                                             hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                    >
                      <div className="relative flex items-center space-x-4 justify-center">
                        <img
                          src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                          className="absolute left-0 w-5"
                          alt="google logo"
                        />
                        <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base md:w-64  md:mx-auto">
                          Continue with Google
                        </span>
                      </div>
                    </button>
                    <button
                      className="group h-14 px-6 border-2 border-gray-300 rounded-lg transition duration-300 
                                                            hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                    >
                      <div className="relative flex items-center space-x-4 justify-center">
                        <i className="fab fa-apple text-gray-700 absolute left-0 w-5"></i>

                        <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base md:w-64 md:mx-auto">
                          Continue with Apple
                        </span>
                      </div>
                    </button>
                    <div className="text-center">
                      <p className="text-gray-500">
                        Already Account?{" "}
                        <Link
                          to={`/`}
                          className="text-blue-500 hover:text-blue-700"
                        >
                          Login
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <img
          src="/assets/sideImage.jpg"
          className="object-cover h-screen"
          alt=""
        />
      </div>
    </div>
  );
};

export default SignupForm;

import { Link } from "react-router-dom";
import CustomImage from "../../../common/CustomImage/CustomImage";
import { AppleLogo } from "../../../icons/AppleLogo";
import { GoogleLogo } from "../../../icons/GoogleLogo";
import styles from "./SignInForm.module.css";

const SignInForm = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.containerLeft}>
        <div className="absolute top-3 left-10">
          <p className="text-body-bold text-primary text-dark-8 font-OTabolas ">
            Suura
          </p>
        </div>
        <form>
          <div className="relative pt-14 bg-gradient-to-br to-gray-200 ">
            <div className="px-10 sm:px-16">
              <div className="grid m-10">
                <p className="font-extrabold text-body-caption-bold text-dark-8 font-OTabolas">
                  Glad you are back!
                </p>
                <p className={`mt-1 ${styles.messageText}`}>
                  Enter your registered email and password to log in.
                </p>
                <div className="my-6">
                  <input
                    type="text"
                    placeholder="Email"
                    className={styles.formInput}
                    id="email-input"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="password"
                    placeholder="Password"
                    className={styles.formInput}
                    id="password-input"
                  />
                  <button className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-primary"></button>
                </div>

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
                    className="ml-2 text-sm font-TTHoves text-dark-8 dark:text-gray"
                  >
                    Keep me logged in
                  </label>
                  <a
                    href="#"
                    className="ml-auto text-sm font-TTHoves text-tale-10 hover:text-blue-700"
                  >
                    Forgot Password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="h-14 rounded-lg font-TTHoves text-lg text-white bg-brown-10 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                >
                  Log in
                </button>
                <div className="text-center mt-2 mb-2">
                  <p className={styles.messageText}>
                    By clicking on login you agreed with the Suura's
                  </p>
                  <p className={styles.messageText}>
                    terms of service & privancy guidelines
                  </p>
                  <div className="relative py-4">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-b border-gray"></div>
                    </div>
                    <div className="relative flex justify-center">
                      <span className="bg-pearl-white px-4 text-md text-gray">
                        Or log in using
                      </span>
                    </div>
                  </div>
                </div>
                <button className={styles.buttonSecondary}>
                  <div className="relative flex items-center space-x-4 justify-center">
                    <div className="absolute left-0 w-5">
                      <GoogleLogo />
                    </div>
                    <span className="block w-max tracking-wide font-TTHoves text-dark-8 text-md transition duration-300 group-hover:text-blue-600 sm:text-base md:w-64 md:mx-auto">
                      Login with Google
                    </span>
                  </div>
                </button>
                <button className={styles.buttonSecondary}>
                  <div className="relative flex items-center space-x-4 justify-center">
                    <div className="absolute left-0 w-5">
                      <AppleLogo />
                    </div>
                    <span className="block w-max tracking-wide font-TTHoves  text-dark-8 text-md transition duration-300 group-hover:text-blue-600 sm:text-base md:w-64 md:mx-auto">
                      Login with Apple
                    </span>
                  </div>
                </button>
                <div className="text-center font-TTHoves">
                  <p className="text-dark-8 mt-4">
                    New here ?&nbsp;
                    <Link
                      to={`/signUp`}
                      className="text-tale-10 hover:text-blue-700"
                    >
                      Create an Account
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className={styles.containerRight}>
        <div className={styles.imageContainer}>
          <CustomImage
            src="/assets/image-signup-page.jpg"
            altText="signup-display-picture"
            className="h-full w-full rounded-xl"
          />
          <div className="absolute bottom-0 p-10 text-white">
            <div className={styles.captionMessage}>
              I was glad the day I discovered Suura. As the name indicates, it
              makes the process of connecting with client for re-building shoots
              incredibly easy.
            </div>
            <div className={styles.authorContainer}>
              <CustomImage
                src="/assets/author-image.jpg"
                altText="signup-display-picture"
                className="h-10 w-10 rounded-full"
              />
              <div className="ml-2">
                <div className="text-sm ">Danyal Saif</div>
                <div className="text-xs opacity-50">@danyalsaif</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;

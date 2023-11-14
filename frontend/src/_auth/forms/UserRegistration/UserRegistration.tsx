//@ts-nocheck
import { FC, useState } from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../../common/CustomButton/CustomButton";
import CustomInput from "../../../common/CustomInput/CustomInput";
import IconArrowLeft from "../../../icons/IconArrowLeft";
import IconCollaborate from "../../../icons/IconCollaborate";
import IconCreatePortfolio from "../../../icons/IconCreatePortfolio";
import IconInstagramBlank from "../../../icons/IconInstagramBlank";
import IconLineVertical from "../../../icons/IconLineVertical";
import IconLinkPlatform from "../../../icons/IconLinkPlatform";
import IconProfile from "../../../icons/IconProfile";
import IconProfileImage from "../../../icons/IconProfileImage";
import IconSessions from "../../../icons/IconSessions";
import styles from "./UserRegistration.module.css";

const steps = {
  COMPLETE: "complete",
  IN_PROGRESS: "inProgress",
  PENDING: "pending",
};

const stepList = [
  {
    icon: "profile",
    progress: "inProgress",
    title: "Create a profile",
    message: "Set up your profile",
  },
  {
    icon: "profile-image",
    progress: "pending",
    title: "Upload profile images",
    message: "Upload cover and profile images",
  },
  {
    icon: "link-platform",
    progress: "pending",
    title: "Link Platform",
    message: "Connect platform to get portfolio",
  },
  {
    icon: "sessions",
    progress: "pending",
    title: "Sessions you offer",
    message: "Select photography services",
  },
  {
    icon: "create-portfolio",
    progress: "pending",
    title: "Create portfolio",
    message: "Upload your best work",
  },
  {
    icon: "collaborate",
    progress: "pending",
    title: "Collaborate",
    message: "Connect and collaborate",
  },
];

const sessions = [
  "Couples",
  "Interior",
  "Wedding",
  "Elopement",
  "Family",
  "Maternity",
  "New Born",
  "Portraits",
  "Graduation",
  "Boudoir",
  "Branding",
  "Pets",
  "Architecture",
  "Product",
  "Fashion",
];

const UserRegistration: FC = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const pageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="grid grid-cols-10 w-full">
      <div className="col-span-4">
        <div className={styles.containerLeft}>
          <div className="absolute top-3 left-10">
            <Link to="/">
              <p className="text-body-bold text-primary text-dark-8 font-OTabolas z-10">
                Suura
              </p>
            </Link>
          </div>
          <div className="">
            <div className="">
              {stepList.map((step) => (
                <SignUpStep
                  icon={getIcon(step.icon, step.progress)}
                  stepProgress={step.progress}
                  title={step.title}
                  message={step.message}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-6 pl-24 pr-8">
        <div className="w-full">
          <div
            className="w-full flex justify-between p-10"
            style={{ display: currentPage > 0 ? "flex" : "none" }}
          >
            <div
              onClick={() => {
                pageChange(currentPage - 1);
              }}
            >
              <IconArrowLeft />
            </div>
            <div
              className="text-base text-gray cursor-pointer"
              onClick={() => {
                pageChange(currentPage + 1);
              }}
            >
              Skip
            </div>
          </div>
        </div>
        {/* page 0 */}
        <div
          id="page-0"
          style={{ display: currentPage === 0 ? "block" : "none" }}
        >
          <div className="grid m-10">
            <p className="font-normal text-body-caption-bold text-dark-8 font-OTabolas">
              Welcome to Suura web platform!
            </p>
            <p className={`mt-1 ${styles.messageText}`}>
              Let's start with the basics. This is what your future dream
              clients will see.
            </p>
          </div>
          <div>
            <form className="p-10">
              <div className="grid grid-cols-2 gap-4 py-2">
                <CustomInput
                  type="text"
                  placeholder=""
                  label="First name"
                  value="Danyal"
                />
                <CustomInput type="text" placeholder="" label="Last name" />
              </div>
              <div className="py-2">
                <CustomInput
                  type="text"
                  placeholder="eg. johnsmith@gmail.com"
                  label="Email address"
                />
              </div>
              <div className="py-2">
                <CustomInput type="text" placeholder="" label="Business name" />
              </div>
              <div className="py-2">
                <CustomInput
                  type="text"
                  placeholder="eg. johnsmith"
                  label="Username"
                />
              </div>
              <div className="py-2">
                <CustomInput
                  type="text"
                  placeholder="eg. New York"
                  label="Location"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 py-2">
                <CustomInput type="text" placeholder="" label="Time Zone" />
                <CustomInput type="text" placeholder="" label="Currency" />
              </div>
              <div className="py-6">
                <CustomButton
                  className="bg-brown-10 border-brown-10 text-white px-7 h-12 w-full"
                  onClick={(e) => {
                    e.preventDefault();
                    pageChange(currentPage + 1);
                  }}
                >
                  Continue
                </CustomButton>
              </div>
            </form>
          </div>
        </div>
        {/* page 1 */}
        <div
          id="page-1"
          style={{ display: currentPage === 1 ? "block" : "none" }}
        >
          <div className="grid m-10">
            <p className="font-normal text-body-caption-bold text-dark-8 font-OTabolas">
              Let’s set up your profile
            </p>
            <p className={`mt-1 ${styles.messageText}`}>
              Let's start with the basics. This is what your future dream
              clients will see.
            </p>
            <div className="p-10">
              <p className="font-normal text-lg text-dark-8 font-OTabolas">
                Content coming soon!!!
              </p>
            </div>
            <div className="py-6">
              <CustomButton
                className="bg-brown-10 border-brown-10 text-white px-7 h-12 w-1/2"
                onClick={() => {
                  pageChange(currentPage + 1);
                }}
              >
                Continue
              </CustomButton>
            </div>
          </div>
        </div>
        {/* page 2 */}
        <div
          id="page-2"
          style={{ display: currentPage === 2 ? "block" : "none" }}
        >
          <div className="grid m-10 mr-16">
            <p className="font-normal text-body-caption-bold text-dark-8 font-OTabolas">
              Quickly populate your portfolio
            </p>
            <p className={`mt-1 ${styles.messageText}`}>
              Link your Insta account to easily upload your gorgeous feed! Or,
              manually select your faves later.
            </p>
            <div>
              <div className="flex flex-row items-center border border-dashed border-gray-outline rounded-xl p-8 my-6">
                <div className="flex justify-around items-center mr-10">
                  <div className="mr-10">
                    <IconInstagramBlank bgColor="#FFFAF6" />
                  </div>
                  <IconLineVertical bgColor="#ABB2C4" />
                </div>
                <div className="col-span-6 text-base text-dark-8 font-TTHovesSB font-extrabold">
                  Connect to Instagram
                </div>
              </div>
              <div className="py-6">
                <CustomButton
                  className="bg-brown-10 border-brown-10 text-white px-7 h-12 w-1/2"
                  onClick={() => {
                    pageChange(currentPage + 1);
                  }}
                >
                  Next Step
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
        {/* page 3 */}
        <div
          id="page-3"
          style={{ display: currentPage === 3 ? "block" : "none" }}
        >
          <div className="grid m-10 mr-2">
            <p className="font-normal text-body-caption-bold text-dark-8 font-OTabolas">
              What kinds of sessions do you offer?
            </p>
            <p className={`mt-1 ${styles.messageText}`}>
              You'll be able to display a portfolio that represents each type of
              session on your profile.
            </p>
            <div>
              <div className="flex flex-row flex-wrap py-10">
                {sessions.map((item, index) => {
                  return <SessionItem text={item} key={index} />;
                })}
              </div>
              <div className="py-6">
                <CustomButton
                  className="bg-brown-10 border-brown-10 text-white px-7 h-12 w-1/2"
                  onClick={() => {
                    pageChange(currentPage + 1);
                  }}
                >
                  Create Galleries
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRegistration;

const SignUpStep = ({ icon, title, message, stepProgress }) => {
  return (
    <div className={styles.stepItem}>
      <div className={styles.stepContainerRight}>
        <div>{icon}</div>
        <div className={styles.verticalLine}>
          <IconLineVertical color={getLineColor(stepProgress).fillColor} />
        </div>
      </div>
      <div className={styles.stepContainerLeft}>
        <div
          className={`text-base ${
            stepProgress === "pending" ? "text-gray" : "text-dark-8"
          } font-TTHoves font-semibold`}
        >
          {title}
        </div>
        <div
          className={`text-body-thin ${
            stepProgress === "pending" ? "text-gray" : "text-gray-600"
          } font-TTHovesEL`}
        >
          {message}
        </div>
      </div>
    </div>
  );
};

const getColors = (stepProgress: string) => {
  let fillColor = "";
  let bgColor = "";

  switch (stepProgress) {
    case steps.PENDING: {
      fillColor = "#7F8AA5";
      bgColor = "#FFFFFF";
      break;
    }
    case steps.IN_PROGRESS: {
      fillColor = "#FFFFFF";
      bgColor = "#C7987A";
      break;
    }
    case steps.COMPLETE: {
      fillColor = "#000000";
      bgColor = "#C7987A";
      break;
    }
    default: {
      fillColor = "#7F8AA5";
      bgColor = "#FFFFFF";
      break;
    }
  }
  return { fillColor, bgColor };
};

const getLineColor = (stepProgress: string) => {
  let fillColor = "";

  switch (stepProgress) {
    case steps.PENDING:
    case steps.IN_PROGRESS: {
      fillColor = "#EAECF0";
      break;
    }
    case steps.COMPLETE: {
      fillColor = "#C7987A";
      break;
    }
    default: {
      fillColor = "#EAECF0";
      break;
    }
  }
  return { fillColor };
};

const getIcon = (icon: string, progress: string) => {
  switch (icon) {
    case "profile": {
      return (
        <IconProfile
          bgColor={getColors(progress)?.bgColor}
          color={getColors(progress)?.fillColor}
        />
      );
    }
    case "profile-image": {
      return (
        <IconProfileImage
          bgColor={getColors(progress)?.bgColor}
          color={getColors(progress)?.fillColor}
        />
      );
    }
    case "link-platform": {
      return (
        <IconLinkPlatform
          bgColor={getColors(progress)?.bgColor}
          color={getColors(progress)?.fillColor}
        />
      );
    }
    case "sessions": {
      return (
        <IconSessions
          bgColor={getColors(progress)?.bgColor}
          color={getColors(progress)?.fillColor}
        />
      );
    }
    case "create-portfolio": {
      return (
        <IconCreatePortfolio
          bgColor={getColors(progress)?.bgColor}
          color={getColors(progress)?.fillColor}
        />
      );
    }
    case "collaborate": {
      return (
        <IconCollaborate
          bgColor={getColors(progress)?.bgColor}
          color={getColors(progress)?.fillColor}
        />
      );
    }
    default: {
      return null;
    }
  }
};

const SessionItem = ({ text }) => {
  return (
    <div className="px-10 py-2 m-1 ml-0 bg-white border border-dark-1 rounded-xl w-fit text-dark-9 h-fit">
      {text}
    </div>
  );
};

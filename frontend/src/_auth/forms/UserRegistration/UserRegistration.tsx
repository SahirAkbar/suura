//@ts-nocheck
import { FC, useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../../common/CustomButton/CustomButton";
import CustomInput from "../../../common/CustomInput/CustomInput";
import TextEditor from "../../../common/TextEditor/TextEditor";
import IconAdd from "../../../icons/IconAdd";
import IconArrowLeft from "../../../icons/IconArrowLeft";
import IconBrowseJobs from "../../../icons/IconBrowseJobs";
import IconCameraBlank from "../../../icons/IconCameraBlank";
import IconCollaborate from "../../../icons/IconCollaborate";
import IconCollaborateBlank from "../../../icons/IconCollaborateBlank";
import IconCreateGallery from "../../../icons/IconCreateGallery";
import IconCreatePortfolio from "../../../icons/IconCreatePortfolio";
import IconEditPortfolioBlank from "../../../icons/IconEditPortfolioBlank";
import IconGallery from "../../../icons/IconGallery";
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

const pages = {
  NEXT: "next",
  PREV: "prev",
};

const stepListMock = [
  {
    id: 0,
    icon: "profile",
    progress: "inProgress",
    title: "Create a profile",
    message: "Set up your profile",
  },
  {
    id: 1,
    icon: "profile-image",
    progress: "pending",
    title: "Upload profile images",
    message: "Upload cover and profile images",
  },
  {
    id: 2,
    icon: "link-platform",
    progress: "pending",
    title: "Link Platform",
    message: "Connect platform to get portfolio",
  },
  {
    id: 3,
    icon: "sessions",
    progress: "pending",
    title: "Sessions you offer",
    message: "Select photography services",
  },
  {
    id: 4,
    icon: "create-portfolio",
    progress: "pending",
    title: "Create portfolio",
    message: "Upload your best work",
  },
  {
    id: 5,
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

const help = [
  "Creative sessions",
  "Editing",
  "Mentorship",
  "Model Calls",
  "Second Shooter",
];

const offer = [
  "Creative sessions",
  "Editing",
  "Mentorship",
  "Model Calls",
  "Second Shooter",
];

const UserRegistration: FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [stepList, setSetpList] = useState(stepListMock);
  const [currentStep, setCurrentStep] = useState(0);
  const [profilePicture, setProfilePicture] = useState("");
  const [coverPicture, setCoverPicture] = useState("");

  const pageChange = (page) => {
    switch (page) {
      case pages.NEXT: {
        setCurrentPage(currentPage + 1);
        break;
      }
      case pages.PREV: {
        setCurrentPage(currentPage - 1);
        break;
      }
      default: {
        setCurrentPage(0);
        break;
      }
    }
  };

  const stepIncrement = (stepId) => {
    const stepListUpdate = stepList.map((item) => {
      if (item.id === stepId) {
        return { ...item, progress: "complete" };
      }
      if (item.id === stepId + 1) {
        return { ...item, progress: "inProgress" };
      }
      return item;
    });
    setSetpList(stepListUpdate);
    setCurrentStep(currentPage + 1);
  };

  const stepDecrement = (stepId) => {
    const stepListUpdate = stepList.map((item) => {
      if (item.id === stepId) {
        return { ...item, progress: "pending" };
      }
      if (stepId > 0) {
        if (item.id === stepId - 1) {
          return { ...item, progress: "inProgress" };
        }
      }
      return item;
    });
    setSetpList(stepListUpdate);
    setCurrentStep(currentPage - 1);
  };

  const profilePictureRef = useRef(null);
  const coverImageRef = useRef(null);

  useEffect(() => {
    const dropItemCover = coverImageRef.current;
    const dropItemProfile = profilePictureRef.current;

    dropItemCover.addEventListener("dragover", handleDragOverCover);
    dropItemCover.addEventListener("drop", handleDropCover);
    dropItemProfile.addEventListener("dragover", handleDragOverProfile);
    dropItemProfile.addEventListener("drop", handleDropProfile);

    return () => {
      dropItemCover?.removeEventListener("dragover", handleDragOverCover);
      dropItemCover?.removeEventListener("drop", handleDropCover);
      dropItemProfile?.removeEventListener("dragover", handleDragOverProfile);
      dropItemProfile?.removeEventListener("drop", handleDropProfile);
    };
  }, []);

  const handleDragOverProfile = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDropProfile = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const { files } = e.dataTransfer;

    if (files && files.length) {
      const file = new FileReader();
      file.onload = function () {
        setProfilePicture(file.result);
      };
      file.readAsDataURL(files[0]);
    }
  };

  const handleDragOverCover = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDropCover = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const { files } = e.dataTransfer;

    if (files && files.length) {
      const file = new FileReader();
      file.onload = function () {
        console.log("file", file.result);
        setCoverPicture(file.result);
      };
      file.readAsDataURL(files[0]);
    }
  };

  return (
    <div className="grid grid-cols-10 w-full">
      {currentPage < 6 ? (
        <>
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
                      key={step.id}
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
                    pageChange(pages.PREV);
                    stepDecrement(currentPage);
                  }}
                >
                  <IconArrowLeft />
                </div>
                <div
                  className="text-base text-gray cursor-pointer"
                  onClick={() => {
                    pageChange(pages.NEXT);
                    stepIncrement(currentStep);
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
                      value=""
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
                    <CustomInput
                      type="text"
                      placeholder=""
                      label="Business name"
                    />
                  </div>
                  <div className="py-2">
                    <CustomInput
                      type="text"
                      placeholder="eg. johnsmith"
                      label="Username"
                    />
                  </div>
                  <p className="bg-creame-1 text-gray text-base p-4 pt-0">
                    Note: Usernames must be unique and cannot contain spaces or
                    special characters.
                  </p>
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
                        pageChange(pages.NEXT);
                        stepIncrement(0);
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
                <div className="mb-24" id="cover-pic" ref={coverImageRef}>
                  <div className="relative py-4">
                    <div
                      className={`relative flex flex-row justify-center items-center border  border-gray-outline rounded-xl p-12 my-6 ${
                        coverPicture ? "border-solid" : "border-dashed"
                      }`}
                      style={{
                        backgroundImage: `url(${coverPicture})`,
                        backgroundSize: "100%",
                      }}
                    >
                      <div
                        className={`flex flex-col justify-center items-center mr-10 ${
                          coverPicture ? "invisible" : "visible"
                        }`}
                      >
                        <div className="mb-1">
                          <IconGallery />
                        </div>
                        <div className="m-1 flex">
                          <div className="text-base font-TTHovesM text-brown-10">
                            Click to upload cover image
                          </div>
                          <div className="text-base font-TTHoves text-normal text-dark-5 ">
                            &nbsp; or drag and drop
                          </div>
                        </div>
                        <div className="text-xs font-TTHoves text-normal text-dark-5">
                          PNG, JPG or GIF (Optimal size 1440 x 500px)
                        </div>
                      </div>
                    </div>
                    <div
                      className="absolute flex -bottom-24 left-2"
                      id="profile-pic"
                      ref={profilePictureRef}
                    >
                      <div
                        className={`border w-fit ${
                          profilePicture ? "border-solid " : "border-dashed"
                        } border-gray-outline rounded-full p-16 bg-creame-1`}
                        style={{
                          backgroundImage: `url(${profilePicture})`,
                          backgroundSize: "100%",
                        }}
                      >
                        <div
                          style={{
                            visibility: profilePicture ? "hidden" : "visible",
                          }}
                        >
                          <IconGallery />
                        </div>
                      </div>
                      <div
                        className="flex flex-col justify-center items-center mr-10 pl-10"
                        style={{
                          visibility: profilePicture ? "hidden" : "visible",
                        }}
                      >
                        <div className="flex m-1 justify-start items-start">
                          <div className="text-base font-TTHovesM text-brown-10">
                            Click to upload profile image
                          </div>
                        </div>
                        <div className="text-xs sfont-TTHoves text-normal text-dark-5">
                          PNG or JPG (Optimal size 800 x 800px)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="text-gray-outline mt-8" />
                <div className="grid grid-cols-10 gap-2 mt-4">
                  <div className="col-span-3">
                    <div className="text-base text-dark-8 font-TTHoves font-semibold">
                      Bio
                    </div>
                    <div className="text-body-thin text-gray-600 font-TTHovesEL">
                      Write a short introduction.
                    </div>
                  </div>
                  <div className="col-span-7">
                    <TextEditor />
                  </div>
                </div>
                <div className="py-16">
                  <CustomButton
                    className="bg-brown-10 border-brown-10 text-white px-7 h-12 w-3/4"
                    onClick={() => {
                      pageChange(pages.NEXT);
                      stepIncrement(1);
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
                  Link your Insta account to easily upload your gorgeous feed!
                  Or, manually select your faves later.
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
                        pageChange(pages.NEXT);
                        stepIncrement(2);
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
                  You'll be able to display a portfolio that represents each
                  type of session on your profile.
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
                        pageChange(pages.NEXT);
                        stepIncrement(3);
                      }}
                    >
                      Create Galleries
                    </CustomButton>
                  </div>
                </div>
              </div>
            </div>
            {/* page 4 */}
            <div
              id="page-4"
              style={{ display: currentPage === 4 ? "block" : "none" }}
            >
              <div className="grid m-10 mr-2">
                <p className="font-normal text-body-caption-bold text-dark-8 font-OTabolas">
                  Create portfolios to showcase your work
                </p>
                <p className={`mt-1 ${styles.messageText}`}>
                  Showcase your photos in public portfolios for each of your
                  different session types.
                </p>
                <hr className="text-gray-outline mt-8 mr-16" />
                <div className="mt-6">
                  <div className="w-full">
                    <div className="text-base text-gray-700 font-TTHoves font-semibold">
                      Fashion
                    </div>
                    <div className="text-body-thin  text-gray-600 font-TTHovesEL">
                      Max 100mb per image. JPEG, PNG, and GIF files accepted.
                    </div>
                    <div className="flex">
                      <AddFileItem />
                      <AddFileItem />
                      <AddFileItem />
                      <AddFileItem />
                    </div>
                  </div>
                  <hr className="text-gray-outline mt-6 mr-16" />
                  <div className="w-full mt-6">
                    <div className="text-base text-gray-700 font-TTHoves font-semibold">
                      Wedding
                    </div>
                    <div className="text-body-thin  text-gray-600 font-TTHovesEL">
                      Max 100mb per image. JPEG, PNG, and GIF files accepted.
                    </div>
                    <div className="flex">
                      <AddFileItem />
                      <AddFileItem />
                      <AddFileItem />
                      <AddFileItem />
                    </div>
                  </div>
                  <div className="py-6">
                    <CustomButton
                      className="bg-brown-10 border-brown-10 text-white px-7 h-12 w-1/2"
                      onClick={() => {
                        pageChange(pages.NEXT);
                        stepIncrement(4);
                      }}
                    >
                      Next
                    </CustomButton>
                  </div>
                </div>
              </div>
            </div>
            {/* page 5 */}
            <div
              id="page-5"
              style={{ display: currentPage === 5 ? "block" : "none" }}
            >
              <div className="grid m-10 mr-2">
                <p className="font-normal text-body-caption-bold text-dark-8 font-OTabolas">
                  Connect and collaborate with other creatives
                </p>
                <p className={`mt-1 ${styles.messageText}`}>
                  Suura Collaboration Board is where our community comes
                  together to help each other thrive. Tell us what you're
                  seeking and what you're offering.
                </p>
                <hr className="text-gray-outline mt-8 mr-16" />
                <div className="mt-6">
                  <div className="w-full">
                    <div className="text-base text-gray-700 font-TTHoves font-semibold">
                      I'd like help with
                    </div>
                    <div className="text-body-thin  text-gray-600 font-TTHovesEL">
                      Select the services you’d like to ask from other
                      professionals
                    </div>
                    <div className="flex flex-row flex-wrap pt-4 pr-10">
                      {help.map((item, index) => {
                        return <HelpItem text={item} key={index} />;
                      })}
                    </div>
                  </div>
                  <hr className="text-gray-outline mt-6 mr-16" />
                  <div className="w-full mt-6">
                    <div className="text-base text-gray-700 font-TTHoves font-semibold">
                      I can offer
                    </div>
                    <div className="text-body-thin  text-gray-600 font-TTHovesEL">
                      Select the services you can offer to other professionals
                    </div>
                    <div className="flex flex-row flex-wrap pt-4 pr-10">
                      {offer.map((item, index) => {
                        return <HelpItem text={item} key={index} />;
                      })}
                    </div>
                  </div>
                  <div className="py-6">
                    <CustomButton
                      className="bg-brown-10 border-brown-10 text-white px-7 h-12 w-1/2"
                      onClick={() => {
                        pageChange(pages.NEXT);
                        stepIncrement(5);
                      }}
                    >
                      Next
                    </CustomButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Page welcome */}
          <div
            id="page-6"
            className="col-span-10 flex flex-col justify-center p-24 relative"
          >
            <div className="absolute top-3 left-10">
              <Link to="/">
                <p className="text-body-bold text-primary text-dark-8 font-OTabolas z-10">
                  Suura
                </p>
              </Link>
            </div>
            <div>
              <p className="font-normal text-body-caption-bold text-dark-8 font-OTabolas text-center">
                Welcome, You’re in!
              </p>
              <p
                className={`mt-1 text-base text-gray font-TTHoves text-center`}
              >
                What Suura’s feature do you want to explore first?
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="w-[80%] flex flex-col items-center justify-center">
                <div className="flex justify-around">
                  <ExploreItem
                    icon={<IconEditPortfolioBlank />}
                    text="Customise Portfolio"
                  />
                  <ExploreItem
                    icon={<IconCameraBlank />}
                    text="Manage My Shoots"
                  />
                  <ExploreItem
                    icon={<IconCreateGallery />}
                    text="Create a Client Gallery"
                  />
                </div>
                <div className="flex justify-around">
                  <ExploreItem
                    icon={<IconCollaborateBlank />}
                    text="Browse Collab Board"
                  />
                  <ExploreItem icon={<IconBrowseJobs />} text="Browse Jobs" />
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center py-6">
              <CustomButton
                className="bg-brown-10 border-brown-10 text-white px-7 h-12 w-[500px]"
                onClick={() => {
                  pageChange(pages.NEXT);
                }}
              >
                Go to profile
              </CustomButton>
            </div>
          </div>
        </>
      )}
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

const AddFileItem = () => {
  return (
    <div className="flex flex-row justify-center items-center border border-dashed border-gray-outline rounded-xl w-[190px] h-[240px] p-8 my-6 mr-3">
      <IconAdd />
    </div>
  );
};

const HelpItem = ({ text }) => {
  return (
    <div className="pl-4 pr-6 py-3 m-2 ml-0 bg-white border border-dark-1 rounded-xl w-fit text-dark-9 h-fit">
      <input type="radio" value="" className="mr-4 scale-125 text-yellow-300" />
      {text}
    </div>
  );
};

const ExploreItem = ({ icon, text }) => {
  return (
    <div className="flex flex-row items-center border border-dashed border-gray-outline rounded-xl p-8 my-6 mx-2">
      <div className="flex justify-around items-center mr-10">
        <div className="mr-10">{icon}</div>
        <IconLineVertical bgColor="#ABB2C4" />
      </div>
      <div className="col-span-6 text-base text-dark-8 font-TTHovesSB font-extrabold">
        {text}
      </div>
    </div>
  );
};

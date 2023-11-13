// @ts-nocheck
import ImagesGrid from "../../../Components/Home/ImagesGrid";
import Footer from "../../../Components/Home/Footer";
import Header from "../../../Components/Shared/Header/Header";
import CustomButton from "../../../common/CustomButton/CustomButton";
import IconSearch from "../../../icons/IconSearch";
// import styles from "./HomePage.module.css";
import CustomImage from "../../../common/CustomImage/CustomImage";
import Photographer from "./Photographer/Photographer";
import IconStar from "../../../icons/IconsStar";
import IconArrowCurve from "../../../icons/IconArrowCurve";
import IconLinearSquare from "../../../icons/IconLinearSquare";
import IconSunFog from "../../../icons/IconSunFog";
import Category from "./Category/Category";
import MessageNotification from "./MessageNotification/MessageNotification";
import IconMoneyTick from "../../../icons/IconMoneyTick";
import IconArrow from "../../../icons/IconArrow";

const HomePage = () => {
  return (
    <div className="pb-40 relative">
      <Header />
      <div className="flex items-center justify-center my-20">
        <div className="justify-center text-center items-center text-heading-bold font-OTabolas w-[649px]">
          Connecting clients and photographers worldwide.
        </div>
      </div>
      <div className="mb-32">
        <ImagesGrid />
      </div>
      <div className="grid grid-cols-2 w-full">
        <div className="px-10 pb-10">
          <span className="font-TTHoves text-body-normal text-dark-5 my-2">
            Hire talents
          </span>
          <div className="w-[437px] font-OTabolas text-sub-heading-bold text-dark-8">
            <p>
              Seeking Professinal and undiscovered photographers
              <span className="ml-2 relative align-middle">
                <span className="bottom-0 inline-block">
                  <div>
                    <CustomImage
                      src="/assets/author-image-2.jpg"
                      altText="signup-display-picture"
                      className="h-10 w-10 rounded-full"
                    />
                  </div>
                </span>
                <span className="-ml-2 inline-block">
                  <div>
                    <CustomImage
                      src="/assets/author-image-3.jpg"
                      altText="signup-display-picture"
                      className="h-10 w-10 rounded-full"
                    />
                  </div>
                </span>
              </span>
            </p>
          </div>
        </div>
        <div>
          <div className="font-TTHoves text-dark-8-5 text-normal w-[424px] my-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </div>
          <CustomButton className="flex items-center bg-brown-10 text-white border-none">
            <span className="px-2">Discover now</span>
            <IconSearch color="white" />
          </CustomButton>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 h-[435px] p-10 box-content-">
        <Photographer
          src="/assets/homepage-photographer-1.jpg"
          name="Melanie Beatrice"
          location="Spokane, WA, USA."
          buttonChildren={
            <ul>
              <li>Top Photographer</li>
            </ul>
          }
          className=""
        />
        <Photographer
          src="/assets/homepage-photographer-2.jpg"
          name="Jannely Affandi"
          location="Salt Lake City, Utah, USA"
          buttonChildren={
            <ul>
              <li>Performer</li>
            </ul>
          }
          className=""
        />
        <Photographer
          src="/assets/homepage-photographer-3.jpg"
          name="Autumn Waldman Photography"
          location="Wahoo, NE, USA."
          buttonChildren={
            <div className="flex">
              <span className="pr-4">Pro Photographer</span>
              <IconStar />
            </div>
          }
          className="col-span-2 h-[400px]"
        />
      </div>

      <div className="grid grid-cols-10 gap-4 h-[662px] p-10 box-content my-6">
        <div className="col-span-6">
          <Category
            title="Plan photoshoots"
            heading={
              <div>
                <p>Say goodbye to</p>
                <p>awkward photoshoots</p>
              </div>
            }
            list={[
              {
                header: "Learn how to pose with confidence",
                message:
                  "With the world's largest pose library always in your pocket",
              },
              {
                header: "Find dreamy light with our Sun Tracker",
                message:
                  "Plan your sessions around the magic hours down to the minute",
              },
              {
                header: "Unleash your creative potential",
                message:
                  "Curate your fave poses and push your creativity every shoot",
              },
            ]}
            buttonText="Try Suura for free"
            buttonClick={() => {}}
          />
        </div>
        <div className="col-span-4 pt-2 pb-28 px-6">
          <div className="grid grid-cols-2 h-full box-content">
            <div className="grid gap-4 grid-auto-rows mx-2 my-4">
              <div className="flex flex-col h-auto max-w-full  p-4 pr-16 justify-evenly rounded-lg bg-dar-0">
                <div className="h-[40]">
                  <IconLinearSquare />
                </div>
                <div className="text-body-small text-dark-8 font-TTHovesSB">
                  Best poses library to help create stunning photos
                </div>
              </div>
              <div>
                <img
                  className="h-full max-w-full rounded-lg"
                  src="/assets/homepage-image-1.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="grid gap-4 grid-auto-rows mx-2 my-4">
              <div>
                <img
                  className="h-full max-w-full rounded-lg"
                  src="/assets/homepage-image-2.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col h-auto max-w-full p-4 pr-16 justify-evenly rounded-lg bg-tale-2">
                <div className="h-[40]">
                  <IconSunFog />
                </div>
                <div className="text-body-small text-dark-8 font-TTHovesSB">
                  Get updated with the golden hours
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-10 gap-4 h-[662px] p-10 box-content">
        <div className="col-span-5 pt-16 pb-6 px-6">
          <CustomImage
            src="/assets/homepage-image-3.jpg"
            className="rounded-xl"
          />
        </div>
        <div className="col-span-5">
          <Category
            title="Personalised Portfolio"
            heading={
              <div>
                <p>Stand out in a sea of</p>
                <p>other photographers</p>
              </div>
            }
            colspan={5}
            list={[
              {
                header: "Showcase your work",
                message: "Easily create a beautifully designed mini-website",
              },
              {
                header: "Get booked easier then ever",
                message:
                  "Get requests straight into your app with your own booking link",
              },
              {
                header: "Browse job opportunities",
                message:
                  "Find your ideal gig based on location, budget, or shoot type",
              },
            ]}
            buttonText="Explore Directory Features"
            buttonClick={() => {}}
          />
        </div>
      </div>

      <div className="grid grid-cols-10 gap-4 h-[662px] p-10 box-content">
        <div className="col-span-5">
          <Category
            title="Manage your business"
            heading={
              <div>
                <p>Easily make money</p>
                <p>doing what you love</p>
              </div>
            }
            colspan={5}
            list={[
              {
                header: "Get paid faster with online payments",
                message: "Easily accept credit, debit, wire transfer, and more",
              },
              {
                header: "Easy done-for-you booking system",
                message:
                  "Set yourself up in minutes and start booking clients on the go",
              },
              {
                header: "Protect your biz with contracts",
                message:
                  "Show you’re a pro with lawyer-approved templates and e-signatures",
              },
            ]}
            buttonText="Explore Business Features"
            buttonClick={() => {}}
          />
        </div>
        <div className="relative col-span-5 pt-16 pb-6 px-6">
          <div className="absolute top-6 -left-20 w-full h-full">
            <MessageNotification
              icon={<IconMoneyTick />}
              message={
                <p className="flex text-base text-dark-3 font-medium font-TTHovesM">
                  You’ve been paid
                  <p className="text-dark-8 ml-1 inline-block">$200.00</p>
                </p>
              }
            />
            <MessageNotification
              icon={<IconMoneyTick />}
              message={
                <p className="flex text-base text-dark-3 font-medium font-TTHovesM">
                  You’ve been paid
                  <p className="text-dark-8 ml-1 inline-block">$200.00</p>
                </p>
              }
            />
          </div>

          <div className="absolute flex flex-col justify-end items-center w-[90%] h-[90%] p-8">
            <div className="bg-white rounded-xl m-10 w-[320px] h-[164px] p-2">
              <div className="grid grid-cols-2">
                <div className="flex flex-col justify-around h-full p-6 bg-creame-1 rounded-xl">
                  <div className="text-body-extrasmall font-TTHovesSB font-semibold text-netural-4">
                    Customers
                  </div>
                  <div className="text-sub-heading-bold font-TTHovesM font-medium">
                    1024
                  </div>
                  <div className="flex items-center w-fit p-2 rounded-md bg-primary-3-light">
                    <IconArrow color="#FF6A55" />
                    <div className="text-sm text-primary-3 font-TTHovesM mx-1">
                      37.8%
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-around h-full p-6 rounded-xl">
                  <div className="text-body-extrasmall font-TTHovesSB font-semibold text-netural-4">
                    Income
                  </div>
                  <div className="text-sub-heading-bold font-TTHovesM font-medium">
                    256k
                  </div>
                  <div className="flex items-center w-fit p-2 rounded-md bg-primary-3-light">
                    <div className="rotate-180">
                      <IconArrow color="#83BF6E" />
                    </div>
                    <div className="text-sm text-primary-2 font-TTHovesM mx-1">
                      37.8%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CustomImage
            src="/assets/homepage-image-4.jpg"
            className="rounded-xl"
          />
        </div>
      </div>
      {/* card section */}

      {/* Photoshoots */}

      {/* <div className="flex">
        <div className="px-10">
          <p>Plain Photoshoots</p>
          Say goodbye to awkard photoshoots
          <ul className="ml-8">
            <li>
              <p className="font-bold">Learn how to pose with cofidence</p>
              <p>With the world largest pose library in your pocket</p>
            </li>
            <li>
              <p>Learn how to pose with cofidence</p>
              <p>With the world largest pose library in your pocket</p>
            </li>
            <li>
              <p>Learn how to pose with cofidence</p>
              <p>With the world largest pose library in your pocket</p>
            </li>
          </ul>
          <button className="w-44 bg-[#c7987A] p-1 rounded-lg mt-3">
            Try Suura for Free
          </button>
        </div>

        <div className=" grid grid-cols-2 md:grid-cols-4 gap-4 lg:p-10">
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div> */}
      <Footer />
    </div>
  );
};

export default HomePage;

const ListItem = ({ listHeader, listMessage }) => {
  return (
    <div className="flex items-center py-4">
      <div className="m-4">
        <IconArrowCurve />
      </div>
      <div className="flex flex-col">
        <div className="text-body-small font-semibold text-dark-8 pb-2">
          {listHeader}
        </div>
        <div className="text-base text-dark-5 font-TTHoves">{listMessage}</div>
      </div>
    </div>
  );
};

{
  /* <div className="flex flex-col md:flex-row gap-5 m-5">
<div className="w-full md:w1/2">
  <span>Hire talents</span>
  <p className="text-3xl text-gray-800 w-1/2 text-justify">
    Seeking Professinal and undiscovered photographers
  </p>
</div>
<div className="w-full md:w1/2">
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
    quidem veritatis facere repellendus sint natus officiis illo. Ut
    nesciunt cupiditate cum autem quibusdam quaerat necessitatibus!
    Fugiat dolorum quisquam odit et.
  </p>
  <button className="w-44 bg-[#c7987A] p-1 rounded-lg mt-3">
    Discover now
  </button>
</div>
</div>
  <div className="flex relative">
    <div
      className="h-72  w-1/3 bg-no-repeat bg-contain py-5 px-2 "
      style={{ backgroundImage: `url('public/assets/sideImage.jpg')` }}
    >
      <span className="text-white border border-white p- rounded-lg ">
        Top Photographer
      </span>
      <span className="absolute bottom-2 left-0 right-0 text-white p-1 rounded-lg ">
        <p>Top Photographer</p>
        <p>new Delhi</p>
      </span>
    </div>
    <div
      className=" relative h-72  w-1/3 bg-no-repeat bg-contain py-5 px-2 "
      style={{ backgroundImage: `url('public/assets/sideImage.jpg')` }}
    >
      <span className="text-white border border-white p- rounded-lg ">
        Top Photographer
      </span>
      <span className="absolute bottom-2 left-0 right-0 text-white p-1 rounded-lg ">
        <p>Top Photographer</p>
        <p>new Delhi</p>
      </span>
    </div>

    <div
      className="relative h-72  w-1/3 bg-no-repeat bg-contain py-5 px-2 "
      style={{ backgroundImage: `url('public/assets/sideImage.jpg')` }}
    >
      <span className="text-white border border-white p- rounded-lg ">
        Top Photographer
      </span>
      <span className="absolute bottom-2 left-0 right-0 text-white p-1 rounded-lg ">
        <p>Top Photographer</p>
        <p>new Delhi</p>
      </span>
    </div>
  </div>; */
}

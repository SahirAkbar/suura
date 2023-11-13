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
                      src="public/assets/author-image-2.jpg"
                      altText="signup-display-picture"
                      classes="h-10 w-10 rounded-full"
                    />
                  </div>
                </span>
                <span className="-ml-2 inline-block">
                  <div>
                    <CustomImage
                      src="public/assets/author-image-3.jpg"
                      altText="signup-display-picture"
                      classes="h-10 w-10 rounded-full"
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
          src="public/assets/homepage-photographer-1.jpg"
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
          src="public/assets/homepage-photographer-2.jpg"
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
          src="public/assets/homepage-photographer-3.jpg"
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

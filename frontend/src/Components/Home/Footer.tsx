import IconFacebook from "../../icons/IconFacebook";
import IconInstagram from "../../icons/IconInstagram";
import IconTwitter from "../../icons/IconTwitter";

const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-10 py-20 px-10">
        <div className="col-span-4">
          <p className="text-heading-big font-OTabolas text-dark-8">Suura</p>
          <p className="text-base text-dark-5 font-TTHoves w-[290px]">
            Everything you need to grow your photography business.
          </p>
          <div className="grid grid-cols-3 gap-2 w-[200px] my-4">
            <IconFacebook />
            <IconTwitter />
            <IconInstagram />
          </div>
        </div>
        <div className="col-span-6 grid grid-cols-3 gap-44 font-TTHoves font-normal text-base">
          <div>
            <ul>
              <p className="text-dark-9 pb-4 font-TTHovesSB">Features</p>
              <li className="text-dark-5 pb-4">Directory</li>
              <li className="text-dark-5 pb-4">Business</li>
              <li className="text-dark-5 pb-4">Galleries</li>
              <li className="text-dark-5 pb-4">Posing</li>
              <li className="text-dark-5 pb-4">Education</li>
            </ul>
          </div>
          <div>
            <ul>
              <p className="text-dark-9 pb-4 font-TTHovesSB">Quick Links</p>
              <li className="text-dark-5 pb-4">Hire a photographer</li>
              <li className="text-dark-5 pb-4">Create Business Profile</li>
              <li className="text-dark-5 pb-4">Pricing</li>
            </ul>
          </div>
          <div>
            <ul>
              <p className="text-dark-9 pb-4 font-TTHovesSB">Connect</p>
              <li className="text-dark-5 pb-4">Help Center</li>
              <li className="text-dark-5 pb-4">Contact us</li>
              <li className="text-dark-5 pb-4">FAQs</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 pt-5 px-10 border-t border-black-10">
        <div className="text-dark-5 pb-4">
          Copyright ©2023 Suura. All rights reserved.
        </div>
        <div className="flex justify-end">
          <div className="text-dark-5 pb-4">Terms of use</div>
          <div className="text-dark-5 pb-4 ml-10">Privacy policy</div>
        </div>
      </div>
    </>
  );
};

export default Footer;

/*import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
<>
    <div className='bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20'>
      <div className='p-5'>
        <ul>
          <p className='text-gray-800 font-bold text-3xl pb-6'>
            Suura
          </p>
          <div className='flex gap-6 pb-5 '>
            <FaInstagram className='text-2xl cursor-pointer hover:text-yellow-600' />
            <FaTwitter className='text-2xl cursor-pointer hover:text-yellow-600' />
            <FaInstagram className='text-2xl cursor-pointer hover:text-yellow-600' />
            <FaLinkedin className='text-2xl cursor-pointer hover:text-yellow-600' />
            <FaYoutube className='text-2xl cursor-pointer hover:text-yellow-600' />


          </div>
        </ul>
      </div>  <div className='p-5'>
        <ul>
          <p className='text-gray-800 font-bold text-2xl pb-4'>

            Features
          </p>
          <li className='text-gray-500 text-md pb-4 font-semibold hover:text-blue-600 cursor-pointer '>
            Directory
          </li>
          <li className='text-gray-500 text-md pb-4 font-semibold hover:text-blue-600 cursor-pointer '>
            Business
          </li>
          <li className='text-gray-500 text-md pb-4 font-semibold hover:text-blue-600 cursor-pointer '>
            Galleries
          </li>
          <li className='text-gray-500 text-md pb-4 font-semibold hover:text-blue-600 cursor-pointer '>
            Posing
          </li>
          <li className='text-gray-500 text-md pb-4 font-semibold hover:text-blue-600 cursor-pointer '>
            Education
          </li>
        </ul>
      </div>
      <div className="p-5">
        <ul>
          <p className="text-gray-800 font-bold text-2xl pb-4">
            Quick Links
          </p>
          <li className='text-gray-500 text-md pb-4 font-semibold hover:text-blue-600 cursor-pointer'>Hire a Photographer</li>
          <li className='text-gray-500 text-md pb-4 font-semibold hover:text-blue-600 cursor-pointer'>Create Business Profile</li>
          <li className='text-gray-500 text-md pb-4 font-semibold hover:text-blue-600 cursor-pointer'>Pricing</li>
        </ul>
      </div>
      <div className="p-5">
        <ul>
          <p className='text-gray-800 font-bold text-2xl pb-4'>Connect</p>
          <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Help Center</li>
          <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Contact us</li>
          <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>FAQs</li>
        </ul>
      </div>
     
      </div>
      <hr />
      <div className='flex'>
        <p className='w-1/2 grid justify-items-center'>Copyright @2023 suura All right reserved</p>
        <div className=' w-1/2 grid '>
          <span>Terms of use</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </>
  )
}

export default Footer */

import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa'

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
            {/* section for icons */}
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

export default Footer
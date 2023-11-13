import { FaInstagram, FaRegUser } from "react-icons/fa6";
import { Outlet } from 'react-router-dom';

const CreateProfile = () => {
 
 
  return (
    <div className='min-h-screen w-full'>
      <div className="absolute top-3 left-4">
        <p className="text-2xl font-bold text-primary">Suura</p>
      </div>
      <div className="mx-auto">
        <div className='flex flex-col lg:flex-row px-12  rounded-xl shadow-lg overflow-hidden'>
          {/* for Image */}
          <div className=' flex w-full lg:w-1/4 flex-col pt-20' >
            <div className='w-full'>
              <div className='flex gap-3 mt-5'>
              
                <div className='flex  justify-center items-center'>
                  <FaRegUser size={28} className='bg-[#C7987A] rounded-md ' />
              
                </div>
                <div>
                  <div className='font-bold'>Create you Profile</div>
                  <div className='text-gray-400 text-sm'>Set up your profile</div>
                </div>
                </div>
            </div>
            <div className='w-60 mt-5'>
              <div className='flex gap-3 '>
                <div className='flex  justify-center items-center'>
                 <FaRegUser />
                   
                </div>
                <div>
                  <div className='font-bold'>Upload profile images</div>
                  <div className='text-gray-400 text-sm'>upload conver and profile images</div>
                </div>
              </div>
            </div>
            <div className='w-60 mt-5'>
              <div className='flex  gap-3'>
                <div className='justify-center items-center'>

                   <FaInstagram />
                </div>
             
                  
                 
                <div>
                  <div className='font-bold'>Link Platform</div>
                  <div className='text-gray-400 text-sm'>Connect platform to get protfolio</div>
                </div>
              </div>
            </div>
         
            <div className='w-60 mt-5'>
              <div className='flex gap-3'>
                <div className='justify-center items-center'>
                
                <FaRegUser />
                </div>
                <div>
                  <div className='font-bold'>Session you offer</div>
                  <div className='text-gray-400 text-sm'>Select photography services</div>
                </div>
              </div>
            </div>
            <div className='w-60 mt-5'>
              <div className='flex gap-3'>
                <div className='justify-center items-center'>
                
                <FaRegUser />
                </div>
                <div>
                  <div className='font-bold'>Create portfolio</div>
                  <div className='text-gray-400 text-sm'>Upload your best work</div>
                </div>
              </div>
            </div>
            <div className='w-60 mt-5'>
              <div className='flex gap-3'>
                <div className='justify-center items-center'>

                <FaRegUser />
                </div>
             
                <div>
                  <div className='font-bold'>Collaborate</div>
                  <div className='text-gray-400 text-sm'>Connect and collaborate</div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full lg:w-3/4 py-16 lg:px-12' >
          <Outlet/>
          </div>
          {/* for form */}
        </div>
      </div>
    </div>
  )
}

export default CreateProfile
 


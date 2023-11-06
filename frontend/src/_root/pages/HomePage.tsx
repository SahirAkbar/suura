import React from 'react'
import ImagesGrid from '../../Components/Home/ImagesGrid'
import Footer from '../../Components/Home/Footer'
import Header from '../../Components/Shared/Header'

const HomePage = () => {
  return (
    <div className='pb-40'>
      <Header/>
      <div className='justify-center text-center items-center w-full mt-20 text-3xl'>
        <p>Connecting clients</p>
        <p>photographer worldwide</p>
      </div>
      <div>

        <ImagesGrid />
      </div>
      {/* Talent */}
      <div className='flex flex-col md:flex-row gap-5 m-5'>
        <div className='w-full md:w1/2'>
          <span>Hire talents</span>
          <p className='text-3xl text-gray-800 w-1/2 text-justify'>Seeking Professinal and undiscovered photographers</p>
        </div>
        <div className='w-full md:w1/2'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quidem veritatis facere repellendus sint natus officiis illo. Ut nesciunt cupiditate cum autem quibusdam quaerat necessitatibus! Fugiat dolorum quisquam odit et.
          </p>
          <button className='w-44 bg-[#c7987A] p-1 rounded-lg mt-3'>Discover now</button>
        </div>
      </div>
      {/* card section */}

      <div className='flex relative'>
        <div className='h-72  w-1/3 bg-no-repeat bg-contain py-5 px-2 ' style={{ backgroundImage: `url('public/assets/sideImage.jpg')` }}>
          <span className='text-white border border-white p- rounded-lg '>Top Photographer</span>
          <span className='absolute bottom-2 left-0 right-0 text-white p-1 rounded-lg '>
            <p>Top Photographer</p>
            <p>new Delhi</p>
          </span>
        </div>
        <div className=' relative h-72  w-1/3 bg-no-repeat bg-contain py-5 px-2 ' style={{ backgroundImage: `url('public/assets/sideImage.jpg')` }}>
          <span className='text-white border border-white p- rounded-lg '>Top Photographer</span>
          <span className='absolute bottom-2 left-0 right-0 text-white p-1 rounded-lg '>
            <p>Top Photographer</p>
            <p>new Delhi</p>
          </span>
        </div>

        <div className='relative h-72  w-1/3 bg-no-repeat bg-contain py-5 px-2 ' style={{ backgroundImage: `url('public/assets/sideImage.jpg')` }}>
          <span className='text-white border border-white p- rounded-lg '>Top Photographer</span>
          <span className='absolute bottom-2 left-0 right-0 text-white p-1 rounded-lg '>
            <p>Top Photographer</p>
            <p>new Delhi</p>
          </span>
        </div>
      </div>

      {/* Photoshoots */}



      <div className='flex'>
        <div className='px-10'>
          <p>Plain Photoshoots</p>
          Say goodbye to awkard photoshoots
          <ul className='ml-8'>
            <li>
              <p className='font-bold'>
                Learn how to pose with cofidence
              </p>
              <p>
                With the world largest pose library in your pocket
              </p>
            </li>
            <li>
              <p>
                Learn how to pose with cofidence
              </p>
              <p>
                With the world largest pose library in your pocket
              </p>
            </li>
            <li>
              <p>
                Learn how to pose with cofidence
              </p>
              <p>
                With the world largest pose library in your pocket
              </p>
            </li>
          </ul>
          <button className='w-44 bg-[#c7987A] p-1 rounded-lg mt-3'>Try Suura for Free</button>
        </div>

        <div className=" grid grid-cols-2 md:grid-cols-4 gap-4 lg:p-10">
          <div className="grid gap-4">
            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default HomePage
import React from 'react'
import Image from 'next/image'
import heroimg from './style/homeImg.svg'
import Button from '../../sharing/Button/page'



const Hero = () => {
  return (
    // {/* Parent div */}
    <div className='  min-h-screen flex flex-col justify-center md:px-32 px-5 m-4 p-2'>
      {/* H1 div */}
      <div className='md:w-3/4  sm:pr-32 mr-6'>

        <h1 className='  text-8xl font-playfair font-semibold sm:mr-10 '> Build Your Dream <span className='text-brightRed'>House</span></h1>
        {/* p and img div */}
        <div className=' flex flex-col md:flex-row pt-8'>
          <div className=' p-5 m-2 space-y-5 min-w-min'>
            <p > 100% guaranteed build safe, comfortable and transparent with a
              project management for the best result
            </p>

            <Button className="sm:h-10 w-36 " name="Free Consultation" />


          </div>
          <div>
            <Image className=' rounded-md mt-10  ml-64 ' src={heroimg} alt='home-build-img' width={2000} height={1500}></Image>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Hero


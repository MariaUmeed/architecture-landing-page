import React from 'react'
import Image1 from '../Gallery/style/img1.svg'
import Image2 from '../Gallery/style/img2.svg'
import Image3 from '../Gallery/style/img3.svg'
import Image from 'next/image'

const gallery = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center md:px-32 px-5 p-4 m-2'>
      <div className='py-5 md:w-2/6'>
        <p className='text-4xl font-playFair font-medium'>Build professional valuable room
        </p></div>
      <div className='flex flex-col items-center md:flex-row md:justify-between gap-5 '>
        <div><Image className='rounded-md' src={Image1} alt='houseimage'></Image>
        </div>
        <div><Image className='rounded-md' src={Image2} alt=''></Image>
        </div>
        <div><Image className='rounded-md' src={Image3} alt=''></Image>
        </div>
      </div>
    </div>
  )
}

export default gallery

import React from 'react'
import Image from 'next/image'
import Icon1 from '../features/images/consultationIcon1.svg'
import Icon2 from '../features/images/consultationIcon2.svg'
import Icon3 from '../features/images/consultationIcon2.svg'
import img from '../features/images/featureImg.svg'
import Button from '../sharing/Button/page'


const features = () => {
    return (
        <div className='  min-h-screen flex flex-col justify-center md:px-32 px-5 p-4 m-2    '>
            <div className='flex flex-col justify-center md:flex-row space-y-5 '>
                <div className='mt-5'>
                    <Image className='rounded-md' src={img} alt="featureImage"></Image>
                </div>
                <div className='px-2 mx-8'>
                    <div><h1 className='mb-4 text-4xl font-medium text-center font-playfair'>Build your needs with Archmove</h1>
                    </div>
                    <div className='flex flex-row gap-5 p-5 md:pl-24'>
                        <Image src={Icon1} alt=''></Image>
                        <div>
                            <h3 className='text-1sxl font-semibold mb-2 '>  100% guaranteed project completion</h3>
                            <p> Build safe, comfortable and transparent with a project
                                management application with a joint account.</p>
                        </div>
                    </div>
                    <div className='flex flex-row gap-5 p-5 md:pl-24' >
                        <Image src={Icon2} alt=''></Image>
                        <div>
                            <h3>No additional fees</h3>
                            <p>There are no hidden costs. The value of the offer you get is the
                                value you paid.</p>
                        </div>

                    </div>
                    <div className='flex flex-row gap-5 p-5 md:pl-24'>
                        <Image className='transition-all' src={Icon3} alt=''></Image>
                        <div>
                            <h3>
                                Get escort from the Team
                            </h3>
                            <p>
                                Monitor reports from the Arsitag team who check directly in the
                                field.
                            </p>
                        </div>

                    </div>   </div>

            </div>
            <div className='flex flex-row justify-center mt-10'>
                <Button name="Free Consultation"  />
            </div>

        </div>
    )
}

export default features

import React from 'react'
import Image from 'next/image'
import logo from '../../../../../public/logo-arch.svg'

const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between md:px-32 px-5 p-4 m-2 '>
      <div className='flex flex-row items-center gap-12 text-lightText p-2'>
        <footer className='flex flex-col md:flex-row gap-10'>
        <a className='hover:text-brightRed transition-all' href="/work"> About Us</a>  
        <a className='hover:text-brightRed transition-all' href="/work"> How it Works</a>
        <a className='hover:text-brightRed transition-all' href="architects"> Architects</a>
        <a className='hover:text-brightRed transition-all' href="/articles"> FAQ </a>
        <a className='hover:text-brightRed transition-all' href="/articles"> Contact Us</a>
        <a className='hover:text-brightRed transition-all' href="/articles">Privacy Policy </a>
        <div className='flex justfy-end flex-row pl-96'>
          <Image src={logo} alt='logo'></Image>
        </div>
        </footer>
     
      </div>
    </div>
  )
}

export default Footer

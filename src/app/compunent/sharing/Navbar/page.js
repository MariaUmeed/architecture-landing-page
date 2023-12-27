import React from 'react'
import Image from 'next/image'
import logo from '../../../../../public/logo-arch.svg'
import Button from '../Button/page'

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between md:px-32 px-5 p-4 m-2 items-center '>
      <div className='flex flex-row items-center gap-12 p-2'>
        <div><Image src={logo} alt='arch-logo'></Image></div>
        <nav className='hidden md:flex gap-4'>

          <a className='hover:text-brightRed transition-all' href="/work">
            How it Works</a>
          <a className='hover:text-brightRed transition-all' href="/gallery">
            Design Gallery</a>
          <a className='hover:text-brightRed transition-all' href="architects">
            Architects</a>
          <a className='hover:text-brightRed transition-all' href="/articles">
            Articles</a>
        </nav>
      </div>

      <div className=' flex flex-row items-center p-2 gap-4'>

        <a href="/signIn">Sign In</a>
        <Button className="sm:h-10 w-12" name="Sign Up" />
      </div>
    </div>


  )
}

export default Navbar

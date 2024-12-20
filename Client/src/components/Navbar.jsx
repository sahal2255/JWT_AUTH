import React from 'react'
import { Link,  } from 'react-router-dom'
import { IoMdMenu } from "react-icons/io";

import Logo from '../../public/mylogo.png'
const Navbar = () => {
  return (
      <div className='fixed w-full h-24 shadow-xl bg-black z-50'>
            <div className='flex justify-between items-center h-full w-full px-4 2xl:px-16'>
                <div>
                    <Link to='/'>
                        <img 
                            src={Logo}
                            width='205'
                            height='75'
                            alt='mylogo'
                            // priority
                        />
                    </Link>
                </div>
                <div className='hidden sm:flex'>
                    <ul className='flex'>
                        <Link to='/product'>
                            <li className='text-white ml-10 uppercase text-sm font-bold hover:border-b'>Products</li>
                        </Link>
                        <Link to='/about'>
                            <li className='text-white ml-10 uppercase text-sm font-bold hover:border-b'>About Us</li>
                        </Link>
                        
                    </ul>
                </div>
                <div className='sm:hidden' >
                    <IoMdMenu className='text-white text-3xl cursor-pointer' />
                </div>
            </div>
    </div>
  )
}

export default Navbar

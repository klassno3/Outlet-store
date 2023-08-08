import React from 'react'
import { Link } from "react-router-dom"
import WhiteLogo from "../Image/White-Logo.svg"
import { FaFacebook,FaInstagram,FaTwitter ,FaPhoneAlt} from "react-icons/fa"

const Footer = () => {
  return (
      <div className='bg-[#1C2B48] text-white py-10 '>
      <div className=' '>
        <div className="flex flex-col gap-10">
          <div className=" w-11/12 mx-auto">
            
    <Link to="/" className=" font-kaisei gap-1  text-2xl font-semibold w-10 flex items-center ">
        <img src={WhiteLogo} alt="" />
          <p className='text-secondary-100'>
          
          Outlet.
          </p>
          </Link>
          </div>
          
          <div className='border-t-[.5px] border-secondary-100 '></div>
          <div className='flex flex-col justify-start items-centert gap-4 w-11/12 mx-auto font-inter'>
            <div>
              
          <p className='text-secondary-100 xl:w-1/3'> Keep upto date with variety of high quaity products with our unbeatabe price </p>
            </div>
            
          <div className="flex items-center text-secondary-100 gap-1">
            <FaPhoneAlt/>
            <span>+251966545645</span>
          </div>
        <div className='flex items-start  gap-4 md:gap-6 text-2xl pb-8 cursor-pointer'>
          <FaFacebook className='hover:scale-105 transform-all duration-300' />
          <FaInstagram className='hover:scale-105 transform-all duration-300' />
          <FaTwitter className='hover:scale-105 transform-all duration-300'/>
        </div>
        </div>
          </div>
        <div className='border-t-[.5px] border-secondary-100'></div>
        <p className='text-center text-secondary-100 flex justify-center pt-5 font-inter'>&copy; Copyrights reserved 2023</p>
      </div>
    </div>
  )
}

export default Footer

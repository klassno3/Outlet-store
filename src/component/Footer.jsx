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
          <div className='flex flex-col gap-3 w-11/12 mx-auto font-inter'>

          <p className='text-secondary-100 w-1/3'> Keep upto date with variety of high quaity products with our unbeatabe price </p>
          <div className="flex items-center text-secondary-100 gap-3">
            <FaPhoneAlt/>
            <span>+251966545645</span>
          </div>
          </div>
        <div className='flex gap-4 text-2xl pb-8 w-11/12 mx-auto'>
          <FaFacebook />
          <FaInstagram />
          <FaTwitter/>
        </div>
        </div>
        <div className='border-t-[.5px] border-secondary-100'></div>
        <p className='text-center text-secondary-100 flex justify-center pt-5 font-inter'>&copy;Copyrights reserved 2023</p>
      </div>
    </div>
  )
}

export default Footer

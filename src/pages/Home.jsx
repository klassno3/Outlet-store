import React from 'react';
import Hero from "../Image/Hero.png";

import ProductsList from '../component/ProductsList'
import {PiAirplaneLight,PiHeadset, PiWallet} from "react-icons/pi"

import Button from '../component/Button'
const Home = () => {
  
  return (
    <div className='relative z-10 bg-secondary-100'>

    <div className='flex md:w-11/12 mx-auto items-start justify-between pt-20  z-10 relative'>
      <div className='w-full md:w-1/2  md:pt-8' >
        <h1 className='text-4xl md:flex justify-center mx-auto  md:text-left md:mx-0 text-center pt-5 leading-[3.2rem] xl:leading-[4.5rem] font-bold font-play  bg-gradient-to-r from-primary-300 via-primary-200 to-primary-100 text-transparent bg-clip-text md:text-5xl xl:text-6xl'>
          We have a wide variety of high quaity items to choose from </h1>
        <div className='mt-3 flex md:block justify-center font-kaisei'>
          
        <Button >Discover More</Button>
     </div>
     
      </div>
      <div className="hidden md:block md:w-1/3 md:pt-10 xl:pt-5 ">

        <img className="" src={ Hero } alt="" />
      </div>

    </div>
      <div className='relative z-10 w-11/12 mx-auto flex flex-col lg:flex-row justify-between  gap-8  xl:gap-10 my-20'>
        <div className='shadow-xl bg-white  lg:w-1/3 w-4/5 md:w-1/2 mx-auto rounded-md px-6 py-3 flex gap-10 transition-all duration-300  hover:scale-105 hover:shadow-2xl'>
          
          <div className="flex justify-between gap-10 items-center ">
            <PiAirplaneLight size={60} className='rotate-90 text-primary-300'/>
            <div className="flex flex-col lg:text-sm xl:text-base">
              <p className='font-bold text-primary-300 font-inter '>FREE SHIPPING</p>
              <p className='text-primary-100'>On order over 500 birr</p>
            </div>
          </div>
          
        </div>
        <div className='shadow-2xl bg-white lg:w-1/3 w-4/5  md:w-1/2 mx-auto rounded-md px-6 py-3 flex gap-10 transition-all duration-300  hover:scale-105 hover:shadow-2xl'>
          
          <div className="flex justify-between gap-10 items-center">
            <PiHeadset size={60} className='text-primary-300'/>
            <div className="flex flex-col lg:text-sm xl:text-base">
              <p className='font-bold text-primary-300 font-inter'>24/7 CUSTUMER SERVICE</p>
              <p className='text-primary-100'>Call us 24/7 at 0966545645</p>
            </div>
          </div>
          
        </div>
        <div className='shadow-2xl bg-white lg:w-1/3   md:w-1/2 w-4/5 mx-auto rounded-md px-6 py-3 flex gap-10 transition-all duration-300  hover:scale-105 hover:shadow-2xl'>
          
          <div className="flex justify-between gap-10 items-center">
            <PiWallet size={60} className='text-primary-300'/>
            <div className="flex flex-col lg:text-sm xl:text-base">
              <p className='font-bold  text-primary-300 font-inter'>CASH ON DELIVERY</p>
              <p className='text-primary-100'>100% money back guarantee</p>
            </div>
          </div>
        </div>
      </div>

      <div className='w-11/12 mx-auto'>

      <ProductsList/>
      </div>
    </div>
  )
}
export default Home


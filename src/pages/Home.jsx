import React from 'react';
import Hero from "../Image/Hero.png";
import ProductsList from '../component/ProductsList'
import {PiAirplaneLight,PiHeadset, PiWallet} from "react-icons/pi"

import Button from '../component/Button'
const Home = () => {
  const cards = [ 
    {icon :<PiAirplaneLight className='text-4xl md:text-6xl rotate-90 text-primary-300'/>,title:"FREE SHIPPING",desc:"On order over 500 birr"},
    {icon :<PiHeadset className='text-4xl md:text-6xl  text-primary-300'/>,title:"24/7 CUSTUMER SERVICE",desc:"Call us 24/7 at 0966545645"},
    {icon :<PiWallet className=' text-4xl md:text-6xl text-primary-300'/>,title:"CASH ON DEIVERY",desc:"100% money back guarantee"},
  ]
  
  return (
    <div className='relative z-10 bg-secondary-100'>

    <div className='flex md:w-11/12 mx-auto items-start justify-between pt-20    z-10 relative'>
      <div className='w-full md:w-1/2  md:pt-8' >
        <h1 className='text-4xl md:flex justify-center mx-auto  md:text-left md:mx-0 text-center px-2 pt-5 leading-[3rem] xl:leading-[4.5rem] font-bold font-play  bg-gradient-to-r from-primary-300 via-primary-200 to-primary-100 text-transparent bg-clip-text md:text-5xl xl:text-6xl'>
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
        
        { cards.map( ( card ) => {
          
          return (
            <div className='shadow-xl bg-white  lg:w-1/3 w-4/5 md:w-1/2 mx-auto rounded-md px-6 py-5 flex gap-10 transition-all duration-300  hover:scale-105 hover:shadow-2xl'>
          
          <div className="flex flex-col text-center md:text-left md:flex-row mx-auto justify-between gap-3 md:gap-6 items-center ">
           {card.icon}
               
            <div className="flex flex-col gap-[1px] lg:text-sm xl:text-base text-xs">
                  <p className='font-bold text-primary-300 font-inter '>{ card.title }</p>
                  <p className='text-primary-300/70'>{ card.desc }</p>
            </div>
          </div>
          
        </div>
          )
        })}
    
      

      </div>

      <div className='w-11/12 mx-auto'>

      <ProductsList/>
      </div>
    </div>
  )
}
export default Home


import React, {useEffect,useState} from 'react'
import { Link } from "react-router-dom";
import { BiSearch} from "react-icons/bi"
import { GoPerson } from "react-icons/go"
import { LuShoppingCart } from "react-icons/lu"
import  BlueLogo  from "../Image/Blue-Logo.svg"



const Navigation = () => {
  const [ active, setActive ] = useState( false );

   const isActive = () => {
    window.scrollY > 0 ? setActive( true ) : setActive( false )
  }
  useEffect( () => {
    window.addEventListener( "scroll", isActive )
      
    return () => {
      window.removeEventListener( "scroll", isActive );
    }
  }, [] );
  return (
    <div className={`sticky top-0 left-0 z-50 py-5 ${active ? "bg-white shadow-xl" :"  bg-secondary-100 shadow-none" }`}>
     <div className="flex justify-between w-11/12 mx-auto">
        <Link to="/" className=" font-kaisei gap-1  text-2xl font-semibold w-10 flex items-center ">
          <img src={ BlueLogo } alt="" />
          <p className='text-primary-300'> Outlet.</p>
        </Link>
        <div className="flex  gap-12">
          <Link to={ `/search` }><BiSearch size={ 30 } /></Link>
          <Link to={ `/account` }><GoPerson size={ 30 } /></Link>
          <Link to={ `/cart` }><LuShoppingCart size={ 30 } /></Link>
        </div>

      </div>

    </div>

  )
}

export default Navigation

import React, {useContext, useEffect,useState} from 'react'
import { Link,useLocation } from "react-router-dom";

// import { GoPerson } from "react-icons/go"
import { LuShoppingCart } from "react-icons/lu"
import  BlueLogo  from "../Image/Blue-Logo.svg"
import { SidecarContext } from '../context/SidebarContext';
import { CartContext } from '../context/CartContext';

const Navigation = () => {
  const { isOpen, setIsOpen } = useContext( SidecarContext )
  const [ active, setActive ] = useState( false );
  const { itemAmount } = useContext( CartContext );
   const location = useLocation()

   const isActive = () => {
    window.scrollY > 70 ? setActive( true ) : setActive( false )
  }

  useEffect( () => {
    window.addEventListener( "scroll", isActive )
      
    return () => {
      window.removeEventListener( "scroll", isActive );
    }
  }, [] );

    useEffect( () => {
    window.scrollTo(0, 0);
  }, [location]);
  

  return (
    <div className={`sticky top-0 left-0 z-40 py-5 ${ active ? "bg-white shadow-xl" :"  bg-secondary-100 shadow-none" }`}>
     <div className="flex justify-between w-11/12 mx-auto">
        <Link to="/" className=" font-kaisei gap-1  text-2xl font-semibold w-10 flex items-center ">
          <img src={ BlueLogo } alt="" />
          <p className='text-primary-300'> Outlet.</p>
        </Link>
        <div className="flex  gap-12">
       
          {/* <Link to={ `/account` }>
            <GoPerson size={ 30 } />
            </Link> */}
          <div className='relative cursor-pointer'  onClick={ () => setIsOpen( !isOpen ) }>
            <LuShoppingCart size={ 30 } />
            <div className="absolute -top-1 -right-3 bg-primary-200 w-4 h-4 text-xs rounded-full px-2">
              <div className="flex justify-center text-secondary-100">
             {itemAmount}

              </div>
            </div>
          </div>
        </div>

      </div>

    </div>

  )
}

export default Navigation

import React from 'react'
import { Link } from 'react-scroll';
const Button = ({children}) => {
  return (
    <div>
      <Link to="products" smooth={true}>
      <button className="text-secondary-100 uppercase rounded-full  font-kaisei tracking-wide text-base md:text-xl mt-8 md:mt-12  px-7 py-3 md:px-12 md:py-4 bg-primary-200 transition-all duration-200 hover:translate-y-150 hover:scale-105 hover:bg-primary-300 hover:shadow-2xl">{ children}</button>  
      </Link>
    </div>
  )
}

export default Button

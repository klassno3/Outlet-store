import React from 'react'
import { Link } from 'react-scroll';
const Button = ({title,color,children}) => {
  return (
    <div>
      <Link to="products" smooth={true}>
      <button className="text-secondary-100 uppercase rounded-full  font-kaisei tracking-wide text-xl mt-12 px-12 py-4 bg-primary-200 transition-all duration-200 hover:translate-y-150 hover:scale-105 hover:bg-primary-300 hover:shadow-2xl">{ children}</button>  
      </Link>
    </div>
  )
}

export default Button

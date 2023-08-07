import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { FaPlus, FaStar, FaEye } from "react-icons/fa"

import { CartContext } from '../context/CartContext'




  
  const Product = ( { product,detail} ) => {
    const { id, image, category, title, price, rating } = product;
  const { addToCart } = useContext( CartContext );
  
  
  
  const result = [];
    for (let i = 0; i < rating.rate; i++) {
      result.push(<div className='text-yellow-500'><FaStar/></div>);
    }

  return (
    <div key={id}>
       <div to="/product" className='relative z-10 group h-[400px] bg-white font-inter shadow-2xl rounded-md flex flex-col gap-4'>
          <div className='w-full h-full flex justify-center items-center '>
            <div className='w-[200px] mx-auto flex justify-center items-center'>
              
          <img className=' max-h-[160px] flex justify-center mx-auto rounded-b-none rounded-md transition-all duration-300 group-hover:scale-110 overflow-hidden' src={ image } alt="product" />
            </div>
            
        </div>
        <Link to={ `product/${ id }` } className={`${detail? "hidden": "absolute top-0 right-0"} `}>
          
        <div className='cursor-pointer hidden  relative w-10 h-10 rounded-[100000] bg-primary-200 rounded-tr-md transition-all duration-300 group-hover:block'>
                <FaEye size={ 20} className='absolute top-1/2 left-1/2 text-secondary-100  -translate-x-1/2 -translate-y-1/2'/>
              </div>
        </Link>
          <div className="pt-2 px-4 pb-6 flex flex-col gap-2">
            
          <p className='text-xs  text-primary-300/50 tracking-wide uppercase'>{category}</p>
          <p className='text-sm text-tertiary-100 '>{ title }</p>
          
          <div className='flex gap-2'>
        
            
            {result}
            
          </div>
            <div className="flex justify-between items-center ">

            <p className='text-lg font-semibold text-tertiary-100'>$ { price }</p>
            <div>
              <div onClick={()=> addToCart( product, id)} className='cursor-pointer  relative w-10 h-10 rounded-full bg-primary-200 hover:bg-primary-300'>
                <FaPlus size={ 20} className='absolute top-1/2 left-1/2 text-secondary-100 -translate-x-1/2 -translate-y-1/2'/>
              </div>
            </div>

            </div>
          </div>
          
          </div>
    </div>
  )
}

export default Product

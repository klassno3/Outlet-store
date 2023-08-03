import React from 'react'
import { Link } from "react-router-dom";
import { FaPlus ,FaStar} from "react-icons/fa"
const Product = ( { title, image, price, rating ,rate} ) => {
   


  const result = [];
    for (let i = 0; i < rating.rate; i++) {
      result.push(<div className='text-yellow-500'><FaStar/></div>);
    }

  
  return (
    <div>
       <Link to="/product" className='group h-[400px] bg-white font-inter shadow-2xl rounded-md flex flex-col gap-4'>
          <div className='w-full h-full flex justify-center items-center '>
            <div className='w-[200px] mx-auto flex justify-center items-center'>
              
          <img className=' max-h-[160px] flex justify-center mx-auto rounded-b-none rounded-md transition-all duration-300 group-hover:scale-110 overflow-hidden' src={ image } alt="product" />
            </div>
            
          </div>
          <div className="pt-2 px-4 pb-6 flex flex-col gap-2">
            
          <p className='text-lg text-tertiary-100 '>{ title }</p>
          
          <div className='flex gap-2'>
        
            
            {result}
            
          </div>
            <div className="flex justify-between items-center">

            <p className='text-ld font-semibold text-tertiary-100'>$ { price }</p>
            <div>
              <div className='cursor-pointer  relative w-10 h-10 rounded-full bg-primary-200'>
                <FaPlus size={ 20} className='absolute top-1/2 left-1/2 text-secondary-100 -translate-x-1/2 -translate-y-1/2'/>
              </div>
            </div>

            </div>
          </div>
          
          </Link>
    </div>
  )
}

export default Product

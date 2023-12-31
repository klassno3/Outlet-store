import React, { useContext} from 'react'
import { useParams } from 'react-router'
import { CartContext } from "../context/CartContext";
import { ProductContext } from "../context/ProductContext";
import RecentItem from '../component/RecentItem';
import { FaStar } from "react-icons/fa"


const ProductDetail = () => {
  const { id } = useParams();
  const { products } = useContext( ProductContext );
  const { addToCart } = useContext( CartContext );

  const product = products.find( ( item ) => {
    return item.id === parseInt( id );
    
  } );
  
  if ( !product ) {
    return (
      <div  className="h-screen font-inter text-lg flex justify-center items-center">
        LOADING.....
      </div>
    )
  };
  const { title, price, description, category, image, rating } = product;
 
  const result = [];
    for (let i = 0; i < rating.rate; i++) {
      result.push(<div className='text-yellow-500'><FaStar/></div>);
  };
 
  
  return (
    <div className="bg-secondary-100  ">
      
    <div className='w-11/12  mx-auto py-12 font-inter '>
      <div className="w-10/12  mx-auto flex justify-center">

      <div className="flex flex-col md:flex-row gap-6">
            <div className='w-1/2 h-full  '>
            <div className='w-[200px] md:w-[300px]'>
              
          <img className=' max-h-[300px] ' src={ image } alt="product" />
            </div>
            
        </div>
        <div className=" flex flex-col gap-3">

            <p className='text-sm lg:text-lg text-primary-100/80 tracking-wide uppercase'>{ category }</p>
            <div className="text-xl md:text-2xl font-semibold text-primary-300">{ title }</div>
            <div className="w-full md:w-4/5 text-tertiary-200">{ description }</div>
            <div className='flex gap-2'>{ result }</div>
            <div className="flex  items-center gap-14">
              <div className="text-base md:text-lg font-semibold text-primary-300">$ { price }</div>
              <div>

          <div onClick={ () => addToCart( product, id ) } className='text-base md:text-lg text-primary-300 cursor-pointer uppercase hover:underline'>add to cart</div>
              </div>
          </div>
        </div>
      </div>
      
      </div>
      <div className="py-20">

         <div className="flex justify-center mx-auto mt-10 mb-5 md:my-10 ">
        <h2 className="text-3xl font-kaisei text-primary-300 font-semibold"> Similar Products </h2>
        </div>
          <RecentItem category={ category }></RecentItem>

      </div>
      
    </div>
    
    </div>
  )
}

export default ProductDetail

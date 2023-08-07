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
    <div className='w-11/12  mx-auto py-12 font-inter '>
      <div className="w-10/12  mx-auto flex justify-center">

      <div className="flex gap-4">
          <div className='w-full h-full flex '>
            
            <div >
          <img className=' max-h-[300px]   ' src={ image } alt="product" />
            </div>
            
        </div>
        <div className=" flex flex-col gap-3">

            <p className='text-lg text-tertiary-300 tracking-wide uppercase'>{ category }</p>
            <div className="text-2xl font-semibold text-tertiary-100">{ title }</div>
            <div className="w-4/5 text-tertiary-200">{ description }</div>
            <div className='flex gap-2'>{ result }</div>
            <div className="flex  items-center gap-14">
              <div className="text-xl font-semibold text-tertiary-100">$ { price }</div>
              <div>

          <div onClick={ () => addToCart( product, id ) } className='text-lg text-primary-300 cursor-pointer uppercase hover:underline'>add to cart</div>
              </div>
          </div>
        </div>
      </div>
      
      </div>
      <div className="py-20">

         <div className="flex justify-center mx-auto my-10 ">
        <h2 className="text-3xl font-kaisei text-primary-300 font-semibold"> Similar Products </h2>
        </div>
          <RecentItem category={ category }></RecentItem>

      </div>
      
    </div>
    
  )
}

export default ProductDetail

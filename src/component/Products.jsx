import React, { useContext,useState } from 'react'
import { ProductContext } from '../context/ProductContext'
import { FaPlus } from "react-icons/fa"
import DropDown from './DropDown';
import { Link } from "react-router-dom";
import Button from './Button';

const Products = () => {
  const [ selection, setSelection ] = useState( null );
 
  const handleSelect = ( option ) => {
    setSelection( option )
  }
  const options = [
    { label: "Electronics", value: "electronics" },
    { label: "Jewelery", value: "jewelery" },
    { label: "Men's clothing", value: "men's clothing" },
    { label: "Women's clothing", value: "women's clothings" },
  ]
  
  const { products } = useContext( ProductContext );

  // const filteredProduct = products.filter( ( item ) => {
  //   return (
  //     item.category === selection
  //     );
  //   } );
  // console.log(filteredProduct)
  return (
    <div className='relative py-10'>
      <div className="flex justify-center mx-auto my-10 ">
        <h2 className="text-3xl font-kaisei text-primary-300 font-semibold"> Top Products </h2>
      </div>
      <div className="absolute right-0 top-20">

      <DropDown options={ options } selection={ selection } onSelect={ handleSelect } />
      </div>
      <div className="grid py-10 justify-center items-start grid-cols-1 md:grid-cols-3 gap-8 lg:grid-cols-4">
      { products.map( ( product ) => {
        return <Link key={ product.id }  to="/product"className='group h-[400px] font-inter shadow-2xl rounded-md flex flex-col gap-4'>
          <div className='w-full h-full flex justify-center items-center '>
            <div className='w-[200px] mx-auto flex justify-center items-center'>
              
          <img className=' max-h-[160px] flex justify-center mx-auto rounded-b-none rounded-md transition-all duration-300 group-hover:scale-110 overflow-hidden' src={ product.image } alt="product" />
            </div>
            
          </div>
          <div className="pt-2 px-4 pb-6 flex flex-col gap-2">
            
            <p className='text-lg '>{ product.title }</p>
            <div className="flex justify-between items-center">

            <p className='text-ld font-semibold text-tertiary-100'>$ { product.price }</p>
            <div>
              <div className='cursor-pointer  relative w-10 h-10 rounded-full bg-primary-200'>
                <FaPlus size={ 20} className='absolute top-1/2 left-1/2 text-secondary-100 -translate-x-1/2 -translate-y-1/2'/>
              </div>
            </div>

            </div>
          </div>
          
        </Link>
      })}
      </div>
      <div className='flex justify-center mx-auto mb-10'>

  <Button>More products</Button>
      </div>
    </div>
  )
}

export default Products

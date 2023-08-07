import React, { useContext,useState,useEffect } from 'react'
import { ProductContext } from '../context/ProductContext'
import  Product  from "./Product"

import DropDown from './DropDown';

import Button from './Button';


const ProductsList = () => {

 const [productCategory, setProductCategory] = useState([]);
  const [ selection, setSelection ] = useState( null );
  
  
  const handleSelect = ( option ) => {
    setSelection( option.value )

    
  }
  useEffect(() => {
  const fetchProductsCatagory = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/category/${selection}`);
    const data = await response.json();
    setProductCategory( data );
   
  
  };
  fetchProductsCatagory();
}, [selection,productCategory]);

  
  const options = [
    { label: "Electronics", value: "electronics" },
    { label: "Jewelery", value: "jewelery" },
    { label: "Men's clothing", value: "men's clothing" },
    { label: "Women's clothing", value: "women's clothing" },
  ]
  
  const { products } = useContext( ProductContext );

  const filteredProduct = productCategory.map( ( product ) => {
    return (
  <Product key={ product.id } product={product } /> 
    );
})




const renderedProducts =  products.map( ( product ) => {
        return (
          <Product key={ product.id } product={product } /> 
        )
      }) 
 
  return (
    <div className='relative py-10'>
      <div className="flex justify-center mx-auto my-10 ">
        <h2 className="text-3xl font-kaisei text-primary-300 font-semibold"> Top Products </h2>
      </div>
      <div className="absolute  z-50 right-0 top-20">

      <DropDown options={ options } selection={ selection } onSelect={ handleSelect } />
      </div>
      <div className="grid py-10 justify-center items-start grid-cols-1 md:grid-cols-3 gap-8 lg:grid-cols-4">
     
        {selection ? filteredProduct: renderedProducts } 
        


      </div>

      <div className='flex justify-center mx-auto mb-10'>

        <Button>More products</Button>
        
      </div>
    </div>
  )
}

export default ProductsList

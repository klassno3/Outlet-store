import React, { useContext,useState,useEffect } from 'react'
import { ProductContext } from '../context/ProductContext'
import  Product  from "./Product"
import DropDown from './DropDown';
import Button from './Button';


const ProductsList = () => {
  const { products } = useContext( ProductContext );
  const [ productCategory, setProductCategory ] = useState( [] );
  const [ selection, setSelection ] = useState( null );
  const [ term, setTerm ] = useState("");

  
 

    const handleChange = ( e ) => {
      setTerm( e.target.value );
  }


  const handleFormSubmit = ( e ) => {

    e.preventDefault();
  
  };

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
  }, [ selection, productCategory ] );
  

  
  const options = [
    { label: "Electronics", value: "electronics" },
    { label: "Jewelery", value: "jewelery" },
    { label: "Men's clothing", value: "men's clothing" },
    { label: "Women's clothing", value: "women's clothing" },
  ];

  

  const filteredProduct = productCategory.map( ( product ) => {
    return (
  <Product key={ product.id } product={product } /> 
    );
})

  const searchItems = products.filter( ( row ) => {
 
    if (term === "") {
      return true; // Include all rows when term is empty
    } else if (row.title?.toLowerCase().includes(term?.toLowerCase())) {
      return row; // Include rows that match the term
    }
    return false; // Exclude rows that don't match the term
  });





  const renderedSearch = searchItems.map( ( product ) => {
    return (
      <Product key={ product.id } product={ product } />
    )
  } );

  
  return (
    <div className='relative py-10'>
      <div className="flex justify-center mx-auto mt-10  ">
        <h2 className="text-3xl font-kaisei text-primary-300 font-semibold"> Top Products </h2>
      </div>
      <div className="py-10">

      <div className="absolute  z-50 left-0 top-30">
           <form action="" className="font-inter"  onSubmit={ handleFormSubmit } >

        <input type="search" placeholder='Search items' value={ term } onChange={ handleChange }  className=" flex items-center justify-between border-[1px] border-primary-300 rounded-md px-4 py-2 w-72 font-italic focus:outline-none " />
      </form>
 
      </div>
      <div className="absolute  z-50 right-0 top-30">

        
      <DropDown options={ options } selection={ selection } onSelect={ handleSelect } />
      </div>
      </div>
      <div className="grid py-10 justify-center items-start grid-cols-1 md:grid-cols-3 gap-8 lg:grid-cols-4">
     
    {selection ? filteredProduct : renderedSearch}
        
      </div>

      <div className='flex justify-center mx-auto mb-10'>

        <Button>More products</Button>
        
      </div>
    </div>
  )
}

export default ProductsList

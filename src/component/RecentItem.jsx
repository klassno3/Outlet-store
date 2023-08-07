import React, { useEffect, useState } from 'react'
import Product from '../component/Product';

const RecentItem = ({category}) => {
    const [ productCategory, setProductCategory ] = useState( [] );
  
  useEffect(() => {
    const fetchProductsCatagory = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
      const data = await response.json();
      setProductCategory( data );
      
      
    };
    fetchProductsCatagory();
  }, [ productCategory,category ] );

   const filteredProduct = productCategory.map( ( product ) => {
    return (
      <Product key={ product.id } product={ product } detail={ true } /> 
    );
})

  return (
       <div className="grid py-10 justify-center items-start grid-cols-1 md:grid-cols-3 gap-8 lg:grid-cols-4">


         {filteredProduct}
          
      </div>
  )
}

export default RecentItem

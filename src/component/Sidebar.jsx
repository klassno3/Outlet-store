import React,{useContext} from 'react'
// import { Link } from 'react-router-dom'
import CartItem from "./CartItem"

import { IoMdArrowForward } from "react-icons/io"
import { FiTrash2 } from "react-icons/fi"
import { SidecarContext } from '../context/SidebarContext'
import { CartContext } from '../context/CartContext'
const Sidebar = () => {

  const { isOpen, handleClose } = useContext( SidecarContext );
  const { cart, clearCart, total,itemAmount } = useContext( CartContext );

  const renderedCart = cart.map( ( item ) => {
    return <CartItem key={ item.id } item={ item } />
  } );

  return (
    <div  className={` ${isOpen ? "right-0" : "-right-full"} w-full bg-white fixed top-0 h-full shadow-2xl 
    md:w-[35vw] xl:max-w-[30vw] font-inter transition-all duration-300 z-50 px-4 lg:px-[35px]` }>
      
      <div className="flex  items-center justify-between font-inter py-6 border-b">
        <div className="uppercase text-xm font-semibold">
          shopping Cart ({itemAmount})

        </div>
        <div onClick={ handleClose} className="cursor-pointer w-8 h-8 flex justify-center items-center">
          <IoMdArrowForward/>
        </div>


      </div>
      <div>
        { { cart } === [] ? <div className='capitalize font-inter flex justify-center items-center'>your cart is empty</div> :renderedCart}
      </div>
      <div>
        <div className=' flex w-full justify-between items-center '>
          <div className='upppercase font-semibold text-tertiary-200'>
              
            <span className='mr-2'>Total: </span>
            $ {parseFloat(total).toFixed(2)}
          </div>

          <div  onClick={()=>clearCart()}  className=' bg-primary-300 cursor-pointer py-4 text-secondary-100 w-12 h-12 flex justify-center items-center text-xl  hover:bg-primary-100 transition-all duration-300'>
            <FiTrash2/>
          </div>
        </div>
 
      </div>
    </div>
  )
}

export default Sidebar

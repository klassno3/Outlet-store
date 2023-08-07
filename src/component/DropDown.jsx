import React, { useEffect, useState, useRef } from 'react'
import { GoChevronDown} from "react-icons/go"

const DropDown = ( { options, selection, onSelect } ) => {
 const [ isOpen, setIsOpen ] = useState( false );
  const divEl = useRef();
  useEffect( () => {
    const handler = ( event ) => {
      if ( !divEl.current ) {
        return
      }
      if ( !divEl.current.contains(event.target) ) {
     setIsOpen(false)
   }
      
    }
    document.addEventListener( "click", handler, true );
    return () => {
      document.removeEventListener( "click", handler, true );
    };
  })
  const handleClick = () => {
    setIsOpen( !isOpen );

  }
  const handleOptionClick = (option) => {
    setIsOpen( false );
    
    onSelect( option );
    
  }

const renderedOptions = options.map( ( option ) => {
      
  return ( <div className='border-b-[1px] pb-2 border-tertiary-300/60' onClick={()=> handleOptionClick(option) } key={ option.value }>{ option.label }</div> )
  } ); 
      
 

  return (
    <div ref={divEl} className='cursor-pointer '>
      {/* if selection is null it will print Select.... if it not null it wil print selection.label */}
      <div onClick={ handleClick } className='flex items-center justify-between border-[1px] border-primary-300 rounded-md px-4 py-2 w-48'>
        <div className='font-inter capitalize'>{ selection ? selection : "CATEGORIES" }</div>
        <GoChevronDown size={20} />
      </div>
      { isOpen && <div className='flex flex-col gap-2 z-50 bg-white shadow-xl px-4 py-3 rounded-b-md w-48'>{ renderedOptions } </div> }
      
    </div>
  )
}

export default DropDown

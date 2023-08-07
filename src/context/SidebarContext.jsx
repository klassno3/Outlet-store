import { useState, createContext } from "react";

export const SidecarContext = createContext();

const SidebarProvider = ( { children } ) => {
  
  const [ isOpen, setIsOpen ] = useState( false );
   
  const handleClose = () => {
    setIsOpen(false)
  }

  return <SidecarContext.Provider value={{isOpen,setIsOpen,handleClose}}>{ children }</SidecarContext.Provider>

}
export default SidebarProvider
import {useState} from 'react'

const Search = ({onSubmit}) => {
  const [term, setTerm ] = useState(  );
 

    const handleChange = ( e ) => {
      setTerm( e.target.value );
      
  }


  const handleFormSubmit = ( e ) => {
    onSubmit( term );
    e.preventDefault();
  };
  return (
    <div>
      <form action="" className="font-inter"  onSubmit={ handleFormSubmit } >

        <input type="search" placeholder='Search items' value={ term } onChange={ handleChange }  className=" flex items-center justify-between border-[1px] border-primary-300 rounded-md px-4 py-2 w-72 font-italic focus:outline-none " />
      </form>
    </div>
  )
}

export default Search

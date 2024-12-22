import React, { useState } from 'react'

const SearchComponent = ({SearchProduct}) => {
    const [inputData,setInputData]=useState('')
    const handleInputChange=(e)=>{
        setInputData(e.target.value)
    }

    const handleClick=()=>{
        SearchProduct(inputData.trim())
    }
  return (
    <div className=' w-full flex p-5 rounded-lg'>
      <input type="text" placeholder='Search Product Category or Name' className='w-2/3' onChange={handleInputChange} value={inputData}/>
      <button className='bg-blue-700 text-white rounded-lg w-1/3 h-8' onClick={handleClick}>Find Product</button>
    </div>
  )
}

export default SearchComponent

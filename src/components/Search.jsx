import React from 'react'
import { IoIosSearch } from "react-icons/io";
const Search = () => {
  
  return (
    <div className='ml-auto mr-auto mb-4  mt-[30px]  relative'>
      <div>
        < IoIosSearch className='absolute text-3xl pl-2 top-3 left-[-35px]'/>
      </div>
      <input className='border-2 w-[780px] ml-[-40px] placeholder:pl-2 ps-[40px] text-[18px] rounded-2xl p-3' type="search" placeholder='Job title, Keywords, or Company name' 
        />
      <button className='bg-blue-800 rounded absolute top-2.5 right-3 text-white py-1 px-6'>Search</button>
    </div>
  )
}

export default Search
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-center gap-[18%] items-center p-4 '>
      <div>
        <img src="/asset/logo.svg" alt="" className='bg-[#0034D1]' />
      </div>
      <div className='text-2xl flex gap-12'>
        <p>Job Search</p>
        <p>My Applications</p>
        <p>Companies</p>
        <p>Conatct Us</p>
      </div>
      <div>
        <button className='mr-5 py-[6px] px-[57px] border-0 text-fuchsia-50 bg-[#0034D1] rounded-sm'>Log in</button>
        <button className=' py-[6px] px-[57px] text-black border-[#0034D1] border-[1px] rounded-sm' >Sign in</button>
      </div>
      
        
      
    </div>
  )
}

export default Navbar
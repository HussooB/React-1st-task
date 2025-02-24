import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex justify-center  gap-[18%] items-center p-4 '>
      <div>
        <NavLink to="/">
        <img src="/asset/logo.svg" alt="" className='bg-[#0034D1]' />
        </NavLink>
        
      </div>
      <div className='text-2xl  bg-amber-400 flex gap-12 hover:cursor-pointer'>
        <p>Job Search</p>
        <p>My Applications</p>
        <p>Companies</p>
        <p>Contact Us</p>
      </div>
      <div className=''>
        <NavLink >
          <button className='mr-5 py-[6px] px-[57px] border-0 text-fuchsia-50 bg-[#0034D1] rounded-sm hover:cursor-pointer'>Log in</button>
          </NavLink>
        <NavLink to='/MultiStepForm' className={({isActive})=> isActive? "py-[6px] px-[55px]  text-black border-[#0034D1] border-[1px] bg-blue-800 rounded-sm hover:bg-amber-400 hover:cursor-pointer bg": "py-[6px] px-[55px]  text-black border-[#0034D1] border-[1px] rounded-sm hover:bg-amber-400 hover:cursor-pointer"}>
          <button >Sign in</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
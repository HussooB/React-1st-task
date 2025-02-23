import React from 'react';
import { Link } from 'react-router-dom';

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
        <p>Contact Us</p>
      </div>
      <div>
        
          <button className='mr-5 py-[6px] px-[57px] border-0 text-fuchsia-50 bg-[#0034D1] rounded-sm hover:bg-amber-400'>Log in</button>
        
        <Link to='/MultiStepForm'>
          <button className='py-[6px] px-[57px] text-black border-[#0034D1] border-[1px] rounded-sm hover:bg-amber-400'>Sign in</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
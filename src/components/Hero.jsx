import React from 'react'
const Hero = () => {
  return (
    <div className=" flex items-center justify-around bg-center bg-no-repeat bg-cover bg-[url('/asset/heroBackgroundimage.svg')] p-10 h-[521px]  " >
      <div>
      <h1 className='text-[3.9rem] text-zinc-50'>Find Your Dream <br/>Job with Ease</h1>
      <p className=' text-gray-300'> Search, Apply, and Track Job Applications<br/>
       All in One Place </p>
      </div>
      <img src="/asset/man.svg" className='w-[716.8768920898438px] h-[799px] relative top-[40px] left-[135px]'></img>
    </div>
  )
}

export default Hero

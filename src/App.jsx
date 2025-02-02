import React from 'react'

const App = () => {
  let title = [1,2,3,4,5];
  return (
    <div className='bg-amber-600 w-100 h-40 mx-auto my-50 rounded-2xl text-center flex items-center font-black border-x-purple-500 ' >
     <div className='w-50% h-50%'>
      <img src="src\assets\anime-landscape-person-traveling - Copy.jpg" alt="" className=' rounded-2xl h-14 ml-2'/>
     </div>
     <div className='ml-2'>
      <h1 className='text-black ml-0 text-left text-3xl'>Hussein Beshir</h1>
      <p className='text-amber-200 mt-1  text-left'>You got new message!</p>
     </div>
          </div>
  )
}

export default App
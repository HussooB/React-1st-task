import React from 'react'

const Pagination = ({page,setPage}) => {
  return (
    <div className='flex justify-center my-4 gap-2'>
      <div onClick={()=>{setPage(1)}}  disabled={page===1} className={page===1?'bg-blue-500 px-2 hover:cursor-pointer hover:bg-blue-700 py-2 rounded-lg border-[#b5b3b3] border-[1px] text-white' : 'px-2 py-2 rounded-lg hover:cursor-pointer hover:bg-blue-700 border-[#b5b3b3] border-[1px]'} >1</div>
      <div onClick={()=>{setPage(2)}}  className={page===2?'bg-blue-500 px-2 py-2 rounded-lg border-[#b5b3b3] border-[1px] text-white hover:cursor-pointer hover:bg-blue-700 ' : 'px-2 py-2 hover:cursor-pointer hover:bg-blue-700 rounded-lg border-[#b5b3b3] border-[1px]'}>2</div>
      <div onClick={()=>{setPage(3)}}  className={page===3?'bg-blue-500 px-2 py-2 rounded-lg border-[#b5b3b3] border-[1px] text-white hover:cursor-pointer hover:bg-blue-700 ' : 'px-2 py-2 hover:cursor-pointer hover:bg-blue-700 rounded-lg border-[#b5b3b3] border-[1px]'}>3</div>
      <div onClick={()=>{setPage(4)}}  className={page===4?'bg-blue-500 px-2 py-2 rounded-lg border-[#b5b3b3] border-[1px] text-white hover:cursor-pointer hover:bg-blue-700 ' : 'px-2 py-2 hover:cursor-pointer hover:bg-blue-700 rounded-lg border-[#b5b3b3] border-[1px]'}>4</div>
      <div onClick={()=>{setPage(5)}} disabled={page===5} className={page===5?'bg-blue-500 px-2 py-2 rounded-lg border-[#b5b3b3] border-[1px] text-white hover:cursor-pointer hover:bg-blue-700 ' : ' hover:cursor-pointer hover:bg-blue-700 px-2 py-2 rounded-lg border-[#b5b3b3] border-[1px]'}>5</div>
    </div>
  )
}

export default Pagination
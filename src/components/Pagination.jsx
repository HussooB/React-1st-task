import React from 'react';

const Pagination = ({ page, setPage }) => {
  return (
    <div className='flex justify-center my-4 gap-2'>
      <div onClick={() => setPage(1)} className={page === 1 ? 'bg-blue-500 px-2 py-2 disabled rounded-lg border-[#b5b3b3] border-[1px] text-white' : 'px-2 py-2 rounded-lg border-[#b5b3b3] border-[1px] hover:cursor-pointer hover:bg-blue-700'}>1</div>
      <div onClick={() => setPage(2)} className={page === 2 ? 'bg-blue-500 px-2 py-2 rounded-lg border-[#b5b3b3] border-[1px] text-white' : 'px-2 py-2 rounded-lg border-[#b5b3b3] border-[1px] hover:cursor-pointer hover:bg-blue-700'}>2</div>
      <div onClick={() => setPage(3)} className={page === 3 ? 'bg-blue-500 px-2 py-2 rounded-lg border-[#b5b3b3] border-[1px] text-white' : 'px-2 py-2 rounded-lg border-[#b5b3b3] border-[1px] hover:cursor-pointer hover:bg-blue-700'}>3</div>
      <div onClick={() => setPage(4)} className={page === 4 ? 'bg-blue-500 px-2 py-2 rounded-lg border-[#b5b3b3] border-[1px] text-white' : 'px-2 py-2 rounded-lg border-[#b5b3b3] border-[1px] hover:cursor-pointer hover:bg-blue-700'}>4</div>
      <div onClick={() => setPage(5)} className={page === 5 ? 'bg-blue-500 px-2 py-2 disabled rounded-lg border-[#b5b3b3] border-[1px] text-white' : 'px-2 py-2 rounded-lg border-[#b5b3b3] border-[1px] hover:cursor-pointer hover:bg-blue-700'}>5</div>
    </div>
  );
};

export default Pagination;
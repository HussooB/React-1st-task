import React from 'react';
import { IoMdClose } from "react-icons/io";

const SavedJob = ({ job, setJob, handleBookMark }) => {
  return (
    <>
      {job.map((item) => (
        item.isBookMarked ? (
          <div key={item.id} className='w-[92%] min-h-[115px] gap-1 rounded-2xl p-5 drop-shadow-xl m-3 border-[#b5b3b3] border-[1px] flex bg-white'>
            <div>
              <img src={item.logo} alt="logo" className='mr-4 w-[40px] h-[40px] rounded-lg' />
            </div>
            <div className='flex rounded flex-col gap-3 w-[100%]'>
              <div className='flex justify-between w-[100%]'>
                <div>{item.title}</div>
                <div className="hover:cursor-pointer"  onClick={() => handleBookMark(item.id)}><IoMdClose size={20} /></div>
              </div>
              <div>
                <p>{item.company}</p>
              </div>
              <div>
                <span className='p-1 bg-gray-400'>{item.type}</span>
                <span className='p-1 bg-gray-400'>{item.salary}</span>
              </div>
            </div>
          </div>
        ) : null
      ))}
    </>
  );
};

export default SavedJob;
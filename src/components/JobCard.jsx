import React from 'react';
import { CiBookmark } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { NavLink } from 'react-router-dom';

const JobCard = ({ id, title, isBookMarked, description, job, handleBookMark }) => {
  console.log('Rendering JobCard for job id:', id, 'isBookMarked:', isBookMarked);
  return (
    <div className='mt-4 flex flex-row rounded-3xl w-[100%] min-h-[100px] bg-[#FFFFFF] border-[#b5b3b3] border-[1px] shadow-2xl p-2'>
      <div>
        <img className='w-[50px] h-[50px] mr-5 rounded-lg ml-3 mt-3' src={job.logo} alt="Logo" />
      </div>
      <div className='flex flex-col w-[100%]'>
        <div className='flex justify-between'>
          <NavLink to={`/Describtion/${id}`}>
            <h1 className='text-[2rem]'>{title}</h1>
          </NavLink>
          <div className='flex'>
            <div className="mr-3 hover:cursor-pointer" onClick={() => handleBookMark(id)}>
              {isBookMarked ? <FaBookmark size={32} /> : <CiBookmark size={37} />}
            </div>
            <div className='mr-2'>
              <CiShare2 size={32} />
            </div>
          </div>
        </div>
        <NavLink to={`/Describtion/${id}`}>
        <div>
          <p>{job.company}</p>
          <p className='mt-2'><span className='p-1 bg-gray-400'>Remote</span> <span className='p-1 bg-gray-400'>{job.type}</span> <span className='p-1 bg-gray-400'>{job.salary}</span></p>
          <p className='mt-2 text-gray-600'>
            {description}
          </p>
        </div>
        </NavLink>
      </div>
    </div>
  );
};

export default JobCard;
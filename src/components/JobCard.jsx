import React from 'react'
import { CiBookmark } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
const JobCard = ({job,setJob}) => {
  const HandleBookMark = job.handleBookMark;
  return (
    <div className='mt-3 flex flex-row rounded-3xl w-[100%] min-h-[100px] bg-[#FFFFFF] border-[#b5b3b3] border-[1px] shadow-2xl p-2'>
      <div>
        <img className='w-[50px] h-[50px] mr-5 rounded-lg ml-3 mt-3' src={job.logo} alt="Logo" />
      </div>
      <div className='flex flex-col w-[100%]'>
        <div className='flex justify-between'>
          <h1 className='text-[2rem]'>{job.title}</h1>
          <div className='flex'>  
          <div className="mr-3" onClick={()=>HandleBookMark(job.id)}>
            {job.isBookMarked ? <FaBookmark size={32}/> : <CiBookmark size={32}/>}
          </div>
           <div className='mr-2'>
            < CiShare2 size={32}/>
            </div> 
          </div>
        </div>
        <div>
          <p>{job.company}</p>
          <p className='mt-2'><span className='p-1 bg-gray-400'>Remote</span> <span className='p-1 bg-gray-400'>{job.type}</span> <span className='p-1 bg-gray-400'>{job.salary}</span></p>
          <p className='mt-2 text-gray-600'>
            {job.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default JobCard;
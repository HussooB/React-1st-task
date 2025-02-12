import React from 'react'
import  JobCard  from './JobCard'
import {useState} from 'react'
import Pagination from './Pagination'
const   Feed = ({job,setJob,handlBookMark,page,setPage}) => {
  
      
  return (
    <div className='h-min-[100vh] min-w-[40%] bg-[#F3F3F3] p-2' >
     { job.map((item)=>{
       return <JobCard key = {item.id} id={item.id} title={item.title} isBookMarked={item.isBookMarked} description={item.description}  job={item} setJob={setJob} handleBookMark={handlBookMark} />
       })}
      <Pagination page={page} setPage={setPage} />
    </div>
  )
}   

export default Feed
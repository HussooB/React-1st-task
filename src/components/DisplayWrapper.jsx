import React from 'react'
import Filterjobs from './Filterjobs'
import Feed from './Feed'
import Savedjobs from './Savedjobs'
import { useState, useEffect } from 'react'
const DisplayWrapper = ({job, setJob, page,setPage }) => {
  const [filteredJobs,setFilteredJobs] = useState([]);
  const handlBookMark = (id) =>{
    const updatedJobs = job.map((obj)=> id==obj.id ? {...obj,isBookMarked:!obj.isBookMarked} : obj)
    setJob(updatedJobs);
  }
 
 
  return (
    <div className='flex gap-[1%] min-h-[100vh] bg-[#F3F3F3]'>
      
      <Filterjobs />
       <Feed job={job} setJob={setJob} handlBookMark={handlBookMark} page={page} setPage={setPage}/>
      <Savedjobs job={job} setJob={setJob} handlBookMark={handlBookMark} />
    </div>
  )
}

export default DisplayWrapper
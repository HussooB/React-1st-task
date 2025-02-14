import React from 'react';
import Filterjobs from './Filterjobs';
import Feed from './Feed';
import Savedjobs from './Savedjobs';

const DisplayWrapper = ({ job, setJob, page, setPage }) => {
  const handleBookMark = (id) => {
    
    const updatedJobs = job.map((obj) => id === obj.id ? { ...obj, isBookMarked: !obj.isBookMarked } : obj);
    setJob(updatedJobs);
    console.log("Bookmark clicked for job ID:", id);
  };

  return (
    <div className='flex gap-[1%] min-h-[100vh] bg-[#F3F3F3]'>
      <Filterjobs />
      <Feed job={job} setJob={setJob} handleBookMark={handleBookMark} page={page} setPage={setPage} />
      <Savedjobs job={job} setJob={setJob} handleBookMark={handleBookMark} />
    </div>
  );
};

export default DisplayWrapper;
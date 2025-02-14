import React from 'react';
import JobCard from './JobCard';
import Pagination from './Pagination';

const Feed = ({ job, setJob, handleBookMark, page, setPage }) => {
  return (
    <div className='h-min-[100vh] min-w-[40%] mt-10 bg-[#F3F3F3] p-2'>
      {job.map((item,index) => (
        <JobCard key={index} id={item.id} title={item.title} isBookMarked={item.isBookMarked} description={item.description} job={item} handleBookMark={handleBookMark} />
      ))}
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default Feed;
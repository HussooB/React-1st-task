import React from 'react';
import JobCard from './JobCard';
import Pagination from './Pagination';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';

const Feed = ({ job, setJob, handleBookMark, page, setPage,loading,setLoading }) => {
  return (
    <div className='h-min-[100vh] min-w-[40%] mt-10 bg-[#F3F3F3] p-2'>
      {loading? (<div className="flex justify-center items-center h-full">
          <Spinner loading={loading} />
        </div>):(<>
        {job.map((item,index) => (
        <JobCard key={index} id={item.id} title={item.title} isBookMarked={item.isBookMarked} description={item.description} job={item} handleBookMark={handleBookMark} />
      ))}
      <Pagination page={page} setPage={setPage} />
      </>)}
      
    </div>
  );
};

export default Feed;
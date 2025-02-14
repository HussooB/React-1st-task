import React from 'react';
import SavedJob from './SavedJob';

const Savedjobs = ({ job, setJob, handleBookMark }) => {
  return (
    <div className='h-min-[100vh] min-w-[28%] bg-[#F3F3F3]'>
      <div className='w-[343px] min-h-[595px] bg-[#FFFFFF] border-[#b5b3b3] border-[1px] p-1 rounded-3xl ml-3 drop-shadow-xl flex flex-col'>
        <h1 className='text-[32px] text-center'>Saved Jobs</h1>
        <SavedJob job={job} setJob={setJob} handleBookMark={handleBookMark} />
      </div>
    </div>
  );
};

export default Savedjobs;
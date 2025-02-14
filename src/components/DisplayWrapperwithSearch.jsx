import React, { useState, useEffect } from 'react';
import DisplayWrapper from './DisplayWrapper';
import Search from './Search';
const DisplayWrapperwithSearch = () => {
  const [job, setJob] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://joblisting-rd8f.onrender.com/api/jobs?company=&search=&page=${page}&limit=5`)
      .then(response => response.json())
      .then(data => {
        if (data.jobs) {
          setJob(data.jobs);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [page]);

  return (
    <div className='flex flex-col h-min-[100vh] bg-[#F3F3F3]'>
      <Search />
      <DisplayWrapper job={job} setJob={setJob} page={page} setPage={setPage} />
    </div>
  );
};

export default DisplayWrapperwithSearch;
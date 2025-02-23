import React, { useState, useEffect } from 'react';
import DisplayWrapper from './DisplayWrapper';
import Search from './Search';
const DisplayWrapperwithSearch = () => {
  const [job, setJob] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   fetch(`https://joblisting-rd8f.onrender.com/api/jobs?company=&search=&page=${page}&limit=5`)
  //     .then(response => response.json())
  //     .then(data => {
  //       if (data.jobs) {
  //         setJob(data.jobs);
  //       }
  //     })
  //     .catch(error => console.error('Error fetching data:', error));
  //     setLoading(false);
  // }, [page]);
  useEffect(()=>{
    const fetchJobs = async()=>{
      try{
        const response = await fetch(`https://joblisting-rd8f.onrender.com/api/jobs?company=&search=&page=${page}&limit=5`);
        const data = await response.json();
        setJob(data.jobs);
      } catch (error){
        console.log("Error while fetching", error)
      } finally {
        setLoading(false);
      }
    }
    fetchJobs();
  },[page]);

  return (
    <div className='flex flex-col h-min-[100vh] bg-[#F3F3F3]'>
      <Search />
      <DisplayWrapper loading={loading} setLoading={setLoading} job={job} setJob={setJob} page={page} setPage={setPage} />
    </div>
  );
};

export default DisplayWrapperwithSearch;
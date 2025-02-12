import React from 'react'
import { useState, useEffect } from 'react';
import DisplayWrapper from './DisplayWrapper'
import Search from './Search'
export const DisplayWrapperwithSearch = () => {
  const [searchQuery, setSearchQuery] = useState(''); 
  const [job, setJob] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [page,setPage] = useState(1);
  useEffect(() => {
    fetch(`https://joblisting-rd8f.onrender.com/api/jobs?company=&search=&page=${page}&limit=5`)
      .then(response => response.json())
      .then(data => {
        
          setJob(data.jobs);

      })
      .catch(error => console.error('Error fetching data:', error));
   }
  , [page]);
  const handleSearch = () => {
    setFilteredJobs(
      job.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  };
  return (
    <div className=' flex flex-col h-min-[100vh] bg-[#F3F3F3]'>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} handleSearch={handleSearch} />
      <DisplayWrapper job={filteredJobs } setJob={setJob} page={page} setPage={setPage}/>
    </div>
  )
}

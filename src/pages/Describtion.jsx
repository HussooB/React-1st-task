import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';

const Describtion = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await fetch(`https://joblisting-rd8f.onrender.com/api/jobs/${id}`);
        const data = await response.json();
        setJob(data);
      } catch (error) {
        console.log("Error while fetching", error);
        setError('Job not found');
      } finally {
        setLoading(false);
      }
    };
    fetchJob();
  }, [id]);

 

  return (<div className='h-[40vh] w-[80%] mx-auto mt-40  rounded-2xl bg-[#F3F3F3] border-[#b5b3b3] border-[1px] shadow-2xl p-2'>
    { loading ? <div className='flex justify-center'><Spinner  loading={loading} /> </div>:
    <div >
      <div className=' flex flex-col rounded-3xl w-[100%] min-h-[100px]  '>

       
      <h1 className='text-center text-7xl'>{job.title}</h1>
      <p className='text-center mt-5 ml-12 text-3xl'>{job.description}</p>
      <p className="text-center text-2xl mt-5 ml-12 ">{job.company}</p>
      <p className="text-center text-2xl mt-5 ml-12 ">{job.salary}</p>
      <p className="text-center text-2xl mt-5 ml-12 ">{job.type}</p>
    </div>
    </div>
}
    </div>
  );
};

export default Describtion;
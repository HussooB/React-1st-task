import React, { useState } from 'react';
import { CiLocationOn } from "react-icons/ci";
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

const Filterjobs = () => {
  const [values, setValues] = useState([100, 10000]);

  const handleChange = (values) => {
    setValues(values);
  };

  return (
    <div className='h-min-[100vh] min-w-[28%] mb-4 bg-[#F3F3F3]'>
      <div className='w-[343px] h-[920px] bg-[#FFFFFF] border-[#b5b3b3] border-[1px] p-1 rounded-3xl ml-52 drop-shadow-xl flex flex-col'>
        <h1 className='text-[32px] text-center'>Filter</h1>
        <label className='mx-4 text-[20px]'>Date Posted</label>
        <select className='w-[90%] mx-4 p-2 rounded-lg border-[#b5b3b3] border-[1px] mt-2'>
          <option value="Last 24 hours">Last 24 hours</option>
          <option value="Last 7 days">Last 7 days</option>
          <option value="Last 14 days">Last 14 days</option>
          <option value="Last 30 days">Last 30 days</option>
        </select>
        <label className='mx-4 mt-2 text-[20px]'>Job Type</label>
        <div className='mx-4 mt-2 rounded-lg h-[264px] border-[#b5b3b3] border-[1px] p-2 bg-[#FFFFFF]'>
          <div className='mb-1'>
            <input type="checkbox" className='mr-2 w-[21px] h-[21px]' />
            <label className='text-[18px]'>Full-time</label><br />
          </div>
          <div className='mb-1'>
            <input type="checkbox" className='mr-2 w-[21px] h-[21px]' />
            <label className='text-[18px]'>Part-time</label><br />
          </div>
          <div className='mb-1'>
            <input type="checkbox" className='mr-2 w-[21px] h-[21px]' />
            <label className='text-[18px]'>Contract</label><br />
          </div>
          <div className='mb-1'>
            <input type="checkbox" className='mr-2 w-[21px] h-[21px]' />
            <label className='text-[18px]'>Volunteer</label><br />
          </div>
          <div className='mb-1'>
            <input type="checkbox" className='mr-2 w-[21px] h-[21px]' />
            <label className='text-[18px]'>Internship</label><br />
          </div>
          <div className='mb-1'>
            <input type="checkbox" className='mr-2 w-[21px] h-[21px]' />
            <label className='text-[18px]'>Remote</label><br />
          </div>
          <div className='mb-1'>
            <input type="checkbox" className='mr-2 w-[21px] h-[21px]' />
            <label className='text-[18px]'>Hybrid</label><br />
          </div>
          <div className='mb-1'>
            <input type="checkbox" className='mr-2 w-[21px] h-[21px]' />
            <label className='text-[18px]'>On-site</label><br />
          </div>
        </div>
        <div>
          <label className='mx-4 mt-2 text-[20px]'>Location</label>
          <input type="text" placeholder='Enter your location' className='w-[90%] mx-4 p-2 rounded-lg ps-[28px] placeholder:pl-1 text-[18px] border-[#b5b3b3] border-[1px] mt-2' />
          <CiLocationOn className='w-6 h-6 relative bottom-[35px] left-[20px]' />
        </div>
        <div>
          <label className='mx-4 mt-2 text-[20px]'>Experience Level</label>
          <select className='w-[90%] mx-4 p-2 rounded-lg border-[#b5b3b3] border-[1px] mt-2'>
            <option value="Entry Level">Entry Level</option>
            <option value="Mid Level">Mid Level</option>
            <option value="Senior Level">Senior Level</option>
          </select>
        </div>
        <div className='mx-4 mt-2'>
          <label className='text-[20px] '>Salary Range</label><br />
          <RangeSlider
            min={100}
            max={10000}
            step={100}
            value={values}
            onInput={handleChange}
            className='w-[100%] h-10 mt-2'
          />
           {/* <RangeSlider /> */}
        </div>
        <div className='mx-4 mt-2 text-center'>
          <label className="text-[20px] ml-[-50px]">Input Manually</label><br />
          <label className='ml-[-36px]'>From</label><input type='number' value={values[0]} onChange={(e) => handleChange([Number(e.target.value), values[1]])} className='w-[25%] ml-2 mr-3 px-1 rounded-lg border-[#b5b3b3] border-[1px]' />
          <label>To</label><input type='number' value={values[1]} onChange={(e) => handleChange([values[0], Number(e.target.value)])} className='w-[25%] ml-2 rounded-lg border-[#b5b3b3] px-1 border-[1px]' />
        </div>
        <div className='mx-4 mt-2'>
          <label className='text-[20px]'>Currency</label>
          <select className='w-[90%] mx-4 p-2 rounded-lg border-[#b5b3b3] border-[1px] mt-2'>
            <option value="Dollar">Dollar ($)</option>
            <option value="Birr">Ethiopian Birr</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
        <div className='mx-4 mt-2 mb-10 text-center'>
          <button className='bg-[#0034D1] rounded-md text-white py-2 px-14 mt-2 ml-4'>
            Reset all filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filterjobs;
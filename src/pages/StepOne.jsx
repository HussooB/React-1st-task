import React from 'react';

const StepOne = ({ formik, nextStep }) => {
  return (
    <div>
      <div className='h-[100vh] flex justify-center items-center'>
        <form className='bg-amber-300 h-[505px] w-[25vw] flex flex-col justify-start items-center gap-1 p-5 rounded-3xl shadow-2xl'>
          <h1 className='text-5xl underline'>Sign Up</h1>
          <div className='w-[100%] flex flex-col items-start p-3 rounded-2xl'>
            <label className='text-[17px] mb-2' htmlFor="title">Job Title</label>
            <input value={formik.values.title} onBlur={formik.handleBlur} onChange={formik.handleChange} className='bg-amber-50 p-3 text-[16px] w-[100%] rounded-2xl' type="text" id="title" name="title" />
            {formik.errors.title && formik.touched.title ? <p className='text-red-700'>{formik.errors.title}</p> : null}
          </div>
          <div className='w-[100%] flex flex-col items-start p-3 rounded-2xl'>
            <label className='text-[17px] mb-1' htmlFor="type">Type</label>
            <input value={formik.values.type} onBlur={formik.handleBlur} onChange={formik.handleChange} className='bg-amber-50 p-3 text-[16px] w-[100%] rounded-2xl' type="text" id="type" name="type" />
            {formik.errors.type && formik.touched.type ? <p className='text-red-700'>{formik.errors.type}</p> : null}
          </div>
          <div className='w-[100%] flex flex-col items-start p-3 rounded-2xl'>
            <label className='text-[17px] mb-2' htmlFor="salary">Salary</label>
            <input value={formik.values.salary} onBlur={formik.handleBlur} onChange={formik.handleChange} className='bg-amber-50 p-3 text-[16px] w-[100%] rounded-2xl' type="number" id="salary" name="salary" />
            {formik.errors.salary && formik.touched.salary ? <p className='text-red-700'>{formik.errors.salary}</p> : null}
          </div>
          <button type="button" onClick={nextStep} className='bg-amber-50 p-3 mt-5 hover:cursor-pointer rounded-2xl'>Next</button>
        </form>
      </div>
    </div>
  );
};

export default StepOne;
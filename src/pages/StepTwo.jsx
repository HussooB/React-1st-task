import React from 'react';

const StepTwo = ({ formik, prevStep }) => {
  return (
    <div>
      <div className='h-[100vh] flex justify-center items-center'>
        <form onSubmit={formik.handleSubmit} className='bg-amber-300 h-[505px] w-[25vw] flex flex-col justify-start items-center gap-1 p-5 rounded-3xl shadow-2xl'>
          <h1 className='text-5xl underline'>Just one step!</h1>
          <div className='w-[100%] flex flex-col items-start p-3 rounded-2xl'>
            <label className='text-[17px] mb-2' htmlFor="description">Description</label>
            <input value={formik.values.description} onBlur={formik.handleBlur} onChange={formik.handleChange} className='bg-amber-50 p-3 text-[16px] w-[100%] rounded-2xl' type="text" id="description" name="description" />
            {formik.errors.description && formik.touched.description ? <p className='text-red-700'>{formik.errors.description}</p> : null}
          </div>
          <div className='w-[100%] flex flex-col items-start p-3 rounded-2xl'>
            <label className='text-[17px] mb-2' htmlFor="company">Company</label>
            <input value={formik.values.company} onBlur={formik.handleBlur} onChange={formik.handleChange} className='bg-amber-50 p-3 text-[16px] w-[100%] rounded-2xl' type="text" id="company" name="company" />
            {formik.errors.company && formik.touched.company ? <p className='text-red-700'>{formik.errors.company}</p> : null}
          </div>
          <div className='w-[100%] flex flex-col items-start p-3 rounded-2xl'>
            <label className='text-[17px] mb-2' htmlFor="location">Location</label>
            <input value={formik.values.location} onBlur={formik.handleBlur} onChange={formik.handleChange} className='bg-amber-50 p-3 text-[15px] w-[100%] rounded-2xl' type="text" id="location" name="location" />
            {formik.errors.location && formik.touched.location ? <p className='text-red-700'>{formik.errors.location}</p> : null}
          </div>
          <div className='flex justify-between w-[80%] mt-5'>
            <button type="button" onClick={prevStep} className='bg-amber-50 p-3 hover:cursor-pointer rounded-2xl'>Previous</button>
            <button type="submit" className='bg-amber-50 p-3 hover:cursor-pointer disabled:bg-amber-600 rounded-2xl' disabled={formik.isSubmitting}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StepTwo;
import React from 'react';
import { useFormik } from 'formik';
import validationSchema from '../schemas/Validate';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import useFormStore from '../store/formStore';

const MultiStepForm = () => {
  const { step, setStep, formValues, setFormValues } = useFormStore();

  const formik = useFormik({
    initialValues: formValues,
    validationSchema: validationSchema,
    onSubmit: async (values, actions) => {
      console.log(values);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      actions.resetForm();
      setFormValues(values);
    },
  });

  const nextStep = () => {
    setFormValues(formik.values);
    setStep(step + 1);
  };

  const prevStep = () => {
    setFormValues(formik.values);
    setStep(step - 1);
  };
  console.log(formValues);
  return (
    <div>
      {step === 1 ? <StepOne formik={formik} nextStep={nextStep} />:null}
      {step === 2 ? <StepTwo formik={formik} prevStep={prevStep} />:null}
    </div>
  );
};

export default MultiStepForm;
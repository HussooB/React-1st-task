import { create } from 'zustand';

const useFormStore = create((set) => ({
  step: 1,
  formValues: {
    title: "",
    type: "",
    salary: "",
    description: "",
    company: "",
    location: "",
  },
  setStep: (step) => set({ step }),
  setFormValues: (values) => set((state) => ({ formValues: { ...state.formValues, ...values } })),
  postJob: async (jobData) => {
    try {
      const response = await fetch('https://joblisting-rd8f.onrender.com/api/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jobData),
      });
      const data = await response.json();
      console.log('Job posted successfully:', data);
    } catch (error) {
      console.error('Error posting job:', error);
    }
  },
}));

export default useFormStore;
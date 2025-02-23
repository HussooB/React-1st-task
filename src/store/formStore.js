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
}));

export default useFormStore;
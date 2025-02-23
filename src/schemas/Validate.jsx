import * as yup from "yup";

const validationSchema = yup.object().shape({
  title: yup.string().required("Job title is required"),
  type: yup.string().required("Type is required"),
  salary: yup.number().required("Salary is required").positive("Salary must be a positive number"),
  description: yup.string().required("Description is required"),
  company: yup.string().required("Company is required"),
  location: yup.string().required("Location is required"),
});

export default validationSchema;
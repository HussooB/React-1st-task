import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Describtion from './pages/Describtion';
import MainLayout from './Layouts/MainLayout';
import MultiStepForm from './pages/MultiStepForm';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="Describtion/:id" element={<Describtion />} />
      <Route path="MultiStepForm" element={<MultiStepForm />} /> 
    </Route>
  )
);

const App = () => {
  console.log('App component rendered');
  return (
    <RouterProvider router={router} />
  );
};

export default App;
import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import { DisplayWrapperwithSearch } from './components/DisplayWrapperwithSearch';
const App = () => {
  console.log('App component rendered');
  return (
    <>
     <Navbar/>  
     <Hero/>
     <DisplayWrapperwithSearch/>
     
    </>
    
 
  )
}

export default App
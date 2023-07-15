import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';


import Services from './components';
import Safety from './components/Safety';
import Research from './components/Research';

import Login from './components/Login';
import SignUp from './components/SignUp';

import { About, Contact, Experience, Feedbacks, Hero,  Tech, Works, StarsCanvas } from './components';

const App = () => {
  return (
    
      <BrowserRouter>
      


        <Navbar />
        <Routes>
        
          
          <Route path="/services" element={<Services />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/research" element={<Research />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      
      
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />

        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      </BrowserRouter>
  
    
  );
};

export default App;

import React from 'react';
import Navbar from './Component/Navbar';
import Details from './Component/Details';
import About from './Component/About';

import Project from './Component/Project';
import Skills from './Component/Skills';
import Contact from './Component/Contact';



const App = () => {
  return (
    <div>
      <Navbar />
      <Details/>
      <About />
      
      <Project/>
      <Skills/>
      <Contact/>
 
    </div>
  );
};

export default App;

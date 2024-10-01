import React from 'react';
import Navbar from './Component/Navbar';
import Details from './Component/Details';
import About from './Component/About';
import Skills from './Component/Skills';
import Project from './Component/Project';
import Contact from './Component/Contact';



const App = () => {
  return (
    <div>
      <Navbar />
      <Details/>
      <About />
      <Skills/>
      <Project/>
      <Contact/>
 
    </div>
  );
};

export default App;

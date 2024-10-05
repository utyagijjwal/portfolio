// src/App.js
import React from 'react';
import Navbar from './Component/Navbar';
import Details from './Component/Details';
import About from './Component/About';
import Project from './Component/Project';
import Skills from './Component/Skills';
import Contact from './Component/Contact';
import ParticleBackground from './Component/ParticleBackground'; // Ensure this path is correct
import './App.css';

const App = () => {
  return (
    <div>
      <ParticleBackground /> {/* Ensure this is placed above other components */}
      <Navbar />
      <Details />
      <About />
      <Project />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;

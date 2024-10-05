import React from 'react';
import Navbar from './Navbar';
import JsLogo from '../Assests/javascript.png';
import ReactLogo from '../Assests/react.png';
import TailwindLogo from '../Assests/tailwind.png';
import CppLogo from '../Assests/s.png'; // Replace with your actual logo path

const Skills = () => {
  return (
    <div id="skills">
      <Navbar />
      <section className="min-h-screen bg-gray-900 flex flex-col items-center justify-center py-10">
        <h2 className="text-4xl md:text-5xl font-bold text-indigo-400 mb-12 md:mb-8 text-center"> {/* Center the heading */}
          My Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10"> {/* Changed to 4 columns for 4 skills */}
          <div className="flex flex-col items-center">
            <img 
              src={JsLogo} 
              alt="JavaScript" 
              className="w-32 h-32 mb-4 transition-transform duration-300 hover:scale-110" 
            />
            <p className="text-white">JavaScript</p>
          </div>
          <div className="flex flex-col items-center">
            <img 
              src={ReactLogo} 
              alt="React" 
              className="w-32 h-32 mb-4 transition-transform duration-300 hover:scale-110" 
            />
            <p className="text-white">React.js</p>
          </div>
          <div className="flex flex-col items-center">
            <img 
              src={TailwindLogo} 
              alt="Tailwind CSS" 
              className="w-32 h-32 mb-4 transition-transform duration-300 hover:scale-110" 
            />
            <p className="text-white">Tailwind CSS</p>
          </div>
          <div className="flex flex-col items-center">
            <img 
              src={CppLogo} 
              alt="C++" 
              className="w-32 h-32 mb-4 transition-transform duration-300 hover:scale-110" 
            />
            <p className="text-white">C++</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;

import React, { useEffect } from 'react';
import Navbar from './Navbar';
import JsLogo from '../Assests/javascript.png';
import ReactLogo from '../Assests/react.png';
import TailwindLogo from '../Assests/tailwind.png';
import CppLogo from '../Assests/s.png'; // Replace with your actual logo path
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false, // Animation should run every time the element comes into view
    });
  }, []);

  return (
    <div id="skills">
      <Navbar />
      <section className="min-h-screen bg-gray-900 flex flex-col items-center justify-center py-10">
        <h2 className="text-4xl md:text-5xl font-bold text-indigo-400 mb-12 md:mb-8 text-center">
          My Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-10 w-full max-w-6xl px-4">
          <div
            className="flex flex-col items-center"
            data-aos="fade-left" // AOS attribute for left-side animation
          >
            <img 
              src={JsLogo} 
              alt="JavaScript" 
              className="w-24 h-24 sm:w-32 sm:h-32 mb-4 transition-transform duration-300 hover:scale-110" 
            />
            <p className="text-white text-center">JavaScript</p>
          </div>
          <div
            className="flex flex-col items-center"
            data-aos="fade-left" // AOS attribute for left-side animation
          >
            <img 
              src={ReactLogo} 
              alt="React" 
              className="w-24 h-24 sm:w-32 sm:h-32 mb-4 transition-transform duration-300 hover:scale-110" 
            />
            <p className="text-white text-center">React.js</p>
          </div>
          <div
            className="flex flex-col items-center"
            data-aos="fade-right" // AOS attribute for right-side animation
          >
            <img 
              src={TailwindLogo} 
              alt="Tailwind CSS" 
              className="w-24 h-24 sm:w-32 sm:h-32 mb-4 transition-transform duration-300 hover:scale-110" 
            />
            <p className="text-white text-center">Tailwind CSS</p>
          </div>
          <div
            className="flex flex-col items-center"
            data-aos="fade-right" // AOS attribute for right-side animation
          >
            <img 
              src={CppLogo} 
              alt="C++" 
              className="w-24 h-24 sm:w-32 sm:h-32 mb-4 transition-transform duration-300 hover:scale-110" 
            />
            <p className="text-white text-center">C++</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;

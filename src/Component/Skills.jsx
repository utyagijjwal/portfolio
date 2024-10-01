import React from 'react';
import Navbar from './Navbar';
import HtmlLogo from '../Assests/HTML5_logo_and_wordmark.svg.png'; // Replace with your actual logo paths
import CssLogo from '../Assests/css.jpg';
import JsLogo from '../Assests/JavaScript-logo.png';
import ReactLogo from '../Assests/1_MF5V_dkybUTcfzwHFh0VSw.jpg';
import TailwindLogo from '../Assests/png-transparent-tailwind-css-hd-logo.png';

const Skills = () => {
  return (
    <div id="skills">
      <Navbar />
    <section className="min-h-screen bg-gray-900 flex flex-col items-center justify-center py-10">
      <h2 className="text-4xl md:text-5xl font-bold text-indigo-400 mb-12 md:mb-30 self-start md:ml-20 ml-24">My Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
        <div className="flex flex-col items-center">
          <img 
            src={HtmlLogo} 
            alt="HTML" 
            className="w-32 h-32 mb-4 transition-transform duration-300 hover:scale-110" 
          />
          <p className="text-white">HTML</p>
        </div>
        <div className="flex flex-col items-center">
          <img 
            src={CssLogo} 
            alt="CSS" 
            className="w-32 h-32 mb-4 transition-transform duration-300 hover:scale-110" 
          />
          <p className="text-white">CSS</p>
        </div>
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
      </div>
    </section>
    </div>
  );
};

export default Skills;

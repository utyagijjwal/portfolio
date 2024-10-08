import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black">
      <div className="container mx-auto px-4 flex justify-between items-center py-4 sm:py-3 md:py-5">
        {/* Logo Section */}
        <div className="text-2xl md:text-3xl font-bold text-white">
          <Link to="home" smooth={true} duration={500} className="hover:text-indigo-300 transition duration-300">
            <span className="text-yellow-500">U</span>jjwal's Portfolio
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-white text-lg">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="hover:text-indigo-300 transition duration-300"
          >
            About
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="hover:text-indigo-300 transition duration-300"
          >
            Projects
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="hover:text-indigo-300 transition duration-300"
          >
            Skills
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="hover:text-indigo-300 transition duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="focus:outline-none" 
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-white px-4 py-2 space-y-4 z-40 w-full">
          <Link 
            to="about" 
            smooth={true} 
            duration={500} 
            className="block hover:text-indigo-300 transition duration-300" 
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link 
            to="projects" 
            smooth={true} 
            duration={500} 
            className="block hover:text-indigo-300 transition duration-300" 
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link 
            to="skills" 
            smooth={true} 
            duration={500} 
            className="block hover:text-indigo-300 transition duration-300" 
            onClick={() => setIsOpen(false)}
          >
            Skills
          </Link>
          <Link 
            to="contact" 
            smooth={true} 
            duration={500} 
            className="block hover:text-indigo-300 transition duration-300" 
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

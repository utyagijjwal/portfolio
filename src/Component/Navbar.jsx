import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(true);

  // Function to change the navbar background on scroll
  const changeBackground = () => {
    setNavbar(window.scrollY >= 80); // Simplified to a single line
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        navbar ? 'bg-gray-900 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center py-4 md:py-5">
        {/* Logo Section */}
        <div className="text-2xl md:text-3xl font-bold text-white">
          <Link to="home" smooth={true} duration={500} className="hover:text-indigo-300 transition duration-300">
            Ujjwal's Portfolio
          </Link>
        </div>

        {/* Navigation Links for Desktop */}
        <div className="hidden md:flex space-x-8 text-white text-lg">
          <Link to="about" smooth={true} duration={500} className="hover:text-indigo-300 transition duration-300">
            About
          </Link>
          <Link to="projects" smooth={true} duration={500} className="hover:text-indigo-300 transition duration-300">
            Projects
          </Link>
          <Link to="skills" smooth={true} duration={500} className="hover:text-indigo-300 transition duration-300">
            Skills
          </Link>
          <Link to="contact" smooth={true} duration={500} className="hover:text-indigo-300 transition duration-300">
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
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
        <div className="md:hidden bg-gray-800 text-white px-4 py-2 space-y-4">
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

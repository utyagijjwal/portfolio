import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Ujjwalimg from '../Assests/ujjwal photo.jpeg';
import { ClipLoader } from 'react-spinners';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS CSS

const About = () => {
  const [loading, setLoading] = useState(true);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    // Initialize AOS once
    AOS.init({ 
      duration: 1200, 
      once: false, // Allow animations to run every time the element is in view
    });

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Refresh AOS on resize
    window.addEventListener('resize', AOS.refresh);
    
    // Cleanup timer and event listener
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', AOS.refresh);
    };
  }, []);

  // Function to calculate the rotation angle based on cursor position
  const handleMouseMove = (event) => {
    const imgRect = event.target.getBoundingClientRect(); // Get image bounds
    const imgCenterX = imgRect.left + imgRect.width / 2;
    const imgCenterY = imgRect.top + imgRect.height / 2;

    // Calculate the angle between the cursor and the image center
    const angle = Math.atan2(event.clientY - imgCenterY, event.clientX - imgCenterX) * (180 / Math.PI);

    setRotation(angle); // Set the rotation angle
  };

  return (
    <div id="about" className="bg-black overflow-hidden">
      <Navbar />
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen w-full">
        {loading ? (
          <ClipLoader color="#4A90E2" loading={loading} size={150} />
        ) : (
          <>
            {/* Left Side: About Text */}
            <div
              className="md:w-1/2 p-6 sm:p-8 text-white flex flex-col items-start"
              data-aos="fade-right" // AOS attribute for fade in from the right
            >
              <h2 className="text-4xl md:text-5xl font-bold text-indigo-400 mb-6 sm:mb-4 md:mb-8">
                About Me
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-4">
                Hi, I'm Ujjwal! I am a passionate software developer with a strong background in full-stack development.
                I enjoy building visually stunning, user-friendly websites and applications. My expertise lies in React.js, Tailwind CSS,
                and other modern web technologies. I am always eager to learn new things and push the boundaries of what's possible in web development.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                I love coding, solving problems, and creating intuitive user experiences. When I'm not coding, you'll find me exploring new technologies
                or working on exciting personal projects.
              </p>
            </div>

            {/* Right Side: Image and Social Media Icons */}
            <div
              className="md:w-1/2 p-6 sm:p-8 flex flex-col items-center"
              data-aos="fade-left" // AOS attribute for fade in from the left
            >
              <img
                src={Ujjwalimg}
                alt="Ujjwal"
                className="w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 object-cover rounded-full border-4 border-indigo-400 shadow-lg 
                           transition-transform duration-300 hover:shadow-2xl"
                style={{ transform: `rotate(${rotation}deg)` }} // Apply rotation
                onMouseMove={handleMouseMove} // Track cursor movement
              />

              {/* Social Media Icons */}
              <div className="flex space-x-4 mt-6">
                <a href="https://github.com/utyagijjwal" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className="text-gray-300 hover:text-indigo-400 transition duration-300" size="2x" />
                </a>
                <a href="https://www.linkedin.com/in/ujjwal-tyagi-40187028a" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} className="text-gray-300 hover:text-indigo-400 transition duration-300" size="2x" />
                </a>
                <a href="https://www.instagram.com/utyagi_hr02/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} className="text-gray-300 hover:text-indigo-400 transition duration-300" size="2x" />
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default About;

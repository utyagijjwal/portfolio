import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Ujjwalimg from '../Assests/ujjwal photo.jpeg';
import { ClipLoader } from 'react-spinners';

const About = () => {
  const [loading, setLoading] = useState(true);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
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
    <div id="about">
      <Navbar />
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-900">
        {loading ? (
          <ClipLoader color="#4A90E2" loading={loading} size={150} />
        ) : (
          <>
            {/* Left Side: About Text */}
            <div className="md:w-1/2 p-6 sm:p-8 text-white flex flex-col items-start">
              <h2 className="text-4xl md:text-5xl font-bold text-indigo-400 mb-12 md:mb-8 self-start md:ml-20 ml-24">
                About Me
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                Hi, I'm Ujjwal! I am a passionate software developer with a strong background in full-stack development.
                I enjoy building visually stunning, user-friendly websites and applications. My expertise lies in React.js, Tailwind CSS,
                and other modern web technologies. I am always eager to learn new things and push the boundaries of what's possible in web development.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mt-4">
                I love coding, solving problems, and creating intuitive user experiences. When I'm not coding, you'll find me exploring new technologies
                or working on exciting personal projects.
              </p>
            </div>

            {/* Right Side: Image and Social Media Icons */}
            <div className="md:w-1/2 p-6 sm:p-8 flex flex-col items-center">
              <img
                src={Ujjwalimg}
                alt="Ujjwal"
                className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-indigo-400 shadow-lg 
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

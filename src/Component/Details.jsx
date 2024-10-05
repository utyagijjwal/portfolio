import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import Computerimg from '../Assests/regis[1].svg';

const Details = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = " Front-End Developer";
  const typingSpeed = 200; // Adjust typing speed (ms per character)
  const pauseDuration = 1000; // Pause after typing the full text (in milliseconds)

  useEffect(() => {
    let index = 0;
    let isTyping = true;

    const intervalId = setInterval(() => {
      if (isTyping) {
        setDisplayText(fullText.slice(0, index + 1)); // Add one character at a time
        index++;

        if (index === fullText.length) {
          isTyping = false; // Switch to pause mode
          setTimeout(() => {
            index = 0; // Reset index to start typing again
            isTyping = true; // Switch back to typing mode
          }, pauseDuration);
        }
      }
    }, typingSpeed); // Typing speed

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [fullText]);

  // Animation variants for the left and right sections
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen bg-gray-900 px-6 sm:px-12 lg:px-24">
      {/* Left Section */}
      <motion.div
        className="md:w-1/2 text-center md:text-left mb-8 md:mb-0"
        initial="hidden" // Initial state
        animate="visible" // Animated state
        variants={variants} // Animation variants
        transition={{ duration: 0.5 }} // Transition settings
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-indigo-400 mb-4">
          Hi there! I am Ujjwal
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-300 mb-4">
         {displayText}
        </h2>
        <a
          href="https://drive.google.com/file/d/1gYqjcFkjZQiw1BGa3gQdAcnDJoEmjJjm/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-6 py-3 bg-indigo-700 hover:bg-indigo-600 rounded-md text-white text-lg transition duration-300"
        >
          View My Resume
        </a>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="md:w-1/2 flex justify-center mb-8 md:mb-0"
        initial="hidden" // Initial state
        animate="visible" // Animated state
        variants={variants} // Animation variants
        transition={{ duration: 0.5, delay: 0.2 }} // Transition settings with delay
      >
        <img
          src={Computerimg} // Replace with your actual image path
          alt="Ujjwal"
          className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full shadow-2xl object-cover transition-transform duration-300 hover:scale-105 hover:shadow-3xl"
        />
      </motion.div>
    </section>
  );
};

export default Details;

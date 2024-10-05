import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion'; // Import motion and animation hooks from framer-motion
import { useInView } from 'react-intersection-observer'; // Import Intersection Observer hook
import Computerimg from '../Assests/regis[1].svg';

const Details = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = " Front-End Developer";
  const typingSpeed = 200;
  const pauseDuration = 1000;

  // Initialize scroll animations
  const leftAnimation = useAnimation();
  const rightAnimation = useAnimation();
  
  // Use intersection observer to detect when the elements are in view
  const { ref: leftRef, inView: leftInView } = useInView({ triggerOnce: false });
  const { ref: rightRef, inView: rightInView } = useInView({ triggerOnce: false });

  useEffect(() => {
    // Typing effect logic
    let index = 0;
    let isTyping = true;

    const intervalId = setInterval(() => {
      if (isTyping) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;

        if (index === fullText.length) {
          isTyping = false;
          setTimeout(() => {
            index = 0;
            isTyping = true;
          }, pauseDuration);
        }
      }
    }, typingSpeed);

    return () => clearInterval(intervalId);
  }, [fullText]);

  // Trigger animation when in view
  useEffect(() => {
    if (leftInView) {
      leftAnimation.start({ x: 0, opacity: 1 });
    } else {
      leftAnimation.start({ x: -200, opacity: 0 }); // Reset animation
    }
    
    if (rightInView) {
      rightAnimation.start({ x: 0, opacity: 1 });
    } else {
      rightAnimation.start({ x: 200, opacity: 0 }); // Reset animation
    }
  }, [leftInView, rightInView, leftAnimation, rightAnimation]);

  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen bg-gray-900 px-4 sm:px-6 lg:px-16">
      
      {/* Left Section */}
      <motion.div
        ref={leftRef}
        className="md:w-1/2 text-center md:text-left mb-8 md:mb-0"
        initial={{ x: -200, opacity: 0 }}
        animate={leftAnimation}
        transition={{ duration: 1 }}
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
        ref={rightRef}
        className="md:w-1/2 flex justify-center mb-8 md:mb-0"
        initial={{ x: 200, opacity: 0 }}
        animate={rightAnimation}
        transition={{ duration: 1 }}
      >
        <img
          src={Computerimg}
          alt="Ujjwal"
          className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full shadow-2xl object-cover transition-transform duration-300 hover:scale-105 hover:shadow-3xl"
        />
      </motion.div>
    </section>
  );
};

export default Details;

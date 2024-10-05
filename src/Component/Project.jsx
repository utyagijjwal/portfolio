import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Ecommerce from '../Assests/umart.png';
import Hostel from '../Assests/hostel.png';
import RateMyTutor from '../Assests/rate my tutor.png'; // Adjust the path as necessary
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS

const projects = [
  {
    title: 'U-Mart E-commerce Website',
    description: 'The website features sections like Mobiles, Electronics, Home & Kitchen, Laptops, Car & Bike, and Sports to cater to diverse customer needs. Built using React.js and styled with Tailwind CSS, the site provides an attractive and modern interface.',
    link: 'https://ujjwal-mart.vercel.app/',
    image: Ecommerce,
  },
  {
    title: 'Hostel Website',
    description: 'A comprehensive hostel management website that streamlines room bookings, student details, and administrative tasks, offering a user-friendly interface for both students and staff.',
    link: 'https://hostelproject.vercel.app/',
    image: Hostel,
  },
  {
    title: 'Rate My Tutor',
    description: 'An interactive platform that allows students to rate and provide feedback on their tutors based on various criteria such as teaching quality, communication skills, and course organization, helping improve the overall learning experience.',
    link: 'https://ratemytutor-ptu.vercel.app/',
    image: RateMyTutor,
  },
];

const Project = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false, // Animation should run every time the element comes into view
    });
  }, []);

  return (
    <div id="projects" className="bg-black py-10">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen px-4 md:px-10">
        <h2 className="text-4xl md:text-5xl font-bold text-indigo-400 mb-12 md:mb-8 self-start text-center md:text-left">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-screen-lg">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col justify-between hover:scale-105 transition-transform duration-300"
              data-aos={index === 0 ? 'fade-left' : index === 1 ? 'fade-up' : 'fade-right'} // AOS attribute for animations
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-32 sm:h-40 md:h-48 object-cover" 
              />
              <div className="p-4 flex-grow">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4">{project.description}</p>
              </div>
              <div className="p-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-800 transition duration-300 w-full text-center block"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;

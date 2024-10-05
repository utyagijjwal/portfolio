import React from 'react';
import Navbar from './Navbar';
import Ecommerce from '../Assests/umart.png';
import Hostel from '../Assests/hostel.png';
// Import the image for the Rate My Tutor project if available
import RateMyTutor from '../Assests/rate my tutor.png'; // Adjust the path as necessary

const projects = [
  {
    title: 'U-Mart E-commerce Website',
    description: 'The website features sections like Mobiles, Electronics, Home & Kitchen, Laptops, Car & Bike, and Sports to cater to diverse customer needs. Built using React.js and styled with Tailwind CSS, the site provides an attractive and modern interface.',
    link: 'https://ujjwal-mart.vercel.app/',
    image: Ecommerce, // Corrected the image path
  },
  {
    title: 'Hostel Website',
    description: 'A comprehensive hostel management website that streamlines room bookings, student details, and administrative tasks, offering a user-friendly interface for both students and staff.',
    link: 'https://hostelproject.vercel.app/',
    image: Hostel, // Corrected the image path
  },
  {
    title: 'Rate My Tutor',
    description: 'An interactive platform that allows students to rate and provide feedback on their tutors based on various criteria such as teaching quality, communication skills, and course organization, helping improve the overall learning experience.',
    link: 'https://ratemytutor-ptu.vercel.app/',
    image: RateMyTutor, // Ensure this image is imported correctly
  },
];

const Project = () => {
  return (
    <div id="projects">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 px-4 md:px-10">
        <h2 className="text-4xl md:text-5xl font-bold text-indigo-400 mb-12 md:mb-8 self-start md:ml-20 ml-24">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col justify-between hover:scale-105 transition-transform duration-300"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6 flex-grow">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
              </div>
              <div className="p-6">
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

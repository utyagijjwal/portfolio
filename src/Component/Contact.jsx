import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled before submitting
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all fields.');
      return;
    }

    // Handle form submission logic (e.g., sending data to a server)
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div id="contact" className="min-h-screen flex items-center justify-center bg-black px-4 md:px-10">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-4xl font-bold text-indigo-400 mb-6 text-center">Contact Me</h2>
        <p className="text-gray-300 mb-8 text-center">
          I would love to hear from you! Please fill out the form below.
        </p>
        <form 
          action="https://formspree.io/f/xjkbnzga"
          method="POST"
          enctype="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-200 mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-200 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-200 mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 rounded bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-800 transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

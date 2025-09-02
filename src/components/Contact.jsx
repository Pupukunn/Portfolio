import React from 'react';
import NavigationBar from './Homepage/NavigationBar';
import { FaGithub, FaFacebook, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const handleSubmit = () => {
    console.log('Form submitted'); // Placeholder for form submission logic
  };

  return (
    <div className="min-h-screen bg-[#1C1C22] text-white flex flex-col">
      <NavigationBar />
      <div className="flex flex-col max-w-[1500px] w-full mx-auto px-4 sm:px-6 lg:px-8  mb-8 sm:mb-12 ">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-400 text-center my-8 sm:my-12">
          Get in Touch
        </h1>

        {/* Main Content */}
        <div className="flex flex-col items-center gap-6">
          {/* Contact Form */}
          <div className="w-full flex flex-col items-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">
              Send a Message
            </h2>
            <div className="w-full max-w-md flex flex-col gap-4 sm:gap-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 sm:py-3 text-sm sm:text-base bg-gray-700 border-2 border-second rounded-lg focus:outline-none focus:border-green-400 text-white"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 sm:py-3 text-sm sm:text-base bg-gray-700 border-2 border-second rounded-lg focus:outline-none focus:border-green-400 text-white"
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full px-4 py-2 sm:py-3 text-sm sm:text-base bg-gray-700 border-2 border-second rounded-lg focus:outline-none focus:border-green-400 text-white resize-none"
              />
              <button
                onClick={handleSubmit}
                className="text-second text-sm sm:text-base lg:text-lg border-2 border-second px-6 sm:px-8 py-2 sm:py-3 rounded-3xl sm:rounded-4xl hover:bg-second hover:text-white transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
          </div>

          {/* Contact Info and Socials */}
          <div className="w-full flex flex-col items-center mt-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">
              Contact Information
            </h2>
            <div className="flex flex-col gap-4 sm:gap-5 text-sm sm:text-base lg:text-lg">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-second text-xl sm:text-2xl" />
                <p>thanapat@example.com</p>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-second text-xl sm:text-2xl" />
                <p>+66 123 456 7890</p>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-second text-xl sm:text-2xl" />
                <p>Bangkok, Thailand</p>
              </div>
            </div>
            <div className="flex flex-row gap-3 sm:gap-4 lg:gap-6 mt-6 sm:mt-8">
              <div className="border-second border-2 p-2 rounded-full">
                <a
                  className="text-second text-xl sm:text-2xl"
                  href="https://github.com/Pupukunn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </div>
              <div className="border-second border-2 p-2 rounded-full">
                <a
                  className="text-second text-xl sm:text-2xl"
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
              </div>
              <div className="border-second border-2 p-2 rounded-full">
                <a
                  className="text-second text-xl sm:text-2xl"
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
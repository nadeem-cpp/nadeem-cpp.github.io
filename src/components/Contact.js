import React from 'react';
import { FaLinkedin, FaGithub} from 'react-icons/fa';
import { FaUpwork } from 'react-icons/fa6';
import {  SiFreelancer } from 'react-icons/si';

const Contact = () => {
  return (
    <section id='contact' className="py-16 bg-gray-900 text-white">
      {/* Updated container for centering */}
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-center text-3xl font-bold mb-8 text-green-400 glitch" data-text="Connect with Me">
          Connect with Me
        </h2>
        
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-8">
          <a href="https://www.linkedin.com/in/muhammadnadeem10" target="_blank" rel="noreferrer" className="transition-all transform hover:scale-110">
            <FaLinkedin size={32} className="hover:text-blue-600 text-green-400" />
          </a>
          <a href="https://github.com/nadeem-cpp" target="_blank" rel="noreferrer" className="transition-all transform hover:scale-110">
            <FaGithub size={32} className="hover:text-gray-400 text-green-400" />
          </a>
          <a href="https://www.upwork.com/freelancers/~0131a9f2641a537bcc?mp_source=share" target="_blank" rel="noreferrer" className="transition-all transform hover:scale-110">
            <FaUpwork size={32} className="hover:text-green-400 text-green-400" />
          </a>
          <a href="https://www.freelancer.com/u/mna03361?frm=mna03361&sb=t" target="_blank" rel="noreferrer" className="transition-all transform hover:scale-110">
            <SiFreelancer size={32} className="hover:text-blue-400 text-green-400" />
          </a>
        </div>

        {/* Email */}
        <div className="mt-8 text-center">
          <p className="text-gray-300">Email: <a href="mailto:muhammadnad1001100@gmail.com" className="hover:text-gray-400 text-green-400">muhammadnad1001100@gmail.com</a></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

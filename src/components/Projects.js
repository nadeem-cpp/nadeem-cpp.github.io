import React, { useState } from 'react';

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projectItems = [
    {
      name: 'mdcatwallah.com Backend',
      description: 'A robust backend for mdcatwallah.com using Django and PostgreSQL.',
      link: 'https://mdcatwallah.com',
    },
    {
      name: 'app.omioform Backend',
      description: 'A scalable backend for app.omioform built with Flask and MongoDB.',
      link: 'https://app.omioform.com',
    },
    {
      name: 'Freelancing Projects',
      description: 'Freelance projects on Python and AWS through Fiverr, Upwork, and Freelancer.com.',
      link: '', // No link, can be empty
    },
    {
      name: 'mdcatwallah.com Backend',
      description: 'A robust backend for mdcatwallah.com using Django and PostgreSQL.',
      link: 'https://mdcatwallah.com',
    },
    {
      name: 'app.omioform Backend',
      description: 'A scalable backend for app.omioform built with Flask and MongoDB.',
      link: 'https://app.omioform.com',
    },
    {
      name: 'Freelancing Projects',
      description: 'Freelance projects on Python and AWS through Fiverr, Upwork, and Freelancer.com.',
      link: '', // No link, can be empty
    },
  ];

  return (
    <section className="py-16 bg-gray-900 text-white">
      <h2 className="text-center text-3xl font-bold mb-8 w-full text-green-400 glitch" data-text="Projects">Projects</h2>
      <div className="flex flex-wrap justify-center items-center px-8 md:px-16 gap-8">
        {projectItems.map((project, index) => (
          <div
            key={index}
            className="relative w-72 h-64 bg-gray-800 rounded-lg shadow-lg transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 cursor-pointer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => {
              if (project.link) window.open(project.link, '_blank');
            }}
          >
            {/* Project Card Content */}
            <div className={`absolute inset-0 flex flex-col justify-center items-center p-4 text-center transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-0' : 'opacity-100'}`}>
              <h3 className="text-xl font-bold text-green-400">{project.name}</h3>
            </div>

            {/* Hover Project Details */}
            <div className={`absolute inset-0 flex flex-col justify-center items-center p-4 bg-black bg-opacity-75 text-center transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
              <p className="text-gray-300">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
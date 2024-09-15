import React, { useState } from 'react';

const Testimonials = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const testimonialItems = [
    {
      name: 'John Doe',
      feedback: 'Muhammad Nadeem is an exceptional backend developer. His work on my project was efficient, secure, and delivered on time!',
      company: 'TechCorp',
    },
    {
      name: 'Jane Smith',
      feedback: 'Highly professional and skilled. Nadeem delivered a highly scalable backend for our web platform.',
      company: 'Webify',
    },
    {
      name: 'Robert Johnson',
      feedback: 'Amazing work! Nadeem built a robust backend for our e-commerce platform using Flask and PostgreSQL.',
      company: 'E-Shop',
    },
  ];

  return (
    <section className="py-16 bg-gray-900 text-white">
      <h2 className="text-center text-3xl font-bold mb-8 w-full text-green-400 glitch" data-text="Client Testimonials">Client Testimonials</h2>
      <div className="flex flex-wrap justify-center items-center px-8 md:px-16 gap-8">
        {testimonialItems.map((testimonial, index) => (
          <div
            key={index}
            className="relative w-80 h-64 bg-gray-800 rounded-lg shadow-lg transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 cursor-pointer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Testimonial card */}
            <div className={`absolute inset-0 flex flex-col justify-center items-center p-4 text-center transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-0' : 'opacity-100'}`}>
              <h3 className="text-xl font-bold text-green-400">{testimonial.name}</h3>
              <p className="text-sm text-gray-400 mt-2">{testimonial.company}</p>
            </div>

            {/* Hover to show feedback */}
            <div className={`absolute inset-0 flex flex-col justify-center items-center p-4 bg-black bg-opacity-75 text-center transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
              <p className="text-gray-300">{testimonial.feedback}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

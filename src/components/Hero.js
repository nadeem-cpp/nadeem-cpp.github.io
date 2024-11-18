import React from 'react';

const Hero = ({name, role}) => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      {/* Hero Text with Glitch Effect */}
      <h1 className="text-5xl md:text-7xl font-bold glitch" data-text="Muhammad Nadeem">{name}</h1>
      <h2 className="mt-4 text-3xl md:text-4xl text-green-400 font-bold glitch" data-text="Backend Developer">{role}</h2>
      
      {/* Subtext */}
      <p className="mt-6 text-lg md:text-2xl text-gray-400 tracking-wide text-center max-w-2xl">
        Crafting efficient, secure, and scalable software solutions with Python, and AWS to fuel your digital experiences.
      </p>

      {/* Call to Action Button */}
      <div className="mt-8">
        <button
        onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          className="px-8 py-3 border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        >
          Let's Connect
        </button>
      </div>
    </section>
  );
};

export default Hero;

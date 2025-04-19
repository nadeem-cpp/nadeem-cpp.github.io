import React from 'react';

const Hero = ({ name, role }) => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      {/* Hero Text with Glitch Effect */}
      <h1 className="text-5xl md:text-7xl font-bold">{name}</h1>
      <h2 className="mt-4 text-3xl md:text-4xl text-green-400">{role}</h2>
      {/* Subtext */}
      <p className="mt-6 text-lg md:text-2xl text-gray-400 tracking-wide text-center max-w-2xl">
        Crafting efficient, secure, and scalable software solutions, to fuel your digital experiences.
      </p>

      <div className="relative group mt-8">
        <button
          onClick={() =>
            document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
          }
          className="relative z-10 px-8 py-3 font-bold text-white bg-black rounded overflow-hidden transition duration-300 ease-in-out group-hover:text-green-400"
        >
          Let's Talk
        </button>

        {/* Glowing border effect */}
        <span className="absolute inset-0 group-hover:border-green-400 z-0 pointer-events-none before:absolute before:inset-[-2px] before:rounded before:bg-[conic-gradient(from_0deg,_#00ff00_0%,_#003300_25%,_#00ff00_50%,_#003300_75%,_#00ff00_100%)] before:animate-spin-slow before:blur-md before:z-[-1]"></span>
      </div>

    </section>
  );
};

export default Hero;

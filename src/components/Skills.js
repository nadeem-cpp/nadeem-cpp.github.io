import React from 'react';


const Skills = ({ skills }) => {

  return (
    <section className="py-16 bg-gray-900 text-white">
      <h2 className="text-center text-3xl font-bold mb-8 w-full text-green-400 glitch" data-text="Skills & Frameworks">
        Skills & Frameworks
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 px-8 md:px-16">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`p-6 flex flex-col items-center justify-center bg-gray-800 rounded-lg shadow-lg hover:bg-green-900 transition duration-300 transform hover:-translate-y-2 hover:scale-110`}
          >
            <div className={`mb-4 ${skill.color}`}>
              {skill.icon}
            </div>
            <p className="text-lg font-bold tracking-wide">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

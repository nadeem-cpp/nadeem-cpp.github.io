import React from 'react';

const Experience = ({ experiences }) => {

  return (
    <section className="py-16 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-green-400 mb-8 text-center">Work Experience</h2>

      <div className="space-y-8 max-w-4xl mx-auto">
        {/* Experience Item */}
        {experiences.map((experience, index) => (
          <div key={index} className="mb-8">
            <div className="flex justify-between items-center flex-wrap gap-2">
              <h3 className="text-xl font-semibold text-green-300">{experience.name}</h3>
              <span className="text-sm text-gray-400">{experience.from} - {experience.to}</span>
            </div>

            <p className="text-gray-300 ml-4 mt-1 font-medium hover:text-green-500 hover:font-bold">
              <a href={experience.link} target="_blank" rel="noopener noreferrer">
                {experience.company}
              </a>
            </p>

            <ul className="text-gray-400 ml-6 mt-2 list-disc space-y-1">
              {experience.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}

      </div>
    </section>

  );
};

export default Experience;

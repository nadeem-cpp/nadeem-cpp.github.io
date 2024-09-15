import React from 'react';
import { FaPython, FaDocker, FaAws, FaDatabase } from 'react-icons/fa';
import { SiDjango, SiFlask, SiFastapi, SiPostgresql, SiMongodb, SiLinux, SiNginx, SiPandas, SiNumpy } from 'react-icons/si';

const Skills = ({ skills }) => {
  const skillItems = [
    { name: 'Python', icon: <FaPython size={40} />, color: 'text-yellow-500' },
    { name: 'Django', icon: <SiDjango size={40} />, color: 'text-green-500' },
    { name: 'Flask', icon: <SiFlask size={40} />, color: 'text-gray-400' },
    { name: 'FastAPI', icon: <SiFastapi size={40} />, color: 'text-blue-500' },
    { name: 'PostgreSQL', icon: <SiPostgresql size={40} />, color: 'text-blue-300' },
    { name: 'MongoDB', icon: <SiMongodb size={40} />, color: 'text-green-400' },
    { name: 'AWS', icon: <FaAws size={40} />, color: 'text-orange-500' },
    { name: 'NGINX', icon: <SiNginx size={40} />, color: 'text-green-500' },
    { name: 'Linux', icon: <SiLinux size={40} />, color: 'text-yellow-500' },
    { name: 'Pandas', icon: <SiPandas size={40} />, color: 'text-purple-500' },
    { name: 'NumPy', icon: <SiNumpy size={40} />, color: 'text-blue-400' },
    { name: 'Docker', icon: <FaDocker size={40} />, color: 'text-blue-600' },
    { name: 'Database', icon: <FaDatabase size={40} />, color: 'text-blue-400' },
  ];

  return (
    <section className="py-16 bg-gray-900 text-white">
      <h2 className="text-center text-3xl font-bold mb-8 w-full text-green-400 glitch" data-text="Skills & Frameworks">
        Skills & Frameworks
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 px-8 md:px-16">
        {skillItems.map((skill, index) => (
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

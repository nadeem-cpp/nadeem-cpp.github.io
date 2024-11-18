import { FaPython, FaDocker, FaAws, FaDatabase } from 'react-icons/fa';
import { SiDjango, SiFlask, SiFastapi, SiPostgresql, SiMongodb, SiLinux, SiNginx, SiPandas, SiNumpy } from 'react-icons/si';

export const personalData = {
  name: "Muhammad Nadeem",
  role: "Backend Developer",
  skills: [
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
  ],
  projects: [
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
      name: 'Smart Hospital Management System (Flask + React)',
      description: 'A scalable management system built with Flask, Postgresql and React.',
      link: '#',
    }
  ],
  testimonials: [
    {
      name: 'Michael',
      feedback: 'Muhammad always provides professional service. His work standard and communication is impeccable. Highly recommended!',
      company: 'Omnioform',
    },
  ],
  freelancing: ["Worked on Fiverr, Upwork, Freelancer.com."]
};

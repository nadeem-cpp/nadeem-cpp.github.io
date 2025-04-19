import { FaPython } from 'react-icons/fa';
import { SiFlask, SiTypescript, SiSelenium, SiFastapi, SiPostgresql, SiMongodb, SiPandas, SiNumpy, SiScrapy } from 'react-icons/si';
import { DiJavascript1, } from "react-icons/di";

export const personalData = {
  name: "Muhammad Nadeem",
  role: "Python Developer",
  skills: [
    { name: 'Python', icon: <FaPython size={40} />, color: 'text-yellow-500' },
    { name: 'FastAPI', icon: <SiFastapi size={40} />, color: 'text-blue-500' },
    { name: 'Flask', icon: <SiFlask size={40} />, color: 'text-gray-400' },
    { name: 'Selenium', icon: <SiSelenium size={40} />, color: 'text-green-500' },
    { name: 'Scrapy', icon: <SiScrapy size={40} />, color: 'text-yellow-500' },
    { name: 'Pandas', icon: <SiPandas size={40} />, color: 'text-purple-500' },
    { name: 'NumPy', icon: <SiNumpy size={40} />, color: 'text-blue-400' },
    { name: 'TypeScript', icon: <SiTypescript size={40} />, color: 'text-blue-500' },
    { name: 'JavaScript', icon: <DiJavascript1 size={40} />, color: 'text-orange-500' },
    { name: 'PostgreSQL', icon: <SiPostgresql size={40} />, color: 'text-blue-300' },
    { name: 'MongoDB', icon: <SiMongodb size={40} />, color: 'text-green-400' },
  ],
  experiences: [
    {
      name: 'Junior Python Developer',
      company: "System Heuristics",
      description: ['Built backend services using FastAPI, implementing RESTful endpoints and handling data interactions with databases.',
        'Developed web scraping scripts to collect and clean data from various sources using Selenium and Scrapy.',
        'Wrote automation scripts to streamline repetitive tasks and improve overall development workflow.',
        'Collaborated with the development team to integrate data pipelines and maintain clean, efficient code using version control tools like Git.'],
      link: 'https://systemheuristics.com',
      from: 'Dec-2024',
      to: 'present'
    },
    {
      name: 'Python Intern',
      company: "System Heuristics",
      description: ['Gained hands-on experience in backend development using FastAPI and MongoDB, building and testing RESTful APIs.',
        'Learned to write and maintain test scripts for API endpoints and automation logic to ensure code reliability.',
        'Developed web scraping tools using Selenium for dynamic websites and Scrapy for structured, scalable data extraction.',
        'Collaborated with senior developers on debugging and feature enhancement tasks in an Agile environment.'],
      link: 'https://systemheuristics.com/',
      from: 'Nov-2024',
      to: 'Dec-2024'
    },

  ],
  projects: [
    {
      name: 'mdcatwallah.com Backend',
      description: 'A robust backend for mdcatwallah.com using Flask and MongoDB.',
      link: 'https://mdcatwallah.com',
      year: 2024
    },
    // {
    //   name: 'app.omioform Backend',
    //   description: 'A scalable backend for app.omioform built with Flask and MongoDB.',
    //   link: 'https://app.omioform.com',
    //   year: 2024
    // },
    {
      name: 'Smart Invoice System',
      description: 'A scalable invoice management system built on NextJs and Postgresql.',
      link: '#',
      year: 2025
    }
  ],
  testimonials: [
    {
      name: 'Michael',
      feedback: 'Muhammad always provides professional service. His work standard and communication is impeccable. Highly recommended!',
      company: 'Omnioform',
      year: 2024
    },
  ],
  freelancing: ["Worked on Fiverr, Upwork, Freelancer.com."]
};

import React from 'react';
import { personalData } from './data';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Navbar from './components/Navbar'; // ⬅️ Import the new navbar

function App() {
  return (
    <div className="dark:bg-gray-900 bg-white min-h-screen">
      <Navbar />
      <section id="hero"><Hero name={personalData.name} role={personalData.role} /></section>
      <section id="experience"><Experience experiences={personalData.experiences} /></section>
      <section id="projects"><Projects projects={personalData.projects} /></section>
      <section id="skills"><Skills skills={personalData.skills} /></section>
      <section id="testimonials"><Testimonials testimonials={personalData.testimonials} /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
}

export default App;

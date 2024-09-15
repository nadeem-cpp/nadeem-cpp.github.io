import React from 'react';
import { personalData } from './data';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <div className="dark:bg-gray-900 bg-white min-h-screen">
      <Hero name={personalData.name} role={personalData.role} />
      <Skills skills={personalData.skills} />
      <Projects projects={personalData.projects} />
      <Testimonials testimonials={personalData.testimonials} />
      <Contact />
    </div>
  );
}

export default App;

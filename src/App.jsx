import React from 'react';
import './App.css';
import About from './section/About/About';
import Projects from './section/Projects/Projects';
import Skills from './section/Skills/Skills';
import Footer from './section/Footer/Footer';
import Contact from './section/Contact/Contact';
import Navbar from './section/Navbar/Navbar';
import Achievements from './section/Achievements/Achievements';

function App() {
  return (
    <div>
      <Navbar />
      <main>
      <About />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
      <Footer />
      </main>
    </div>
  );
}

export default App;

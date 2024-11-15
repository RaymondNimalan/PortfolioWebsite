import React, { useState } from 'react';
import Dropdown from './components/Dropdown';
import Navbar from './components/Navbar';
import InfoSection from './components/InfoSection';
import { AboutData } from './data/InfoData';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Landing from './components/Landing';
import Footer from './components/Footer';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar toggle={toggle} />
      <Landing />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <InfoSection {...AboutData} />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}

export default App;

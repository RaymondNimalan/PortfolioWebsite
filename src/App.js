import React, { useState } from 'react';
import Dropdown from './components/Dropdown';
import Navbar from './components/Navbar';
import InfoSection from './components/InfoSection';
import { InfoData } from './data/InfoData';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Landing from './components/Landing';

import GlobalStyle from './globalStyle';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Landing />

      <Dropdown isOpen={isOpen} toggle={toggle} />
      <InfoSection {...InfoData} />
      <Skills />
      <Projects />
    </>
  );
}

export default App;

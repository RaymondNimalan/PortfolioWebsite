import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import InfoSection from './components/InfoSection';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Landing from './components/Landing';
import { AboutData } from './data/InfoData';
import App from './App.js';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={App} />
      {/* <Route path='/about' component={() => <InfoSection {...AboutData} />} />
      <Route exact path='/skills' component={Skills} />
      <Route exact path='/projects' component={Projects} /> */}
    </Switch>
  );
};

export default Routes;

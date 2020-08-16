import React from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import Home from './components/';
import CssBaseline from '@material-ui/core/CssBaseline';
import Resume from './components/Resume'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experiences from './components/Experiences'

function App() {
  return (
    <>
      <CssBaseline/>
      <Route exact path="/my-website" component={Home}/>
      <Route exact path="/" component={Home}/>
      <Route path="/resume" component={Resume}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/skills" component={Skills}/>
      <Route path="/experiences" component={Experiences}/>
    </>
  );
}

export default App;

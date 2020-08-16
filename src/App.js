import React from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import Home from './components/';
import CssBaseline from '@material-ui/core/CssBaseline';
import Experiences from './components/Experiences'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  return (
    <>
      <CssBaseline/>
      <Route exact path="/my-website" component={Home}/>
      <Route path="/experiences" component={Experiences}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/skills" component={Skills}/>
    </>
  );
}

export default App;

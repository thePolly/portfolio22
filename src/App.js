import './App.scss'
import Navbar from './components/NavBar/Navbar';
import { About, Footer, Header, Skills, Work, AboutMe } from './container';
import Contact from './container/Contact/Contact';

import React from "react";

function App() {



  return (
    <div className='app'>
      <Navbar/>
      <About/>
      <Skills/>
      <AboutMe/>
      <Contact/>
    </div>
  );
}

export default App;

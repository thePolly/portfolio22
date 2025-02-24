import './App.scss'
import Navbar from './components/NavBar/Navbar';
import { About, Footer, Skills, Projects, AboutMe, Expreience } from './container';
import Contact from './container/Contact/Contact';

import React from "react";

function App() {



  return (
    <div className='app'>
      <Navbar/>
      <About/>
      <Skills/>
      <Projects/>
      <Expreience/>
      <AboutMe/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

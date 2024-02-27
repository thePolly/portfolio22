import React from 'react'
import './Skills.scss'
import { motion } from 'framer-motion';
import { default as SkillBars } from '../../components';
import SkillOverview from './SkillOverview';



import ReactVivus from 'react-vivus';

import svg from './test1.svg';


import {IoCodeSlashSharp,
  IoGameController,
  IoDesktopOutline,
  IoLaptopOutline,
  IoEyedropOutline,
  IoColorPalette,
  IoColorPaletteOutline} from 'react-icons/io5'


const backendSkills=  {
  name: "Backend",
  list: ["Java", "Python", "SQL", "Groovy", "JavaScript"],
 icon: {IoCodeSlashSharp}
}
const frontendSkills=  {
  name: "Frontend",
  list: ["React", "Vue", "JavaScript", "HTML/CSS"],
  icon: {IoGameController}
}
const graphicSkills=  {
  name: "Graphic Design",
  list: ["Photoshop", "Procreate", "Adobe Illustrator"]
}
  
 

const skillsBackendData= [

  {
    name: 'Java',
    level: 60,
    color: 'gray',

  },


]

const skillsFrontendData= [
  {
    name: 'JavaScript',
    level: 40,
    color: 'rgba(133, 114, 161, 1)',

  },
  {
    name: 'ReactJS',
    level: 50,
    color: 'rgba(133, 114, 161, 1)',

  },
  {
    name: 'HTML/SCSS',
    level: 85,
    color: 'rgba(133, 114, 161, 1)',

  }

]



const Skills = () => {
  return (
    <motion.div id="skills" className='skills'
    initial={{opacity: 0}}
    whileInView={{opacity:1}}
    transition={{duration:1.1}}
    viewport={{once: true, amount: 0.3}}
    >
      <h1 className='skills__title'>Skills</h1>
      <div className='app__skills_section'>



<div className='skill-column'>
<h2 className='skill-title'><IoGameController/> Backend</h2>
<SkillOverview skills = {backendSkills}/>
</div>
<div className='skill-column'>
<h2 className='skill-title'><IoDesktopOutline/> Frontend</h2>
<SkillOverview skills = {frontendSkills}/>
</div>
<div className='skill-column'>
<h2  className='skill-title'><IoColorPalette></IoColorPalette> Graphic Design</h2>
<SkillOverview skills = {graphicSkills}/>
</div>


      </div>


    </motion.div>

  )
}

export default Skills
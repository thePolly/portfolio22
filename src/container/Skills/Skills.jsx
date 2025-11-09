import React from 'react'
import './Skills.scss'
import { motion } from 'framer-motion';
import { default as SkillBars } from '../../components';
import SkillOverview from './SkillOverview';





import {IoCodeSlashSharp,
  IoGameController,
  IoDesktopOutline,
  IoSettingsSharp,
  IoEyedropOutline,
  IoColorPalette,
  IoColorPaletteOutline} from 'react-icons/io5'


const backendSkills=  {
  name: "Backend",
  list: ["Java", "Spring Boot", "Python", "SQL", "Groovy"],
 icon: {IoCodeSlashSharp}
}
const frontendSkills=  {
  name: "Frontend",
  list: ["React", "JavaScript", "HTML/CSS"],
  icon: {IoGameController}
}
const graphicSkills=  {
  name: "Graphic Design",
  list: ["Procreate", "Adobe Illustrator"]
}
const infrastructureSkills=  {
  name: "Tools & Infrastructure",
  list: ["AWS", "CI/CD & Jenkins", "Git"]
}
  



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
<h2 className='skill-title'><IoSettingsSharp/> Tools & Infrastructure</h2>
<SkillOverview skills = {infrastructureSkills}/>
</div>
<div className='skill-column'>
<h2  className='skill-title'><IoColorPalette/> Graphic Design</h2>
<SkillOverview skills = {graphicSkills}/>
</div>
</div>

</motion.div>
  )
}

export default Skills

import React from 'react'
import {motion} from 'framer-motion';

import Project from "./Project.jsx"
import './Work.scss'
import { project_images } from '../../constants';


import {FaMousePointer,FaMouse} from 'react-icons/fa'
import { LINK_TO_FORM_PROJECT, LINK_TO_FORM_REPO, LINK_TO_PIANO_PROJECT, LINK_TO_PIANO_REPO, LINK_TO_TODO_PROJECT, LINK_TO_TODO_REPO, LINK_TO_VUE_PROJECT } from '../../constants/links.js';



const Projects = () => {
  return (

 

<motion.div id="projects" className='projects'
initial={{opacity: 0}}
whileInView={{opacity:1}}
transition={{duration:1.5}}
viewport={{once: true, amount: 0.3}}
>


<h1 className='projects__title'>Projects</h1>

<p className='projects__paragraph'> </p>
<div className='projects_section'>




    <Project nameOfProject="Virtual Piano" image= {project_images.piano} githubLink={LINK_TO_PIANO_REPO} projectLink={LINK_TO_PIANO_PROJECT} />
    <Project nameOfProject="To do List" image= {project_images.todo} githubLink={LINK_TO_TODO_REPO} projectLink={LINK_TO_TODO_PROJECT} />
    <Project nameOfProject="Registration Form" image= {project_images.form} githubLink={LINK_TO_FORM_REPO} projectLink={LINK_TO_FORM_PROJECT} />
    <Project nameOfProject="My First Vue App" image= {project_images.vue} githubLink={LINK_TO_FORM_REPO} projectLink={LINK_TO_VUE_PROJECT} />
</div>



    </motion.div>
  )
}

export default Projects
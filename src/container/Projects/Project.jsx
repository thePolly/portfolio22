import React, { Component , useEffect, useState} from 'react'
import {motion} from 'framer-motion';



import { project_images } from '../../constants';
import { images } from '../../constants';

import {GrGithub} from 'react-icons/gr'

import {FiExternalLink} from 'react-icons/fi'
 




const Project = ({nameOfProject, image, githubLink, projectLink}) => {

  

    return (
  
  
      
  <div className='project_section'

  
  >


        <h3 className='name'>{nameOfProject}</h3>

      <div
      className="box"

    >


<motion.div  className='project-links-container'
initial={{ opacity: 0}}
whileHover={{ opacity: 1 }}


> 
      
      <motion.div className='project-icon-bg'
   whileHover={{ scale: 1.15, backgroundColor: '#b1afc1' }}
   transition={{ type: "spring", stiffness: 400, damping: 10,   duration: 2,}}
   
   >
      <a href={githubLink} className='project-icon github' target="_blank">
<GrGithub></GrGithub>
</a>

      </motion.div>
 
      <motion.div className='project-icon-bg'
            whileHover={{ scale: 1.15, backgroundColor: '#b1afc1'}}
            transition={{ type: "spring", stiffness: 200, damping: 10 ,}}
        
            >
      <a href={projectLink} className='project-icon github' target="_blank">
<FiExternalLink></FiExternalLink>
</a>

      </motion.div>

</motion.div >




<a href={projectLink} className='image-link' target="_blank">
<motion.img


   
className='image' src={image} alt="picture2" >

</motion.img>
</a> 

              </div>







       

      </div>
    )
  }
  
  export default Project

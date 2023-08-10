import React from 'react'
import {motion} from 'framer-motion';

import './AboutMe.scss'
import { images } from '../../constants';


import {FaMousePointer,FaMouse} from 'react-icons/fa'



const AboutMe = () => {
  return (


<motion.div
initial={{opacity: 0}}
whileInView={{opacity:1}}
transition={{duration:1.5}}
viewport={{once: true, amount: 0.3}}
>
<div id="story" className='story-section'>



<h2>My Story</h2>

<div className='story-section-main'>
<p className='story'>Born into the family of a informatics teacher, I learned to program geometric figures in Pascal at the age of 9. 
  Since I was a kid, I wanted to develop my own computer game.
   So I finished a 3D Modelling cources and got a Master Degree In Computer Science. 
   Now I am a Software Engineer with an eager to make things convinient to use.
   </p>
   <img  src={images.measkid}></img>
</div>

    </div>
    </motion.div>
  )
}

export default AboutMe
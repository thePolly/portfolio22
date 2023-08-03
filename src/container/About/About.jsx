import React from 'react'
import {motion} from 'framer-motion';
import Social from "./Social.jsx"
import './About.scss'
import { images } from '../../constants';
import { LiaDownloadSolid } from "react-icons/lia";
import CV from  '../../assets/resources/cv.pdf';
import {FaMousePointer,FaMouse} from 'react-icons/fa'
import ReactFloaterJs from 'react-floaterjs'


const sclaeVariants ={
  whileInView: {
    scale: [0,1],
    opacity: [0,1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}



const About = () => {
  return (
    <div  id="about" className='app__about'>



<motion.div
className='app__about-section'
viewport={{once: true}}
>
 
   <Social/>
  <div className='app__about-description'>
  <motion.div
whileInView={ { opacity: [0, 1]}}
transition={{duration:2}}
viewport={{once: true}}
>
<p><b>Hello</b>, I'm  </p>
</motion.div>
  
<motion.div
whileInView={ {x:[-200, 0], opacity: [0, 0.4, 1]}}
transition={{duration:1,  ease: 'easeOut'}}
viewport={{once: true}}
className='app__about-text'>
  

  <div>
 
  <p>
  <span className='app__about-name' >Polina Katkova</span> 

</p>



  </div>
</motion.div>
<motion.div
whileInView={ { opacity: [0, 1]}}
transition={{duration:2}}
viewport={{once: true}}
>
<p className= "text-position">Fullstack Developer</p>
</motion.div>


<motion.div 
whileInView={ { opacity: [0, 1]}}
transition={{duration:1 , ease: 'easeOut'}}
viewport={{once: true}}
className="app__about-short-desc">
  I write Java code, Draw digital Illustrations
  <br/> and develop minimalistic looking Websites.
  <br/> 
  <p className="app__about-read-more">Read more in 
  <a href='#skills'> Skills <FaMouse className='app__about-read-more-logo'></FaMouse></a>
    </p>
</motion.div>
</div>


<motion.div
className='app__about-photo'
whileInView={ { opacity: [0, 1]}}
transition={{duration:1.5 , ease: 'easeOut'}}
viewport={{once: true}}
>


  <motion.div layout />
  <img className='bg' src={images.me_bg2} alt="picture2"></img>
 
  <dev className="download-section">
<a
href={CV}
download="Polina Katkova CV"
target="_blank"
rel="noopener noreferrer"
>
<ReactFloaterJs>
<dev className="download-link">
<LiaDownloadSolid/> Download my CV
</dev>
</ReactFloaterJs>
</a>
</dev>
  
  </motion.div>
 
  </motion.div>

    </div>
  )
}

export default About
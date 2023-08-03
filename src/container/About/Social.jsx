import React from 'react'

import {GrDribbble,GrGithub, GrLinkedinOption, GrLinkedin} from 'react-icons/gr'


const Social = () => {
  return (
    <div className='home__social'>
      <div className='icon-container'>
      <a href='https://dribbble.com/sinelga/shots' className='home__social-icon' target="_blank">
<GrDribbble ></GrDribbble>
    </a>
      </div>

  

   <div className='icon-container'>
   <a href='https://www.linkedin.com/in/polinakatkova/' className='home__social-icon github' target="_blank">
<GrLinkedinOption></GrLinkedinOption>
</a>
   </div>
    </div>
  )
}

export default Social
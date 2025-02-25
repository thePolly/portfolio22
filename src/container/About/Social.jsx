import React from 'react'

import {GrDribbble,GrGithub, GrLinkedinOption, GrLinkedin} from 'react-icons/gr'


const Social = () => {
  return (
    <div className='home__social'>

<div className='icon-container'>
   <a href='https://github.com/thePolly' className='home__social-icon github' target="_blank">
<GrGithub></GrGithub>
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

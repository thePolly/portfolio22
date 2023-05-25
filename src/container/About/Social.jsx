import React from 'react'

import {GrDribbble,GrGithub} from 'react-icons/gr'


const Social = () => {
  return (
    <div className='home__social'>
      <div className='icon-container'>
      <a href='https://dribbble.com/sinelga/shots' className='home__social-icon' target="_blank">
<GrDribbble ></GrDribbble>
    </a>
      </div>

   <div className='icon-container'>
   <a href='https://github.com/thePolly' className='home__social-icon github' target="_blank">
<GrGithub></GrGithub>
</a>
   </div>


    </div>
  )
}

export default Social
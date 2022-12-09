import React from 'react'

import {GrDribbble,GrGithub} from 'react-icons/gr'


const Social = () => {
  return (
    <div className='home__social'>
    <a href='https://dribbble.com/sinelga/shots' className='home__social-icon' target="_blank">
<GrDribbble ></GrDribbble>
    </a>
   
    <a href='https://github.com/thePolly' className='home__social-icon github' target="_blank">
<GrGithub></GrGithub>
</a>

    </div>
  )
}

export default Social
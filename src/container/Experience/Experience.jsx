import React from 'react'

import './Experience.scss'

import { useSpring, animated } from '@react-spring/web'

const Experience = () => {




    return(
<div id="experience" className='app__experience'>
<h1 className='skills__title'>Education & Experience</h1>
<div className='experience_container'>

<div className='education'>
  <div className='verticalLine'>
  <div className='info_particale'>
  <div className="circle">

</div>
      <h4>2015-2019</h4>
      <p className='company-name'>Samara University</p>
      <p>Bacherlor of applied mathematics and computer science</p>
      <p></p>
  </div>
  <div className='info_particale'>
  <div className="circle">

</div>
      <h4>2019-2021</h4>
      <p className='company-name'>Samara University</p>
      <p>Master of applied mathematics and computer science</p>
      <p></p>
  </div>
  </div>
  <div className='verticalLine'>

</div>
</div>
<div className='experience'>
  <div className='verticalLine'>
  <div className='info_particale'>
  <div className="circle">

</div>
      <h4>2018-2020</h4>
      <p className='company-name'>Netcracker Technology</p>
      <p>Junior Software Engineer</p>
      <p></p>
  </div>
  <div className='info_particale'>
  <div className="circle">

</div>
      <h4>2020-2022</h4>
      <p className='company-name'>Netcracker Technology</p>
      <p>Software Engineer</p>
      <p></p>
  </div>
  </div>
  <div className='verticalLine'>

</div>
</div>
</div>

  </div>
    )
}

export default Experience
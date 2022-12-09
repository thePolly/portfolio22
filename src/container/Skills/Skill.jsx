import React from 'react'
import { default as SkillBars } from '../../components';

const Skill = (skillsFrontendData) => {
  return (
    <div id='skills'>
        

        <h2>Frontend Skills</h2>
<SkillBars spacing={40} labelsWidth= {200} skills={skillsFrontendData} />
    </div>
  )
}

export default Skill
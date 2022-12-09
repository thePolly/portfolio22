import React from 'react'


const SkillOverview = (props) => {

    const {
        name, list
      } = props.skills;

    
  return (
    <div>

        <h3></h3>
        <ul className='skills__list'>
        {list.map(item=>
           <li key={`skill-${item}`}>{item}</li>)}
           </ul>


        </div>
  )
}

export default SkillOverview
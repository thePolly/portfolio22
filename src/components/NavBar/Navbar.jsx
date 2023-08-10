import React from 'react'
import './Navbar.scss';


const Navbar = (props) => {
  return (
  <>
   <div className='app__navbar'>
    

    <ul className='app__navbar-links'>
            {[ 'about',  'skills', 'projects', 'experience', 'story', 'contact']. map((item)=>
            <li key={`link-${item}`}  >
                
                <a href={`#${item}`} > {item} </a>
            </li> )}
        </ul>


    </div>
  <h1 className='logo' href="#home" onClick={() => window.scrollTo(0, 0)}>PK</h1>
  </>
   
   
  )
}

export default Navbar
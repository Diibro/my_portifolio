import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import {SiGmail} from 'react-icons/si';
import {BsLinkedin, BsGithub} from 'react-icons/bs';


const Navbar = () =>{

  const [activeClass, setActiveClass] = useState("");
   
  return(
    <div className='Navbar'>
      <ul>
        <li className={activeClass === "/" || window.location.pathname === "/" ? "activeLi" : ""}><NavLink to={{pathname:'/'}} 
        className={({isActive}) => isActive ? "LinkActive": "Navlink"}
        onClick={() => setActiveClass("/")} >Work</NavLink></li>
        <li className={activeClass === "/about" || window.location.pathname === "/about" ? "activeLi" : ""} ><NavLink to="/about" className={({isActive}) => isActive ? "LinkActive": "Navlink"} onClick={() => setActiveClass("/about")} >About</NavLink></li>
        <li className={activeClass === "/fun" || window.location.pathname === "/fun" ? "activeLi" : ""} ><NavLink to="/fun" className={({isActive}) => isActive ? "LinkActive": "Navlink"} onClick={() => setActiveClass("/fun")} >Fun</NavLink></li>
        <li><a href="https://nluy0b0iyvk.typeform.com/to/Aa85MYVj">Contact</a></li>
      </ul>
    </div>
  )
}

const Header = () => {
  return (
    <div className='Header'>
      <div className='Logo'>D<span>B</span> </div>
      <Navbar />
      <div className='social-media'>
        <a href="mailto:dushimeconso1234@gmail.com"><SiGmail /></a>
        <a href="https://www.linkedin.com/in/dushime-brother-516a55240/"><BsLinkedin/></a>
        <a href="https://github.com/Diibro"><BsGithub/></a>
      </div>
    </div>
  )
}

export default Header;
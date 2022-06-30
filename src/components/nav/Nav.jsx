import React from 'react'
import './nav.css'
import {AiOutlineHome} from "react-icons/ai"
import {FaRegUser} from "react-icons/fa"
import {FiBook} from "react-icons/fi"
import {FiBriefcase} from "react-icons/fi"
import {AiOutlineMessage} from "react-icons/ai"
import {useState} from "react"


export const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a href="#"  onClick={() => setActiveNav("#")} className={activeNav === "#" ? 'active' : ""}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? 'active' : ""}><FaRegUser/></a>
      <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? 'active' : ""} ><FiBook/></a>
      <a href="#portfolio" onClick={() => setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? 'active' : ""}><FiBriefcase/></a>
      <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? 'active' : ""}><AiOutlineMessage/></a>


    </nav>
  )
}


export default Nav
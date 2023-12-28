import { useState } from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai"
import { GrProjects } from "react-icons/gr"
import { FaEnvelope } from "react-icons/fa"

export const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><GrProjects /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><FaEnvelope /></a>
    </nav>
  )
}

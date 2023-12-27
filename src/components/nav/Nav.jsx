import { useState } from 'react'
import './nav.css'
import { AiOutlineHome } from "react-icons/ai"
import { GiSkills } from "react-icons/gi"
import { FaEnvelope, FaBriefcase } from "react-icons/fa"

export const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><GiSkills /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaBriefcase /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><FaEnvelope /></a>
    </nav>
  )
}

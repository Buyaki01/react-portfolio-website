import './nav.css'
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai"
import { FaEnvelope, FaBriefcase } from "react-icons/fa"

export const Nav = () => {
  return (
    <nav>
      <a href="#" className="active"><AiOutlineHome /></a>
      <a href="#about"><AiOutlineUser /></a>
      <a href="#experience"><FaBriefcase /></a>
      <a href="#contact"><FaEnvelope /></a>
    </nav>
  )
}

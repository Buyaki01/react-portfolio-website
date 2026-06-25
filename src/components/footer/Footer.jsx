import './footer.css'
import { GrGithub } from "react-icons/gr"
import { FaLinkedin } from "react-icons/fa"

export const Footer = () => {
  return (
    <footer>
      <a href="#home">RITTA SWETA</a>
      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/Buyaki01"><GrGithub /></a>
        <a href="https://www.linkedin.com/in/ritta-sweta"><FaLinkedin /></a>
      </div>
    </footer>
  )
}

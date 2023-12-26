import { BsLinkedin } from "react-icons/bs"
import { FaGithub } from "react-icons/fa"

export const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a 
        href="https://www.linkedin.com/in/ritta-sweta"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a 
        href="https://github.com/Buyaki01"
        target="_blank"
      >
        <FaGithub />
      </a>
    </div>
  )
}

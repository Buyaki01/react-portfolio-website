import { HeaderButtons } from './HeaderButtons'
import './header.css'
import Me from '../../assets/me.png'
import { HeaderSocials } from './HeaderSocials'

export const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Ritta Sweta</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <HeaderButtons />
        <HeaderSocials />
        <div className="me">
          <img src={Me} alt="Professional Photo" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

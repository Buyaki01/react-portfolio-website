import Me from '../../assets/me.jpg';
import { HeaderButtons } from './HeaderButtons';
import { HeaderSocials } from './HeaderSocials';
import { BsChevronDoubleDown } from "react-icons/bs";
import './header.css';

export const Header = () => {
    return (
        <header id="home">
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Ritta Sweta</h1>
                <h5 className="text-light">
                    A Full Stack Software Developer with over 5 years of
                    experience turning ideas into impactful digital solutions
                    across Healthcare, Fintech, and eCommerce.
                </h5>
                <HeaderButtons />
                <HeaderSocials />
                <div className="me">
                    <img src={Me} alt="Ritta Sweta" />
                </div>

                <a href="#skills" className="scroll__down">
                    Scroll Down
                    <BsChevronDoubleDown className="scroll__down-icon" />
                </a>
            </div>
        </header>
    );
};

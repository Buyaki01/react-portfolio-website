import Me from "../../assets/me.png";
import { HeaderButtons } from "./HeaderButtons";
import { HeaderSocials } from "./HeaderSocials";
import "./header.css";

export const Header = () => {
    return (
        <header>
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
                    <img src={Me} alt="Professional Photo" />
                </div>

                <a href="#contact" className="scroll__down">
                    Scroll Down
                </a>
            </div>
        </header>
    );
};

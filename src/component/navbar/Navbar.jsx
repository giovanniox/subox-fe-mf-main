import {Link} from 'react-router-dom';
import "./navbar.scss"
import {useState} from "react";
import dropDownIcon from './swag/dropdown-icon.svg'

const Navbar = () => {
    const [burgerButton, toggleBurgerButton] = useState(false)
    const [burgerButton2, toggleBurgerButton2] = useState(false)

    const list = [

        {
            id: 0, name: "Tienda", to: "/store", type: "navigation", dropdown: true,

        }, {
            id: 1, name: "Eventos", to: "/#", type: "navigation", dropdown: false,

        }, {
            id: 2, name: "Asistencia", to: "/#", type: "session", dropdown: true,

        }, {
            id: 3, name: "Cuenta", to: "#", type: "session", dropdown: true,

        }, {
            id: 4, name: "Carrito de compras", type: "icon", dropdown: false,

        },]

    const KEY_NAVEGATION = "navigation";
    const KEY_SESSION = "session";

    const toggleNavBar = () => {
        console.log("try toogle")
        toggleBurgerButton(!burgerButton)
    }


    return (<nav className="navbar">
            <div className="navbar__landscape">
                <div className="navbar__landscape__object"></div>
            </div>
            <div className="navbar__container">
                <ul className="navbar__container__list">
                    {list.filter(menu => menu.type === KEY_NAVEGATION).map(e => {
                        return (<li key={e.id} className="navbar__container__list__item">
                            <Link className="navbar__container__list__item__link" to={e.to}>
                                {e.dropdown ? <img className="navbar__container__list__item__link__icon"
                                                   src={dropDownIcon} alt="icono drop down"/> : undefined}
                                {e.name}
                            </Link>
                        </li>)
                    })}
                </ul>
                <div className="navbar__container__logo">
                    <div className="navbar__container__logo__wrapper">
                        <span className="navbar__container__logo__wrapper__top">
                            <span className="navbar__container__logo__wrapper__top__letter">FASHION</span></span>
                        <span className="navbar__container__logo__wrapper__mid">
                            <span className="navbar__container__logo__wrapper__mid__letter">City</span>
                        </span>
                        <span className="navbar__container__logo__wrapper__bot">
                            <span className="navbar__container__logo__wrapper__bot__letter">tendencias</span>
                        </span>
                    </div>
                    <div className="navbar__container__logo__triangule">

                    </div>
                </div>
                <ul className="navbar__container__session">
                    {list.filter(menu => menu.type === KEY_SESSION).map(e => (
                        <li key={e.id} className="navbar__container__session__item">

                            <Link className="navbar__container__session__item__link" to={e.to}>
                                {e.name}
                                {e.dropdown ? <img className="navbar__container__session__item__link__icon"
                                                   src={dropDownIcon} alt="icono drop down"/> : undefined}

                            </Link>

                        </li>))}
                </ul>
                {burgerButton ? <div className="navbar__container__burger" onClick={toggleNavBar}>
                    <div
                        className={burgerButton ? "navbar__container__burger navbar__container__burger--open" : "navbar__container__burger navbar__container__burger--close"}>
                        <span className="navbar__container__burger__bar navbar__container__burger__bar--top"></span>
                        <span className="navbar__container__burger__bar navbar__container__burger__bar--mid"></span>
                        <span className="navbar__container__burger__bar navbar__container__burger__bar--bot"></span>
                    </div>
                </div> : undefined}
            </div>
        </nav>


    );


}

export default Navbar;


import {Link} from 'react-router-dom';
import "./navbar.scss"
import {useState} from "react";

const Navbar = () => {
    const [burgerButton, toggleBurgerButton] = useState(false)
        const [burgerButton2, toggleBurgerButton2] = useState(false)

    const list = [
        {
            id: 0,
            name: "Home",
            to: "/landscape",
            type: "navigation"
        },
        {
            id: 1,
            name: "Tienda",
            to: "/store",
            type: "navigation"
        },
        {
            id: 2,
            name: "Eventos",
            to: "/events",
            type: "navigation"
        },
        {
            id: 3,
            name: "Registrarse",
            to: "/sign-up",
            type: "session"
        },
        {
            id: 4,
            name: "Iniciar Sesion",
            to: "/log-in",
            type: "session"
        },
        {
            id: 5,
            name: "Carrito de compras",
            type: "icon"
        },
    ]
    const KEY_NAVEGATION = "navigation";
    const KEY_SESSION = "session";

    const toggleNavBar = () => {
        console.log("try toogle")
        toggleBurgerButton(!burgerButton)
    }



    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <div className="navbar__logo__landscape">
                    <div className="navbar__logo__landscape__object"></div>
                </div>
                <div className="navbar__logo__wrapper">
                        <span className="navbar__logo__wrapper__top">
                            <span className="navbar__logo__wrapper__top__letter">FASHION</span></span>
                    <span className="navbar__logo__wrapper__mid">
                            <span className="navbar__logo__wrapper__mid__letter">City</span>
                        </span>
                    <span className="navbar__logo__wrapper__bot">
                            <span className="navbar__logo__wrapper__bot__letter">tendencias</span>
                        </span>
                </div>
                <div className="navbar__logo__triangule">

                </div>
            </div>

            <ul className="navbar__list">
                {
                    list.filter(menu => menu.type === KEY_NAVEGATION).map(e => {


                        return (
                            <li key={e.id} className="navbar__list__item">
                                <Link className="navbar__list__item__link" to={e.to}>
                                    {
                                        e.name
                                    }
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>

            <ul className="navbar__session">
                {
                    list.filter(menu => menu.type === KEY_SESSION).map(e => (
                        <li key={e.id} className="navbar__session__item">
                            <Link className="navbar__session__item__link" to={e.to}>
                                {e.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            {burgerButton?
            <div className="navbar__burger" onClick={toggleNavBar}>
                <div className={
                    burgerButton ? "navbar__burger navbar__burger--open" : "navbar__burger navbar__burger--close"
                }>
                    <span className="navbar__burger__bar navbar__burger__bar--top"></span>
                    <span className="navbar__burger__bar navbar__burger__bar--mid"></span>
                    <span className="navbar__burger__bar navbar__burger__bar--bot"></span>
                </div>
            </div>
                :undefined
            }
        </nav>


    );


}

export default Navbar;


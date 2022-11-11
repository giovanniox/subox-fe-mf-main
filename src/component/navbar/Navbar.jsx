import {Link} from 'react-router-dom';
import "./navbar.scss"
import {useState} from "react";

const Navbar = () => {
    const [burgerButton, toggleBurgerButton] = useState(false)
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
        console.log("toggleNavBar")
        toggleBurgerButton(!burgerButton)
    }


    return (
        <nav className="navbar">

            <div className="navbar__list">
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
            </div>
            <div className="navbar__logo">
                <div className="wrapper">
                    <div className="inner-wrapper">
                        <div className="landscape"></div>
                    </div>
                    <div className="nrw">
                        <span className="new">
                          <span className="letter">F</span>
                          <span className="letter">a</span>
                          <span className="letter">s</span>
                           <span className="letter">h</span>
                          <span className="letter">i</span>
                          <span className="letter">o</span>                          <span className="letter">o</span>
                          <span className="letter">n</span>
                        </span>
                        <span className="retro">
                          <span className="letter">C</span>
                          <span className="letter">i</span>
                          <span className="letter">t</span>
                          <span className="letter">y</span>
                        </span>
                        <span className="wave">
                          <span className="letter">t</span>
                          <span className="letter">e</span>
                          <span className="letter">n</span>
                          <span className="letter">d</span>
                          <span className="letter">e</span>
                          <span className="letter">c</span>
                          <span className="letter">i</span>
                          <span className="letter">a</span>
                          <span className="letter">s</span>
                        </span>
                    </div>
                    <div className="triangle"></div>
                </div>
            </div>
            <div className="navbar__button__session">
                {
                    list.filter(menu => menu.type === KEY_SESSION).map(e => (
                        <li key={e.id} className="navbar__button__session__item">
                            <Link className="navbar__button__session__item__link" to={e.to}>
                                {e.name}
                            </Link>
                        </li>
                    ))
                }
            </div>


            <div className="navbar__button__burger" onClick={toggleNavBar}>
                <a className={
                    burgerButton ? "nav-open" : "navbar__button__burger--close"
                }>
                    <span className="menu-toggle-bar menu-toggle-bar--top"></span>
                    <span className="menu-toggle-bar menu-toggle-bar--middle"></span>
                    <span className="menu-toggle-bar menu-toggle-bar--bottom"></span>
                </a>
            </div>
        </nav>


    );


}

export default Navbar;


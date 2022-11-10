import {Link} from 'react-router-dom';
import "./navbar.scss"

const Navbar = () => {

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

    }


    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <Link className="navbar__logo__link" to="/">
                    <span className="navbar__logo__mark navbar__logo__mark--primary">fashion</span>
                    <span className="navbar__logo__mark navbar__logo__mark--secondary">city</span>
                </Link>
            </div>
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
                <div className="navbar__button__burger__bar--active-top"></div>
                <div className="navbar__button__burger__bar--hide"></div>
                <div className="navbar__button__burger__bar--active-bot"></div>
            </div>

        </nav>


    );


}

export default Navbar;


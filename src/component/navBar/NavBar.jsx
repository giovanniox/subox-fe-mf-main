import Landscape from "./landscape/Landscape"
import Logo from "./logo/Logo"
import { FaRegUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import "./navBar.scss"
import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

    const [showSidebarBurger, setShowSidebarBurger] = useState(false);
    const [showSideUser, setShowSideUser] = useState(false);

    const toggleSidebarBurger = () => {
        setShowSidebarBurger(!showSidebarBurger);
        setShowSideUser(false);

    };
    const toggleSidebarUser = () => {
        setShowSideUser(!showSideUser);
        setShowSidebarBurger(false);

    };
    return (
        <>
            <div className='navBar'>
                <div className='navBar__container'>
                    <GiHamburgerMenu className="hamburgerMenu" onClick={toggleSidebarBurger} />
                    <Logo className="logo" />
                    <FaRegUser className="userIcon" onClick={toggleSidebarUser} />
                </div>
                <Landscape />
            </div>


            <div className={`sidenavBurger ${showSidebarBurger ? 'open' : ''}`}>
                <div className="sidenavBurger__container__uno">
                    <button className="closebtn" onClick={toggleSidebarBurger}>
                        &times;
                    </button>
                    <Logo className="logo" />
                </div>
                <div className="sidenavBurger__container__dos">
                    <div className="sidenavBurger__container__dos__menu">
                        <ul className="sidenavBurger__container__dos__menu__uno">
                            <li className="sidenavBurger__container__dos__menu__uno__link">
                                <Link to="#">Menu Numero uno</Link>
                            </li>
                            <li className="sidenavBurger__container__dos__menu__uno__link">
                                <Link to="#">Menu Numero dos</Link>
                            </li>
                            <li className="sidenavBurger__container__dos__menu__uno__link">
                                <Link to="#">Menu Numero tres</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="sidenavBurger__container__dos__menu">
                        <ul className="sidenavBurger__container__dos__menu__dos">
                            <li className="sidenavBurger__container__dos__menu__dos__link">
                                <Link to="#">Menu Numero uno</Link>
                            </li>
                            <li className="sidenavBurger__container__dos__menu__dos__link">
                                <Link to="#">Menu Numero dos</Link>
                            </li>
                            <li className="sidenavBurger__container__dos__menu__dos__link">
                                <Link to="#">Menu Numero tres</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>

    )
}

export default NavBar;


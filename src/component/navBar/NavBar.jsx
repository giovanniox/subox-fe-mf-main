import Landscape from "./landscape/Landscape"
import Logo from "./logo/Logo"
import { FaRegUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import "./navBar.scss"
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    const [showSidebarBurger, setShowSidebarBurger] = useState(false);
    const [showSideUser, setShowSideUser] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setShowSideUser(false);
                setShowSidebarBurger(false);
            } 
        };

        handleResize(); // Call on mount to set initial state

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    

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
                    <div className="logo" >
                    <Logo />
                    </div>
                    <FaRegUser className="userIcon" onClick={toggleSidebarUser} />
                </div>
                <Landscape />
            </div>
            { (showSideUser || showSidebarBurger) &&
    <div className="closeWrapper" onClick={() => {
        setShowSidebarBurger(false);
        setShowSideUser(false);
    }}>
        {/* Contenido de su div aquí */}
    </div>
}

            <div className={`sidenavBurger ${showSidebarBurger ? 'open' : ''}`}>
                <div className="sidenavBurger__container__uno">
                    <MdClose  className="closebtn" onClick={toggleSidebarBurger}/>
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


            <div className={`sidenavUser ${showSideUser ? 'open' : ''}`}>
                <div className="sidenavUser__container__uno">
                    <MdClose  className="closebtn" onClick={toggleSidebarUser}/>
                    <Logo className="logo" />
                </div>
                <div className="sidenavUser__container__dos">
                    <div className="sidenavUser__container__dos__menu">
                        <ul className="sidenavUser__container__dos__menu__uno">
                            <li className="sidenavUser__container__dos__menu__uno__link">
                                <Link to="#">Menu Numero uno</Link>
                            </li>
                            <li className="sidenavUser__container__dos__menu__uno__link">
                                <Link to="#">Menu Numero dos</Link>
                            </li>
                            <li className="sidenavUser__container__dos__menu__uno__link">
                                <Link to="#">Menu Numero tres</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="sidenavUser__container__dos__menu">
                        <ul className="sidenavUser__container__dos__menu__dos">
                            <li className="sidenavUser__container__dos__menu__dos__link">
                                <Link to="#">Menu Numero uno</Link>
                            </li>
                            <li className="sidenavUser__container__dos__menu__dos__link">
                                <Link to="#">Menu Numero dos</Link>
                            </li>
                            <li className="sidenavUser__container__dos__menu__dos__link">
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


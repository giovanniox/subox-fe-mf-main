import { FaRegUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import "./navBar.scss"
import "./logo.scss"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {PATH} from "../../router/routes"

import AccountMenu from "./accountMenu/AccountMenu";


const NavBar = () => {
    const [showSidebarL, setShowSidebarL] = useState(false);
    const [showSidebarR, setShowSidebarR] = useState(false);

    // este useEffect sirve para calcular el width del sitio para cerrar el menu Sidebar
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setShowSidebarR(false);
                setShowSidebarL(false);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleSidebarBurger = () => {
        setShowSidebarL(!showSidebarL);
        setShowSidebarR(false);
    };
    const toggleSidebarUser = () => {
        setShowSidebarR(!showSidebarR);
        setShowSidebarL(false);
    };



    return (
        <>
          

            <div className='navBar'>
                 <Logo />
                <div className='navBar__container'>
                    <div>
                        <GiHamburgerMenu className="hamburgerMenu" onClick={toggleSidebarBurger} />
                        <div className="menu">
                            <div className="menu__container">
                                {/* <div className="menu__container__busqueda" onMouseEnter={handleMouseEnterBusqueda}
                                onMouseLeave={handleMouseLeaveBusqueda}>

                                <input
                                    type="text"
                                    placeholder="Buscar"
                                    className="menu__container__busqueda__input"
                                />

                                <span className="menu__container__busqueda__button"

                                >
                                    <FaSearch className="menu__container__busqueda__button__iconBusqueda" />
                                </span>

                                {isOpenBusqueda && (
                                    <div className="menu__container__busqueda__container">
                                        lista de productos encontrados
                                    </div>
                                )}
                            </div>*/}
                                {/*
                            <div className="menu__container__carrito" onMouseEnter={handleMouseEnterCarrito}
                                onMouseLeave={handleMouseLeaveCarrito} >
                                <span className="menu__container__carrito__counter">1</span>
                                <span className="menu__container__carrito__button"

                                >
                                    <CiShoppingCart className="menu__container__carrito__button__IconCarrito" />
                                    <FaAngleDown className="menu__container__carrito__button__iconDown" />
                                </span>
                                {isOpenCarrito && (
                                    <div className="menu__container__carrito__container">
                                        <div>Aun no hay productos</div>
                                    </div>
                                )}
                            </div>*/}
                                <AccountMenu />

                            </div>
                        </div>

                        <FaRegUser className="userIcon" onClick={toggleSidebarUser} />
                    </div>
                  

                </div>
                <div className="navBar__landscape">
                    <div className="navBar__landscape__object"></div>
                </div>
            </div>


            {(showSidebarR || showSidebarL) &&
                <div className="closeWrapper" onClick={() => {
                    setShowSidebarL(false);
                    setShowSidebarR(false);
                }}>
                </div>
            }

            <div className={`sidenavBurger ${showSidebarL ? 'open' : ''}`}>
                <div className="sidenavBurger__container__uno">
                    <MdClose className="closebtn" onClick={toggleSidebarBurger} />
                    <Logo  />
                </div>
                <div className="sidenavBurger__container__dos">
                    <div className="sidenavBurger__container__dos__menu">
                        <ul className="sidenavBurger__container__dos__menu__uno">
                            <li className="sidenavBurger__container__dos__menu__uno__link">
                                <Link to="#">Productos</Link>
                            </li>
                            <li className="sidenavBurger__container__dos__menu__uno__link">
                                <Link to="/store">Tienda</Link>
                            </li>
                            <li className="sidenavBurger__container__dos__menu__uno__link">
                                <Link to="#">Categorias</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="sidenavBurger__container__dos__menu">
                        <ul className="sidenavBurger__container__dos__menu__dos">
                            <li className="sidenavBurger__container__dos__menu__dos__link">
                                <Link to="#">Sobre nosotros</Link>
                            </li>
                            <li className="sidenavBurger__container__dos__menu__dos__link">
                                <Link to="#">Informacion</Link>
                            </li>
                            <li className="sidenavBurger__container__dos__menu__dos__link">
                                <Link to="#">Compras</Link>
                            </li>
                            <li className="sidenavBurger__container__dos__menu__dos__link">
                                <Link to="#">Soporte</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className={`sidenavUser ${showSidebarR ? 'open' : ''}`}>
                <div className="sidenavUser__container__uno">
                    <MdClose className="closebtn" onClick={toggleSidebarUser} />
                    <Logo />
                </div>
                <div className="sidenavUser__container__dos">
                    <div className="sidenavUser__container__dos__menu">
                        <ul className="sidenavUser__container__dos__menu__uno">
                            <li className="sidenavBurger__container__dos__menu__dos__link">
                                <Link to="#">Iniciar sesion</Link>
                            </li>
                            <li className="sidenavBurger__container__dos__menu__dos__link">
                                <Link to="#">Ajustes de cuenta</Link>
                            </li>
                            <li className="sidenavBurger__container__dos__menu__dos__link">
                                <Link to="#">Registrarse</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="sidenavUser__container__dos__menu">
                        <ul className="sidenavUser__container__dos__menu__dos">
                            <li className="sidenavUser__container__dos__menu__dos__link">
                                <Link to="#">Asistencia</Link>
                            </li>
                            <li className="sidenavUser__container__dos__menu__dos__link">
                                <Link to="#">Tienda</Link>
                            </li>
                            <li className="sidenavUser__container__dos__menu__dos__link">
                                <Link to="#">Aplicacion modil de FC Tendencias</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>

    )
}
const Logo = () => {
    return (
        <Link to={PATH.HOME_PUBLIC} className="logo">
            <div className="logo__wrapper">
                <span className="logo__wrapper__top">
                    <span className="logo__wrapper__top__letter">FASHION</span></span>
                <span className="logo__wrapper__mid">
                    <span className="logo__wrapper__mid__letter">City</span>
                </span>
                <span className="logo__wrapper__bot">
                    <span className="logo__wrapper__bot__letter">Tendencias</span>
                </span>
            </div>
            <span className="logo__triangule">

            </span>
        </Link>
    );
}



export default NavBar;


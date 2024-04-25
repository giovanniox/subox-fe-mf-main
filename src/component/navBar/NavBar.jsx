import Landscape from "./landscape/Landscape"
import Logo from "./logo/Logo"
import { FaRegUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import "./navBar.scss"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
const NavBar = () => {
    const [showSidebarBurger, setShowSidebarBurger] = useState(false);
    const [showSideUser, setShowSideUser] = useState(false);

    // este useEffect sirve para calcular el width del sitio para cerrar el menu
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setShowSideUser(false);
                setShowSidebarBurger(false);
            }
        };

        handleResize();

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
    const [isOpenLogin, setIsOpenLogin] = useState(false);
    const [isOpenCarrito, setIsOpenCarrito] = useState(false);
    const [isOpenBusqueda, setIsOpenBusqueda] = useState(false);
    const [isOpenTienda, setIsOpenTienda] = useState(false);
    const [isOpenNosotros, setIsOpenNosotros] = useState(false);

    const handleMouseEnterNosotros = () => {
        setIsOpenNosotros(true);
    };
    const handleMouseLeaveNosotros = () => {
        setIsOpenNosotros(false);
    };
    const handleMouseEnterTienda = () => {
        setIsOpenTienda(true);
    };
    const handleMouseLeaveTienda = () => {
        setIsOpenTienda(false);
    };
    const handleMouseEnterBusqueda = () => {
        setIsOpenBusqueda(true);
    };
    const handleMouseLeaveBusqueda = () => {
        setIsOpenBusqueda(false);
    };

    const handleMouseEnterLogin = () => {
        setIsOpenLogin(true);
    };
    const handleMouseLeaveLogin = () => {
        setIsOpenLogin(false);
    };
    const handleMouseEnterCarrito = () => {
        setIsOpenCarrito(true);
    };
    const handleMouseLeaveCarrito = () => {
        setIsOpenCarrito(false);
    };
    return (
        <>
            <div className='navBar'>
                <div className='navBar__container'>
                    <GiHamburgerMenu className="hamburgerMenu" onClick={toggleSidebarBurger} />
                    <div className="logo" >
                        <Logo />
                    </div>
                    <div className="menu">
                        <div className="menu__container">
                            <div className="menu__container">
                                <div className="menu__container__nosotros" onMouseEnter={handleMouseEnterNosotros} onMouseLeave={handleMouseLeaveNosotros}>
                                    <span className="menu__container__nosotros__button">
                                        <CiUser className="menu__container__nosotros__button__iconUser" />
                                        Nosotros
                                        <FaAngleDown className="menu__container__nosotros__button__iconDown" />
                                    </span>
                                    {isOpenNosotros && (
                                        <ul className="menu__container__nosotros__list">
                                            <li className="menu__container__nosotros__list__link">
                                                <Link to="#">Como Funciona</Link>
                                            </li>
                                            <li className="menu__container__nosotros__list__link">
                                                <Link to="#">Nosotros</Link>
                                            </li>
                                            <li className="menu__container__nosotros__list__link">
                                                <Link to="#">Noticias</Link>
                                            </li>
                                        </ul>
                                    )}
                                </div>
                                <div className="menu__container__tienda" onMouseEnter={handleMouseEnterTienda} onMouseLeave={handleMouseLeaveTienda}>
                                    <span className="menu__container__tienda__button">
                                        <CiUser className="menu__container__tienda__button__iconUser" />
                                        Tienda
                                    </span>

                                </div>
                            </div>
                      
                        </div>
                        <div className="menu__container">
                            <div className="menu__container__busqueda" onMouseEnter={handleMouseEnterBusqueda}
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
                            </div>
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
                            </div>
                            <div className="menu__container__login" onMouseEnter={handleMouseEnterLogin}
                                onMouseLeave={handleMouseLeaveLogin} >
                                <span className="menu__container__login__button"

                                >
                                    <CiUser className="menu__container__login__button__iconUser" />
                                    Cuenta
                                    <FaAngleDown className="menu__container__login__button__iconDown" />
                                </span>
                                {isOpenLogin && (
                                    <ul className="menu__container__login__list">
                                        <li className="menu__container__login__list__link">
                                            <Link to="#">Iniciar sesion</Link>
                                        </li>
                                        <li className="menu__container__login__list__link">
                                            <Link to="#">Ajustes de cuenta</Link>
                                        </li>
                                        <li className="menu__container__login__list__link">
                                            <Link to="#">Registrarse</Link>
                                        </li>
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>

                    <FaRegUser className="userIcon" onClick={toggleSidebarUser} />
                </div>
                <Landscape />
            </div>
            {(showSideUser || showSidebarBurger) &&
                <div className="closeWrapper" onClick={() => {
                    setShowSidebarBurger(false);
                    setShowSideUser(false);
                }}>
                    {/* Contenido de su div aquí */}
                </div>
            }

            <div className={`sidenavBurger ${showSidebarBurger ? 'open' : ''}`}>
                <div className="sidenavBurger__container__uno">
                    <MdClose className="closebtn" onClick={toggleSidebarBurger} />
                    <Logo className="logo" />
                </div>
                <div className="sidenavBurger__container__dos">
                    <div className="sidenavBurger__container__dos__menu">
                        <ul className="sidenavBurger__container__dos__menu__uno">
                            <li className="sidenavBurger__container__dos__menu__uno__link">
                                <Link to="#">Productos</Link>
                            </li>
                            <li className="sidenavBurger__container__dos__menu__uno__link">
                                <Link to="#">Tienda</Link>
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


            <div className={`sidenavUser ${showSideUser ? 'open' : ''}`}>
                <div className="sidenavUser__container__uno">
                    <MdClose className="closebtn" onClick={toggleSidebarUser} />
                    <Logo className="logo" />
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

export default NavBar;


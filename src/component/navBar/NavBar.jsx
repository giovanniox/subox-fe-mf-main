import { FaRegUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import "./navBar.scss"
import "./logo/logo.scss"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "./logo/Logo"

import AccountMenu from "./accountMenu/AccountMenu";
import CartMenu from "./cartMenu/CartMenu";
import SearchMenu from "./searchMenu/SearchMenu";
import { PATH } from "../../router/routes";
import { useAuth } from "../../provider/AuthProvider"
import { useNavigate } from "react-router-dom";


const NavBar = () => {

    const [showSidebarL, setShowSidebarL] = useState(false);
    const [showSidebarR, setShowSidebarR] = useState(false);

    const navigate = useNavigate();
    const { token, setToken } = useAuth();

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

    const handleLogout = () => {
        setToken();
        navigate("/", { replace: true });
    };


    return (
        <>

            <div className='navBar'>
                <Logo />
                <div className='navBar__container'>
                    <GiHamburgerMenu className="hamburgerMenu" onClick={toggleSidebarBurger} />
                    <div className="menu">
                        <div className="menu__container">
                            <SearchMenu />
                            <CartMenu />
                            <AccountMenu />
                        </div>
                    </div>
                    <FaRegUser className="userIcon" onClick={toggleSidebarUser} />
                </div>
                <div className="navBar__landscape">
                    <div className="navBar__landscape__object"></div>
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
                </div>
                <div className="sidenavUser__container__dos">
                    <div className="sidenavUser__container__dos__menu">
                        <ul className="sidenavUser__container__dos__menu__uno">
                            {token ? (
                                <>
                                    <li className="sidenavBurger__container__dos__menu__dos__link">
                                        <Link to={PATH.PROFILE} onClick={() => {
                                            setShowSidebarR(false);
                                            setShowSidebarL(false);
                                        }}>Perfil
                                        </Link>
                                    </li>
                                    <li className="sidenavBurger__container__dos__menu__dos__link" onClick={handleLogout}>
                                        <span>Salir</span>
                                    </li>
                                </>

                            ) : (

                                <>
                                    <li className="sidenavBurger__container__dos__menu__dos__link">
                                        <Link to={PATH.LOGIN} onClick={() => {
                                            setShowSidebarR(false);
                                            setShowSidebarL(false);
                                        }}>Iniciar sesion</Link>
                                    </li><li className="sidenavBurger__container__dos__menu__dos__link">
                                        <Link to={PATH.SIGNIN} onClick={() => {
                                            setShowSidebarR(false);
                                            setShowSidebarL(false);
                                        }}>Registrarse</Link>
                                    </li>
                                </>
                            )}
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
            </div>


           
        </>

    )
}



export default NavBar;


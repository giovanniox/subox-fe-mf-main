import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CiUser } from 'react-icons/ci'; 
import { FaAngleDown } from 'react-icons/fa';
import './AccountMenu.scss';
import {PATH} from "../../../router/routes"
import {useAuth} from "../../../provider/AuthProvider"
import { useNavigate } from "react-router-dom";

const AccountMenu = () => {

    const navigate = useNavigate();
    const { token ,setToken} = useAuth();

    const [isOpenLogin, setIsOpenLogin] = useState(false);

    const handleMouseEnterLogin = () => {
        setIsOpenLogin(true);
    };

    const handleMouseLeaveLogin = () => {
        setIsOpenLogin(false);
    };
    const handleLogout = () => {
        setToken();
        navigate("/", { replace: true });
      };
    
    return (
        <div className="accountMenu" 
             onMouseEnter={handleMouseEnterLogin}
             onMouseLeave={handleMouseLeaveLogin}>
            <span className="accountMenu__button">
                <CiUser className="accountMenu__button__iconUser" />
                Cuenta
                <FaAngleDown className="accountMenu__button__iconDown" />
            </span>
            {isOpenLogin && (
                <ul className="accountMenu__list">
                    {token ? (
                        <>
                            <li className="accountMenu__list__link">
                                <Link to={PATH.PROFILE}>Ajustes de cuenta</Link>
                            </li>
                            <li className="accountMenu__list__link" onClick={handleLogout}>
                                <span>Salir</span>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="accountMenu__list__link">
                                <Link to={PATH.LOGIN}>Iniciar sesion</Link>
                            </li>
                            <li className="accountMenu__list__link">
                                <Link to={PATH.SIGNIN}>Registrarse</Link>
                            </li>
                        </>
                    )}
                </ul>
            )}
        </div>
    );
};

export default AccountMenu;
import LoginForm from "./loginForm/LoginForm";
import AuthButton from "../../../component/common/AuthButton";
import { Link } from "react-router-dom";
import { PATH } from '../../../router/routes';
import "./login.scss"


import NavBar from '../../../component/navBar/NavBar';

import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useAuth } from "../../../provider/AuthProvider";
const Login = () => {
    const navigate = useNavigate();
    const { token } = useAuth();

    useEffect(() => {
        if (token) {
            navigate('/');
        }
    }, [token, navigate]);

    return (
        <><NavBar /><div className="sign-in">
            <div className="sign-in-container-title">
                <span>Iniciar sesion</span>
            </div>
            <div className="sign-in-container-main">
                <LoginForm />
                <div className="divider">
                    <hr />
                </div>
                <AuthButton />

            </div>
            <div className="sign-in-container-fotter">
                <p>
                    si aun no tienes cuenta, puede Registrarse
                    <Link style={{ marginLeft: "0.3rem" }} to={PATH.SIGNIN}>
                        Aqui
                    </Link>
                </p>
            </div>
        </div></>
    );
};

export default Login;
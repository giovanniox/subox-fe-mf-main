import LoginForm from "./loginForm/LoginForm";
import AuthButton from "../../../component/common/button/AuthButton";
import { Link } from "react-router-dom";
import { PATH } from '../../../router/routes';
import "./login.scss"



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

    return (<div className="login">
        <div className="login-title">
            <span>Accede a tu cuenta</span>
        </div>


        <span className="login-instructions">
            Escribe tus datos y acceder a tu cuenta
        </span>
        <div className="login-main">
            <LoginForm />
            <div className="login-instruction">
                <div>
                    <hr />
                </div>
                <span>
                    o puedes ingresar con redes sociales
                </span>
                <div>
                    <hr />
                </div>
            </div>
            <AuthButton text={'Acceder'} />
        </div>
        <div className="login-fotter">
            <span>
                si aun no tienes cuenta, puedes inscribirte
                <Link style={{ marginLeft: "0.3rem" }} to={PATH.SIGNIN}>
                    Aqui
                </Link>
            </span>
        </div>
    </div>);
};

export default Login;
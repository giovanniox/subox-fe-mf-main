import LoginForm from "../../component/loginForm/LoginForm";
import { Link } from "react-router-dom";
import { ROUTES } from '../../routes';
import "./login.scss"
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from '@react-oauth/google';

import { CiFacebook } from "react-icons/ci";
const Login = () => {

    const login = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
      });
      
    return (
        <div className="sign-in">
            <div className="sign-in-container-title">
                <h1>Iniciar sesion</h1>
            </div>
            <div className="sign-in-container-main">
                <div className="sign-in-container-main-wrapper-buttons">

                 <button onClick={() => login()} className="sign-in-container-main-wrapper-buttons-google">
                        <FcGoogle className="sign-in-container-main-wrapper-buttons-google-icon" />
                        Iniciar con Google.
                    </button>
                    <button className="sign-in-container-main-wrapper-buttons-facebook">
                        <CiFacebook className="sign-in-container-main-wrapper-buttons-facebook-icon" />
                        Iniciar con Facebook.
                    </button>
                </div>
                <LoginForm />
            </div>
            <div className="sign-in-container-fotter">
                <p >
                    si aun no tienes cuenta, puede Registrarse
                    <Link style={{marginLeft: "0.3rem"}} to={ROUTES.SIGNIN} >
                        Aqui
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
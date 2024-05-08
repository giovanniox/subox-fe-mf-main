import RegisterForm from "../../component/registerForm/registerForm";
import { Link } from "react-router-dom";
import { ROUTES } from '../../routes';
import "./register.scss"
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from '@react-oauth/google';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { CiFacebook } from "react-icons/ci";
const Register = () => {

    const login = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
    });
    const responseFacebook = (response) => {
        console.log('oglas');
        console.log(response);
    }
    return (
        <div className="sign-up">
            <div className="sign-up-container-title">
                <span>Crea una nueva cuenta</span>
            </div>

            <div className="sign-up-container-main">
                <div className="sign-up-container-main-wrapper-buttons">
                    <button onClick={() => login()} className="sign-up-container-main-wrapper-buttons-google">
                        <FcGoogle className="sign-up-container-main-wrapper-buttons-google-icon" />
                        Registrarse con Google.
                    </button>


                    <FacebookLogin
                        cssClass="sign-up-container-main-wrapper-buttons-facebook"
                        appId="1622867538053940"
                        autoLoad={false}
                        fields="name,email,picture"
                        callback={responseFacebook}
                        language="es_ES" // Establece el idioma a español
                        render={renderProps => (
                            <button className="sign-up-container-main-wrapper-buttons-facebook" onClick={renderProps.onClick}>
                                <CiFacebook className="sign-up-container-main-wrapper-buttons-facebook-icon" />
                                <span>Registrarse con Facebook.</span>
                            </button>
                        )}
                    />


                </div>

                <RegisterForm />
        
            </div>
            <div className="sign-up-container-fotter">
                <p >
                    ¿Ya tines una cuenta? puedes acceder
                    <Link style={{ marginLeft: "0.3rem" }} to={ROUTES.LOGIN} >
                        Aqui
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
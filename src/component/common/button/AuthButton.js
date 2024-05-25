import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from '@react-oauth/google';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { CiFacebook } from "react-icons/ci";
import "./authButton.scss"

const AuthButton = ({text}) => {

    const responseGoogle = useGoogleLogin({
        onSuccess: (response) => {
            console.log('responseGoogle');
            console.log(response);
        }
    });
    const responseFacebook = (response) => {
        console.log('responseFacebook');
        console.log(response);
    }

    return (
        <div className="auth-button">
            <button onClick={() => responseGoogle()} className="auth-button-google">
                <FcGoogle className="auth-button-google-icon" />
                {text} con Google.
            </button>


            <FacebookLogin
                cssClass="auth-button-facebook"
                appId="1622867538053940"
                autoLoad={false}
                fields="name,email,picture"
                callback={responseFacebook}
                language="es_ES"
                render={renderProps => (
                    <button className="auth-button-facebook" onClick={renderProps.onClick}>
                        <CiFacebook className="auth-button-facebook-icon" />
                        <span>{text} con Facebook.</span>
                    </button>
                )}
            />


        </div>
    );
}

export default AuthButton;
import RegisterForm from "../component/registerForm/registerForm";
import {Link} from "react-router-dom";
import { ROUTES } from './../routes'; 

const Register = () => {
    return (
        <div>
            <h1>pagina de registro</h1>
            <RegisterForm/>
                <p>
                    Ya tienes cuenta
                    <Link to={ROUTES.LOGIN} >
                        login
                    </Link>

                </p>

        </div>
    );
};

export default Register;
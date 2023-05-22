import RegisterForm from "../component/registerForm/registerForm";
import {Link} from "react-router-dom";

const Register = () => {
    return (
        <div>
            <h1>pagina de registro</h1>
            <RegisterForm/>
                <p>
                    Ya tienes cuenta
                    <Link to={"/login"} >
                        login
                    </Link>

                </p>

        </div>
    );
};

export default Register;
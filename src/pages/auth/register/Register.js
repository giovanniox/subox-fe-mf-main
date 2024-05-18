import RegisterForm from "./registerForm/registerForm";
import AuthButton from "../../../component/common/AuthButton";
import { Link } from "react-router-dom";
import { PATH } from '../../../router/routes';
import "./register.scss"
import NavBar from '../../../component/navBar/NavBar';

const Register = () => {


    return (
        <>
        <NavBar />
        <div className="sign-up">
            <div className="sign-up-container-title">
                <span>Crea una nueva cuenta</span>
            </div>

            <div className="sign-up-container-main">
                <RegisterForm />
                <div className="divider">
                    <hr />
                </div>
                <AuthButton />
            </div>
            <div className="sign-up-container-fotter">
                <p>
                    ¿Ya tines una cuenta? puedes acceder
                    <Link style={{ marginLeft: "0.3rem" }} to={PATH.LOGIN}>
                        Aqui
                    </Link>
                </p>
            </div>
        </div></>
    );
};

export default Register;
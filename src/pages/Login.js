import LoginForm from "../component/loginForm/LoginForm";
import {Link} from "react-router-dom";
import Register from "./Register";
import { ROUTES } from './../routes'; 

const Home = () => {
    return (
        <div>
            <h1>Inicia Seseon</h1>
            <LoginForm/>
            <Link to={ROUTES.SIGNIN} >
                Registrate
            </Link>
        </div>
    );
};

export default Home;
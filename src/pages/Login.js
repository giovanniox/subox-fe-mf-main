import LoginForm from "../component/loginForm/LoginForm";
import {Link} from "react-router-dom";
import Register from "./Register";

const Home = () => {
    return (
        <div>
            <h1>Inicia Seseon</h1>
            <LoginForm/>
            <Link to={"/register"} >
                Registrate
            </Link>
        </div>
    );
};

export default Home;
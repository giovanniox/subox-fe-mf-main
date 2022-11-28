import "./logo.scss"
import { Link } from 'react-router-dom';
const Logo = () => {
    return (<Link to="/" className="navBar__container__logo">
        <div className="navBar__container__logo__wrapper">
            <span className="navBar__container__logo__wrapper__top">
                <span className="navBar__container__logo__wrapper__top__letter">stylo</span></span>
            <span className="navBar__container__logo__wrapper__mid">
                <span className="navBar__container__logo__wrapper__mid__letter">fino</span>
            </span>
            <span className="navBar__container__logo__wrapper__bot">
                <span className="navBar__container__logo__wrapper__bot__letter"></span>
            </span>
        </div>
        <span className="navBar__container__logo__triangule">

        </span>
    </Link>);
}

export default Logo;
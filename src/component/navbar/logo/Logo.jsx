import "./logo.scss"

const Logo = () => {
    return (<div className="navbar__container__logo">
        <div className="navbar__container__logo__wrapper">
            <span className="navbar__container__logo__wrapper__top">
                <span className="navbar__container__logo__wrapper__top__letter">FASHION</span></span>
            <span className="navbar__container__logo__wrapper__mid">
                <span className="navbar__container__logo__wrapper__mid__letter">City</span>
            </span>
            <span className="navbar__container__logo__wrapper__bot">
                <span className="navbar__container__logo__wrapper__bot__letter">tendencias</span>
            </span>
        </div>
        <span className="navbar__container__logo__triangule">

        </span>
    </div>);
}

export default Logo;
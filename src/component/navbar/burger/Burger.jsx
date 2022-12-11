import { useState } from "react";
import "./burger.scss"
import { useMediaQuery } from 'react-responsive'
const Burger = () => {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })


    const [burgerButton, toggleBurgerButton] = useState(false)
    const toggleNavBar = () => {
        toggleBurgerButton(!burgerButton)
    }

    return isTabletOrMobile && (
        <div className="navBar__container__burger" onClick={toggleNavBar}>
            <div
                className={burgerButton ? "navBar__container__burger navBar__container__burger--open" : "navBar__container__burger navBar__container__burger--close"}>
                <span className="navBar__container__burger__bar navBar__container__burger__bar--top"></span>
                <span className="navBar__container__burger__bar navBar__container__burger__bar--mid"></span>
                <span className="navBar__container__burger__bar navBar__container__burger__bar--bot"></span>
            </div>
        </div>
    );
}

export default Burger;
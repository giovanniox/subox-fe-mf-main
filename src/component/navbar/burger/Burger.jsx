import { useState } from "react";
const Burger = () => {

    const [burgerButton, toggleBurgerButton] = useState(false)
    const toggleNavBar = () => {
        ////console.log("try toogle")
        burgerButton(!burgerButton)
    }

    return (
        <>        {burgerButton ? <div className="navbar__container__burger" onClick={toggleNavBar}>
            <div
                className={burgerButton ? "navbar__container__burger navbar__container__burger--open" : "navbar__container__burger navbar__container__burger--close"}>
                <span className="navbar__container__burger__bar navbar__container__burger__bar--top"></span>
                <span className="navbar__container__burger__bar navbar__container__burger__bar--mid"></span>
                <span className="navbar__container__burger__bar navbar__container__burger__bar--bot"></span>
            </div>
        </div> : undefined} 
        </>);
}

export default Burger;
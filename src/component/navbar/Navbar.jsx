
import Landscape from "./landscape/Landscape"
import Logo from "./logo/Logo"
import NavList from "./navList/NavList"

import Burger from "./burger/Burger";
import "./navBar.scss"

const NavBar = () => {

    return (
        <div className='navBar'>
            <div className='navBar__container'>
                {<Logo />}
                {<NavList classType="list" />}
                {<NavList classType="cart" />}
                {<NavList classType="session" />}
                {<Burger />}
            </div>
        </div>)
}

export default NavBar;


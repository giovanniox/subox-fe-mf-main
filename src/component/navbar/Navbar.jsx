
import Landscape from "./landscape/Landscape"
import Logo from "./logo/Logo"
import NavList from "./navList/NavList"

import Burger from "./burger/Burger";
import "./navBar.scss"

const NavBar = () => {

    return (
        <div className='navBar'>
            <div className='navBar__container'>
                {<NavList classType="list" />}
                {<Logo />}
                {<NavList classType="session" />}

                {<Burger />}
            </div>
            {<Landscape />}
        </div>)
}

export default NavBar;


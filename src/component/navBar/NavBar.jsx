import Landscape from "./landscape/Landscape"
import Logo from "./logo/Logo"
import { FaRegUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import "./navBar.scss"
import { useState } from "react";

const NavBar = () => {

    const [showSidebarBurger, setShowSidebarBurger] = useState(false);
    const [showSideUser, setShowSideUser] = useState(false);

    const toggleSidebarBurger = () => {
        setShowSidebarBurger(!showSidebarBurger);
        setShowSideUser(false);

    };
    const toggleSidebarUser = () => {
        setShowSideUser(!showSideUser);
        setShowSidebarBurger(false);

    };
    return (
        <>
            <div className='navBar'>
                <div className='navBar__container'>
                    <GiHamburgerMenu className="hamburgerMenu" onClick={toggleSidebarBurger} />
                    <Logo className="logo" />
                    <FaRegUser className="userIcon" onClick={toggleSidebarUser} />
                </div>
                <Landscape />
            </div>

            {
                showSidebarBurger ?
                    <div className={`sidenavBurger ${showSidebarBurger ? 'open' : ''}`}>
                        <div className="sidenavBurger__container">
                        <button className="closebtn" onClick={toggleSidebarBurger}>
                            &times;
                        </button>
                         <Logo className="logo" />
                        
                        </div>   
                    </div> : null
            }
              {
                showSideUser ?
                    <div className={`sidenavUser ${showSideUser ? 'open' : ''}`}>
                        <div className="sidenavUser__container">
                        <button className="closebtn" onClick={toggleSidebarUser}>
                            &times;
                        </button>
                         <Logo className="logo" />
                        
                        </div>   
                    </div> : null
            }
        </>

    )
}

export default NavBar;


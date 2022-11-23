import "./navbar.scss"
import { useEffect } from "react";
import Landscape from "./landscape/Landscape"
import Logo from "./logo/Logo"
import NavList from "./navlist/NavList"

import { useDispatch, useSelector } from 'react-redux'
import { NAVBAR_ACTIONS } from './../../app/redux/actions/navbarActions';
import Burger from "./burger/Burger";

const Navbar = () => {
    const { items } = useSelector(state => state.navbar)

    const dispatch = useDispatch()
    useEffect(() => {
        if (items.length === 0) {
            dispatch(NAVBAR_ACTIONS.getItemsNavbar())
        }
    }, [items.length])
    return <>
        <div className='navbar'>
            <div className='navbar__container'>
                {<NavList classType="list" />}
                {<Logo />}
                {<NavList classType="session" />}
                {<NavList classType="icon" />}
                {<Burger/>}
            </div>
            {<Landscape />}
        </div>
    </>


}

export default Navbar;


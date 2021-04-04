import React from 'react';


import Logo from './onHeader/Logo';
import Lookfor from './onHeader/Lookfor';
import Navegacion from './outHeader/Navegacion';


import '../../../static/style/header.css'
import LoginContainer from './onHeader/LoginContainer';

import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';


const Header = () => {

    const isShowHeader = useSelector(state => state.showHeader.headerIsShow)

    return (
        <header>
            {isShowHeader ?
                <>
                    <div className='header-container'>
                        <Logo />
                        <Lookfor />
                        <LoginContainer />
                    </div>
                    <Navegacion />
                </>
                :
                <>
                    <div className='header-container'>
                        <Logo />
                        <Link to='/'>
                            Inicio
                        </Link>
                        <LoginContainer />

                    </div>
                </>
            }

        </header>
    );
}

export default Header;
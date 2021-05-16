import React from 'react';
import styled from 'styled-components'

import Logo from './onHeader/Logo';
import Lookfor from './onHeader/Lookfor';
import Navegacion from './outHeader/Navegacion';


import LoginContainer from './onHeader/LoginContainer';

import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';


const Header = () => {

    const isShowHeader = useSelector(state => state.showHeader.headerIsShow)

    return (
        <Container>
            {isShowHeader ?
                <>
                    <ContainerHeader>
                        <Logo />
                        <Lookfor />
                        <LoginContainer />
                    </ContainerHeader>
                    <Navegacion />
                </>
                :
                <>
                    <ContainerHeader>
                        <Logo />
                        <Link to='/'>
                            Inicio
                        </Link>
                        <LoginContainer />
                    </ContainerHeader>
                </>
            }

        </Container>
    );
}

export default Header;


const Container = styled.header`
    height: 15vh;
`;

const ContainerHeader = styled.div`
    display: flex;
    width: 100%;
    background-color: #e2e0e0db;
    align-items: center;
    padding: 0 7%;
    height: 60%;
    position: relative;
`;



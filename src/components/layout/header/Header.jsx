import React from 'react';
import styled from 'styled-components'

import Logo from './Logo';
import Navegacion from './Navegacion';
import Cart from './Cart';

import LoginContainer from './LoginContainer';

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
                        <ContainerCartLogin>
                            <Cart />
                            <LoginContainer />
                        </ContainerCartLogin>
                
                    </ContainerHeader>
                    <Navegacion />
                </>
                :
                <>
                    <ContainerHeader>
                        <Logo />
                        <LinkInicio >
                            <Link to='/'>
                                Inicio
                            </Link>

                        </LinkInicio>
                        <LoginContainer />
                    </ContainerHeader>
                </>
            }

        </Container>
    );
}

export default Header;

const LinkInicio = styled.div`
  a {
    color: #383838;
    font-family: cursive;
    font-size: 17px;
  }
`;

const Container = styled.header`
    height: 15vh;
    display: flex;
    flex-direction: column;
`;

const ContainerHeader = styled.div`
    width: 100%;
    background-color: #fff1cc;
    align-items: center;
    padding: 0 7%;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const ContainerCartLogin = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
    flex-direction: row;
    flex-wrap: nowrap;
`


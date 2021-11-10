import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Logo = () => {
    return (
        <LogoContainer>
            <LogoText to="/" >
                RestoSubox
            </LogoText>
        </LogoContainer>
    );
}

export default Logo;

const LogoText = styled(Link)`
    font-size: 3rem;
    line-height: 1;
    font-weight: 700;
    font-family: cursive;
    margin-right: 2rem;
    color: #ef3f47;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: #ff0000;
    }
`

const LogoContainer = styled.div`
    position: relative;
    left: 0%;
`
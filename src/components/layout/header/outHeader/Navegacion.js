import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { items } from './Items'
import { useIntl } from 'react-intl';

const Navegacion = () => {

    const typeUser = 1
    const intl = useIntl();

    return (
        <Container>       
            {items(typeUser, intl).map((value) => (
                <Link to={value.path.replace(/ /g, "")}>
                {value.name}
                 </Link>
            ))}
        </Container>
    );
}

export default Navegacion;

const Container = styled.nav`
    background-color: #7ad274;
    padding-top: 3rem;
    height:40%;

    a {
        font-size: 1.8rem;
        margin-left: 2rem;
        color: #ffffff;
        font-family: 'PT Sans', sans-serif;
    }
    
    a:last-of-type {
        margin-right: 0;
    }
`;



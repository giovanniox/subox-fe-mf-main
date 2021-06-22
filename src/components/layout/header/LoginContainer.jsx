import React, { Fragment } from 'react';
import { Link, useHistory } from 'react-router-dom'
import Boton from '../../ui/Boton';
import { useDispatch, useSelector } from 'react-redux';
import { hideHeaderAction } from '../../../redux/actions/showHeaderActions/showHeaderActions';
import { signOutAction } from '../../../redux/actions/authActions/AuthActions'
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components'

const LoginContainer = () => {

    const dispatch = useDispatch();
    const userState = useSelector(state => state.authReducer.userState)
    const history = useHistory()
    const login = userState ? true : false





    return (
        <LoginContainerButtons >
            {login ? (
                <Fragment>
                    <p>Hola: giovanni </p>
                    <Boton bgColor="true" onClick={() => { dispatch(signOutAction(history)) }}>Cerrar Sesión</Boton>
                </Fragment>
            ) : (
                <Fragment>
                    <Link to="/sign-in">
                        <Boton bgColor="true"
                            onClick={() => dispatch(hideHeaderAction())}
                        >
                            <FormattedMessage id="app.header.sign-in" />
                        </Boton>
                    </Link>
                    <Link to="/sign-up">
                        <Boton
                            onClick={() => dispatch(hideHeaderAction())}
                        >Crear Cuenta</Boton>
                    </Link>
                </Fragment>
            )}
        </LoginContainerButtons>
    );
}

export default LoginContainer;

const LoginContainerButtons = styled.div`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
` 
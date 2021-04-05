import React from 'react';
import { Link, useHistory } from 'react-router-dom'
import Boton from '../../../ui/Boton';
import { useDispatch, useSelector } from 'react-redux';
import { hideHeaderAction } from '../../../../redux/actions/showHeaderActions/showHeaderActions';
import { signOutAction } from '../../../../redux/actions/authActions/AuthActions'

const LoginContainer = () => {

    const dispatch = useDispatch();
    const userState = useSelector(state => state.authReducer.userState)
    const history = useHistory()
    const login = userState ? true : false





    return (
        <div className='login-container'>
            {login ? (
                <>
                    <p>Hola: giovanni </p>
                    <Boton bgColor="true" onClick={() => { dispatch(signOutAction(history)) }}>Cerrar Sesión</Boton>
                </>
            ) : (
                <>
                    <Link to="/sign-in">
                        <Boton bgColor="true"
                            onClick={() => dispatch(hideHeaderAction())}
                        >Login</Boton>
                    </Link>
                    <Link to="/sign-up">
                        <Boton
                            onClick={() => dispatch(hideHeaderAction())}
                        >Crear Cuenta</Boton>
                    </Link>
                </>
            )}
        </div>
    );
}

export default LoginContainer;
import React from 'react';
import { Link } from 'react-router-dom'
import Boton from '../../../ui/Boton';
import { useDispatch } from 'react-redux';
import { hideHeaderAction } from '../../../../redux/actions/showHeaderActions/showHeaderActions';


const LoginContainer = () => {

    const dispatch = useDispatch();
    
    

    const login = false


    const hideHeader = () => dispatch( hideHeaderAction() );


    return ( 
        <div className='login-container'>
        {login ? (
            <>
                <p>Hola: giovanni </p>
                <Boton bgColor="true">Cerrar Sesión</Boton>
            </>
        ) : (
            <>
                <Link to="/sign-in">
                    <Boton bgColor="true"
                            onClick={hideHeader}
                    >Login</Boton>
                </Link>
                <Link to="/sign-up">
                    <Boton
                         onClick={hideHeader}
                    >Crear Cuenta</Boton>
                </Link>
            </>
        )}
    </div>
     );
}
 
export default LoginContainer;
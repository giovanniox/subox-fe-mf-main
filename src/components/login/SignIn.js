import React from 'react';
import { Link } from 'react-router-dom';
import { Campo, Error, Formulario, InputSubmit } from './../ui/Formulario'
import useValidation from '../../utils/hooks/useValidation'
import validateSignIn from '../../utils/validacion/validateSignIn'
import { useDispatch } from 'react-redux';
import { signInAction } from '../../redux/actions/authActions/AuthActions'


const INIT_STATE = {
    email: '',
    password: '',
}

const SignIn = () => {

    const dispatch = useDispatch()


    const { values, error, handleSubmit, handleChange } = useValidation(INIT_STATE, validateSignIn,signIn)

    function signIn() {
        dispatch(signInAction(values))
    }
    return (
        <div className='login-pop'>
            <div className='img-login-pop'>
                <img alt='welcomeImage' src='data:image/png;base64,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' />
            </div>
            <div className='title-login-pop'>
                <h3>Iniciar Sesion</h3>
            </div>



            <Formulario onSubmit={handleSubmit}>
                <Campo>
                    <label htmlFor='email'>Correo Electronico</label>
                    <input
                        id='email'
                        name='email'
                        type='email'
                        onChange={handleChange}
                        value={values.email}
                    />

                </Campo>
                {error.email ? <Error>{error.email}</Error> : null}
                <Campo>
                    <label htmlFor='password'>Contraseña</label>
                    <input
                        id='password'
                        name='password'
                        type='password'
                        onChange={handleChange}
                        value={values.password}
                    />

                </Campo>

                {error.password ? <Error>{error.password}</Error> : null}

                <InputSubmit type='submit' value='Ingresar' />
                <div style={{ display: "grid" }}>
                    <Link to='/sign-up'>¿No tienes cuenta?</Link>
                    <Link to='/lost-password'>¿Olvide la contraseña?</Link>
                </div>
            </Formulario>


        </div>
    );
}

export default SignIn;
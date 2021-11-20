import React from 'react'
import { Link } from 'react-router-dom'
import useValidation from '../../../utils/hooks/useValidation'
import validateSignIn from '../../../utils/validacion/validateSignIn'
import './../Login.scss'
import { ButtonFacebook, ButtonGoogle } from '../commons/SocialButtons'

const INIT_STATE = {
  username: '',
  password: '',
}

const SignIn = () => {
  const { values, error, handleSubmit, handleChange } = useValidation(
    INIT_STATE,
    validateSignIn,
    signIn,
  )

  function signIn() {
    console.log('SING IN CONSOLE')
  }
  return (
    <div className="login">
      <div className="login__container">
        <h3 className="login__title">Iniciar Sesion</h3>

        <div className="login__form">
          <ButtonFacebook text="Iniciar Sesion con Facebook" />
          <ButtonGoogle text="Iniciar Sesion con Google" />
          <hr className="login__separado" />
          <div className="login__campo">
            <label className="login__label" htmlFor="username">
              Ingresa usuario
            </label>
            <input
              className="login__input"
              id="username"
              name="username"
              type="text"
              onChange={handleChange}
              value={values.usuario}
            />
            {error.username ? (
              <span className="login__error">{error.username}</span>
            ) : null}
          </div>
          <div className="login__campo">
            <label className="login__label" htmlFor="password">
              Contraseña
            </label>
            <input
              className="login__input"
              id="password"
              name="password"
              type="password"
              onChange={handleChange}
              value={values.password}
            />
            {error.password ? (
              <span className="login__error">{error.password}</span>
            ) : null}
          </div>

          <div className="login_footer-buttons">
            <input
              className="login__button"
              type="submit"
              value="Ingresar"
              onClick={handleSubmit}
            />
            <div className="login_link">
              <Link to="/sign-up">¿No tienes cuenta?</Link>
              <Link to="/lost-password">¿Olvide la contraseña?</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn

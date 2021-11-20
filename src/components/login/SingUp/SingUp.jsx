import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import useValidation from '../../../utils/hooks/useValidation'
import validateSignUp, {
  INIT_STATE,
} from '../../../utils/validacion/validateSignUp'
import { useAlert } from 'react-alert'

import './../Login.scss'
import { ButtonFacebook, ButtonGoogle } from '../commons/SocialButtons'
import FETCH_API from '../../../utils/ApiUtils'
const SignUp = () => {
  const history = useHistory()
  const alert = useAlert()

  const { values, error, handleSubmit, handleChange } = useValidation(
    INIT_STATE,
    validateSignUp,
    signUp,
  )

  function signUp() {
    console.log('SingUp with', values)
    FETCH_API.signUp(values, alert, history)
  }

  return (
    <div className="login">
      <div className="login__container ">
        <h3 className="login__title">Crea una cuenta</h3>

        <div className="login__form">
          <ButtonFacebook text="Crea una cuenta con Facebook" />
          <ButtonGoogle text="Crea una cuenta con Google" />
          <hr />

          <div className="login__campo">
            <label className="login__label" htmlFor="name">
              Nombre de usuario
            </label>
            <input
              className="login__input"
              id="name"
              onChange={handleChange}
              name="name"
              value={values.name}
              type="text"
            />
            {error.name ? (
              <span className="login__error">{error.name}</span>
            ) : null}
          </div>
          <div className="login__campo">
            <label className="login__label" htmlFor="email">
              Correo Electronico
            </label>
            <input
              id="email"
              className="login__input"
              onChange={handleChange}
              name="email"
              value={values.email}
              type="email"
            />
            {error.email ? (
              <span className="login__error">{error.email}</span>
            ) : null}
          </div>
          <div className="login__campo">
            <label className="login__label" htmlFor="password">
              Contraseña
            </label>
            <input
              id="password"
              className="login__input"
              onChange={handleChange}
              name="password"
              value={values.password}
              type="password"
            />
            {error.password ? (
              <span className="login__error">{error.password}</span>
            ) : null}
          </div>

          <div className="login__campo">
            <label className="login__label" htmlFor="rePassword">
              Repita contraseña
            </label>
            <input
              id="rePassword"
              className="login__input"
              onChange={handleChange}
              name="rePassword"
              value={values.rePassword}
              type="password"
            />
            {error.rePassword ? (
              <span className="login__error">{error.rePassword}</span>
            ) : null}
          </div>

          <div className="login_footer-buttons">
            <input
              className="login__button"
              type="submit"
              value="Registrar"
              onClick={handleSubmit}
            />
            <div className="login_link">
              <Link to="/sign-in">¿Ya tines Cuenta?</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp

import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import useValidation from '../../../utils/hooks/useValidation'
import validateSignUp from '../../../utils/validacion/validateSignUp'
import { useDispatch } from 'react-redux'
import { signUpAction } from '../../../redux/actions/authActions/AuthActions'

import './../Login.scss'
const SignUp = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const INIT_STATE = {
    userName: '',
    email: '',
    password: '',
    rePassword: '',
  }

  const { values, error, handleSubmit, handleChange } = useValidation(
    INIT_STATE,
    validateSignUp,
    signUp,
  )

  function signUp() {
    dispatch(signUpAction(values, history))
  }
  return (
    <div className="login">
      <div className="login__container ">
        <h3 className="login__title">Crea una cuenta</h3>

        <div className="login__form">
          <input
            className="login__button login__button--social"
            type="button"
            value="inicia con facebook"
          />
          <input
            className="login__button login__button--social"
            type="button"
            value="inicia con google"
          />
          <hr />

          <div className="login__campo">
            <label className="login__label" htmlFor="userName">
              Nombre de usuario
            </label>
            <input
              className="login__input"
              id="userName"
              onChange={handleChange}
              name="userName"
              value={values.userName}
              type="text"
            />
            {error.userName ? (
              <span className="login__error">{error.userName}</span>
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

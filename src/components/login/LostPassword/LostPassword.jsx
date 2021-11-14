import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import useValidation from '../../../utils/hooks/useValidation'
import validateCodeEmail from '../../../utils/validacion/validateEmail'
import { useDispatch } from 'react-redux'
//import { validateCodeEmailAction } from '../../redux/actions/authActions/AuthActions'

import './../Login.scss'
const LostPassword = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const INIT_STATE = {
    codeValidation: '',
  }

  const { values, error, handleSubmit, handleChange } = useValidation(
    INIT_STATE,
    validateCodeEmail,
    validateEmail,
  )

  function validateEmail() {
    //  dispatch(validateCodeEmailAction(values,history))
  }
  return (
    <div className="login">
      <div className="login__container">
        <h3 className="login__title">Recupera tu contraseña</h3>

        <div className="login__form" onSubmit={handleSubmit}>
          <div className="login__campo">
            <label className="login__label" htmlFor="codeValidation">
              Codigo de validacion
            </label>
            <input
              id="codeValidation"
              className="login__input"
              onChange={handleChange}
              name="codeValidation"
              value={values.codeValidation}
              type="text"
            />
            {error.codeValidation ? (
              <span className="login__error">{error.codeValidation}</span>
            ) : null}
          </div>
          <div className="login_footer-buttons">
            <input className="login__button" type="submit" value="Validar" />
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

export default LostPassword

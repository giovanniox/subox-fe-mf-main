import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import useValidation from '../../../utils/hooks/useValidation'
import validateCodeEmail from '../../../utils/validacion/validateEmail'
import { useDispatch } from 'react-redux'
//import { validateCodeEmailAction } from '../../redux/actions/authActions/AuthActions'
import './LostPassword.css'
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
      <h2 className="login__title">Recupera tu contraseña</h2>

      <form className="login__form" onSubmit={handleSubmit}>
        <div className="login__campo">
          <label htmlFor="codeValidation">Codigo de validacion</label>
          <input
            id="codeValidation"
            onChange={handleChange}
            name="codeValidation"
            value={values.codeValidation}
            type="text"
          />
        </div>
        {error.codeValidation ? <span>{error.codeValidation}</span> : null}

        <input type="submit" value="Validar" />
      </form>
    </div>
  )
}

export default LostPassword

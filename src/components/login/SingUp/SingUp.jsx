import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import useValidation from '../../../utils/hooks/useValidation'
import validateSignUp from '../../../utils/validacion/validateSignUp'
import { useDispatch } from 'react-redux'
import { signUpAction } from '../../../redux/actions/authActions/AuthActions'

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
    <div>
      <div>
        <h3>Crea una cuenta</h3>
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userName">Nombre de usuario</label>
          <input
            id="userName"
            onChange={handleChange}
            name="userName"
            value={values.userName}
            type="text"
          />
        </div>
        {error.userName ? <span>{error.userName}</span> : null}
        <div>
          <label htmlFor="email">Correo Electronico</label>
          <input
            id="email"
            onChange={handleChange}
            name="email"
            value={values.email}
            type="email"
          />
        </div>
        {error.email ? <span>{error.email}</span> : null}
        <div>
          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            onChange={handleChange}
            name="password"
            value={values.password}
            type="password"
          />
        </div>
        {error.password ? <span>{error.password}</span> : null}
        <div>
          <label htmlFor="rePassword">Repita contraseña</label>
          <input
            id="rePassword"
            onChange={handleChange}
            name="rePassword"
            value={values.rePassword}
            type="password"
          />
        </div>
        {error.rePassword ? <span>{error.rePassword}</span> : null}
        <input type="submit" value="Registrar" />
        <div style={{ display: 'grid' }}>
          <Link to="/sign-in">¿Ya tines Cuenta?</Link>
        </div>
      </form>
    </div>
  )
}

export default SignUp

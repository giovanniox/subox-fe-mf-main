import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import useValidation from '../../../utils/hooks/useValidation'
import validateSignIn from '../../../utils/validacion/validateSignIn'
import { useDispatch } from 'react-redux'

const INIT_STATE = {
  username: '',
  password: '',
}

const SignIn = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const { values, error, handleSubmit, handleChange } = useValidation(
    INIT_STATE,
    validateSignIn,
    signIn,
  )

  function signIn() {
    console.log('SING IN CONSOLE')
  }
  return (
    <div>
      <div>
        <h3>Iniciar Sesion</h3>
      </div>

      <form onSubmit={handleSubmit}>
        <button>inicia con facebook</button>
        <button>inicia con google</button>
        <hr />
        <div>
          <label htmlFor="username">Ingresa usuario</label>
          <input
            id="username"
            name="username"
            type="text"
            onChange={handleChange}
            value={values.usuario}
          />
        </div>
        {error.username ? <div>{error.username}</div> : null}
        <div>
          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={handleChange}
            value={values.password}
          />
        </div>
        {error.password ? <div>{error.password}</div> : null}
        <input type="submit" value="Ingresar" />
        <div style={{ display: 'grid' }}>
          <Link to="/sign-up">¿No tienes cuenta?</Link>
          <Link to="/lost-password">¿Olvide la contraseña?</Link>
        </div>
      </form>
    </div>
  )
}

export default SignIn

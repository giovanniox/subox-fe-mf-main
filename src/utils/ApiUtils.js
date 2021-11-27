import clienteAxios, { URLS } from '../config/axios'
import { ACCESS_TOKEN } from '../constants'

const MESSAGES = {
  SIGN_UP_ERROR: '¡UPS! Algo salió mal. ¡Inténtalo de nuevo!',
  SIGN_UP_SUCCESS: 'Exito. ¡Por favor inicie sesión para continuar!',
  SIGN_IN_ERROR: '¡UPS! Algo salió mal. ¡Inténtalo de nuevo!',
  SIGN_IN_SUCCESS: '¡Has iniciado sesión correctamente!',
}

const signUp = async (credentials, alert, history) => {
  await clienteAxios
    .post(URLS.AUTH_SIGN_UP, credentials)
    .then((response) => {
      console.log(response)
      if (response.status === 201) {
        alert.success(MESSAGES.SIGN_UP_SUCCESS)
        history.push('/sign-in')
        return
      }
      alert.error(MESSAGES.SIGN_UP_ERROR)
    })
    .catch(() => {
      alert.error(MESSAGES.SIGN_UP_ERROR)
    })
}

const signIn = async (credentials, alert, history) => {
  await clienteAxios
    .post(URLS.AUTH_SIGN_IN, credentials)
    .then((response) => {
      if (response.status === 200) {
        console.log(response)
        localStorage.setItem(ACCESS_TOKEN, response.data.accessToken)
        alert.success(MESSAGES.SIGN_IN_SUCCESS)
        history.push('/')
        return
      }
      alert.error(MESSAGES.SIGN_IN_ERROR)
    })
    .catch(() => {
      alert.error(MESSAGES.SIGN_IN_ERROR)
    })
}

const FETCH_API = {
  signUp,
  signIn,
}
export default FETCH_API

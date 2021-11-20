import clienteAxios, { URLS } from '../config/axios'

const MESSAGES = {
  SIGN_UP_ERROR: '¡UPS! Algo salió mal. ¡Inténtalo de nuevo!',
  SIGN_UP_SUCCESS:
    'Estás registrado correctamente. ¡Por favor inicie sesión para continuar!',
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
const FETCH_API = {
  signUp,
}
export default FETCH_API

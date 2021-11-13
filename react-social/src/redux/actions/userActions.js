import { USER_TYPES } from './../types/userTypes'
import { ACCESS_TOKEN } from '../../constants'
import Alert from 'react-s-alert'
import clientAxios from '../../config/axios'

const userLogOutAction = () => {
  return (dispatch) => {
    localStorage.removeItem(ACCESS_TOKEN)
    dispatch(logOutSuccess())
    Alert.success('Cierre de sesión exitoso')
  }
}

const userSignInAction = () => {
  return async (dispatch) => {
    await clientAxios
      .get('/user/me')
      .then((response) => {
        response.status == 200
          ? dispatch(signInSuccess(response.data))
          : dispatch(signInFail())
      })
      .catch((e) => {
        console.error(e)
        if (localStorage.getItem(ACCESS_TOKEN)) {
          Alert.error('Fallo el servicio de autentificacion, intenta mas tarde')
        }
        dispatch(signInFail())
      })
  }
}

const USER_ACTIONS = {
  userLogOutAction,
  userSignInAction,
}

export { USER_ACTIONS }

const signInSuccess = (data) => ({
  type: USER_TYPES.USER_SIGNIN,
  payload: {
    authenticated: true,
    currentUser: data,
  },
})

const signInFail = () => ({
  type: USER_TYPES.USER_SIGNIN,
  payload: {
    authenticated: false,
    currentUser: null,
    loading: false,
  },
})

const logOutSuccess = () => ({
  type: USER_TYPES.USER_LOGOUT,
})

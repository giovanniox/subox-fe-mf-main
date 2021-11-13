import { USER_TYPES } from './../types/userTypes'

const initState = {
  authenticated: false,
  currentUser: null,
  loading: true,
}

const reducer = (state = initState, action) => {
  const { type, payload } = action
  switch (type) {
    case USER_TYPES.USER_LOGOUT:
      return {
        ...state,
        authenticated: false,
        currentUser: null,
      }
    case USER_TYPES.USER_SIGNIN:
      return {
        ...state,
        authenticated: payload.authenticated,
        currentUser: payload.currentUser,
        loading: payload.loading,
      }
    case USER_TYPES.FETCH_USER:
      return {
        ...state,
        loading: payload.loading,
      }

    default:
      return state
  }
}

export default reducer

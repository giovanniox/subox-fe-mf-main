import { AUTH_TYPES } from '../types/authTypes'

const initialState = {
  error: null,
}

const authReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case AUTH_TYPES.HANDLER_ERROR:
      return {
        ...state,
        error: payload,
      }
    default:
      return state
  }
}

export default authReducer

import { GENERAL_TYPES } from './../types/generalTypes'

const initState = {
  loading: true,
}

const reducer = (state = initState, action) => {
  const { type, payload } = action
  switch (type) {
    case GENERAL_TYPES.SET_LOADING:
      return {
        ...state,
        loading: payload,
      }

    default:
      return state
  }
}

export default reducer

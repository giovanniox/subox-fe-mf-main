import { FUNTIONAL_TYPES } from './../types/funtionalTypes'

const initialState = {
  isShowSidebar: false,
}

const funtinalReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case FUNTIONAL_TYPES.HANDLER_SIDEBAR:
      return {
        ...state,
        isShowSidebar: payload,
      }
    default:
      return state
  }
}

export default funtinalReducer

import { GENERAL_TYPES } from '../types/generalTypes'

const setLoadingAction = (isLoading) => {
  return (dispatch) => {
    dispatch({
      type: GENERAL_TYPES.SET_LOADING,
      payload: isLoading,
    })
  }
}

const GENERAL_ACTIONS = {
  setLoadingAction,
}

export { GENERAL_ACTIONS }

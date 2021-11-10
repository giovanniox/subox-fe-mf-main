import { FUNTIONAL_TYPES } from './../types/funtionalTypes'

const handlerSidebarAction = (isShow) => {
  return (dispatch) => {
    dispatch(handlerSidebar(isShow))
  }
}

const handlerSidebar = (data) => ({
  type: FUNTIONAL_TYPES.HANDLER_SIDEBAR,
  payload: data,
})

const FUNTIONAL_ACTIONS = {
  handlerSidebarAction,
}

export { FUNTIONAL_ACTIONS }

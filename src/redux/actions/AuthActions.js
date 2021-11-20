import { AUTH_TYPES } from '../types/authTypes'

const AUTH_ACTION = {}

export default AUTH_ACTION

/********************************CODES DISPATCH**********************************/

const handlearError = (data) => ({
  type: AUTH_TYPES.HANDLER_ERROR,
  payload: data,
})
/********************************CODES DISPATCH**********************************/

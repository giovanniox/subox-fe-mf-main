import { combineReducers } from 'redux'
import userReducer from './userReducer'
import generalRedure from './generalRedure'
export default combineReducers({
  user: userReducer,
  general: generalRedure,
})

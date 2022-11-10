import {combineReducers} from 'redux'
import swapDataReducer from './swapDataReducer'
import swapServiceReducer from './swapServiceReducer'

export default combineReducers({
  swap_data: swapDataReducer,
  swap_service: swapServiceReducer,
})

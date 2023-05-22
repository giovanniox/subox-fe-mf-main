import { combineReducers } from 'redux'
import navBarReducer from './navBar/navBarReducer'
import dropDownReducer from './navBar/dropDownReducer'


export default combineReducers(
    {
        navBar: navBarReducer,
        dropDown: dropDownReducer,
    }
)
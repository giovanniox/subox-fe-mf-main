import { combineReducers } from 'redux'
import navBarReducer from './navBarReducer'
import dropDownReducer from './dropDownReducer'


export default combineReducers(
    {
        navBar: navBarReducer,
        dropDown: dropDownReducer,
    }
)
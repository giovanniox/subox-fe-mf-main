import { combineReducers } from 'redux';
import productosReducer from './productosReducer';
import alertaReducer from './alertaReducer';
import showHeader from './showHeaderReducer'
import authReducer from './authReducer'
import shippingType from './shippingTypeReducer'
import { firebaseReducer } from 'react-redux-firebase'

export default combineReducers({
    productos: productosReducer,
    alerta: alertaReducer,
    firebase: firebaseReducer,
    showHeader:showHeader,
    authReducer:authReducer,
    shippingType:shippingType
});
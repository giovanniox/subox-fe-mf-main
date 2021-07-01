import { combineReducers } from 'redux';
import productosReducer from './productosReducer';
import alertaReducer from './alertaReducer';
import showHeader from './showHeaderReducer'
import authReducer from './authReducer'
import shippingTypeReducer from './shippingTypeReducer'
import cartShopReducer from './cartShopReducer'
import configurationPanelReducer from './configurationPanelReducer'

export default combineReducers({
    productos: productosReducer,
    alerta: alertaReducer,
    showHeader:showHeader,
    authReducer:authReducer,
    shippingType:shippingTypeReducer,
    cartShop:cartShopReducer,
    panelStatus:configurationPanelReducer
});
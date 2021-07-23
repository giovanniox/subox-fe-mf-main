import { combineReducers } from 'redux';
import productReducer from './productReducer';
import showHeader from './showHeaderReducer'
import authReducer from './authReducer'
import shippingTypeReducer from './shippingTypeReducer'
import cartShopReducer from './cartShopReducer'
import configurationPanelReducer from './configurationPanelReducer'

export default combineReducers({
    product: productReducer,
    showHeader:showHeader,
    authReducer:authReducer,
    shippingType:shippingTypeReducer,
    cartShop:cartShopReducer,
    panelStatus:configurationPanelReducer
});
import { combineReducers } from 'redux'
import productReducer from './productReducer'
import showHeader from './showHeaderReducer'
import shippingTypeReducer from './shippingTypeReducer'
import cartShopReducer from './cartShopReducer'
import configurationPanelReducer from './configurationPanelReducer'
import funtionalReducer from './funtionalReducer'
import authReducer from './authReducer2'
export default combineReducers({
  product: productReducer,
  showHeader: showHeader,
  authReducer: authReducer,
  shippingType: shippingTypeReducer,
  cartShop: cartShopReducer,
  panelStatus: configurationPanelReducer,
  funtional: funtionalReducer,
  auth: authReducer,
})

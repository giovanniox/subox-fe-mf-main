import {
    INIT_CART_SHOP,
    UPDATE_CART_SHOP,
    CLEAR_CART_SHOP,
} from '../types';


export function initCartShop() {
    return (dispatch) => {
        dispatch(initCartShopFn(true))
    }
}

export function updateCartShop() {
    return (dispatch) => {
        dispatch(updateCartShopFn(false))
    }
}

export function clearCartShop() {
    return (dispatch) => {
        dispatch(clearCartShopFn(false))
    }
}

const initCartShopFn = status => ({
    type: INIT_CART_SHOP,
    payload: status
})

const updateCartShopFn = status => ({
    type: UPDATE_CART_SHOP,
    payload: status
})

const clearCartShopFn = status => ({
    type: CLEAR_CART_SHOP,
    payload: status
})
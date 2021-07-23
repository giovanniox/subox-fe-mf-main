import {
    INIT_CART_SHOP,
    UPDATE_CART_SHOP,
    CLEAR_CART_SHOP,
    MODAL_CART_SHOP,
    DELETE_CART_ITEM

} from '../types';


export function initCartShop() {
    return (dispatch) => {
        dispatch(initCartShopFn(true))
    }
}

export function updateCartShop(product) {
    return (dispatch) => {
        dispatch(updateCartShopFn(product))
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

export function modalCartShopAction(status) {
    return (dispatch) => {
        dispatch(modalCartShop(!status))
    }
}

const modalCartShop = status => ({
    type: MODAL_CART_SHOP,
    payload: status
})

export function deleteItemCartShop(product) {
    return (dispatch) => {
        dispatch(deleteItemCartShopFn(product))
    }
}
const deleteItemCartShopFn = product => ({
    type: DELETE_CART_ITEM,
    payload: product
})

const updateCartShopFn = status => ({
    type: UPDATE_CART_SHOP,
    payload: status
})

const clearCartShopFn = status => ({
    type: CLEAR_CART_SHOP,
    payload: status
})
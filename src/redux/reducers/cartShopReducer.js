

import {
    INIT_CART_SHOP,
    UPDATE_CART_SHOP,
    CLEAR_CART_SHOP,
    MODAL_CART_SHOP,
    DELETE_CART_ITEM

} from '../types';


const initialState = {
    id: null,
    items: [],
    user: null,
    total: null,
    modalShow: false,
    error: false,
}

export default function fn(state = initialState, action) {
    switch (action.type) {

        case MODAL_CART_SHOP:
            return {
                ...state,
                modalShow: action.payload,
                error: false,
            }
        case INIT_CART_SHOP:
            return {
                ...state,
                error: false,
            }
        case UPDATE_CART_SHOP:
            return {
                ...state,
                items: [...state.items, action.payload],
                error: false,
            }
        case DELETE_CART_ITEM:
            return {
                ...state,
                items: action.payload,
                error: false,
            }

        case CLEAR_CART_SHOP:
            return {
                ...state,
                authError: action.payload,
                userState: null,
                user: null,
                error: false,
            }
        default:
            return state;
    }
}
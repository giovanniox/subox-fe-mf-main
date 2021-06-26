

import {
    INIT_CART_SHOP,
    UPDATE_CART_SHOP,
    CLEAR_CART_SHOP,
} from '../types';


const initialState = {
    id: null,
    items: [],
    user: null,
    total: null,
    localStorage: null,
}

export default function fn(state = initialState, action) {
    switch (action.type) {
        case   INIT_CART_SHOP:
            return {
               
            }
        case UPDATE_CART_SHOP:
            return {
                ...state,
            }
        case CLEAR_CART_SHOP:
            return {
                ...state,
                authError: action.payload,
                userState: null,
                user: null,
            }
        default:
            return state;
    }
}
import {
    SELECT_TYPE_SHIPPING_OFFICE,
    SELECT_TYPE_SHIPPING_DISPATCH
} from '../types';

const initialState = {
    shippingType: false
}

export default function fn(state = initialState, action) {
    switch(action.type) {
        case SELECT_TYPE_SHIPPING_OFFICE:
            return {
                ...state,
                shippingType: action.payload
            }
        case SELECT_TYPE_SHIPPING_DISPATCH:
            return {
                ...state,
                shippingType: action.payload
            }
        default:
            return state;
    }
}
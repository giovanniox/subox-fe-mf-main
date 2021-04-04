import {
    SHOW_HEADER,
    HIDE_HEADER
} from '../types';

const initialState = {
    headerIsShow: false
}

export default function fn(state = initialState, action) {
    switch(action.type) {
        case SHOW_HEADER:
            return {
                ...state,
                headerIsShow: action.payload
            }
        case HIDE_HEADER:
            return {
                ...state,
                headerIsShow: action.payload
            }
        default:
            return state;
    }
}
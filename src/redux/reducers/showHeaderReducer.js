import {
    SHOW_HEADER,
    HIDE_HEADER,
    HIDE_FOOTER,
    SHOW_FOOTER
} from '../types';

const initialState = {
    headerIsShow: false,
    footerIsShow: false,
}

export default function fn(state = initialState, action) {
    switch (action.type) {
        case SHOW_HEADER:
            return {
                ...state,
                headerIsShow: action.payload,
            }
        case SHOW_FOOTER:
            return {
                ...state,
                footerIsShow: action.payload
            }
        case HIDE_HEADER:
            return {
                ...state,
                headerIsShow: action.payload,
            }
        case HIDE_FOOTER:
            return {
                ...state,
                footerIsShow: action.payload
            }
        default:
            return state;
    }
}
import {
    AUTH_SING_IN_SUCCESS,
    AUTH_SIGN_IN_ERROR,
    AUTH_SING_OUT_SUCCESS,
    AUTH_SIGN_OUT_ERROR,
    AUTH_SING_UP_SUCCESS,
    AUTH_SIGN_UP_ERROR,
} from '../types';


const initialState = {
    userState: null,
    authError: null,
    user: null,
    validatedEmail: false,
}

export default function fn(state = initialState, action) {
    switch (action.type) {
        case AUTH_SING_IN_SUCCESS:
        case AUTH_SING_UP_SUCCESS:
            return {
                ...state,
                userState: true,
                user: action.payload,
                authError: null,
            }
        case AUTH_SIGN_IN_ERROR:
        case AUTH_SIGN_UP_ERROR:
            return {
                ...state,
                userState: null,
                user: null,
                authError: action.payload,
            }
        case AUTH_SING_OUT_SUCCESS:
        case AUTH_SIGN_OUT_ERROR:
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
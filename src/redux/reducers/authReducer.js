import {
    AUTH_SING_IN_SUCCESS,
    AUTH_SIGN_IN_ERROR,
    AUTH_SING_OUT_SUCCESS,
    AUTH_SING_UP_SUCCESS,
    AUTH_SIGN_UP_ERROR,
} from '../types';


const initialState = {
    userState: null,
    authError: null,
    errorType: null,
    user: null,
    validatedEmail: null,
    typeUser: null,
}

export default function fn(state = initialState, action) {
    switch (action.type) {
        case AUTH_SING_IN_SUCCESS:
        case AUTH_SING_UP_SUCCESS:
            return {
                ...state,
                userState: action.payload.userState,
                authError: action.payload.authError,
                errorType: null,
                user: action.payload.user,
                validatedEmail: action.payload.validatedEmail,
                typeUser: action.payload.typeUser,
            }
        case AUTH_SIGN_IN_ERROR:
        case AUTH_SIGN_UP_ERROR:
            return {
                ...state,
                userState: null,
                authError: action.payload,
                user: null,
                validatedEmail: null,
                typeUser: null,
            }
        case AUTH_SING_OUT_SUCCESS:
            return {
                ...state,
                userState: null,
                authError: action.payload,
                user: null,
                validatedEmail: null,
                typeUser: null,
            }
        default:
            return state;
    }
}
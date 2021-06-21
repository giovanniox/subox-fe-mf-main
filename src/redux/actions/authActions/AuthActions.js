import {
    AUTH_SING_IN_SUCCESS,
    AUTH_SIGN_IN_ERROR,
    AUTH_SING_OUT_SUCCESS,
    AUTH_SIGN_OUT_ERROR,
    AUTH_SING_UP_SUCCESS,
    AUTH_SIGN_UP_ERROR,
} from '../../types';
import jwt_decode from "jwt-decode";
import clienteAxios, { data, USER_ID_APP, PASSWORD_APP } from '../../../config/axios';

export function signInAction(credentials, history) {
    return async (dispatch) => {
        try {
            await clienteAxios.post('/api/security/oauth/token', data(credentials), {
                auth: {
                    username: USER_ID_APP,
                    password: PASSWORD_APP
                },
            }).then(function (res) {
                console.log(res)
                
            })
        } catch (error) {
            console.warn("error trying to login, invalid credentials")
            console.error(error);
            dispatch(signUpError("error trying to login, invalid credentials"));
        }
    }
}

export function signUpAction(credentials) {
    return async (dispatch) => {
        try {
            await clienteAxios.post('/users', credentials);
            dispatch(signUpSuccess(credentials));
        } catch (error) {
            console.log(error);
            dispatch(signUpError(error));
        }
    }
}

export function signOutAction(history) {
    return async (dispatch) => {
        console.log("signOut")
    }
}



const signInSuccess = (state) => ({
    type: AUTH_SING_IN_SUCCESS,
    payload: state
})

const signInError = (state) => ({
    type: AUTH_SIGN_IN_ERROR,
    payload: state
})

const signUpSuccess = (state) => ({
    type: AUTH_SING_UP_SUCCESS,
    payload: state
})

const signUpError = (state) => ({
    type: AUTH_SIGN_UP_ERROR,
    payload: state
})

const signOutSuccess = (state) => ({
    type: AUTH_SING_OUT_SUCCESS,
    payload: state
})

const signOutError = (state) => ({
    type: AUTH_SIGN_OUT_ERROR,
    payload: state
})

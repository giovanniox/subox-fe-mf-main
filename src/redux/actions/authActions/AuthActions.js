import {
    AUTH_SING_IN_SUCCESS,
    AUTH_SIGN_IN_ERROR,
    AUTH_SING_OUT_SUCCESS,
    AUTH_SING_UP_SUCCESS,
    AUTH_SIGN_UP_ERROR,
} from '../../types';
import clienteAxios, { data, USER_ID_APP, PASSWORD_APP } from '../../../config/axios';


export function signInAction(credentials, history) {
    let initialState = {
        userState: null,
        authError: null,
        errorType: null,
        user: null,
        validatedEmail: null,
        typeUser: null,
    }

    return async (dispatch) => {
        try {
            await clienteAxios.post('/api/security/oauth/token', data(credentials), {
                auth: {
                    username: USER_ID_APP,
                    password: PASSWORD_APP
                },
            }).then(function (res) {
                if (res.status === 200) {
                    if (res.data.user.enabled === false) {
                        dispatch(signInError("Usuario deshabilitado, comuniquese con el administrador para solucionar problema"));
                        initialState.authError = true
                        initialState.errorType = 403
                    }
                    initialState.user = res.data.user
                    initialState.validatedEmail = res.data.user.emailValid
                    initialState.typeUser = res.data.user.roles
                    initialState.userState = true
                    dispatch(signInSuccess(initialState))
                    if (res.data.user.emailValid === false) {
                        history.push("/validate-email")
                    } else {
                        history.push("/")
                    }
                } else {
                    dispatch(signInError("Fallo al intenter iniciar sesion"));
                }
            })
        } catch (error) {
            console.warn("error trying to login, invalid credentials")
            console.error(error);
            dispatch(signInError("error trying to login, invalid credentials"));
        }
    }
}




export function signOutAction(history) {
    let initialState = {
        userState: null,
        authError: null,
        errorType: null,
        user: null,
        validatedEmail: null,
        typeUser: null,
    }

    return async (dispatch) => {
        console.log("signOut")
        history.push("/")
        dispatch(signOutSuccess(initialState))
    }
}









export function signUpAction(credentials, history) {
    let initialState = {
        userState: null,
        authError: null,
        errorType: null,
        user: null,
        validatedEmail: null,
        typeUser: null,
    }


    let tmpDate = new Date();
    let now = tmpDate.getTime();
    let body = {
        "userName": credentials.userName,
        "password": credentials.password,
        "enabled": true,
        "emailValid": true,
        "roles": [1],
        "createAt": now,
        "email": credentials.email
    }
    return async (dispatch) => {
        try {
            await clienteAxios.post('/api/user/createNewUser', body).then(res => {
                console.log(res)
                if (res.status === 200) {
                    initialState.userState = true
                    initialState.user = res.data
                    initialState.validatedEmail = res.data.emailValid
                    initialState.typeUser = res.data.roles
                    dispatch(signUpSuccess(initialState));
                    
                    history.push("/")
                }
            });
        } catch (error) {
            console.log(error);
            initialState.authError = true
            initialState.errorType = 500
            dispatch(signUpError(initialState));
            
        }
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

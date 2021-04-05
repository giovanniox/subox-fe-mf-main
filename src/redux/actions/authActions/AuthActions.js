import {
    AUTH_SING_IN_SUCCESS,
    AUTH_SIGN_IN_ERROR,
    AUTH_SING_OUT_SUCCESS,
    AUTH_SIGN_OUT_ERROR,
    AUTH_SING_UP_SUCCESS,
    AUTH_SIGN_UP_ERROR,
} from '../../types';
import firebaseInstance from '../../../config/firebase/Firebase'


export function signInAction(credentials) {
    return async (dispatch) => {
        await firebaseInstance.signIn(credentials)
            .then(result => {
                console.log(result);
                dispatch(signInSuccess(null))
            })
            .catch(error => {
                console.log(error);
                dispatch(signInError("SignIn error"))
            });

    }
}

export function signUpAction(credentials) {
    return async (dispatch) => {
        await firebaseInstance.signUp(credentials)

    }
}

export function signOutAction(history) {
    return async (dispatch) => {
        console.log("signOut")
        await firebaseInstance.signOut()
            .then(() => {             
                dispatch(signOutSuccess(null))
                history.push("/")
            })
            .catch(error => {
                console.log(error);
                dispatch(signOutError("SignUp error"))
            });
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

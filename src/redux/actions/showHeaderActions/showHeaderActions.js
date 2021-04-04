import {
    SHOW_HEADER,
    HIDE_HEADER
} from '../../types';

// Muestra alerta
export function showHeaderAction() {
    return (dispatch) => {
        dispatch(showHeader(true))
    }
}

export function hideHeaderAction() {
    return (dispatch) => {
        dispatch(hideHeader(false))
    }
}

const showHeader = status => ({
    type: SHOW_HEADER,
    payload: status
})

const hideHeader = status => ({
    type: HIDE_HEADER,
    payload: status
})


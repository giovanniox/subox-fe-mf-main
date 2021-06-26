import {
    SHOW_HEADER,
    HIDE_HEADER,
    HIDE_FOOTER,
    SHOW_FOOTER
} from '../../types';


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

export function showFooterAction() {
    return (dispatch) => {
        dispatch(showFooter(true))
    }
}

export function hideFooterAction() {
    return (dispatch) => {
        dispatch(hideFooter(false))
    }
}

const showFooter = status => ({
    type: SHOW_FOOTER,
    payload: status
})

const hideFooter = status => ({
    type: HIDE_FOOTER,
    payload: status
})

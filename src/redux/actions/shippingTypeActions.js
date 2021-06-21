import {
    SELECT_TYPE_SHIPPING_OFFICE,
    SELECT_TYPE_SHIPPING_DISPATCH
} from '../types';

export function selectDispatch() {
    return (dispatch) => {
        dispatch(officeType(true))
    }
}

export function selectOnOffice() {
    return (dispatch) => {
        dispatch(dispatchType(false))
    }
}

const dispatchType = status => ({
    type: SELECT_TYPE_SHIPPING_DISPATCH,
    payload: status
})

const officeType = status => ({
    type: SELECT_TYPE_SHIPPING_OFFICE,
    payload: status
})


import { AUTH_TYPE } from '../types/authType'

const initState = {
    auth: {},
}

const authReducer = (state = initState, action) => {
    let { type, payload } = action
    switch (type) {
        case AUTH_TYPE.LOGIN: {
            return {
                ...state,
                auth: payload,
            }
        }
        case AUTH_TYPE.REGISTER: {
            return {
                ...state,
                auth: payload,
            }
        }
        default:
            return state
    }
}

export default authReducer;
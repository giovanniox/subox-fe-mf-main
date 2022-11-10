import {NAVBAR_TYPE} from '../types/navbarType'

const initState = {
    fetch: false,
    items: undefined,
    error: undefined,
}

const navbarReducer = (state = initState, action) => {
    let {type, payload} = action
    switch (type) {
        case NAVBAR_TYPE.GET_ITEMS_NAVBAR: {
            return {
                ...state,
                list: payload.items,
                fetch: payload.fetch,
                error: payload.error
            }
        }

        default:
            return state
    }
}

export default navbarReducer;
import { NAVBAR_TYPE } from '../types/navbarType'

const initState = {
    items: [],
}

const navbarReducer = (state = initState, action) => {
    let { type, payload } = action
    switch (type) {
        case NAVBAR_TYPE.GET_ITEMS_NAVBAR: {
            return {
                ...state,
                items: payload.items,
            }
        }

        default:
            return state
    }
}

export default navbarReducer;
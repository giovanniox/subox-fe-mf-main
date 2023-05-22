import { NAVBAR_TYPE } from '../../types/navBar/navBarType'

const initState = {
    items: [],
}

const navBarReducer = (state = initState, action) => {
    let { type, payload } = action
    switch (type) {
        case NAVBAR_TYPE.GET_ITEMS_NAVBAR: {
            return {
                ...state,
                items: payload,
            }
        }
        default:
            return state
    }
}

export default navBarReducer;
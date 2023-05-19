import {DROPDOWN_TYPE} from '../types/dropDownType'

const initState = {
    dropDownSelected: null,
    dropDownIsShow: false
}

const dropDownReducer = (state = initState, action) => {
    let { type, payload } = action
    switch (type) {
        case DROPDOWN_TYPE.TOGGLE_DROPDOWN: {
            return {
                ...state,
                dropDownSelected: payload.name ? payload.name : null,
                dropDownIsShow: !payload.dropDown,
            }
        }
        default:
            return state
    }
}

export default dropDownReducer;
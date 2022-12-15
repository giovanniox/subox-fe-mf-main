import { DROPDOWN_TYPE } from '../types/dropDownType'

const initState = {
    dropDown: [],
    dropDownSelected: null,
    dropDownIsShow: false,
}

const dropDownReducer = (state = initState, action) => {
    let { type, payload } = action
    switch (type) {
        case DROPDOWN_TYPE.DROPDOWN_GET: {
            return {
                ...state,
                dropDown: payload,
            }
        }
        case DROPDOWN_TYPE.SET_SELECTED_DROPDOWN: {
            return {
                ...state,
                dropDownSelected: payload,
            }
        }
        case DROPDOWN_TYPE.TOOGLE_DROPDOWN: {
            return {
                ...state,
                dropDownIsShow: !payload,
            }
        }
        default:
            return state
    }
}

export default dropDownReducer;
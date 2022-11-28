import { DROPDOWN_TYPE } from '../types/dropDownType'

const initState = {
    dropDown: undefined,
    dropDownSelected: undefined,
    dropDownIsShow: undefined,
}

const dropDownReducer = (state = initState, action) => {
    let { type, payload } = action
    switch (type) {
        case DROPDOWN_TYPE.DROPDOWN_GET: {
            return {
                ...state,
                dropDown: payload.dropDown,
            }
        }
        case DROPDOWN_TYPE.SET_SELECTED_DROPDOWN: {
            return {
                ...state,
                dropDownSelected: payload.dropDownSelected,
            }
        }
        case DROPDOWN_TYPE.TOOGLE_DROPDOWN: {
            return {
                ...state,
                dropDownIsShow: !payload.dropDownIsShow,
            }
        }
        default:
            return state
    }
}

export default dropDownReducer;
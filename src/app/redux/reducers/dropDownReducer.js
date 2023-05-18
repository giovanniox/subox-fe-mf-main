import { DROPDOWN_TYPE } from '../types/dropDownType'

const initState = {
    dropDown: [],
    dropDownSelected: null,
    dropDownIsShow: false,
}

const dropDownReducer = (state = initState, action) => {
    let { type, payload } = action
    switch (type) {
        case DROPDOWN_TYPE.TOGGLE_DROPDOWN: {
            return {
                ...state,
                dropDown: payload?.children ,
                dropDownSelected: payload.name ,
                dropDownIsShow: !payload.dropDown ,
            }
        }
        default:
            return state
    }
}

export default dropDownReducer;
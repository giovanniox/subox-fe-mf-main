import {DROPDOWN_TYPE} from '../../types/navBar/dropDownType'

const initState = {
    dropDownSelected: null,
    dropDownIsShow: false,
    children:null
}

const dropDownReducer = (state = initState, action) => {
    let { type, payload } = action
    switch (type) {
        case DROPDOWN_TYPE.TOGGLE_DROPDOWN: {
            return {
                ...state,
                dropDownSelected: payload.name ? payload.name : null,
                dropDownIsShow: !payload.dropDown,
                children: payload?.children
            }
        }
        default:
            return state
    }
}

export default dropDownReducer;
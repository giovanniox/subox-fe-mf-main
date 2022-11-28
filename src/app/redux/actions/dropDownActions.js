import { DROPDOWN_TYPE } from '../types/dropDownType'

const dropDownGet = (dropdown) => {
    return dispatch => {
        dispatch(DROPDOWN_GET(dropdown))
    }
}
const setSelectedDropDown = (dropDownSelected) => {
    return dispatch => {
        dispatch(SET_SELECTED_DROPDOWN(dropDownSelected))
    }
}
const toogleDropDown = (dropDownIsShow) => {
    return dispatch => {
        dispatch(TOOGLE_DROPDOWN(dropDownIsShow))
    }
}

const DROPDOWN_GET = ({ dropdown }) => ({
    type: DROPDOWN_TYPE.DROPDOWN_GET, 
    payload: { dropdown: dropdown, }
})
const SET_SELECTED_DROPDOWN = ({ dropDownSelected }) => ({
    type: DROPDOWN_TYPE.SET_SELECTED_DROPDOWN, 
    payload: { dropDownSelected: dropDownSelected, }
})
const TOOGLE_DROPDOWN = ({ dropDownIsShow }) => ({
    type: DROPDOWN_TYPE.TOOGLE_DROPDOWN, 
    payload: { dropDownIsShow: dropDownIsShow, }
})

const DROPDOWN_ACTIONS = {
    dropDownGet,
    setSelectedDropDown,
    toogleDropDown
}

export { DROPDOWN_ACTIONS }
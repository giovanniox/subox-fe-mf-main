import { DROPDOWN_TYPE } from '../../types/navBar/dropDownType'
const toogleDropDown = (item) => {
    return dispatch => {
        dispatch(TOOGLE_DROPDOWN(item))
    }
}
const TOOGLE_DROPDOWN = ( item) => ({
    type: DROPDOWN_TYPE.TOGGLE_DROPDOWN,
    payload:item
})

const DROPDOWN_ACTIONS = {
    toogleDropDown
}

export { DROPDOWN_ACTIONS }
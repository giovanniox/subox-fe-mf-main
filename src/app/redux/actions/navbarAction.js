import {NAVBAR_TYPE} from '../types/navBarType'

const getItemsNavbar = items => ({
    type: NAVBAR_TYPE.GET_ITEMS_NAVBAR,
    payload: items,
})

const NAVBAR_ACTIONS = {
    getItemsNavbar,

}

export {NAVBAR_ACTIONS}
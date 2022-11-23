import { NAVBAR_TYPE } from '../types/navbarType'

const URL_NAVBAR = 'http://localhost:3004/navbar';
const getItemsNavbar = () => {
    return (dispatch) => {
        return fetch(URL_NAVBAR).then(json => {
            json.json().then((e) => (dispatch({
                type: NAVBAR_TYPE.GET_ITEMS_NAVBAR,
                payload: {
                    items: e
                }
            }))
            )

        }).catch(() => {
            return dispatch => dispatch({
                type: NAVBAR_TYPE.GET_ITEMS_NAVBAR,
                payload: {
                    items: [],
                }
            })
        });
    };
}

const getDropDownNavBar = (toggleTo) => {
    return dispatch => {
        dispatch({
            type: NAVBAR_TYPE.GET_DROPDOWN_NAVBAR,
            payload: {
                dropDown: {
                    of: toggleTo,
                },
            }
        })
    }
}
const toggleDropDownNavBar = (isShow) => {
    return dispatch => {
        dispatch({
            type: NAVBAR_TYPE.TOGGLE_DROPDOWN_NAVBAR,
            payload: {
                dropDown: {
                    isShow
                },
            }
        })
    }
}

const NAVBAR_ACTIONS = {
    getItemsNavbar,
    getDropDownNavBar,
    toggleDropDownNavBar
}

export { NAVBAR_ACTIONS }

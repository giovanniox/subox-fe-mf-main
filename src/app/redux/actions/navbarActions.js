import { NAVBAR_TYPE } from '../types/navBarType'

const URL_NAVBAR = 'http://localhost:3004/navBar';

const getItemsNavBar = () => {
    return (dispatch) => {
        return fetch(URL_NAVBAR).then(json => {
            json.json().then((items) => {
                dispatch(GET_ITEMS_NAVBAR(items))
            })
        }).catch(() => {
            return dispatch => dispatch(GET_ITEMS_NAVBAR([]))
        });
    };
}

const NAVBAR_ACTIONS = {
    getItemsNavBar,
}

export { NAVBAR_ACTIONS }

const GET_ITEMS_NAVBAR = (items) => ({
    type: NAVBAR_TYPE.GET_ITEMS_NAVBAR,
    payload: items
})
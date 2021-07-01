import {
    SET_STATUS_CONFIGURATION
} from '../types';


export function setStatusConfiguration(status) {
    return (dispatch) => {
        if(status !== null)
        dispatch(setStatusConfigurationAction(status))
        else
        dispatch(setStatusConfigurationAction("perfil"))
    }
}



const setStatusConfigurationAction = status => ({
    type:  SET_STATUS_CONFIGURATION,
    payload: status
})

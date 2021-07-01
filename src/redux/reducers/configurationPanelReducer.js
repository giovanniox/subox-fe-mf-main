

import {
    SET_STATUS_CONFIGURATION
} from '../types';


const initialState = {
    status: "perfil",
    buttons: [
        {
            title: 'Mi Perfil',
            name: 'perfil',
        },
        {
            title: 'Estado de Productos',
            name: 'statusProduct',
        },
        {
            title: 'Administrar Productos',
            name: 'manageProduct',
        },
        {
            title: 'Administrar Sucursal',
            name: 'manageBranch',
        },
        {
            title: 'Administrador de administradores',
            name: 'manageManagers',
        }

    ]
}

export default function fn(state = initialState, action) {
    switch (action.type) {
        case SET_STATUS_CONFIGURATION:
            return {
                ...state,
                status: action.payload,
            }
        default:
            return state;
    }
}
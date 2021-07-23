

import {
    SET_STATUS_CONFIGURATION
} from '../types';


const initialState = {
    status: "perfil",
    buttons: [
        {
            title: 'Mi Perfil',
            name: 'perfil',
            role: [
                "ROLE_ADMIN","ROLE_USER","ROLE_DELIVERY"
            ]
        },
        {
            title: 'Estado de Pedidos',
            name: 'statusProduct',
            role: [
                "ROLE_ADMIN","ROLE_USER","ROLE_DELIVERY"
            ]
        },
        {
            title: 'Administrar Productos',
            name: 'manageProduct',
            role: [
                "ROLE_ADMIN","ROLE_DELIVERY"
            ]
        },
        {
            title: 'Administrar Sucursal',
            name: 'manageBranch',
            role: [
                "ROLE_ADMIN"
            ]
        },
        {
            title: 'Administrador de administradores',
            name: 'manageManagers',
            role: [
                "ROLE_ADMIN"
            ]
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
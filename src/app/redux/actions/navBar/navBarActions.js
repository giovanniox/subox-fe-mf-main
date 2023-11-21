import { NAVBAR_TYPE } from '../../types/navBar/navBarType'

const URL_NAVBAR = 'http://localhost:7000/api/navbar/navbar';
const getItemsNavBar = () => {
    return (dispatch) => {
            return fetch(URL_NAVBAR).then(json => {
            json.json().then((items) => {
                console.log();
                dispatch(GET_ITEMS_NAVBAR(NAVBAR))
            })
        }).catch(() => {
            return dispatch => dispatch(GET_ITEMS_NAVBAR(NAVBAR))
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


const NAVBAR =  [
    {
      "id": 0,
      "name": "Tienda",
      "to": "/",
      "type": "list",
      "dropDown": true,
      "children": [
        {
          "id": 0,
          "name": "Ropa para Hombres",
          "to": "/store/ropa-hombres",
          "type": "store"
        },
        {
          "id": 1,
          "name": "Ropa para Mujeres",
          "to": "/store/ropa-mujeres",
          "type": "store"
        }
      ]
    },
    {
      "id": 1,
      "name": "Eventos",
      "to": "/events",
      "type": "list",
      "dropDown": false
    },
    {
      "id": 2,
      "name": "Información",
      "to": "#",
      "type": "session",
      "dropDown": true,
      "children": [
        {
          "id": 0,
          "name": "Sobre Nosotros",
          "to": "/about",
          "type": "session"
        },
        {
          "id": 1,
          "name": "Preguntas Frecuentes",
          "to": "/preguntas-frecuentes",
          "type": "session"
        },
        {
          "id": 2,
          "name": "Sistema de Envíos",
          "to": "/info_envios",
          "type": "session"
        },
        {
          "id": 3,
          "name": "Empleos",
          "to": "/empleos",
          "type": "session"
        }
      ]
    },
    {
      "id": 3,
      "name": "Cuenta",
      "to": "#",
      "type": "session",
      "dropDown": true,
      "children": [
        {
          "id": 0,
          "name": "Ingresar",
          "to": "/login",
          "type": "session"
        },
        {
          "id": 1,
          "name": "Registrarse",
          "to": "/sign-in",
          "type": "session"
        },
        {
          "id": 2,
          "name": "Ayuda",
          "to": "/help",
          "type": "session"
        }
      ]
    }
  ]
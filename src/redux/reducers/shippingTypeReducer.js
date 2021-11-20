import {
  SELECT_TYPE_SHIPPING_OFFICE,
  SELECT_TYPE_SHIPPING_DISPATCH,
  FETCH_REGION,
  FETCH_CITY,
  FETCH_COMMUNE,
  FETCH_ADDRESS_ERROR,
  GET_ORDER_SET_ADDRESS,
  CLEAR_CITY,
  REGION_SELECT,
  CITY_SELECT,
  CLEAR_COMMUNE,
  COMMUNE_SELECT,
  SAVE_ADDRESS,
  COMPLETE_DEPTO,
  COMPLETE_OFFICE,
  ADD_NEW_ADDRESS,
  FIND_COMMUNE_BY_ID,
  SELECT_BRANCH_OFFICE,
  FULL_ADDRES_FOR_SELL,
} from '../types'

const initialState = {
  shippingType: false,
  loadError: false,
  branch: null,
  commune: null,
  city: null,
  region: null,
  streetNumber: '',
  streetName: '',
  depto: '',
  office: '',
  description: '',
  regionSelect: null,
  citySelect: null,
  communeSelect: null,
  saveAddress: false,
  completeOffice: false,
  completeDepto: false,
  newAddress: false,
  traceCommune: '',
  fullAddresForSell: '',
}

export default function fn(state = initialState, action) {
  switch (action.type) {
    case FULL_ADDRES_FOR_SELL:
      return {
        ...state,
        loadError: false,
        fullAddresForSell: action.payload,
      }

    case FIND_COMMUNE_BY_ID:
      return {
        ...state,
        loadError: false,
        traceCommune: action.payload,
      }
    case COMPLETE_OFFICE:
      return {
        ...state,
        loadError: false,
        completeOffice: action.payload,
      }
    case ADD_NEW_ADDRESS:
      return {
        ...state,
        loadError: false,
        newAddress: action.payload,
      }
    case COMPLETE_DEPTO:
      return {
        ...state,
        loadError: false,
        completeDepto: action.payload,
      }
    case SAVE_ADDRESS:
      return {
        ...state,
        loadError: false,
        saveAddress: action.payload,
      }
    case SELECT_TYPE_SHIPPING_OFFICE:
      return {
        ...state,
        loadError: false,
        shippingType: action.payload,
      }
    case SELECT_TYPE_SHIPPING_DISPATCH:
      return {
        ...state,
        loadError: false,
        shippingType: action.payload,
      }
    case FETCH_REGION:
      return {
        ...state,
        loadError: false,
        region: action.payload,
      }
    case FETCH_CITY:
      return {
        ...state,
        loadError: false,
        city: action.payload,
      }
    case FETCH_COMMUNE:
      return {
        ...state,
        loadError: false,
        commune: action.payload,
      }
    case SELECT_BRANCH_OFFICE:
      return {
        ...state,
        loadError: false,
        branch: action.payload,
      }
    case FETCH_ADDRESS_ERROR:
      return {
        ...state,
        loadError: action.payload,
      }
    case GET_ORDER_SET_ADDRESS:
      return {
        ...state,
        loadError: false,
        streetNumber: action.payload.streetNumber,
        streetName: action.payload.streetName,
        depto: action.payload.depto,
        office: action.payload.office,
        description: action.payload.description,
      }
    case CLEAR_CITY:
      return {
        ...state,
        loadError: false,
        city: action.payload,
      }
    case REGION_SELECT:
      return {
        ...state,
        loadError: false,
        regionSelect: action.payload,
      }
    case CLEAR_COMMUNE:
      return {
        ...state,
        loadError: false,
        commune: action.payload,
      }
    case CITY_SELECT:
      return {
        ...state,
        loadError: false,
        citySelect: action.payload,
      }

    case COMMUNE_SELECT:
      return {
        ...state,
        loadError: false,
        communeSelect: action.payload,
      }

    default:
      return state
  }
}

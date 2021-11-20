import {
  SELECT_TYPE_SHIPPING_OFFICE,
  SELECT_TYPE_SHIPPING_DISPATCH,
  FETCH_REGION,
  FETCH_CITY,
  FETCH_COMMUNE,
  ADD_NEW_ADDRESS,
  GET_ORDER_SET_ADDRESS,
  CLEAR_CITY,
  REGION_SELECT,
  CITY_SELECT,
  CLEAR_COMMUNE,
  COMMUNE_SELECT,
  SAVE_ADDRESS,
  COMPLETE_DEPTO,
  COMPLETE_OFFICE,
  FIND_COMMUNE_BY_ID,
  SELECT_BRANCH_OFFICE,
  FULL_ADDRES_FOR_SELL,
} from '../types'
import clienteAxios from '../../config/axios'

export const completeDeptoAction = (status) => {
  return (dispatch) => {
    dispatch(completeDepto(!status))
  }
}

const completeDepto = (status) => ({
  type: COMPLETE_DEPTO,
  payload: status,
})

export const completeOfficeAction = (status) => {
  return (dispatch) => {
    dispatch(completeOffice(!status))
  }
}

const completeOffice = (status) => ({
  type: COMPLETE_OFFICE,
  payload: status,
})

export const saveAddresAction = (status) => {
  return (dispatch) => {
    dispatch(saveAddres(!status))
  }
}

const saveAddres = (status) => ({
  type: SAVE_ADDRESS,
  payload: status,
})

export function selectDispatch() {
  return (dispatch) => {
    dispatch(officeType(true))
  }
}

export function selectOnOffice() {
  return (dispatch) => {
    dispatch(dispatchType(false))
  }
}
export const citySelectAction = (id) => {
  return async (dispatch) => {
    dispatch(dispatchCitySelect(id))
  }
}
export const communeSelectAction = (id) => {
  let traceCommuneString = ''
  return async (dispatch) => {
    dispatch(dispatchCommuneSelect(id))
    try {
      await clienteAxios.get(`/api/user/commune/${id}`).then((res) => {
        console.log(res.data)
        traceCommuneString = `${res.data.name}, ${res.data.city.name}, ${res.data.city.region.name}`

        dispatch(traceCommune(traceCommuneString))
      })
    } catch (error) {
      dispatch(traceCommune(''))
      console.log(error)
    }
  }
}

export const clearCommune = () => {
  return async (dispatch) => {
    dispatch(dispatchClearCommune())
  }
}

export const getCommuneAction = (idCity) => {
  return async (dispatch) => {
    try {
      await clienteAxios.get(`/api/user/commune/city/${idCity}`).then((res) => {
        dispatch(dispatchCommuneFetch(res.data))
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const getRegionAction = () => {
  return async (dispatch) => {
    try {
      await clienteAxios.get('/api/user/region').then((res) => {
        dispatch(dispatchRegionFetch(res.data))
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const getCityAction = (idRegion) => {
  return async (dispatch) => {
    try {
      await clienteAxios
        .get(`/api/user/city/region/${idRegion}`)
        .then((res) => {
          dispatch(dispatchCityFetch(res.data))
        })
    } catch (error) {
      console.log(error)
    }
  }
}

export const regionSelectAction = (id) => {
  return async (dispatch) => {
    dispatch(dispatchRegionSelect(id))
  }
}

export const clearCity = () => {
  return async (dispatch) => {
    dispatch(dispatchClearCity())
  }
}

export const getOrderSetAddressAction = (state) => {
  let stateInit = {
    streetNumber: state.streetNumber,
    streetName: state.streetName,
    depto: state.depto,
    office: state.office,
    description: state.description,
    communeSelect: state.communeSelect,
    saveAddress: state.saveAddress,
  }
  return async (dispatch) => {
    dispatch(dispatchGetOrderSetAddress(stateInit))
  }
}

const dispatchRegionSelect = (status) => ({
  type: REGION_SELECT,
  payload: status,
})

const dispatchCitySelect = (status) => ({
  type: CITY_SELECT,
  payload: status,
})

export const fullAddresForSellAction = (state) => {
  return async (dispatch) => {
    dispatch(fullAddresForSell(state))
  }
}

const fullAddresForSell = (status) => ({
  type: FULL_ADDRES_FOR_SELL,
  payload: status,
})

export const newAddressAction = (state) => {
  return async (dispatch) => {
    dispatch(newAddress(state))
  }
}

const newAddress = (status) => ({
  type: ADD_NEW_ADDRESS,
  payload: status,
})

const traceCommune = (status) => ({
  type: FIND_COMMUNE_BY_ID,
  payload: status,
})

export const selectBranchAction = (branch) => {
  return async (dispatch) => {
    dispatch(selectBranch(branch))
  }
}

const selectBranch = (status) => ({
  type: SELECT_BRANCH_OFFICE,
  payload: status,
})
const dispatchCommuneSelect = (status) => ({
  type: COMMUNE_SELECT,
  payload: status,
})

const dispatchGetOrderSetAddress = (status) => ({
  type: GET_ORDER_SET_ADDRESS,
  payload: status,
})

const dispatchRegionFetch = (status) => ({
  type: FETCH_REGION,
  payload: status,
})
const dispatchCityFetch = (status) => ({
  type: FETCH_CITY,
  payload: status,
})
const dispatchCommuneFetch = (status) => ({
  type: FETCH_COMMUNE,
  payload: status,
})
const dispatchClearCity = () => ({
  type: CLEAR_CITY,
  payload: null,
})

const dispatchClearCommune = () => ({
  type: CLEAR_COMMUNE,
  payload: null,
})

const dispatchType = (status) => ({
  type: SELECT_TYPE_SHIPPING_DISPATCH,
  payload: status,
})

const officeType = (status) => ({
  type: SELECT_TYPE_SHIPPING_OFFICE,
  payload: status,
})

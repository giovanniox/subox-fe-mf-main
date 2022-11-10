import {SWAP_DATA_TYPE} from '../types/swapDataType'


const initState = {
  listItems:undefined,

}

const swapDataReducer = (state = initState, action:any) => {
  switch (action.type) {
    case SWAP_DATA_TYPE.LOAD_LIST: {
      return {
        ...state,
        listItems: action.pipeload,
      }
    }
    default:
      return state
  }
}

export default swapDataReducer

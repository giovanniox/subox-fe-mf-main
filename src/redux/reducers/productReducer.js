import { PRODUCT_TYPES } from './../types/productTypes';

const initialState = {
    product: null,
    categories: null,
}

const productReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case PRODUCT_TYPES.PRODUCTS:
            return {
                ...state,
                product: payload,
            }
        case PRODUCT_TYPES.CATEGORIES:
            return {
                ...state,
                categories: payload,
            }
        default:
            return state
    }
}

export default productReducer

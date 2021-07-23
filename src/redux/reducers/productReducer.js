import {
    FETCH_PRODUCT,
    CREATE_NEW_PRODUCT,
    ERROR_PRODUCT,
    ERROR_CATEGORY,
    FETCH_CATEGORY,
    DISABLE_PRODUCT,
    ENABLE_PRODUCT,
    DELETE_PRODUCT,
    PRODUCT_TO_DELETE,
    PRODUCT_TO_EDIT,
    EDIT_PRODUCT,
    CANCEL_EDIT,
    SHOW_MODAL_CATEGORY,
    SHOW_MODAL_ADD_NEW_PRODUCT,
    PRODUCT_TO_CREATE,
} from '../types';

// cada reducer tiene su propio state
const initialState = {
    product: [],
    error: null,
    productDelete: null,
    productEdit: null,
    productCreate: null,
    category: [],
    modalCategory: false,
    modalNewProduct: false,
}

export default function fn(state = initialState, action) {
    switch (action.type) {
        case SHOW_MODAL_CATEGORY:
            return {
                ...state,
                error: null,
                modalCategory: action.payload

            }
        case SHOW_MODAL_ADD_NEW_PRODUCT:
            return {
                ...state,
                error: null,
                modalNewProduct: action.payload
            }

        case DISABLE_PRODUCT:
        case ENABLE_PRODUCT:
            return {
                ...state,
                error: null,
                product: state.product.map(product =>
                    product.id === action.payload.id ? product = action.payload : product
                )
            }
        case FETCH_PRODUCT:
            return {
                ...state,
                error: null,
                product: action.payload,
            }
        case FETCH_CATEGORY:
            return {
                ...state,
                error: null,
                category: action.payload,
            }
        case CREATE_NEW_PRODUCT:
            return {
                ...state,
                error: null,
                productCreate: null,
                product: [...state.product, action.payload]
            }
        case ERROR_CATEGORY:
        case ERROR_PRODUCT:
            return {
                ...state,
                error: action.payload,
            }

        case DELETE_PRODUCT:
            return {
                ...state,
                product: state.product.filter(product => product.id !== state.productDelete.id),
                productDelete: null
            }
        case PRODUCT_TO_DELETE:
            return {
                ...state,
                productDelete: action.payload
            }
        case EDIT_PRODUCT:
            return {
                ...state,
                product: state.product.map(product =>
                    product.id === action.payload.id ? product = action.payload : product
                ),
                productEdit: null
            }
        case PRODUCT_TO_EDIT:
            return {
                ...state,
                productEdit: action.payload
            }
        case PRODUCT_TO_CREATE:
            return {
                ...state,
                productCreate: action.payload
            }
        case CANCEL_EDIT:
            return {
                ...state,
                productEdit: action.payload
            }
        default:
            return state;
    }
}
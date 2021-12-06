import { PRODUCT_TYPES } from './../types/productTypes'
import FETCH_API from '../../utils/ApiUtils'



const fetchCategoriesAction = () => {
    return async (dispatch) => {
        const categories = await FETCH_API.fetchCategories()
        dispatch(fetchCategories(categories))
    }
}


const fetchCategories = (data) => ({
    type: PRODUCT_TYPES.CATEGORIES,
    payload: data,
})

const PRODUCTS_ACTIONS = {
    fetchCategoriesAction,
}

export { PRODUCTS_ACTIONS }

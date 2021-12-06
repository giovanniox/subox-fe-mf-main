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
    PRODUCT_TO_CREATE
} from '../../types';
import clienteAxios from '../../../config/axios';
import Swal from 'sweetalert2';

export function saveProductAction(product, history) {
    return async (dispatch) => {
        try {
            let body = {
                "name": product.name,
                "price": product.price,
                "description": product.description,
                "enable": true,
                "imgUrl": product.imgUrl,
                "category": product.category,
                "branchOffice": []
            }
            console.log(body)
            await clienteAxios.post(`/api/user/product`, body).then(res => {
                console.log(res)
                dispatch(saveProduct(res.data))
            });
            Swal.fire(
                'Correcto',
                'El producto se agregó correctamente',
                'success'
            ).then((result) => {
                if (result.isConfirmed) {
                    history.push("/Productos")
                }
            });

        } catch (error) {
            console.log(error);
            dispatch(errorProduct());
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Error al intentar agregar producto'
            })
        }
    }
}
export function getAllProductAction() {
    return async (dispatch) => {
        try {

            await fetch('http://localhost:7000/category').then(res => {
                console.log(res)
                dispatch(getAllProduct(res.data))
            });
        } catch (error) {
            console.log(error);
            dispatch(errorProduct())
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Error al obtener productos, intenta mas tarde :('
            })
        }
    }
}

export function getAllCategoryAction() {
    return async (dispatch) => {
        try {
            await clienteAxios.get(`/api/user/category`).then(res => {
                console.log(res)
                console.log("RESS")
                dispatch(getAllCategory(res.data))
            });
        } catch (error) {
            console.log(error);
            dispatch(errorCategory())
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Error al obtener categorias, intenta mas tarde :('
            })
        }
    }
}

export function enableProductAction(id) {

    return async (dispatch) => {
        try {
            await clienteAxios.put(`/api/user/product/enable/${id}`).then(res => {
                console.log(res);
                dispatch(enableProduct(res.data))
            });
        } catch (error) {
            console.log(error);
            dispatch(errorCategory())
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Error al intentar hablitar productos, intenta mas tarde :('
            })
        }
    }
}
export function disableProductAction(id) {
    return async (dispatch) => {
        try {
            await clienteAxios.put(`/api/user/product/disable/${id}`).then(res => {
                console.log(res);
                dispatch(disbleProduct(res.data))
            });
        } catch (error) {
            console.log(error);
            dispatch(errorCategory())
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Error al intentar desablitar productos, intenta mas tarde :('
            })
        }
    }
}
export function productToDeleteAction(product) {
    return async (dispatch) => {
        dispatch(produtToDelete(product))
    }
}

export function editProductAction(product) {

    return async (dispatch) => {
        try {
            await clienteAxios.put(`/api/user/product`, product).then(res => {
                console.log(res);
                dispatch(editProduct(res.data))
            });
        } catch (error) {
            console.log(error);
            dispatch(errorProduct())
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: `Error al intentar Actualizar Producto ${product.name}, intenta mas tarde :(`
            })
        }
    }
}
export function productToEditAction(product) {
    return async (dispatch) => {
        dispatch(productToEdit(product))
    }
}
export function productToCreateAction(product) {
    return async (dispatch) => {
        dispatch(productToCreate(product))
    }
}

const productToCreate = (state) => ({
    type: PRODUCT_TO_CREATE,
    payload: state
})


const productToEdit = (state) => ({
    type: PRODUCT_TO_EDIT,
    payload: state
})

const editProduct = (state) => ({
    type: EDIT_PRODUCT,
    payload: state
})

export function deleteProductAction(id) {
    return async (dispatch) => {
        try {
            await clienteAxios.delete(`/api/user/product/${id}`).then((res) => {
                console.log(res)
                dispatch(delteProduct())
            });
        } catch (error) {
            console.log(error);
            dispatch(errorProduct())
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Error al intentar Eliminar producto, intenta mas tarde :('
            })
        }
    }
}

export function cancelEditAction() {
    return async (dispatch) => {
        dispatch(cancelEdit())
    }
}

export function showMadalNewProductAction(status) {
    return async (dispatch) => {
        dispatch(showMadalNewProduct(status))
    }
}

export function showModalCategoryAction(status) {
    return async (dispatch) => {
        dispatch(showModalCategory(status))
    }
}


const showMadalNewProduct = (state) => ({
    type: SHOW_MODAL_ADD_NEW_PRODUCT,
    payload: state
})
const showModalCategory = (state) => ({
    type: SHOW_MODAL_CATEGORY,
    payload: state
})

const cancelEdit = () => ({
    type: CANCEL_EDIT,
    payload: null
})
const produtToDelete = (state) => ({
    type: PRODUCT_TO_DELETE,
    payload: state
})

const delteProduct = () => ({
    type: DELETE_PRODUCT,
    payload: null
})

const enableProduct = (state) => ({
    type: ENABLE_PRODUCT,
    payload: state
})

const disbleProduct = (state) => ({
    type: DISABLE_PRODUCT,
    payload: state
})


const getAllProduct = (state) => ({
    type: FETCH_PRODUCT,
    payload: state
})

const getAllCategory = (state) => ({
    type: FETCH_CATEGORY,
    payload: state
})

const saveProduct = (state) => ({
    type: CREATE_NEW_PRODUCT,
    payload: state
});

const errorProduct = () => ({
    type: ERROR_PRODUCT,
    payload: true
})

const errorCategory = () => ({
    type: ERROR_CATEGORY,
    payload: true
})
import React from 'react';
import styled from 'styled-components'
import Modal from 'react-awesome-modal';
import { useHistory } from 'react-router-dom';
import { Campo, Formulario } from '../../../ui/Formulario'
import {
    saveProductAction, showMadalNewProductAction, productToCreateAction
} from '../../../../redux/actions/productActions/productoActions'
import { useSelector, useDispatch } from 'react-redux'


const ModalNewProduct = () => {
    const history = useHistory()
    const dispatch = useDispatch();
    const productState = useSelector(state => state.product)

    const { productCreate, modalNewProduct, category } = productState

    const closeModal = (e) => {
        dispatch(showMadalNewProductAction(!modalNewProduct))
    }
    const handlerCreateModal = (e) => {
        e.preventDefault()
        dispatch(saveProductAction(productCreate, history))
        console.log(productCreate)
        dispatch(showMadalNewProductAction(!modalNewProduct))
    }


    const handlerCreatePopUpChange = (e) => {
        e.preventDefault()
        let product = {
            "id": productCreate.id,
            "name": productCreate.name,
            "price": productCreate.price,
            "description": productCreate.description,
            "enable": productCreate.enable,
            "imgUrl": productCreate.imgUrl,
            "category": productCreate.category,
            "branchOffice": productCreate.branchOffice,
        }
        for (let obj in product) {
            if (e.target.name === obj) {
                product[obj] = e.target.value
            }
        }
        product.enable = true
        product.branchOffice = []
        dispatch(productToCreateAction(product))

    }

    const onChangeSelectCategory = (e) => {
        let product = {
            "id": productCreate.id,
            "name": productCreate.name,
            "price": productCreate.price,
            "description": productCreate.description,
            "enable": productCreate.enable,
            "imgUrl": productCreate.imgUrl,
            "category": productCreate.category,
            "branchOffice": productCreate.branchOffice,
        }

        category.filter(c => c.name === e.target.value).forEach(element => {
            product.category = element.id
        });

        dispatch(productToCreateAction(product))
    }

    return (
        <Modal visible={modalNewProduct} width="400" height="525" effect="fadeInUp" onClickAway={(e) => closeModal(e)}>
            {
                productCreate ?
                    <div>
                        <Formulario >
                            <Campo>
                                <label htmlFor='name'>Nombre Producto</label>
                                <input
                                    id='name'
                                    name='name'
                                    value={productCreate.name}
                                    onChange={(e) => handlerCreatePopUpChange(e)}
                                    type='text'
                                />
                            </Campo>

                            <Campo>
                                <label htmlFor='price'>Precio</label>
                                <input
                                    id='price'
                                    onChange={(e) => handlerCreatePopUpChange(e)}
                                    value={productCreate.price}
                                    name='price'
                                    type='text'

                                />
                            </Campo>
                            <Campo>
                                <label htmlFor='description'>Descripcion</label>
                                <input
                                    id='description'
                                    onChange={(e) => handlerCreatePopUpChange(e)}
                                    value={productCreate.description}
                                    name='description'
                                    type='textarea'
                                />
                            </Campo>
                            <Campo>

                                <label htmlFor='imgUrl'>Url de imagen</label>
                                <input
                                    onChange={(e) => handlerCreatePopUpChange(e)}
                                    id='imgUrl'
                                    name='imgUrl'
                                    type='text'
                                    value={productCreate.imgUrl}
                                />
                            </Campo>
                            <SelectContainer>
                                <label htmlFor='category'>Selecciona Categoria</label>
                                <select disabled={category == null} id='category' onChange={(e) => onChangeSelectCategory(e)} name="category" >
                                    <OptionBlod value="default" selected>Selecciona Categoria... </OptionBlod>
                                    {category ?
                                        category.map((e, index) => {

                                            return (
                                                <option key={index}>{e.name}</option>
                                            )
                                        })
                                        :
                                        <OptionBlod value="loading">Cargando.....</OptionBlod>
                                    }
                                </select>

                            </SelectContainer>



                            <BtnInputEditContainer>
                                <BtnInputEditCancel type="button" onClick={(e) => closeModal(e)} value="Cerrar" />
                                <BtnInputEditOk type="submit" onClick={(e) => handlerCreateModal(e)} value="Agregar" />
                            </BtnInputEditContainer>




                        </Formulario>






                    </div>

                    : null
            }
        </Modal>
    );
}

export default ModalNewProduct;

const OptionBlod = styled.option`
font-weight: 700;
`
const SelectContainer = styled.div`
display: flex;
    flex-direction: column;
    select{
        flex: 1;
        padding: 1rem;
        margin-bottom: 17px;
    }
`

const BtnInputEditCancel = styled.input`
margin: 0 15px;
padding: 4px 10px;
background-color: #d0cbc2;
color: black;
border-radius: 8px;
border: 1px solid #a7a38a;
width: 100px;
font-weight: 500;
`
const BtnInputEditContainer = styled.div`
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
-webkit-flex-direction: column;
-ms-flex-direction: column;
flex-direction: row;
justify-content: center;


`
const BtnInputEditOk = styled.input`
font-weight: 700;
background-color: #619e67;
color: #eceeef;
border-radius: 8px;
border: 1px solid #a7a38a;
width: 100px;
`
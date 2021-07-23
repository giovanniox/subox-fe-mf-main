import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'
import {
    saveProductAction, cancelEditAction, getAllProductAction,
    getAllCategoryAction, disableProductAction, enableProductAction,
    deleteProductAction, productToDeleteAction, editProductAction, productToEditAction
} from '../../redux/actions/productActions/productoActions'

import { updateCartShop } from '../../redux/actions/cartShoppingAction'
import Swal from 'sweetalert2';

import { Campo, Error, Formulario, InputSubmit } from '../ui/Formulario'
import Modal from 'react-awesome-modal';
const Product = () => {



    const dispatch = useDispatch();
    const productState = useSelector(state => state.product)
    const userState = useSelector(state => state.authReducer.typeUser)

    const { product, category, error, productEdit, productDelete } = productState
    useEffect(() => {
        dispatch(getAllCategoryAction())
        dispatch(getAllProductAction())
    }, [])



    const handlerClickAddCard = (product) => {
        let cart = JSON.parse(localStorage.getItem("cart"));
        cart.items = [...cart.items, product]
        localStorage.setItem("cart", JSON.stringify(cart));
        dispatch(updateCartShop(product))

        Swal.fire({
            allowOutsideClick: false,
            title: `${product.name} añadido con exito!`,
            text: `Para terminar compra ve al carrito y paga tu pedido`,
            icon: 'success',
        })
    }

    const handlerDelete = (product) => {
        console.log(product)
        dispatch(productToDeleteAction(product))
        Swal.fire({
            title: `¿Estas seguro que quieres Eliminar ${product.name}?`,
            text: "El producto se eliminara permanentamente!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteProductAction(product.id))
                Swal.fire(
                    'Eliminado!',
                    'Producto eliminado con exito.',
                    'success'
                )
            }
        })
    }


    const onChangeSelectCategory = e => {
        let product = {
            "id": productEdit.id,
            "name": productEdit.name,
            "price": productEdit.price,
            "description": productEdit.description,
            "enable": productEdit.enable,
            "imgUrl": productEdit.imgUrl,
            "category": productEdit.category,
            "branchOffice": productEdit.branchOffice,
        }

        category.filter(c => c.name === e.target.value).forEach(element => {
            product.category = element.id
        });

        dispatch(productToEditAction(product))
    }

    const handlerEditPopUpChange = e => {
        e.preventDefault()
        let product = {
            "id": productEdit.id,
            "name": productEdit.name,
            "price": productEdit.price,
            "description": productEdit.description,
            "enable": productEdit.enable,
            "imgUrl": productEdit.imgUrl,
            "category": productEdit.category,
            "branchOffice": productEdit.branchOffice,
        }
        for (let obj in product) {
            if (e.target.name === obj) {
                product[obj] = e.target.value
            }
        }

        dispatch(productToEditAction(product))
    }

    const closeModal = () => {
        dispatch(cancelEditAction())
    }

    const openModal = (product) => {
        dispatch(productToEditAction(product))
    }

    const handlerEdit = (e) => {
        e.preventDefault()
        dispatch(editProductAction(productEdit))
    }



    const handlerDisable = (product) => {
        console.log(product)
        Swal.fire({
            title: `¿Estas seguro que quieres deshabilitar ${product.name}?`,
            text: "Podras volver a habilitarlo cuando estimes conbeniente!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, deshabilitar!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(disableProductAction(product.id))
                Swal.fire(
                    'Deshabilitado!',
                    'Producto deshabilitado con exito.',
                    'success'
                )
            }
        })
    }

    const handlerEnable = (product) => {
        console.log(product)
        Swal.fire({
            title: `¿Estas seguro que quieres habilitar ${product.name}?`,
            text: "Podras volver a desbilitarlo cuando estimes conbeniente!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, habilitar!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(enableProductAction(product.id))
                Swal.fire(
                    'Habilitado!',
                    'Producto habilitado con exito.',
                    'success'
                )
            }
        })
    }
    return (
        <div>
            {category.length > 0 ?

                category.map((category) => {
                    return (
                        <ContainerProduct key={category.id} id={category.name} >
                            <CategoryContainer>
                                <h3>{category.name}   </h3>

                            </CategoryContainer>

                            <ContainerProductSection>







                                {product.length > 0 ?
                                    product.filter(product => product.category === category.id).length > 0 ?
                                        product.map((e) => {
                                            if (e.category === category.id) {
                                                if (e.enable) {
                                                    return (
                                                        <ContainerCard opacity={e.enable} key={e.id}>
                                                            <Card >
                                                                <ProductImageContainer>
                                                                    <ProductImage src={e.imgUrl} alt={e.name} />
                                                                </ProductImageContainer>

                                                                <ProductContent>
                                                                    <h1>{e.name}</h1>
                                                                    <Price>$ {e.price}</Price>
                                                                    <ProductScroll >{e.description}</ProductScroll>
                                                                    <p>
                                                                        <AddCart onClick={() => { handlerClickAddCard(e) }}>Añadir a carrito</AddCart>
                                                                    </p>
                                                                    {userState !== null ?
                                                                        userState.filter(rol => rol.name === "ROLE_ADMIN").length === 1 ?
                                                                            <ProductActionContainer>
                                                                                <BtnDelete onClick={() => { handlerDelete(e) }}> Elimanar</BtnDelete>
                                                                                <BtnEdit onClick={() => { openModal(e) }}> Editar</BtnEdit>
                                                                                {e.enable ?
                                                                                    <BtnDisable onClick={() => { handlerDisable(e) }}> Deshabilitar</BtnDisable>
                                                                                    :
                                                                                    <BtnEnable onClick={() => { handlerEnable(e) }}> Habilitar</BtnEnable>
                                                                                }

                                                                            </ProductActionContainer>
                                                                            :
                                                                            null
                                                                        : null
                                                                    }
                                                                </ProductContent>

                                                            </Card>
                                                        </ContainerCard>
                                                    )
                                                } else {

                                                    if (userState !== null) {

                                                        if (userState.filter(rol => rol.name === "ROLE_ADMIN").length === 1) {
                                                            return (
                                                                <ContainerCard opacity={e.enable} key={e.id}>
                                                                    <Card >
                                                                        <ProductImageContainer>
                                                                            <ProductImage src={e.imgUrl} alt={e.name} />
                                                                        </ProductImageContainer>

                                                                        <ProductContent>
                                                                            <h1>{e.name}</h1>
                                                                            <Price>$ {e.price} </Price>
                                                                            <ProductScroll>{e.description}</ProductScroll>
                                                                            <p>
                                                                                <AddCart onClick={() => { handlerClickAddCard(e) }}>Añadir a carrito</AddCart>
                                                                            </p>
                                                                            {userState !== null ?
                                                                                userState.filter(rol => rol.name === "ROLE_ADMIN").length === 1 ?
                                                                                    <ProductActionContainer>
                                                                                        <BtnDelete onClick={() => { handlerDelete(e) }}> Elimanar</BtnDelete>
                                                                                        <BtnEdit onClick={() => { openModal(e) }}> Editar</BtnEdit>
                                                                                        {e.enable ?
                                                                                            <BtnDisable onClick={() => { handlerDisable(e) }}> Deshabilitar</BtnDisable>
                                                                                            :
                                                                                            <BtnEnable onClick={() => { handlerEnable(e) }}> Habilitar</BtnEnable>
                                                                                        }

                                                                                    </ProductActionContainer>
                                                                                    :
                                                                                    null
                                                                                : null
                                                                            }
                                                                        </ProductContent>

                                                                    </Card>
                                                                </ContainerCard>
                                                            )

                                                        } else {
                                                            return null
                                                        }
                                                    }
                                                }
                                            }
                                            return null

                                        }) :
                                        <ProductNotFount>No existen productos en esta categoria</ProductNotFount>
                                    :
                                    <ProductNotFount>No existen productos en esta categoria</ProductNotFount>

                                }
                                {
                                    userState !== null ?

                                        userState.filter(rol => rol.name === "ROLE_ADMIN").length === 1 ?
                                            <ContainerCard>
                                                <CardAdd>
                                                    <div>
                                                        <button>Agregar</button>
                                                    </div>


                                                </CardAdd>
                                            </ContainerCard>
                                            :
                                            null
                                        : null
                                }




                            </ContainerProductSection>

                        </ContainerProduct>



                    )
                })
                :
                <ContainerProduct>

                    <CategoryContainer>
                        <h3>No existen categorias</h3>
                    </CategoryContainer>
                    <ProductNotFount>No existen productos en esta categoria</ProductNotFount>
                </ContainerProduct>

            }
            <Modal visible={productEdit !== null} width="400" height="525" effect="fadeInUp" onClickAway={() => closeModal()}>
                <div>

                    {
                        productEdit !== null ?

                            <Formulario >

                                <Campo>
                                    <label htmlFor='name'>Nombre Producto</label>
                                    <input
                                        id='name'
                                        name='name'
                                        value={productEdit.name}
                                        onChange={(e) => handlerEditPopUpChange(e)}
                                        type='text'
                                    />
                                </Campo>

                                <Campo>
                                    <label htmlFor='price'>Precio</label>
                                    <input
                                        id='price'
                                        onChange={(e) => handlerEditPopUpChange(e)}
                                        value={productEdit.price}
                                        name='price'
                                        type='text'

                                    />
                                </Campo>
                                <Campo>
                                    <label htmlFor='description'>Descripcion</label>
                                    <input
                                        id='description'
                                        onChange={(e) => handlerEditPopUpChange(e)}
                                        value={productEdit.description}
                                        name='description'
                                        type='textarea'
                                    />
                                </Campo>
                                <Campo>

                                    <label htmlFor='imgUrl'>Url de imagen</label>
                                    <input
                                        onChange={(e) => handlerEditPopUpChange(e)}
                                        id='imgUrl'
                                        name='imgUrl'
                                        type='text'
                                        value={productEdit.imgUrl}
                                    />
                                </Campo>
                                <SelectContainer>
                                    <label htmlFor='category'>Selecciona Categoria</label>
                                    <select disabled={category == null} id='category' onChange={(e) => onChangeSelectCategory(e)} name="category" >

                                        {category ?
                                            category.map((e, index) => {

                                                return (
                                                    <option selected={e.id === productEdit.category} key={index}>{e.name}</option>
                                                )
                                            })
                                            :
                                            <OptionBlod value="loading">Cargando.....</OptionBlod>
                                        }
                                    </select>

                                </SelectContainer>



                                <BtnInputEditContainer>
                                    <BtnInputEditCancel type="button" onClick={() => closeModal()} value="Cerrar" />
                                    <BtnInputEditOk type="submit" onClick={(e) => handlerEdit(e)} value="Editar" />
                                </BtnInputEditContainer>




                            </Formulario>
                            : null
                    }




                </div>
            </Modal>
        </div>
    );
}

export default Product;

const ProductScroll = styled.div`
height: 200px;
width: 250px;
overflow: scroll;
text-overflow: ellipsis;
overflow-x: hidden;
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
background-color: #ffce67;
color: black;
border-radius: 8px;
border: 1px solid #a7a38a;
width: 100px;
`


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


const BtnDisable = styled.button`
                border-radius: 5px;
                border: 1px #9a9a9a solid;
                background-color: #cacaca;
                color: #212121;
                `
const BtnEnable = styled.button`
                border-radius: 5px;
                border: 1px #72e480 solid;
                background-color: #49a727;
                color: white;
                `
const BtnDelete = styled.button`
                border-radius: 5px;
                border: 1px red solid;
                background-color: #de3434;
                color: white;
                `
const BtnEdit = styled.button`
                border-radius: 5px;
                border: 1px #e3e497 solid;
                background-color: #ffdb67;
                color: #080808;
                `
const ProductActionContainer = styled.div`
                display: flex;
                flex-wrap: nowrap;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                `

const ProductImage = styled.img`
                border: 6px solid #4a4949;
                background: #333232;
                width: 100%;
                height: 250px;
                `

const ProductImageContainer = styled.div`
                border: 6px solid #4a4949;
                background: #333232;
                `

const ProductContent = styled.div`
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                justify-content: center;
                align-items: stretch;

                `

const ContainerProductSection = styled.div`
                display: -webkit-box;
                display: -webkit-flex;
                display: -ms-flexbox;
                display: flex;
                -webkit-flex-wrap: wrap;
                -ms-flex-wrap: wrap;
                flex-wrap: wrap;
                -webkit-align-content: flex-start;
                -ms-flex-line-pack: start;
                align-content: flex-start;
                -webkit-box-pack: space-around;
                -webkit-justify-content: space-around;
                -ms-flex-pack: space-around;
                justify-content: center;
                -webkit-align-items: stretch;
                -webkit-box-align: stretch;
                -ms-flex-align: stretch;
                align-items: stretch;
                `

const ProductNotFount = styled.div`
                text-align: center;
                color: red;
                `

const ContainerProduct = styled.div`
                background-color: #fff1cc;
                padding: 10px 0px;
                height:auto;
                `

const ContainerCard = styled.div(({ opacity }) => ({
    opacity: opacity ? '1' : '0.5',
    display: "flex",
    margin: "0 10px;",
}));

const CategoryContainer = styled.div`
                background-color: #fff1cc;
                border-radius: 15px;
                margin: 10px 30px;
                border: 2px solid #841212;

                h3 {
                    font - family: cursive;
                font-weight: bold;
                font-size: x-large;
                letter-spacing: 6px;
                text-transform: uppercase;
                text-align: center;
                margin-top: 10px;
                margin-bottom: 12px;
                color: #000000;
    }
                `

const Card = styled.div`
                box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
                max-width: 260px;
                height: 100%;
                margin: auto;
                text-align: center;
                font-family: cursive;
                background-color: #fff;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: stretch;

                `
const CardAdd = styled.div`
                box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
                width: 260px;
                height: 650px;
                margin: auto;
                text-align: center;
                font-family: cursive;
                background-color: #fff;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: stretch;

                `

const Price = styled.p`
                color: grey;
                font-size: 22px;
                `
const AddCart = styled.button`
                border: none;
                outline: 0;
                padding: 12px;
                color: white;
                background-color: #000;
                text-align: center;
                cursor: pointer;
                width: 100%;
                font-size: 18px;

                &:hover {
                    opacity: 0.7;
    }
                `

/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'
import arrow from './../../../static/img/flecha.png'
import ModalNewProduct from './modal/modalNewProduct'

import { useSelector, useDispatch } from 'react-redux'
import {
  saveProductAction,
  showMadalNewProductAction,
  showModalCategoryAction,
  productToCreateAction,
} from '../../../redux/actions/productActions/productoActions'

const ManageProduct = () => {
  const dispatch = useDispatch()
  const productState = useSelector((state) => state.product)
  const userState = useSelector((state) => state.authReducer.typeUser)
  const { modalCategory, modalNewProduct } = productState

  const handlerSHowModalNewProduct = (e) => {
    e.preventDefault()
    dispatch(showMadalNewProductAction(!modalNewProduct))
    let product = {
      id: '',
      name: '',
      price: '',
      description: '',
      enable: '',
      imgUrl: '',
      category: '',
      branchOffice: [],
    }
    dispatch(productToCreateAction(product))
  }

  return (
    <ManagerProductContainer>
      <ContainerSection>
        <Title>
          <h1>Administrar Productos</h1>
        </Title>
        <SubTitle>Categorias</SubTitle>
        <ContainerButtons>
          <ContainerButton>
            <Buttons role="button">
              <div>
                <span>Categorias</span>
              </div>
              <div>
                <span>4 categorias</span>
              </div>
              <div>
                <ArrowImg src={arrow} alt="arrow" />
              </div>
            </Buttons>
          </ContainerButton>
        </ContainerButtons>

        <SubTitle>Productos</SubTitle>
        <ContainerButtons>
          <ContainerButton>
            <Buttons role="button">
              <div>
                <span>Productos</span>
              </div>
              <div>
                <AddButon
                  onClick={(e) => {
                    handlerSHowModalNewProduct(e)
                  }}
                >
                  Añadir nuevo producto
                </AddButon>
              </div>
              <div>
                <ArrowImg src={arrow} alt="arrow" />
              </div>
            </Buttons>
          </ContainerButton>
        </ContainerButtons>
      </ContainerSection>
      <ModalNewProduct />
    </ManagerProductContainer>
  )
}

export default ManageProduct

const ArrowImg = styled.img`
  width: 10px;
  height: 10px;
`
const AddButon = styled.div`
  border: 1px solid #97d2a0;
  padding: 1rem;
  border-radius: 5px;
  background-color: green;
  color: white;
`

const ManagerProductContainer = styled.div`
  background-color: #ffffff;
  height: 100%;
`
const SubTitle = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
`

const ContainerButtons = styled.div`
  width: 100%;
`

const ContainerButton = styled.div`
  border: 1px solid gainsboro;
  border-radius: 4px;
  box-shadow: inset 0px 0px 0px 0px #5a5656;
  width: 100%;
`

const Buttons = styled.div`
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid gray;
  &:last-child {
    border-bottom: none;
  }
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  font-size: 16px;
  padding: 13px 18px;
  border-bottom: 1px solid #eee;
`
const Title = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
`
const ContainerSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 650px;
  margin: 20px auto;
`

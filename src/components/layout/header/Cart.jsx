import React, { useEffect } from 'react'
import CartImage from './../../../static/img/cart.jpg'
import styled from 'styled-components'
import Modal from 'react-awesome-modal'
import {
  modalCartShopAction,
  deleteItemCartShop,
  updateCartShop,
} from './../../../redux/actions/cartShoppingAction'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'
const Cart = () => {
  const dispatch = useDispatch()
  const cartShop = useSelector((state) => state.cartShop)
  const addressFull = useSelector(
    (state) => state.shippingType.fullAddresForSell,
  )
  const history = useHistory()

  useEffect(() => {
    console.log('cargar carrito vacio si no hay usuario autentiado')
    let cart = JSON.parse(localStorage.getItem('cart'))
    if (!cart) {
      localStorage.setItem('cart', JSON.stringify(cartShop))
    }

    if (cartShop.items === 0) {
    }
  }, [cartShop])

  const { items, modalShow } = cartShop

  console.log(items)

  console.log(items.length)

  const goToProduct = (e) => {
    e.preventDefault()
    dispatch(modalCartShopAction(modalShow))
    history.push('/Productos')
  }

  const deleteItemCart = (index) => {
    let indexs = items.indexOf(items[index])
    console.log(indexs)
    items.splice(indexs, 1)

    dispatch(deleteItemCartShop(items))
  }

  const openModal = () => {
    console.log('OPEN')
    dispatch(modalCartShopAction(modalShow))
  }

  const closeModal = () => {
    console.log('CLOSE')
    dispatch(modalCartShopAction(modalShow))
  }

  const handerDoDelerivy = () => {
    if (addressFull === '') {
      throwAlertError(
        'Porfavor ingrese una dirrecion de entrega o local de retiro',
      )
    }

    if (items.length === 0) {
      throwAlertError(
        'Debes agregar al menos un producto para realizar la compra',
      )
    }

    console.log('REALIZANDO PEDIDO')
  }

  const throwAlertError = (string) => {
    Swal.fire({
      allowOutsideClick: false,
      title: `Faltan datos para realizar la entrega`,
      text: `${string}`,
      icon: 'warning',
      customClass: {
        container: 'my-swal',
      },
    })
  }

  const totalItems = () => {
    let total = 0
    items.forEach((e) => {
      total += e.price
    })

    return total
  }

  return (
    <ContainerCart>
      {items.length <= 0 ? null : <Accountant>{items.length}</Accountant>}

      <ImageCart onClick={() => openModal()} src={CartImage} alt="cart" />
      <Modal
        visible={modalShow}
        width="700"
        height="700"
        effect="fadeInUp"
        onClickAway={() => closeModal()}
      >
        <ContainerCartIn>
          <div>
            <h2 style={{ fontSize: 'xx-large', fontFamily: 'Montserrat' }}>
              Carrito de compras
            </h2>
          </div>
          <ContainerItem>
            {items.length !== 0 ? (
              <ItemOverFlow>
                {items.map((item, index) => {
                  return (
                    <ContainerItemCart>
                      <img
                        width="90"
                        height="90"
                        src={item.imgUrl}
                        alt={item.name}
                      />
                      <ContainerContainCart>
                        <SpanTitle>{item.name}</SpanTitle>
                        <SpanPrice>{item.price}</SpanPrice>
                      </ContainerContainCart>
                      <ContainerButtonsCart>
                        <ButtonCart
                          onClick={() => dispatch(updateCartShop(item))}
                        >
                          Agregar Otro
                        </ButtonCart>
                        <ButtonCartDelete onClick={() => deleteItemCart(index)}>
                          Eliminar
                        </ButtonCartDelete>
                      </ContainerButtonsCart>
                    </ContainerItemCart>
                  )
                })}
              </ItemOverFlow>
            ) : (
              <div>
                <h4>No exiten Productos</h4>

                <div>
                  <button onClick={(e) => goToProduct(e)}>
                    Añade Productos
                  </button>
                </div>
              </div>
            )}
          </ContainerItem>
          <BottomItemsContainer>
            <div>
              <div>
                <p>
                  Total A Pagar:{' '}
                  <b style={{ color: 'green' }}>{totalItems()}</b>{' '}
                </p>

                <p>
                  Dirrecion de entrega:{' '}
                  {!addressFull ? (
                    <b style={{ color: 'red' }}>PENDIENTE</b>
                  ) : (
                    addressFull
                  )}
                </p>
              </div>
              <div>
                <ButtonCartDelete onClick={() => closeModal()}>
                  Cerrar
                </ButtonCartDelete>
                <ButtonCart onClick={() => handerDoDelerivy()}>
                  Realizar Pedido
                </ButtonCart>
              </div>
            </div>
          </BottomItemsContainer>
        </ContainerCartIn>
      </Modal>
    </ContainerCart>
  )
}

export default Cart

const SpanPrice = styled.span`
  text-transform: capitalize;
  font-size: 1.5rem;
  font-weight: 300;
  color: #101010;
`
const SpanTitle = styled.span`
  text-transform: capitalize;
  font-size: 2.5rem;
  font-weight: 300;
  color: #101010;
`

const ButtonCart = styled.button`
  border: 1px solid gainsboro;
  margin: 6px 13px;
  background-color: #69a052;
  color: white;
  border-radius: 8px;
  padding: 7px;
`
const ButtonCartDelete = styled.button`
  border: 1px solid gainsboro;
  margin: 6px 13px;
  background-color: #ea6d6d;
  color: white;
  border-radius: 8px;
  padding: 7px;
`

const ContainerButtonsCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`
const ContainerContainCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const BottomItemsContainer = styled.div`
  position: absolute;
  bottom: 20px;
  flex-direction: row;
  width: 100%;
  display: flex;
  justify-content: center;
`

const ItemOverFlow = styled.div`
  width: 100%;
  height: 400px;
  overflow: overlay;
`

const ContainerItemCart = styled.div`
  display: flex;
  width: 95%;
  border: 1px solid gainsboro;
  padding: 10px;
  margin: 15px auto;
  border-radius: 5px;
  background-color: #ececea;
  justify-content: space-between;
  align-items: center;
`
const ContainerItem = styled.div`
  display: flex;
  width: 100%;
`
const ContainerCartIn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  position: relative;
`

const ContainerCart = styled.div`
  border: 2px solid black;
  border-radius: 30px;
  padding: 5px;
  cursor: pointer;
  margin-right: 20px;
  position: relative;
`
const ImageCart = styled.img`
  width: 30px;
`
const Accountant = styled.div`
  position: absolute;
  left: 32px;
  top: -8px;
  border-radius: 53px;
  background-color: red;
  font-size: 14px;
  color: white;
  width: 20px;
  height: 20px;
  text-align: center;
  overflow: hidden;
`

import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../ui/Button'
import { useDispatch, useSelector } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'
import { FUNTIONAL_ACTIONS } from './../../../redux/actions/funtinalActions'
const LoginContainer = () => {
  const dispatch = useDispatch()

  const authReducer = useSelector((state) => state.authReducer)

  const { userState, user } = authReducer

  const isSidebarOpen = useSelector((state) => state.funtional.isShowSidebar)

  return (
    <LoginContainerButtons>
      {userState ? (
        <>
          <p>Hola: {user.userName} </p>
          <Button
            bgColor="true"
            onClick={() => {
              console.log('Cerrar Sesión')
            }}
          >
            Cerrar Sesión
          </Button>
        </>
      ) : (
        <>
          <Link to="/sign-in">
            <Button
              bgColor="true"
              onClick={() => {
                dispatch(FUNTIONAL_ACTIONS.handlerSidebarAction(!isSidebarOpen))
              }}
            >
              <FormattedMessage id="app.header.sign-in" />
            </Button>
          </Link>
          <Link to="/sign-up">
            <Button
              onClick={() => {
                dispatch(FUNTIONAL_ACTIONS.handlerSidebarAction(!isSidebarOpen))
              }}
            >
              Crear Cuenta
            </Button>
          </Link>
        </>
      )}
    </LoginContainerButtons>
  )
}

export default LoginContainer

const LoginContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`

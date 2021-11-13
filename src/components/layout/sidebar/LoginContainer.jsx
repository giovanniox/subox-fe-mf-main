import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import Boton from '../../ui/Boton'
import { useDispatch, useSelector } from 'react-redux'
import { hideHeaderAction } from '../../../redux/actions/showHeaderActions/showHeaderActions'
import { signOutAction } from '../../../redux/actions/authActions/AuthActions'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'
import { FUNTIONAL_ACTIONS } from './../../../redux/actions/funtinalActions'
const LoginContainer = () => {
  const dispatch = useDispatch()

  const authReducer = useSelector((state) => state.authReducer)

  const history = useHistory()

  const { userState, user } = authReducer

  const isSidebarOpen = useSelector((state) => state.funtional.isShowSidebar)
  const setIsSidebarOpen = () => {
    dispatch(FUNTIONAL_ACTIONS.handlerSidebarAction(!isSidebarOpen))
  }

  return (
    <LoginContainerButtons>
      {userState ? (
        <>
          <p>Hola: {user.userName} </p>
          <Boton
            bgColor="true"
            onClick={() => {
              dispatch(FUNTIONAL_ACTIONS.handlerSidebarAction(!isSidebarOpen))
              dispatch(signOutAction(history))
            }}
          >
            Cerrar Sesión
          </Boton>
        </>
      ) : (
        <>
          <Link to="/sign-in">
            <Boton
              bgColor="true"
              onClick={() => {
                dispatch(FUNTIONAL_ACTIONS.handlerSidebarAction(!isSidebarOpen))
                dispatch(hideHeaderAction())
              }}
            >
              <FormattedMessage id="app.header.sign-in" />
            </Boton>
          </Link>
          <Link to="/sign-up">
            <Boton
              onClick={() => {
                dispatch(FUNTIONAL_ACTIONS.handlerSidebarAction(!isSidebarOpen))
                dispatch(hideHeaderAction())
              }}
            >
              Crear Cuenta
            </Boton>
          </Link>
        </>
      )}
    </LoginContainerButtons>
  )
}

export default LoginContainer

const LoginContainerButtons = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
`

import { slide as Menu } from 'react-burger-menu'
import React from 'react'
import './MenuNav.css'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { USER_ACTIONS } from './../../redux/actions/userActions'

const MenuNav = () => {
  const dispatch = useDispatch()
  let authenticated = useSelector((state) => state.user.authenticated)
  const handleLogout = () => {
    dispatch(USER_ACTIONS.userLogOutAction())
  }
  return (
    <Menu>
      <Link to="/">RESTO SUBOX</Link>
      <Link to="/pedidos">Mis pedidos</Link>
      {authenticated ? (
        <>
          <Link to="/profile">Perfil</Link>
          <a onClick={handleLogout}>Salir</a>
        </>
      ) : (
        <>
          <Link to="/login">Ingresa</Link>
          <Link to="/signup">Registrate</Link>
        </>
      )}
    </Menu>
  )
}

export default MenuNav

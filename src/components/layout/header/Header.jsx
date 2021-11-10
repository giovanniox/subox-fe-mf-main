import React from 'react'
import styled from 'styled-components'

import Logo from './Logo'
import Cart from './Cart'

import NavSidebar from '../sidebar/NavSidebar'
import './Header.scss'
const Header = () => {
  return (
    <header className="header">
      <div className="__brand">
        <NavSidebar />
        <Logo />
      </div>

      <Cart className="__cart-shop" />
    </header>
  )
}

export default Header

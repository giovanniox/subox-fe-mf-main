import React, { useEffect } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { useIntl } from 'react-intl'

import {
  hideFooterAction,
  hideHeaderAction,
  showHeaderAction,
  showFooterAction,
} from './redux/actions/showHeaderActions/showHeaderActions'

//components
import Header from './components/layout/header/Header'
import SignIn from './components/login/SingIn/SignIn'
import SignUp from './components/login/SingUp/SingUp'
import ValidateEmail from './components/login/ValidateEmail/ValidateEmail'
import SectionMain from './components/layout/main/SectionMain'
import Product from './components/product/Product'
import Configuration from './components/configuration/configuration'
import LostPassword from './components/login/LostPassword/LostPassword'
function Routes() {
  const location = useLocation()
  const dispatch = useDispatch()
  const intl = useIntl()
  const isShowHeader = useSelector((state) => state.showHeader.headerIsShow)
  const isShowFooter = useSelector((state) => state.showHeader.footerIsShow)

  return (
    <>
      <Header />

      <Main>
        <Switch>
          <Route exact path="/" component={SectionMain} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/sign-in" component={SignIn} />
          <Route exact path="/validate-email" component={ValidateEmail} />
          <Route exact path="/Productos" component={Product} />
          <Route exact path="/Configuración" component={Configuration} />
          <Route exact path="/lost-password" component={LostPassword} />
        </Switch>
        {isShowFooter ? <Footer /> : null}
      </Main>
    </>
  )
}

export default Routes

const Footer = styled.div`
  width: 100%;
  height: 250px;
  background-color: #633232;
`
const Main = styled.main`
  height: 85vh;
`

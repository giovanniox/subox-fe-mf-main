import React from 'react'
import { Route, Switch } from 'react-router-dom'

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
  return (
    <>
      <Header />

      <main>
        <Switch>
          <Route exact path="/" component={SectionMain} />
          <Route exact path="/home" component={SectionMain} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/sign-in" component={SignIn} />
          <Route exact path="/validate-email" component={ValidateEmail} />
          <Route exact path="/Productos" component={Product} />
          <Route exact path="/Configuración" component={Configuration} />
          <Route exact path="/lost-password" component={LostPassword} />
        </Switch>
      </main>
    </>
  )
}

export default Routes

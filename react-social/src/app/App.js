import React, { Component, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import AppHeader from '../common/AppHeader'
import Home from '../home/Home'
import Login from '../user/login/Login'
import Signup from '../user/signup/Signup'
import Profile from '../user/profile/Profile'
import OAuth2RedirectHandler from '../user/oauth2/OAuth2RedirectHandler'
import NotFound from '../common/NotFound'
import LoadingIndicator from '../common/LoadingIndicator'
import { getCurrentUser } from '../util/APIUtils'
import { ACCESS_TOKEN } from '../constants'
import PrivateRoute from '../common/PrivateRoute'
import Alert from 'react-s-alert'
import 'react-s-alert/dist/s-alert-default.css'
import 'react-s-alert/dist/s-alert-css-effects/slide.css'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { GENERAL_ACTIONS } from './../redux/actions/generalActions'
import { USER_ACTIONS } from './../redux/actions/userActions'
const App = () => {
  const dispatch = useDispatch()

  const { authenticated, currentUser, loading } = useSelector(
    (state) => state.user,
  )

  useEffect(() => {
    loadCurrentlyLoggedInUser()
  }, [])

  const loadCurrentlyLoggedInUser = () => {
    dispatch(USER_ACTIONS.userSignInAction())
  }

  const handleLogout = () => {
    dispatch(USER_ACTIONS.userLogOutAction())
  }

  if (loading) {
    return <LoadingIndicator />
  }

  return (
    <div className="app">
      <div className="app-top-box">
        <AppHeader authenticated={authenticated} onLogout={handleLogout} />
      </div>
      <div className="app-body">
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute
            path="/profile"
            authenticated={authenticated}
            currentUser={currentUser}
            component={Profile}
          />
          <Route
            path="/login"
            render={(props) => (
              <Login authenticated={authenticated} {...props} />
            )}
          />
          <Route
            path="/signup"
            render={(props) => (
              <Signup authenticated={authenticated} {...props} />
            )}
          />
          <Route path="/oauth2/redirect" component={OAuth2RedirectHandler} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Alert
        stack={{
          limit: 3,
        }}
        timeout={3000}
        position="top-right"
        effect="slide"
        offset={65}
      />
    </div>
  )
}

export default App

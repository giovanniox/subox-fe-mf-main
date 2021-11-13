import React, { Component, useEffect, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

import Alert from 'react-s-alert'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import SocialLogin from './../component/SocialLogin'
import './../static/Login.css'
import fbLogo from '../../../img/fb-logo.png'
import googleLogo from '../../../img/google-logo.png'
import {
  GOOGLE_AUTH_URL,
  FACEBOOK_AUTH_URL,
  ACCESS_TOKEN,
} from '../../../constants'
import { login } from '../../../util/APIUtils'

const LoginForm = () => {
  const navigate = useNavigate()
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  })
  const { email, password } = credentials
  const handleInputChange = (event) => {
    const target = event.target
    const inputName = target.name
    const inputValue = target.value

    setCredentials({
      [inputName]: inputValue,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const loginRequest = Object.assign({}, credentials)

    login(loginRequest)
      .then((response) => {
        localStorage.setItem(ACCESS_TOKEN, response.accessToken)
        console.log("You're successfully logged in!")
        Alert.success("You're successfully logged in!")
        navigate('/')
      })
      .catch((error) => {
        console.log('Oops! Something went wrong. Please try again!')
        Alert.error(
          (error && error.message) ||
            'Oops! Something went wrong. Please try again!',
        )
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-item">
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Email"
          value={email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-item">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Contraseña"
          value={password}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-item">
        <button type="submit" className="btn btn-block btn-primary">
          Login
        </button>
      </div>
    </form>
  )
}

export default LoginForm

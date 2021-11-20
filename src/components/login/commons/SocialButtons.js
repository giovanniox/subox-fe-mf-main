import React from 'react'
import { IMG_BASE_64 } from './../../../static/base64/ImgBase64'
import './../Login.scss'
export const ButtonFacebook = ({ signIn, name, text }) => {
  return (
    <button
      onClick={signIn}
      className={`login__button  login__container-social login__button--facebook`}
    >
      <img
        className="login__social-img"
        src={IMG_BASE_64.ICON_FACEBOOK}
        alt="IMG_BASE_64"
      />

      <span>{text}</span>
    </button>
  )
}

export const ButtonGoogle = ({ signIn, text }) => {
  return (
    <button
      onClick={signIn}
      className={`login__button  login__container-social login__button--google`}
    >
      <img
        className="login__social-img"
        src={IMG_BASE_64.ICON_GOOGLE}
        alt="IMG_BASE_64"
      />

      <span>{text}</span>
    </button>
  )
}

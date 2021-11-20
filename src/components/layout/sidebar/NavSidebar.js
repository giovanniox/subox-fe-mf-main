/* eslint-disable react/display-name, jsx-a11y/click-events-have-key-events */
import { Navigation } from 'react-minimal-side-navigation'
import { useHistory, useLocation } from 'react-router-dom'
import Icon from 'awesome-react-icons'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css'
import './main.bundle.css'
import './main.css'
import LoginContainer from './LoginContainer'
import { FUNTIONAL_ACTIONS } from './../../../redux/actions/funtinalActions'
export const NavSidebar = () => {
  const navList = [
    {
      title: 'Inicio',
      itemId: '/home',
    },
    {
      title: 'Mis pedidos',
      subNav: [
        {
          title: 'En curso',
          itemId: '/order/in-progress',
        },
        {
          title: 'Historicos',
          itemId: '/order/record',
        },
      ],
    },
  ]

  const history = useHistory()
  const location = useLocation()
  const isSidebarOpen = useSelector((state) => state.funtional.isShowSidebar)
  const dispatch = useDispatch()

  return (
    <>
      <div
        onClick={() =>
          dispatch(FUNTIONAL_ACTIONS.handlerSidebarAction(!isSidebarOpen))
        }
        className={`fixed inset-0 z-20 block transition-opacity bg-black opacity-50  ${
          isSidebarOpen ? 'block' : 'hidden'
        }`}
      />

      <div>
        <button
          className="btn-menu"
          onClick={() =>
            dispatch(FUNTIONAL_ACTIONS.handlerSidebarAction(!isSidebarOpen))
          }
          type="button"
        >
          <Icon name="burger" className="w-8 h-8" />
        </button>
      </div>

      <div
        className={` sidebar fixed inset-y-0 left-0 z-30 w-700 overflow-y-auto transition duration-300 ease-out transform translate-x-0 bg-white border-r-2  ${
          isSidebarOpen ? 'ease-out translate-x-0' : 'ease-in -translate-x-full'
        }`}
      >
        <div className="text-center py-1">
          <h1>
            <button
              onClick={() => {
                history.push('/')
                dispatch(FUNTIONAL_ACTIONS.handlerSidebarAction(!isSidebarOpen))
              }}
            >
              RESTO SUBOX
            </button>
          </h1>
          <hr />
        </div>

        <Navigation
          activeItemId={location.pathname}
          onSelect={({ itemId }) => {
            history.push(itemId)
            if (itemId)
              dispatch(FUNTIONAL_ACTIONS.handlerSidebarAction(!isSidebarOpen))
          }}
          items={navList}
        />
        <div className="absolute bottom-0 w-full my-8">
          <LoginContainer />
        </div>
      </div>
    </>
  )
}

export default NavSidebar

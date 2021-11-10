/* eslint-disable react/display-name, jsx-a11y/click-events-have-key-events */
import { Navigation } from 'react-minimal-side-navigation'
import { useHistory, useLocation } from 'react-router-dom'
import Icon from 'awesome-react-icons'
import React, { useState } from 'react'

import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css'
import './main.bundle.css'
import './main.css'
import LoginContainer from './LoginContainer'
export const NavSidebar = () => {
  const history = useHistory()
  const location = useLocation()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <>
      {/* Sidebar Overlay */}
      <div
        onClick={() => setIsSidebarOpen(false)}
        className={`fixed inset-0 z-20 block transition-opacity bg-black opacity-50  ${
          isSidebarOpen ? 'block' : 'hidden'
        }`}
      />

      <div>
        <button
          className="btn-menu"
          onClick={() => setIsSidebarOpen(true)}
          type="button"
        >
          <Icon name="burger" className="w-6 h-6" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-500 overflow-y-auto transition duration-300 ease-out transform translate-x-0 bg-white border-r-2  ${
          isSidebarOpen ? 'ease-out translate-x-0' : 'ease-in -translate-x-full'
        }`}
      >
        <div className="flex items-center justify-center mt-10 text-center py-6">
          <span className="mx-2 text-2x2 font-semibold text-black">
            RESTO SUBOX
          </span>
        </div>

        {/* https://github.com/abhijithvijayan/react-minimal-side-navigation */}
        <Navigation
          activeItemId={location.pathname}
          onSelect={({ itemId }) => {
            history.push(itemId)
          }}
          items={[
            {
              title: 'Home',
              itemId: '/home',
              // Optional
              elemBefore: () => <Icon name="coffee" />,
            },
            {
              title: 'Mis pedidos',
              itemId: '/order',
              elemBefore: () => <Icon name="user" />,
              subNav: [
                {
                  title: 'En curso',
                  itemId: '/order/in-progress',
                  // Optional
                  elemBefore: () => <Icon name="cloud-snow" />,
                },
                {
                  title: 'Members',
                  itemId: '/order/record',
                  elemBefore: () => <Icon name="coffee" />,
                },
              ],
            },
            {
              title: 'Another Tab',
              itemId: '/another',
              subNav: [
                {
                  title: 'Teams',
                  itemId: '/another/teams',
                  // Optional
                  // elemBefore: () => <Icon name="calendar" />
                },
              ],
            },
          ]}
        />

        <div className="absolute bottom-0 w-full my-8">
          <Navigation
            activeItemId={location.pathname}
            items={[
              {
                title: 'Settings',
                itemId: '/settings',
                elemBefore: () => <Icon name="activity" />,
              },
            ]}
            onSelect={({ itemId }) => {
              history.push(itemId)
            }}
          />
        </div>
        <LoginContainer />
      </div>
    </>
  )
}

export default NavSidebar

import React from 'react'

import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import Routes from './routes'
import { IntlProvider } from 'react-intl'
import { messages as allMessages } from '../src/i18n/messages'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
const App = () => {
  const currentLocale = 'es-MX'
  const messages = allMessages[currentLocale]

  const options = {
    // you can also just use 'bottom center'
    position: positions.TOP_RIGHT,
    timeout: 4000,
    offset: '60px',
    // you can also just use 'scale'
    transition: transitions.FADE,
  }

  // const AlertTemplate = ({ style, options, message, close }) => (
  //   <div style={style}>
  //     {options.type === 'info' && '!'}
  //     {options.type === 'success' && ':)'}
  //     {options.type === 'error' && ':('}
  //     {message}
  //     <button onClick={close}>X</button>
  //   </div>
  // )

  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <IntlProvider locale={currentLocale} messages={messages}>
        <Router>
          <Provider store={store}>
            <Routes />
          </Provider>
        </Router>
      </IntlProvider>
    </AlertProvider>
  )
}

export default App

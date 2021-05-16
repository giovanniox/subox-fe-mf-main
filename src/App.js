import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Routes from './routes';
import { IntlProvider } from 'react-intl';
import { messages as allMessages } from '../src/i18n/messages';
function App() {

  // const currentLocale = 'en-US';
   const currentLocale = 'es-MX';
  //const currentLocale = 'ht';
  const messages = allMessages[currentLocale];

  return (
    <IntlProvider locale={currentLocale} messages={messages}>
      <Router>
        <Provider store={store}>
          <Routes />
        </Provider>
      </Router>
    </IntlProvider>

  );
}

export default App;


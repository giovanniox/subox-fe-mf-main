import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Routes from './routes';
import firebaseInstance, { FirebaseContext } from './config/firebase/Firebase'

function App() {
  return (
    <Router>
      <Provider store={store}>
        <FirebaseContext.Provider firebase={firebaseInstance}>
          <Routes />
        </FirebaseContext.Provider>
      </Provider>
    </Router>
  );
}

export default App;

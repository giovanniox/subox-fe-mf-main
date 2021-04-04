import React from 'react';
import Header from './components/layout/header/Header';
import { BrowserRouter as Router } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';


import Routes from './routes';

function App() {


  return (
    <Router>
      <Provider store={store}>
        <Header />
        <div className="container mt-5">
          <Routes />
        </div>
      </Provider>
    </Router>
  );
}

export default App;

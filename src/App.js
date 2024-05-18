import React from 'react';

import './app.css';


import Routes from "./router/index";

import AuthProvider from "./provider/AuthProvider";

const App = () => {

    return (
        <AuthProvider>
            <Routes />
        </AuthProvider>
    );
}
export default App;
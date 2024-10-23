import React from 'react';
import './app.css';
import Routes from "./router/index";
import { Provider } from 'react-redux';
import store from './app/redux/store';
import AuthProvider from "./provider/AuthProvider";
import { GoogleOAuthProvider } from '@react-oauth/google';
import CssBaseline from '@mui/material/CssBaseline';

const googleKey = "916830881278-fv5evrd2t14lm6pqrf2h9anm34ucr0v4.apps.googleusercontent.com";
const App = () => {

    return (
        <Provider store={store}>
            <CssBaseline />
            <AuthProvider>
                <GoogleOAuthProvider clientId={googleKey}>
                    <Routes />
                </GoogleOAuthProvider>
            </AuthProvider>
        </Provider>
    );
}
export default App;
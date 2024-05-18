import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './app/redux/store';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <> 
    <Provider store={store}>
        <GoogleOAuthProvider
            clientId="916830881278-fv5evrd2t14lm6pqrf2h9anm34ucr0v4.apps.googleusercontent.com">
            <React.StrictMode>
                    <App />
            </React.StrictMode>
        </GoogleOAuthProvider>
        </Provider>
    </>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(////console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
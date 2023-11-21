import React from 'react';

import './app.css';
import Home from "./pages/home/Home"
import Events from "./pages/Events"
import Register from "./pages/Register"
import Login from "./pages/Login"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Store from "./pages/Store";
import { useFetching } from './app/hooks/api/useFetching'
import { NAVBAR_ACTIONS } from './app/redux/actions/navBar/navBarActions';
import NavBar from './component/navBar/NavBar';
import { ROUTES } from './routes'; 
const App = () => {
 

 
    useFetching(NAVBAR_ACTIONS.getItemsNavBar());


    return (
        <BrowserRouter>
            <NavBar />

            <Routes>
                <Route path={ROUTES.HOME} index element={<Home />} />
                <Route path={ROUTES.EVENTS} element={<Events />} />
                <Route path={ROUTES.LOGIN} element={<Login />} />
                <Route path={ROUTES.SIGNIN} element={<Register />} />
                <Route path={ROUTES.STORE} element={<Store />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;
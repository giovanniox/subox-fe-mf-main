import React from 'react';

import './app.css';
import Home from "./pages/Home"
import Events from "./pages/Events"
import Register from "./pages/Register"
import Login from "./pages/Login"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Store from "./pages/Store";
import { useFetching } from './app/hooks/api/useFetching'
import { NAVBAR_ACTIONS } from './app/redux/actions/navBar/navBarActions';
import NavBar from './component/navBar/NavBar';

const App = () => {
 

 
    useFetching(NAVBAR_ACTIONS.getItemsNavBar());


    return (
        <BrowserRouter>
            <NavBar />

            <Routes>
                <Route index element={<Home />} />
                <Route path="events" element={<Events />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="store" element={<Store />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;
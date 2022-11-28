import React from 'react';

import './app.css';
import Home from "./pages/Home"
import Events from "./pages/Events"
import SignUp from "./pages/SignUp"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Store from "./pages/Store";
import NavBar from './component/navBar/NavBar';
import { useFetching } from './app/hooks/api/useFetching'
import { NAVBAR_ACTIONS } from './app/redux/actions/navBarActions';
const App = () => {
 

 
    useFetching(NAVBAR_ACTIONS.getItemsNavBar());


    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route index element={<Home />} />
                <Route path="events" element={<Events />} />
                <Route path="sign-up" element={<SignUp />} />
                <Route path="store" element={<Store />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;
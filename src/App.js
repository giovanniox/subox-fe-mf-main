import React from 'react';
import Navbar from './component/navbar/Navbar';
import './app.css';
import Home from "./pages/Home"
import Events from "./pages/Events"
import SignUp from "./pages/SignUp"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Store from "./pages/Store";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="events" element={<Events/>}/>
                <Route path="sign-up" element={<SignUp/>}/>
                <Route path="store" element={<Store/>}/>
            </Routes>
        </BrowserRouter>
    );
}
export default App;
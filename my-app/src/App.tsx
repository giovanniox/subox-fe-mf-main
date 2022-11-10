
import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Navbar from "./component/header/navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import AnnualReport from "./pages/AnnualReport";
import Blogs from "./pages/Blogs";
import SignUp from "./pages/SignUp";


function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/about' element={  <About/>} />
                <Route path='/events' element={ <Events/>} />
                <Route path='/annual' element={ <AnnualReport/>} />
                <Route path='/blogs' element={  <Blogs/>} />
                <Route path='/sign-up' element={<SignUp/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
import React, { useEffect } from "react"
import { Route, Switch, useLocation } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import Productos from './components/Productos';
import NuevoProducto from './components/NuevoProducto';
import EditarProducto from './components/EditarProducto';
import SignIn from './components/login/SignIn';
import SignUp from './components/login/SingUp';
import { hideHeaderAction, showHeaderAction } from "./redux/actions/showHeaderActions/showHeaderActions";

import './static/style/login.css'
import Header from './components/layout/header/Header';

function Routes() {
    const location = useLocation()
    const dispatch = useDispatch();
    const isShowHeader = useSelector(state => state.showHeader.headerIsShow)
    useEffect(() => {
        if (location.pathname === '/sign-in' || location.pathname === '/sign-up') {
            if (isShowHeader) {
                dispatch(hideHeaderAction());
            }
        } else {
            if (!isShowHeader) {
                dispatch(showHeaderAction());
            }
        }
    }, [location.pathname])






    return (
        <>
            <Header />

            <div className="container mt-5">
                <Switch>
                    <Route exact path="/" component={Productos} />
                    <Route exact path="/productos/nuevo" component={NuevoProducto} />
                    <Route exact path="/productos/editar/:id" component={EditarProducto} />
                    <Route exact path='/sign-up' component={SignUp} />
                    <Route exact path='/sign-in' component={SignIn} />
                </Switch>
            </div>

        </>

    );
}

export default Routes
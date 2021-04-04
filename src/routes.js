import React, { useEffect } from "react"
import { Route, Switch, useLocation } from "react-router-dom"
import { useDispatch } from 'react-redux';
import Productos from './components/Productos';
import NuevoProducto from './components/NuevoProducto';
import EditarProducto from './components/EditarProducto';
import SignIn from './components/login/SignIn';
import SignUp from './components/login/SingUp';
import { hideHeaderAction, showHeaderAction } from "./redux/actions/showHeaderActions/showHeaderActions";

//css
import './static/style/login.css'

function Routes() {
    const location = useLocation()
    const dispatch = useDispatch();
    useEffect(() => {
        if (location.pathname === '/sign-in' || location.pathname === '/sign-up') 
            dispatch(hideHeaderAction());
         else 
            dispatch(showHeaderAction());
    }, [location,dispatch])

    return (
        <Switch>
            <Route exact path="/" component={Productos} />
            <Route exact path="/productos/nuevo" component={NuevoProducto} />
            <Route exact path="/productos/editar/:id" component={EditarProducto} />
            <Route exact path='/sign-up' component={SignUp} />
            <Route exact path='/sign-in' component={SignIn} />
        </Switch>
    );
}

export default Routes
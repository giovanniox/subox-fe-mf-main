import React, { useEffect } from "react"
import { Route, Switch, useLocation } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import Productos from './components/Productos';
import NuevoProducto from './components/NuevoProducto';
import EditarProducto from './components/EditarProducto';
import SignIn from './components/login/SignIn';
import SignUp from './components/login/SingUp';
import { hideHeaderAction, showHeaderAction } from "./redux/actions/showHeaderActions/showHeaderActions";
import ValidateEmail from './components/login/ValidateEmail';
import styled from 'styled-components'
import Header from './components/layout/header/Header';
import { useIntl } from 'react-intl';

function Routes() {
    const location = useLocation()
    const dispatch = useDispatch();
    const intl = useIntl();
    const isShowHeader = useSelector(state => state.showHeader.headerIsShow)

    useEffect(() => {
        if (location.pathname === '/sign-in' || location.pathname === '/sign-up' || location.pathname === '/validate-email') {
            if (isShowHeader) {
                dispatch(hideHeaderAction());
            }
        } else {
            if (!isShowHeader) {
                dispatch(showHeaderAction());
            }
        }
    }, [location.pathname])




    intl.formatMessage({ id: "app.header.nav.products" }).replace(/ /g, "").toLowerCase();
    return (
        <>
            <Header />

            <Main>
                <Switch>
                    <Route exact path="/" component={SignIn} />
                    <Route exact path={`/${intl.formatMessage({ id: "app.header.nav.products" }).replace(/ /g, "").toLowerCase()}`} component={Productos} />
                    <Route exact path="/productos/editar/:id" component={EditarProducto} />
                    <Route exact path='/sign-up' component={SignUp} />
                    <Route exact path='/sign-in' component={SignIn} />
                    <Route exact path='/validate-email' component={ValidateEmail} />
                </Switch>
            </Main>

        </>

    );
}

export default Routes

const Main = styled.main`
    height: 85vh;
`;
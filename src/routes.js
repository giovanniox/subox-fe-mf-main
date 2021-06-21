import React, { useEffect } from "react"
import { Route, Switch, useLocation } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { useIntl } from 'react-intl';


import { hideHeaderAction, showHeaderAction } from "./redux/actions/showHeaderActions/showHeaderActions";


//components
import Header from './components/layout/header/Header';
import SignIn from './components/login/SignIn';
import SignUp from './components/login/SingUp';
import ValidateEmail from './components/login/ValidateEmail';
import SectionMain from './components/layout/main/SectionMain';
import Product from './components/product/Product'

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
                    <Route exact path="/" component={SectionMain} />
                    <Route exact path='/sign-up' component={SignUp} />
                    <Route exact path='/sign-in' component={SignIn} />
                    <Route exact path='/validate-email' component={ValidateEmail} />
                    <Route exact path='/Productos' component={Product} />
                </Switch>
                <Footer />
            </Main>

        </>

    );
}

export default Routes

const Footer = styled.div`
    width: 100%;
    height: 250px;
    background-color: #333232;
`
const Main = styled.main`
    height: 85vh;
`;
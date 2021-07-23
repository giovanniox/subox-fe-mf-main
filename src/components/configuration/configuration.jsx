import React from 'react';
import styled from 'styled-components'
import Panel from './panel/panel'
import { useSelector } from 'react-redux';

import Perfil from './itemsConfiguration/perfil';
import ManageBranch from './itemsConfiguration/manageBranch';
import ManagerProduct from './itemsConfiguration/manageProduct'
import StatusProduct from './itemsConfiguration/statusProduct';
import ManageManager from './itemsConfiguration/manageManager'
const Configuration = () => {

    const statusPanel = useSelector(state => state.panelStatus.status)
    const items = useSelector(state => state.panelStatus.buttons)
    console.log(items)
    const panelSection = () => {
        switch (statusPanel) {
            case items[0].name:
                return <Perfil />;
            case items[1].name:
                return <StatusProduct />;
            case items[2].name:
                return <ManagerProduct />;
            case items[3].name:
                return <ManageBranch />;
            case items[4].name:
                return <ManageManager />;
            default:
                break;
        }
    }


    return (
        <MainContainer>
            <Panel />
            <ContentContainer>
                {panelSection()}
            </ContentContainer>
        </MainContainer>
    );
}

export default Configuration;

const MainContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    background-color: #7b7b7b;
`


const ContentContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: #ffffff;
`
import React from 'react';
import styled from 'styled-components'
const Configuration = () => {
    return ( 
        <MainContainer>
            <PanelContainer>

            </PanelContainer>
            <ContentContainer>
                
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
}
`
const PanelContainer = styled.div`
    width: 15vw;
    min-width: 200px;
    height: 100%;
    background-color: #dadada;
`
const ContentContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: #9e9e9e;
`
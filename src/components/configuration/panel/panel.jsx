import React from 'react';
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { setStatusConfiguration } from '../../../redux/actions/configurationPanelActions'
const Panel = () => {

    const buttons = useSelector(state => state.panelStatus.buttons)
    const dispatch = useDispatch();
    
    const handleOnclick = (e) => {
        e.preventDefault();
        dispatch(setStatusConfiguration(e.target.name))
    }

    return (
        <PanelContainer>
            {
                buttons.map(element => {
                    let { name, title } = element
                    return (
                        <ButtonElement name={name} onClick={(e) => { handleOnclick(e) }}>
                            {title}
                        </ButtonElement>
                    )
                })
            }
        </PanelContainer>

    );
}

export default Panel;

const ButtonElement = styled.button`
    width: 90%;
    height: 75px;
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 5px;
    box-shadow: #757575 3px 3px;
    background-color: #f9f9f9;
    color: #fb6565;
    text-transform: capitalize;
    font-size: 1.7rem;
    font-weight: 600;
`
const PanelContainer = styled.div`
    width: 30vw;
    min-width: 200px;
    height: 100%;
    background-color: #404040;
`
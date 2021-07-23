import React from 'react';
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { selectOnOffice, selectDispatch } from '../../../../redux/actions/shippingTypeActions';

const ButtonsShipping = () => {
    const dispatch = useDispatch();
    const shippingType = useSelector(state => state.shippingType.shippingType)
    const handleChangeTypeShipping = (e) => {
        e.preventDefault()
        const name = e.target.name
        if (!shippingType && name === 'btnOffice') {
            dispatch(selectDispatch())
        }
        if (shippingType && name === 'btnDispatch') {
            dispatch(selectOnOffice())
        }
    }
    return (
        <ContainerButtons>
            <ButtonSelection
                isOn={!shippingType}
                disabled={!shippingType}
                onClick={(e) => handleChangeTypeShipping(e)}
                name="btnDispatch"
            >
                Delivery
            </ButtonSelection>
            <ButtonSelection
                isOn={shippingType}
                disabled={shippingType}
                onClick={(e) => handleChangeTypeShipping(e)}
                name="btnOffice"
            >
                Retiro en local
            </ButtonSelection>
        </ContainerButtons>
    );
}

export default ButtonsShipping;



const ContainerButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const ButtonSelection = styled.button`

    border: 1px solid ${props => (props.isOn ? '#67655f' : '#e0d8d8')};
    background-color: ${props => (props.isOn ? '#feffbf' : '#d4cdcd')};
    color:  ${props => (props.isOn ? '#650909' : '#696969')};
    opacity: ${props => (props.isOn ? '1' : '0.9')};

    border-radius: 5px;
    margin: 15px 10px;
    height: 60px;
    width: 100px;
`



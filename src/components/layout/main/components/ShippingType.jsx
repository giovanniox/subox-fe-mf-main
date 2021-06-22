import React, { Fragment } from 'react';
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { selectOnOffice, selectDispatch } from '../../../../redux/actions/shippingTypeActions';
const ShippingType = () => {

    const dispatch = useDispatch();
    const typeShipping = useSelector(state => state.shippingType.shippingType)

    const handleChangeTypeShipping = (e) => {
        e.preventDefault()
        const name = e.target.name
        if (!typeShipping && name === 'btnOffice') {
            dispatch(selectDispatch())
        }
        if (typeShipping && name === 'btnDispatch') {
            dispatch(selectOnOffice())
        }
    }

    return (
        <div>
            <ContainerButtons>
                <ButtonSelection
                    isOn={!typeShipping}
                    disabled={!typeShipping}
                    onClick={(e) => handleChangeTypeShipping(e)}
                    name="btnDispatch"
                >
                    Delerivy
                </ButtonSelection>
                <ButtonSelection
                    isOn={typeShipping}
                    disabled={typeShipping}
                    onClick={(e) => handleChangeTypeShipping(e)}
                    name="btnOffice"
                >
                    Retiro en local
                </ButtonSelection>
            </ContainerButtons>
            <From autocomplete="off">

                {!typeShipping ?
                    <Fragment>
                        <Select name="region" id="cars">
                            <option default value="default">Selecciona region</option>
                            <option value="Metropolitana">Metropolitana de Santaigo</option>
                            <option value="saab">Arica</option>
                            <option value="opel">Parinacota</option>
                            <option value="audi">Punta Arenas</option>
                        </Select>
                        <Select name="city" id="cars">
                            <option default value="default">Selecciona ciudad</option>
                            <option value="volvo">Santiago</option>
                        </Select>
                        <Select name="comunne" id="cars">
                            <option default value="default">Selecciona comuna</option>
                            <option value="volvo">Cerrillos</option>
                            <option value="saab">Maipu</option>
                            <option value="opel">Pudahuel</option>
                            <option value="audi">Estacion Central</option>
                        </Select>

                        <input
                            name="address"
                            id="address"
                            type="text"
                            placeholder="Ingresa tu dirrecion" />

                    </Fragment>
                    :

                    <Select name="localShops" id="shops">
                        <option default value="default">Selecciona la tienda</option>
                        <option value="volvo">Lo Errazuriz #4358, Cerrillos, Santaigo</option>
                        <option value="saab">Leiden #1891, Maipu, Santaigo</option>
                        <option value="opel">Santa tereza #312, Providencia, Santaigo</option>
                    </Select>


                }



                <Pedir type="button" value="Pedir" />


            </From>
        </div>
    );
}

export default ShippingType;

const Select = styled.select`

    width: 200px;
    border-radius: 3px;
    margin: 5px auto;
    height: 32px;

`

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
const From = styled.form`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
`
const Pedir = styled.input`
    width: 190px;
    margin: 10px;
    color: white;
    background-color: #f07c79;
    border-radius: 5px;
    border-color: #d5ac88;
    border: 1px solid;
`



import React, { Fragment } from 'react';
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import {
    selectOnOffice, selectDispatch, getRegionAction,
    clearCity, getCityAction, regionSelectAction,
    clearCommune, getCommuneAction, citySelectAction,
    communeSelectAction, getOrderSetAddressAction, saveAddresAction,
    completeDeptoAction, completeOfficeAction,
} from '../../../../redux/actions/shippingTypeActions';

import useValidation from '../.../../../../../utils/hooks/useValidation'
import validateAddress from '../.../../../../../utils/validacion/validateAddress'
const ShippingType = () => {

    const dispatch = useDispatch();
    const shipping = useSelector(state => state.shippingType)

    const {
        shippingType,
        region,
        city,
        commune,
        regionSelect,
        citySelect,
        streetNumber,
        streetName,
        depto,
        office,
        description,
        saveAddress,
        completeOffice,
        completeDepto,
    } = shipping

    let INIT_STATE = {
        streetNumber,
        streetName,
        depto,
        office,
        description,
    }

    const { values, error, handleSubmit, handleChange } = useValidation(INIT_STATE, validateAddress, handlerShipping)



    function handlerShipping() {
        dispatch(getOrderSetAddressAction(values))

        !shippingType ?
            console.log("por envio")
            :
            console.log("Ir a buscar")
    }



    if (region === null) {
        dispatch(getRegionAction())
    }



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


    const onChangeSelectRegion = (e) => {

        console.log(regionSelect)
        if (regionSelect !== e) {
            dispatch(clearCommune())
            dispatch(clearCity())
        }
        if (e === 'default' || e === 'loading') {
            dispatch(clearCommune())
            dispatch(clearCity())
            return
        }
        dispatch(getCityAction(e))
        dispatch(regionSelectAction(e))
    }

    const onChangeSelectCity = (e) => {
        console.log(citySelect)
        if (citySelect !== e) {
            dispatch(clearCommune())
        }
        if (e === 'default' || e === 'loading') {
            dispatch(clearCommune())
            return
        }
        dispatch(getCommuneAction(e))
        dispatch(citySelectAction(e))
    }

    const onChangeSelectCommune = (e) => {
        dispatch(communeSelectAction(e))
    }


    return (
        <div>
            <ContainerButtons>
                <ButtonSelection
                    isOn={!shippingType}
                    disabled={!shippingType}
                    onClick={(e) => handleChangeTypeShipping(e)}
                    name="btnDispatch"
                >
                    Delerivy
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
            <From autocomplete="off" onSubmit={handleSubmit}>

                {!shippingType ?
                    <Fragment>
                        <ContainerFrom>
                            <div>
                                <InputAddresses
                                    onChange={(e) => handleChange(e)}
                                    name="streetName" type="text" value={values.streetName} placeholder="Nombre calle" />
                                <InputAddresses
                                    onChange={(e) => handleChange(e)}
                                    name="streetNumber" type="text" value={values.streetNumber} placeholder="Numero de domicilio" />
                            </div>
                            <InputAddresses
                                onChange={(e) => handleChange(e)}
                                name="description" type="text" value={values.description} placeholder="Descripcion" />
                            <div>

                                <CheckboxContainer>
                                    <LabelContainer>
                                        <input
                                            onClick={() => dispatch(completeDeptoAction(completeDepto))}
                                            id="completeDepto" name="completeDepto" type="checkbox" value={completeDepto} /><label htmlFor="completeDepto">Departamento</label>
                                    </LabelContainer>

                                    {completeDepto ?

                                        <InputAddresses
                                            height="66px"
                                            onChange={(e) => handleChange(e)}
                                            name="depto" type="text" value={values.depto} placeholder="Numero Departamento" />
                                        :
                                        <div></div>
                                    }
                                </CheckboxContainer>
                                <CheckboxContainer>
                                    <LabelContainer>
                                        <input
                                            onClick={() => dispatch(completeOfficeAction(completeOffice))}
                                            id="completeOffice" name="completeOffice" type="checkbox" value={completeOffice} /><label htmlFor="completeOffice">Oficina</label>
                                    </LabelContainer>


                                    {completeOffice ?

                                        <InputAddresses
                                            onChange={(e) => handleChange(e)}
                                            name="office" type="text" value={values.office} placeholder="Numero Oficina" />


                                        :
                                        <div></div>
                                    }
                                </CheckboxContainer>

                            </div>



                           
                        </ContainerFrom>





                        <ContainerSelect>
                            <Select onChange={(e) => onChangeSelectRegion(e.target.value)} name="region" >
                                <OptionBlod default value="default">Selecciona Region...</OptionBlod>
                                {region ?
                                    region.map((region, index) => {
                                        return (
                                            <option value={region.id} key={index}>{region.name} - {region.code}</option>
                                        )
                                    })
                                    :
                                    <OptionBlod value="loading">Cargando.....</OptionBlod>
                                }

                            </Select>
                            <Select disabled={city == null} onChange={(e) => onChangeSelectCity(e.target.value)} name="city" >
                                <OptionBlod default value="default">Selecciona Ciudad...</OptionBlod>
                                {city ?
                                    city.map((city, index) => {
                                        return (
                                            <option value={city.id} key={index}>{city.name}</option>
                                        )
                                    })
                                    :
                                    <OptionBlod value="loading">Cargando.....</OptionBlod>
                                }
                            </Select>



                            <Select disabled={commune == null} onChange={(e) => onChangeSelectCommune(e.target.value)} name="communeList" >
                                <OptionBlod default value="default">Selecciona Comuna...</OptionBlod>
                                {commune ?
                                    commune.map((commune, index) => {
                                        return (
                                            <option value={commune.id} key={index}>{commune.name}</option>
                                        )
                                    })
                                    :
                                    <OptionBlod value="loading">Cargando.....</OptionBlod>
                                }
                            </Select>
                        </ContainerSelect>

                        <div>
                            <input
                                onClick={() => dispatch(saveAddresAction(saveAddress))}
                                id="saveAddress" name="saveAddress" type="checkbox" value={saveAddress} /><label htmlFor="saveAddress">Guardar dirrecion</label>

                        </div>

                    </Fragment>
                    :

                    <Select name="localShops" id="shops">
                        <option default value="default">Selecciona la tienda</option>
                        <option value="volvo">Lo Errazuriz #4358, Cerrillos, Santaigo</option>
                        <option value="saab">Leiden #1891, Maipu, Santaigo</option>
                        <option value="opel">Santa tereza #312, Providencia, Santaigo</option>
                    </Select>


                }



                <Pedir type="submit" value="Pedir" />


            </From>
        </div>
    );
}

export default ShippingType;
const CheckboxContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: nowrap;
align-items: baseline;

`
const LabelContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: baseline;
    flex: 1;
`

const OptionBlod = styled.option`
font-weight: 700;
`
const InputAddresses = styled.input`
    margin: 5px;
    border-radius: 5px;
    border: 1px #272727 solid;
    padding: 5px;
    text-align: center;
`


const ContainerSelect = styled.div`
    display: flex;
    flex-direction: column;
`
const ContainerFrom = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
`
const Select = styled.select`
    width: 250px;
    border-radius: 5px;
    margin: 5px;
    padding: 5px;
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



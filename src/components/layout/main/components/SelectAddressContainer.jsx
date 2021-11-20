import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import {
  getRegionAction,
  clearCity,
  getCityAction,
  regionSelectAction,
  clearCommune,
  getCommuneAction,
  citySelectAction,
  communeSelectAction,
} from '../../../../redux/actions/shippingTypeActions'

const SelectAddressContainer = () => {
  const dispatch = useDispatch()
  const shipping = useSelector((state) => state.shippingType)

  const { region, city, commune, regionSelect, citySelect } = shipping

  if (region === null) {
    dispatch(getRegionAction())
  }

  const onChangeSelectRegion = (e) => {
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
    <ContainerSelect>
      <Select
        onChange={(e) => onChangeSelectRegion(e.target.value)}
        name="region"
      >
        <OptionBlod default value="default">
          Selecciona Region...
        </OptionBlod>
        {region ? (
          region.map((region, index) => {
            return (
              <option value={region.id} key={index}>
                {region.name} - {region.code}
              </option>
            )
          })
        ) : (
          <OptionBlod value="loading">Cargando.....</OptionBlod>
        )}
      </Select>
      <Select
        disabled={city == null}
        onChange={(e) => onChangeSelectCity(e.target.value)}
        name="city"
      >
        <OptionBlod default value="default">
          Selecciona Ciudad...
        </OptionBlod>
        {city ? (
          city.map((city, index) => {
            return (
              <option value={city.id} key={index}>
                {city.name}
              </option>
            )
          })
        ) : (
          <OptionBlod value="loading">Cargando.....</OptionBlod>
        )}
      </Select>

      <Select
        disabled={commune == null}
        onChange={(e) => onChangeSelectCommune(e.target.value)}
        name="communeList"
      >
        <OptionBlod default value="default">
          Selecciona Comuna...
        </OptionBlod>
        {commune ? (
          commune.map((commune, index) => {
            return (
              <option value={commune.id} key={index}>
                {commune.name}
              </option>
            )
          })
        ) : (
          <OptionBlod value="loading">Cargando.....</OptionBlod>
        )}
      </Select>
    </ContainerSelect>
  )
}

export default SelectAddressContainer

const OptionBlod = styled.option`
  font-weight: 700;
`

const ContainerSelect = styled.div`
  display: flex;
  flex-direction: column;
`
const Select = styled.select`
  width: 250px;
  border-radius: 5px;
  margin: 5px;
  padding: 5px;
`

import React, { Fragment } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import {
  getOrderSetAddressAction,
  saveAddresAction,
  fullAddresForSellAction,
  completeDeptoAction,
  completeOfficeAction,
  newAddressAction,
  selectBranchAction,
} from '../../../../redux/actions/shippingTypeActions'
import Swal from 'sweetalert2'
import useValidation from '../.../../../../../utils/hooks/useValidation'
import validateAddress from '../.../../../../../utils/validacion/validateAddress'
import ButtonsShipping from './ButtonsShipping'
import SelectAddressContainer from './SelectAddressContainer'
import { useHistory } from 'react-router-dom'

const ShippingType = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const shipping = useSelector((state) => state.shippingType)
  const userState = useSelector((state) => state.authReducer.typeUser)
  const user = useSelector((state) => state.authReducer.user)
  let address = null

  if (user) {
    if (user.person !== null) {
      if (user.person.address) {
        address = user.person.address
      }
    }
  }

  const {
    shippingType,
    streetNumber,
    streetName,
    depto,
    office,
    description,
    saveAddress,
    completeOffice,
    completeDepto,
    newAddress,
    branch,
    traceCommune,
  } = shipping

  let INIT_STATE = {
    streetNumber,
    streetName,
    depto,
    office,
    description,
  }

  const { values, handleSubmit, handleChange } = useValidation(
    INIT_STATE,
    validateAddress,
    handlerShipping,
  )

  const HanderNewAddress = (e) => {
    e.preventDefault()
    dispatch(newAddressAction(!newAddress))
  }

  function handlerShipping() {
    if (!shippingType) {
      if (!address) {
        if (traceCommune === '') {
          throwAlertError(
            'Datos incompletos, OBLIGATORIO: nombre de calle, numero de calle, comuna',
          )
          return
        }
        if (streetNumber === '' || streetName === '') {
          throwAlertError(
            'Datos incompletos, OBLIGATORIO: nombre de calle, numero de calle, comuna',
          )
          return
        }
      }
      dispatch(fullAddresForSellAction('DIRRECION'))
      history.push('/Productos')
    } else {
      if (branch === 'default' || branch === null) {
        throwAlertError('Debes seleccionar Local')
        return
      }
      dispatch(fullAddresForSellAction('LOCAL'))
      history.push('/Productos')
    }
  }

  const throwAlertError = (string) => {
    Swal.fire({
      allowOutsideClick: false,
      title: `Error de validacion`,
      text: `${string}`,
      icon: 'error',
    })
  }

  return null
  // <div>
  //   <ButtonsShipping />
  //   <From autocomplete="off" onSubmit={handleSubmit}>
  //     {!shippingType ? (
  //       <Fragment>
  //         {userState !== null ? (
  //           address.length !== 0 ? (
  //             <>
  //               <ContainerAddress>
  //                 {!newAddress ? (
  //                   <Select name="addressUser" id="addressUser">
  //                     <OptionBlod default value="default">
  //                       Selecciona domicilio
  //                     </OptionBlod>
  //                     {address.map((address, index) => {
  //                       return (
  //                         <option
  //                           value={`${address.streetName} #${
  //                             address.streetNumber
  //                           } ${
  //                             address.depto
  //                               ? ', Departamento ' + address.depto
  //                               : null
  //                           } ${
  //                             address.office
  //                               ? ', Oficina ' + address.office + ', '
  //                               : null
  //                           }`}
  //                           key={index}
  //                         >
  //                           {address.streetName} #{address.streetNumber}{' '}
  //                           {address.depto
  //                             ? ', Departamento ' + address.depto
  //                             : null}{' '}
  //                           {address.office
  //                             ? ', Oficina ' + address.office + ', '
  //                             : null}
  //                         </option>
  //                       )
  //                     })}
  //                   </Select>
  //                 ) : null}

  //                 <ButtonNewAddress onClick={(e) => HanderNewAddress(e)}>
  //                   {newAddress ? 'Mis domicilios' : 'Nuevo domicilio'}
  //                 </ButtonNewAddress>
  //               </ContainerAddress>

  //               {newAddress ? (
  //                 <>
  //                   <ContainerFrom>
  //                     <div>
  //                       <InputAddresses
  //                         onChange={(e) => handleChange(e)}
  //                         name="streetName"
  //                         type="text"
  //                         value={values.streetName}
  //                         placeholder="Nombre calle"
  //                       />
  //                       <InputAddresses
  //                         onChange={(e) => handleChange(e)}
  //                         name="streetNumber"
  //                         type="text"
  //                         value={values.streetNumber}
  //                         placeholder="Numero de domicilio"
  //                       />
  //                     </div>
  //                     <InputAddresses
  //                       onChange={(e) => handleChange(e)}
  //                       name="description"
  //                       type="text"
  //                       value={values.description}
  //                       placeholder="Descripcion"
  //                     />
  //                     <div>
  //                       <CheckboxContainer>
  //                         <LabelContainer>
  //                           <input
  //                             onClick={() =>
  //                               dispatch(completeDeptoAction(completeDepto))
  //                             }
  //                             id="completeDepto"
  //                             name="completeDepto"
  //                             type="checkbox"
  //                             value={completeDepto}
  //                           />
  //                           <label htmlFor="completeDepto">
  //                             Departamento
  //                           </label>
  //                         </LabelContainer>

  //                         {completeDepto ? (
  //                           <InputAddresses
  //                             height="66px"
  //                             onChange={(e) => handleChange(e)}
  //                             name="depto"
  //                             type="text"
  //                             value={values.depto}
  //                             placeholder="Numero Departamento"
  //                           />
  //                         ) : (
  //                           <div></div>
  //                         )}
  //                       </CheckboxContainer>
  //                       <CheckboxContainer>
  //                         <LabelContainer>
  //                           <input
  //                             onClick={() =>
  //                               dispatch(completeOfficeAction(completeOffice))
  //                             }
  //                             id="completeOffice"
  //                             name="completeOffice"
  //                             type="checkbox"
  //                             value={completeOffice}
  //                           />
  //                           <label htmlFor="completeOffice">Oficina</label>
  //                         </LabelContainer>

  //                         {completeOffice ? (
  //                           <InputAddresses
  //                             onChange={(e) => handleChange(e)}
  //                             name="office"
  //                             type="text"
  //                             value={values.office}
  //                             placeholder="Numero Oficina"
  //                           />
  //                         ) : (
  //                           <div></div>
  //                         )}
  //                       </CheckboxContainer>
  //                     </div>
  //                   </ContainerFrom>
  //                   <SelectAddressContainer />

  //                   {userState !== null ? (
  //                     userState.filter((rol) => rol.name === 'ROLE_USER')
  //                       .length === 1 ? (
  //                       <div>
  //                         <input
  //                           onClick={() =>
  //                             dispatch(saveAddresAction(saveAddress))
  //                           }
  //                           id="saveAddress"
  //                           name="saveAddress"
  //                           type="checkbox"
  //                           value={saveAddress}
  //                         />
  //                         <label htmlFor="saveAddress">
  //                           Guardar dirrecion
  //                         </label>
  //                       </div>
  //                     ) : null
  //                   ) : null}
  //                 </>
  //               ) : null}
  //             </>
  //           ) : (
  //             <>
  //               <ContainerFrom>
  //                 <div>
  //                   <InputAddresses
  //                     onChange={(e) => handleChange(e)}
  //                     name="streetName"
  //                     type="text"
  //                     value={values.streetName}
  //                     placeholder="Nombre calle"
  //                   />
  //                   <InputAddresses
  //                     onChange={(e) => handleChange(e)}
  //                     name="streetNumber"
  //                     type="text"
  //                     value={values.streetNumber}
  //                     placeholder="Numero de domicilio"
  //                   />
  //                 </div>
  //                 <InputAddresses
  //                   onChange={(e) => handleChange(e)}
  //                   name="description"
  //                   type="text"
  //                   value={values.description}
  //                   placeholder="Descripcion"
  //                 />
  //                 <div>
  //                   <CheckboxContainer>
  //                     <LabelContainer>
  //                       <input
  //                         onClick={() =>
  //                           dispatch(completeDeptoAction(completeDepto))
  //                         }
  //                         id="completeDepto"
  //                         name="completeDepto"
  //                         type="checkbox"
  //                         value={completeDepto}
  //                       />
  //                       <label htmlFor="completeDepto">Departamento</label>
  //                     </LabelContainer>

  //                     {completeDepto ? (
  //                       <InputAddresses
  //                         height="66px"
  //                         onChange={(e) => handleChange(e)}
  //                         name="depto"
  //                         type="text"
  //                         value={values.depto}
  //                         placeholder="Numero Departamento"
  //                       />
  //                     ) : (
  //                       <div></div>
  //                     )}
  //                   </CheckboxContainer>
  //                   <CheckboxContainer>
  //                     <LabelContainer>
  //                       <input
  //                         onClick={() =>
  //                           dispatch(completeOfficeAction(completeOffice))
  //                         }
  //                         id="completeOffice"
  //                         name="completeOffice"
  //                         type="checkbox"
  //                         value={completeOffice}
  //                       />
  //                       <label htmlFor="completeOffice">Oficina</label>
  //                     </LabelContainer>

  //                     {completeOffice ? (
  //                       <InputAddresses
  //                         onChange={(e) => handleChange(e)}
  //                         name="office"
  //                         type="text"
  //                         value={values.office}
  //                         placeholder="Numero Oficina"
  //                       />
  //                     ) : (
  //                       <div></div>
  //                     )}
  //                   </CheckboxContainer>
  //                 </div>
  //               </ContainerFrom>
  //               <SelectAddressContainer />

  //               {userState !== null ? (
  //                 userState.filter((rol) => rol.name === 'ROLE_USER')
  //                   .length === 1 ? (
  //                   <div>
  //                     <input
  //                       onClick={() =>
  //                         dispatch(saveAddresAction(saveAddress))
  //                       }
  //                       id="saveAddress"
  //                       name="saveAddress"
  //                       type="checkbox"
  //                       value={saveAddress}
  //                     />
  //                     <label htmlFor="saveAddress">Guardar dirrecion</label>
  //                   </div>
  //                 ) : null
  //               ) : null}
  //             </>
  //           )
  //         ) : (
  //           <>
  //             <ContainerFrom>
  //               <div>
  //                 <InputAddresses
  //                   onChange={(e) => handleChange(e)}
  //                   name="streetName"
  //                   type="text"
  //                   value={values.streetName}
  //                   placeholder="Nombre calle"
  //                 />
  //                 <InputAddresses
  //                   onChange={(e) => handleChange(e)}
  //                   name="streetNumber"
  //                   type="text"
  //                   value={values.streetNumber}
  //                   placeholder="Numero de domicilio"
  //                 />
  //               </div>
  //               <InputAddresses
  //                 onChange={(e) => handleChange(e)}
  //                 name="description"
  //                 type="text"
  //                 value={values.description}
  //                 placeholder="Descripcion"
  //               />
  //               <div>
  //                 <CheckboxContainer>
  //                   <LabelContainer>
  //                     <input
  //                       onClick={() =>
  //                         dispatch(completeDeptoAction(completeDepto))
  //                       }
  //                       id="completeDepto"
  //                       name="completeDepto"
  //                       type="checkbox"
  //                       value={completeDepto}
  //                     />
  //                     <label htmlFor="completeDepto">Departamento</label>
  //                   </LabelContainer>

  //                   {completeDepto ? (
  //                     <InputAddresses
  //                       height="66px"
  //                       onChange={(e) => handleChange(e)}
  //                       name="depto"
  //                       type="text"
  //                       value={values.depto}
  //                       placeholder="Numero Departamento"
  //                     />
  //                   ) : (
  //                     <div></div>
  //                   )}
  //                 </CheckboxContainer>
  //                 <CheckboxContainer>
  //                   <LabelContainer>
  //                     <input
  //                       onClick={() =>
  //                         dispatch(completeOfficeAction(completeOffice))
  //                       }
  //                       id="completeOffice"
  //                       name="completeOffice"
  //                       type="checkbox"
  //                       value={completeOffice}
  //                     />
  //                     <label htmlFor="completeOffice">Oficina</label>
  //                   </LabelContainer>

  //                   {completeOffice ? (
  //                     <InputAddresses
  //                       onChange={(e) => handleChange(e)}
  //                       name="office"
  //                       type="text"
  //                       value={values.office}
  //                       placeholder="Numero Oficina"
  //                     />
  //                   ) : (
  //                     <div></div>
  //                   )}
  //                 </CheckboxContainer>
  //               </div>
  //             </ContainerFrom>
  //             <SelectAddressContainer />

  //             {userState !== null ? (
  //               userState.filter((rol) => rol.name === 'ROLE_USER').length ===
  //               1 ? (
  //                 <div>
  //                   <input
  //                     onClick={() => dispatch(saveAddresAction(saveAddress))}
  //                     id="saveAddress"
  //                     name="saveAddress"
  //                     type="checkbox"
  //                     value={saveAddress}
  //                   />
  //                   <label htmlFor="saveAddress">Guardar dirrecion</label>
  //                 </div>
  //               ) : null
  //             ) : null}
  //           </>
  //         )}
  //       </Fragment>
  //     ) : (
  //       <Select
  //         onChange={(e) => dispatch(selectBranchAction(e.target.value))}
  //         name="localShops"
  //         id="localShops"
  //       >
  //         <OptionBlod default selected value={branch ? branch : null}>
  //           {branch ? branch : 'Selecciona la tienda'}
  //         </OptionBlod>
  //         <option value="Lo Errazuriz #4358, Cerrillos, Santaigo">
  //           Lo Errazuriz #4358, Cerrillos, Santaigo
  //         </option>
  //         <option value="Leiden #1891, Maipu, Santaigo">
  //           Leiden #1891, Maipu, Santaigo
  //         </option>
  //         <option value="Santa tereza #312, Providencia, Santaigo">
  //           Santa tereza #312, Providencia, Santaigo
  //         </option>
  //       </Select>
  //     )}
  //     <Pedir
  //       onClick={() => dispatch(getOrderSetAddressAction(values))}
  //       type="submit"
  //       value="Pedir"
  //     />
  //   </From>
  // </div>
}

export default ShippingType
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
const ContainerAddress = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const InputAddresses = styled.input`
  margin: 5px;
  border-radius: 5px;
  border: 1px #272727 solid;
  padding: 5px;
  text-align: center;
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

const ButtonNewAddress = styled.div`
  border: 1px solid gainsboro;
  border-radius: 5px;
  padding: 7px 20px;
  color: #b38666;
  margin: 9px 0px;
  cursor: pointer;
  background-color: #feffbf;
  user-select: none;
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
  height: 66px;
  color: white;
  background-color: #f07c79;
  border-radius: 5px;
  border-color: #d5ac88;
  border: 1px solid;
  font-size: 3rem;
  text-transform: uppercase;
  box-shadow: #d0d0d0 2px 3px;
`

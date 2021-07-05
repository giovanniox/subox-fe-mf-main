import React from 'react';
import styled from 'styled-components'
import arrow from './../../../static/img/flecha.png';
import { Link, useHistory } from 'react-router-dom';


import { useSelector, useDispatch } from 'react-redux'


const Perfil = () => {

    const dispatch = useDispatch()
    const history = useHistory()

    const user = useSelector(state => state.authReducer.user)

    if (user === null) {
        history.push('/sign-in')
        return null
    }

    const { userName, contact, person } = user;
    const { email, number, prefixNumber } = contact;
    const { dateBirth, name, lastName, rut, address, sex } = person;


    const datePaser = (dateMiliSeconds) => {
        return new Date(dateMiliSeconds).toLocaleDateString()
    }


    return (
        <ProfileContainer>
            <ContainerSection>
                <Title>
                    <h1>Mis Datos</h1>
                </Title>
                <SubTitle>
                    Datos de cuenta
                </SubTitle>
                <ContainerButtons>
                    <ContainerButton>
                        <Buttons role="button">
                            <div>
                                <span>Usuario</span>
                            </div>
                            <div>
                                <span>{userName ? userName : ""}</span>
                            </div>
                            <div>
                                <ArrowImg src={arrow} alt="arrow" />
                            </div>
                        </Buttons>
                        <Buttons role="button">
                            <div>
                                <span>E-mail</span>
                            </div>
                            <div>
                                <span>{email ? email : ""}</span>
                            </div>
                            <div>
                                <ArrowImg src={arrow} alt="arrow" />
                            </div>
                        </Buttons>
                    </ContainerButton>
                </ContainerButtons>


                <SubTitle>
                    Datos Personales
                </SubTitle>
                <ContainerButtons>
                    <ContainerButton>
                        <Buttons role="button">
                            <div>
                                <span>Nombre</span>
                            </div>
                            <div>
                                <span>{name ? name : ""} {lastName ? lastName : ""}</span>
                            </div>
                            <div>
                                <ArrowImg src={arrow} alt="arrow" />
                            </div>
                        </Buttons>
                        <Buttons role="button">
                            <div>
                                <span>Documento</span>
                            </div>
                            <div>
                                <span>{rut ? "RUT " + rut : ""}</span>
                            </div>
                            <div>
                                <ArrowImg src={arrow} alt="arrow" />
                            </div>
                        </Buttons>
                        <Buttons role="button">
                            <div>
                                <span>Numero</span>
                            </div>
                            <div>
                                <span>{prefixNumber ? prefixNumber : ""} {number ? number : ""}</span>
                            </div>
                            <div>
                                <ArrowImg src={arrow} alt="arrow" />
                            </div>
                        </Buttons>
                        <Buttons role="button">
                            <div>
                                <span>Fecha Nacimiento</span>
                            </div>
                            <div>
                                <span>{dateBirth ? datePaser(dateBirth) : ""}</span>
                            </div>
                            <div>
                                <ArrowImg src={arrow} alt="arrow" />
                            </div>
                        </Buttons>

                        <Buttons role="button">
                            <div>
                                <span>Genero</span>
                            </div>
                            <div>
                                <span>{sex ? "MASCULINO" : "FEMENINO"}</span>
                            </div>
                            <div>
                                <ArrowImg src={arrow} alt="arrow" />
                            </div>
                        </Buttons>

                    </ContainerButton>
                </ContainerButtons>

                <SubTitle>
                    Domicilios
                </SubTitle>
                <ContainerButtons>
                    <ContainerButton>
                        {
                            address.length > 0 ?
                                address.map((address, index) => {
                                    let { streetName,
                                        streetNumber,
                                        depto,
                                        description,
                                        office } = address


                                    return (
                                        <Buttons role="button">
                                            <div>
                                                <div>
                                                    <h4>#{index + 1} Domicilio</h4>
                                                </div>
                                                <div>
                                                    <span><b>Direccion: </b>{streetName} #{streetNumber} {depto ? ", Departamento " + depto : null} {office ? ", Oficina " + office + ", " : null}
                                                        Cerrillos, Santiago, Region metropolitana</span>
                                                </div>
                                                <div>
                                                    <span><b>Descripcion:</b> {description}</span>
                                                </div>
                                            </div>
                                            <div>
                                                <ArrowImg src={arrow} alt="arrow" />
                                            </div>
                                        </Buttons>
                                    )
                                })
                                :
                                <div>
                                    <h3 ><span >No cuentas con domicilios registrados</span></h3>
                                </div>
                        }


                        <div role="button">
                            <div>
                                <AddressAdd ><span role="button">Añadir nuevo domicilio</span></AddressAdd>
                            </div>
                        </div>
                    </ContainerButton>
                </ContainerButtons>




            </ContainerSection>
        </ProfileContainer>

    );
}

export default Perfil
const ArrowImg = styled.img`
    width:10px;
    height:10px;
`
const AddressAdd = styled.h3`
    display: flex;
    justify-content: center;
    margin: 10px;
    color: #6464ff;
`

const ContainerButton = styled.div`
    border: 1px solid gainsboro;
    border-radius: 4px;
    box-shadow: inset 0px 0px 0px 0px #5a5656; 
    width: 100%;   

`
const Buttons = styled.div`
    display: flex;
    justify-content: flex-start;
    border-bottom: 1px solid gray;
    &:last-child {
        border-bottom:none;
    }
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    font-size: 16px;
    padding: 13px 18px;
    border-bottom: 1px solid #eee;
`

const Title = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-start;
}
`
const SubTitle = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-start;
}
`
const ProfileContainer = styled.div`
    background-color: #ffffff;
    height: 100%;
`
const ContainerSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 650px;
    margin: 20px auto;

`
const ContainerButtons = styled.div`
width: 100%;
`
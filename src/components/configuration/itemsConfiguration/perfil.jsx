import React from 'react';
import styled from 'styled-components'
import arrow from './../../../static/img/flecha.png';

const Perfil = () => {
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
                                <span>GIOVANNIOX</span>
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
                                <span>giovannipoblete55@gmail.com</span>
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
                                <span>Giovanni Poblete</span>
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
                                <span>RUT 194190956</span>
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
                                <span>+569 41651682</span>
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
                                <span>24/02/1997</span>
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
                                <span>Masculino</span>
                            </div>
                            <div>
                                 <ArrowImg src={arrow} alt="arrow" />
                            </div>
                        </Buttons>

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
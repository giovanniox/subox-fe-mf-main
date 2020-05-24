import React from "react";
import styled from "styled-components";

const LoginZone = ({loginState,handleLogin}) => {

  
  return <ContainerLogin isOpen={loginState}>
       
        </ContainerLogin>;
        
};

export default LoginZone;

export const ContainerLogin = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  border-left: 1px solid #b1adad;  
  box-shadow: -10px 0px 10px 1px #aaaaaa;
  height: 100%;
  background-color: burlywood;
  opacity: 0.5;
  max-width: 460px;
  transition: width 0.5s ease-in-out;
  width: ${props => props.isOpen ? "400px" : "0px"};
  @media (max-width: 769px) {
    width: ${props => props.isOpen ? "300px" : "0px"};
  }
`;

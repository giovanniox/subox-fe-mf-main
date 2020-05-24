import React ,{useState} from "react";
import styled from "styled-components";
import ArrowNav from "../../../styles/arrow/arrow-nav"
const LoginNav = ({loginState,handleLogin}) => {

  
  return (
    <Container 

    onClick={ ()=>{
      handleLogin(!loginState)
    } }
    >
      <div>
        <Link>Mi Cuenta </Link>
      </div>
      <ArrowNav loginState={loginState}/>
    </Container>
  );
};

export default LoginNav;

const Container = styled.div`
  display: flex;
  margin-top: 16px;
  margin-right: 3%;
  margin-bottom: auto;
  margin-left: 0px;
  cursor: pointer;
`;
const Link = styled.a`
  font-size: 1.5rem;
  line-height: 2;
  color: #fff;
  text-transform: capitalize;
  text-decoration: none;

`;

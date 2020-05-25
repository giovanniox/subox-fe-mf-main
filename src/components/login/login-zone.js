import React from "react";
import styled from "styled-components";
import BtnLogin from "./login-options/login-btn";

const LoginZone = ({ loginState, handleLogin }) => {
  return (
    <ContainerLogin isOpen={loginState}>
      {loginState ? (
        <LoginBox>

        

          <div className="bottom">
            <BtnLogin
              src="\assets\image\img\create-account.png"
              alt="account-add"
              text="crea una cuenta gratis"
            />
            <BtnLogin
              src="\assets\image\img\setting.png"
              alt="settings"
              text="asistencia"
            />
          </div>
        </LoginBox>
      ) : null}
    </ContainerLogin>
  );
};

export default LoginZone;

const LoginBox = styled.div`
  margin-top: 64px;
  width: 100%;
  height: 90%;

  & .bottom{
    position: absolute;
    width: 100%;
    bottom: 0;
  }s
`;

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
  transition: width 0.3s ease-in-out;
  width: ${(props) => (props.isOpen ? "400px" : "0px")};
  @media (max-width: 769px) {
    width: ${(props) => (props.isOpen ? "300px" : "0px")};
  }
`;

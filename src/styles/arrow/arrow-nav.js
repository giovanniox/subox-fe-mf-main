import React from "react";
import styled from "styled-components";

const ArrowNav = ({loginState}) => {
  console.log(loginState)
  return (

    <Container isOpen={loginState}>
      <div className="open">
        <span>&nbsp;</span>
        <span>&nbsp;</span>
      </div>
    </Container>
  );
};

export default ArrowNav;
const Container = styled.div`
  display: inline-block;
  position: relative;
  padding-top: .7rem;
  cursor: pointer;
  margin: auto 10px;

  transform: rotate${props => props.isOpen ? "(90deg)" : "(-90deg)"};
& span {
    background: #fff;
    display: block;
    position: relative;
    width: 13px;
    height: 2px;
    border-radius: 15px;
    margin-bottom: .7rem;
  }

.open{
    top: ${props => props.isOpen ? "-7px" : "6px"};
    left: -11px;
    opacity: 0.5;
    position: absolute;
}

.open span:nth-child(1) {
    transform: rotate(43deg);
    top: 7px;
}

.open span:nth-child(2) {
  transform: rotate(134deg);
  bottom: 3px;
  left: 9px;
}
`;

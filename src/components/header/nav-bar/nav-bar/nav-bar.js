import React from 'react'
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";

import Brand from "../../logo/brand";
import BurgerMenu from "../icon-burger/burger-menu";
import CollapseMenu from "../collapse-nav-bar/collapse-nav-bar";
import LoginNav from "../../nav-login/nav-login";
const Navbar = ({navbarState,loginState,handleNavbar,handleLogin}) => {
  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -30rem, 0)' },
    transform: 'translate3d(0, 0, 0)',
  });

  const linkAnimation = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 500,
    config: config.gentle,
  });

  return (
    <>
      <NavBar style={barAnimation}>
        <FlexContainer>
          <Brand />
          <NavLinks style={linkAnimation}>
            <a href="/">link n1</a>
            <a href="/">link n2</a>
            <a href="/">link n3</a>
            <a href="/">link n4</a>
          </NavLinks>
          <BurgerWrapper>
            <BurgerMenu
              navbarState={navbarState} 
              handleNavbar={handleNavbar}
            />
          </BurgerWrapper>
          <LoginNav loginState={loginState} handleLogin={handleLogin}/>
        </FlexContainer>
      </NavBar>
     
      <CollapseMenu 
        navbarState={navbarState} 
        handleNavbar={handleNavbar}
      />
   </>
  )
}

export default Navbar

const NavBar = styled(animated.nav)`
  user-select: none;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: #2d3436;
  z-index: 1;
  font-size: 1.4rem;
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;;
  justify-content: space-between;
  height: 5rem;
`;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: 26px auto 0 0;

  & a {
    color: #dfe6e9;
    font-weight: 400;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fcdee2;
      opacity: 0.6
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;
  position: absolute;
  margin-top: 10px;
  margin-right: 100%;
  @media (min-width: 769px) {
    display: none;
  }


`;
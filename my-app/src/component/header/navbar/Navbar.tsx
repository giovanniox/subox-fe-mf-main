import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const Navbar = () => {

  const navBarList = [
    {
      id:1,
      path:"/about",
      name:"About"
    },
    {
      id:2,
      path:"/events",
      name:"Events"
    },
    {
      id:3,
      path:"/annual",
      name:"Annual Report"
    },
    {
      id:3,
      path:"/sign-up",
      name:" Sign Up"
    },
  ]

  return (
      <Nav>
        <Bars />
  
        <NavMenu>
          {
            navBarList.map(element => (
                <NavLink key={element.id} to={element.path} >
                  {element.name}
                </NavLink>
            ))
          }


        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
  );
};
  
export default Navbar;
import { Outlet } from "react-router-dom";
import NavBar from "../component/navBar/NavBar";
const NavBarWrapper = ({chilldrens}) => {

  return < >
    <NavBar />
    <Outlet />
  </ >;
};

export default NavBarWrapper;
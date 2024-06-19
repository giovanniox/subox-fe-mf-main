import { Outlet } from "react-router-dom";
import NavBar from "../component/navBar/NavBar";
const NavBarWrapper = ({ chilldrens }) => {

  return (
    <>
      <div className="container">
        <NavBar />
        <div className="outlet">
          <Outlet />
        </div>

      </div>
    </>
  )

};

export default NavBarWrapper;
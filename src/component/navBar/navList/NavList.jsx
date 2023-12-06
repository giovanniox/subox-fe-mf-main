import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import dropDownIcon from "./../resourse/img/dropdown-icon.svg";
import DropDown from "./../dropdown/Dropdown";
import "./navList.scss";
import { DROPDOWN_ACTIONS } from "../../../app/redux/actions/navBar/dropDownActions";
import { useRef, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdArrowDropdown } from "react-icons/io";
import { ImCross } from "react-icons/im";
const NavList = ({ classType }) => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.navBar);
  const divRef = useRef(null);

  const uniqueTypes = [...new Set(items.map((item) => item.type))];

  const handleMouseEnter = (event, e) => {
    dispatch(DROPDOWN_ACTIONS.toogleDropDown(e));
  };

  function handleMouseLeave(event, e) {
    const { clientY } = event;
    const divRect = divRef.current.getBoundingClientRect();
    const roundedY = Math.round(divRect.bottom);
    const roundedYc = Math.ceil(divRect.bottom);
    const roundedYf = Math.floor(divRect.bottom);
    if (clientY > roundedY || clientY > roundedYc || clientY > roundedYf) {
      console.log(e);
      dispatch(DROPDOWN_ACTIONS.toogleDropDown(e));
    } else {
      dispatch(DROPDOWN_ACTIONS.toogleDropDown([]));
    }
  }
  const handleButtonClick = (type) => {
    // Lógica para mostrar o realizar acciones según el tipo
    const itemsOfType = items.filter((item) => item.type === type);
    switch (type) {
      case "list":
        console.log("opeen list");
        openNav();
        break;
      case "session":
        console.log("opeen session");
        openNav();
        break;
      default:
        break;
    }
    console.log(`Mostrar ${type}es:`, itemsOfType);
  };

  const [isNavOpenR, setNavOpenR] = useState(false);
  const [isNavOpenL, setNavOpenL] = useState(false);

  const openNav = () => {
    console.log(isNavOpenR);
    setNavOpenR(!isNavOpenR);
  };

  const closeNav = () => {
    console.log(isNavOpenR);
    setNavOpenR(!isNavOpenR);
  };

  return items.length !== 0 ? (
    <>
      <ul className={`navBar__container__group`}>
        {items
          .filter((item) => item.type === classType)
          .map((e) => {
            return (
              <li
                onMouseEnter={(event) => {
                  handleMouseEnter(event, e);
                }}
                onMouseLeave={(event) => {
                  handleMouseLeave(event, e);
                }}
                key={e.id + classType}
                className={`navBar__container__${e.type}`}
              >
                <div
                  key={e.id}
                  className={`navBar__container__${e.type}__item`}
                >
                  <Link
                    ref={divRef}
                    className={`navBar__container__${e.type}__item__link`}
                    to={e.to}
                  >
                    {e.name}
                    {e.dropDown ? (
                      <IoMdArrowDropdown
                        className={`navBar__container__${e.type}__item__link__icon`}
                      />
                    ) : undefined}
                  </Link>
                </div>

                <DropDown parrent={e.name} classType={e.type} />
              </li>
            );
          })}
      </ul>
      <div className={`navBar__container__group--responsiveButtons`}>
        {uniqueTypes.map(
          (type) =>
            classType === type && (
              <div
                key={type}
                type={type}
                onClick={() => handleButtonClick(type)}
              >
                
                {isNavOpenR ?  <ImCross /> : classType === "session"  &&    <FaRegUser />    }
                {isNavOpenL ?  <ImCross /> : classType === "list"  &&    <GiHamburgerMenu />    }

                <div className={`sidenav sidenav__${isNavOpenR ? "r": isNavOpenL ? "l":null} ${isNavOpenR ? "open" : "close"}`}>
                  <button
                    className="closebtn"
                    onClick={closeNav}>
                    &times;
                  </button>
                </div>
              </div>
            )
        )}
      </div>
    </>
  ) : (
    <span>Cargando barra de navegacion...</span>
  );
};

export default NavList;

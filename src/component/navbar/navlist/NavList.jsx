import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

import { NAVBAR_ACTIONS } from "../../../app/redux/actions/navbarActions"
import dropDownIcon from './../resourse/img/dropdown-icon.svg'
import DropDown from "./../dropdown/Dropdown";
import "./navlist.scss"


const NavList = ({ classType }) => {
    const { items } = useSelector(state => state.navbar)

    return items.length !== 0 ? (
        <>
            {
                items.filter(item => item.type === classType).map(e => {
                    return (
                        <ul key={e.id + classType} className={`navbar__container__${e.type}`}>
                            <li key={e.id} className={`navbar__container__${e.type}__item`}>

                                <Link
                                    className={`navbar__container__${e.type}__item__link`}
                                    to={e.to}>
                                    {e.name}
                                    {e.dropdownIcon ?
                                        <img
                                            className={`navbar__container__${e.type}__item__link__icon`}
                                            src={dropDownIcon}
                                            alt="icono drop down" />
                                        : undefined}
                                </Link>
                                <DropDown />

                            </li>
                        </ul>)
                })

            }
        </>

    ) : <span>falta el cargando</span>;
}

export default NavList;
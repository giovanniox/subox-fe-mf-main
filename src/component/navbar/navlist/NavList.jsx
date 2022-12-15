import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { NAVBAR_ACTIONS } from "../../../app/redux/actions/navBarActions"
import dropDownIcon from './../resourse/img/dropDown-icon.svg'
import DropDown from "../dropDown/DropDown";
import "./navList.scss"
import { useMediaQuery } from 'react-responsive'

const NavList = ({ classType }) => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })


    const { items } = useSelector(state => state.navBar)

    const dispatch = useDispatch()

    return items.length !== 0 ? (
        <>
            {
                items.filter(item => item.type === classType).map(e => {
                    return !isTabletOrMobile && (
                        <ul key={e.id + classType} className={`navBar__container__${e.type}`}>
                            <li key={e.id} className={`navBar__container__${e.type}__item`}>
                                <Link
                                    className={`navBar__container__${e.type}__item__link`}
                                    to={e.to}>
                                    {e.name}
                                    {e.dropDownIcon ?
                                        <img
                                            className={`navBar__container__${e.type}__item__link__icon`}
                                            src={dropDownIcon}
                                            alt="icono drop down" />
                                        : undefined}
                                </Link>
                            </li>
                            {e?.children ?
                                <DropDown classType={e.type} children={e?.children} />
                                : undefined}
                        </ul>)
                })

            }
        </>

    ) : <span>falta el cargando</span>;
}

export default NavList;
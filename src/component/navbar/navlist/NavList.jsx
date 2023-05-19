import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import dropDownIcon from './../resourse/img/dropDown-icon.svg'
import DropDown from "../dropDown/DropDown";
import "./navList.scss"
import {DROPDOWN_ACTIONS} from "../../../app/redux/actions/dropDownActions";
import {useRef,} from "react";
const NavList = ({ classType }) => {
    const dispatch = useDispatch()
    const { items } = useSelector(state => state.navBar)

    const onMouseOverItemNavBar = (children) => {
        console.log(children);

        dispatch(DROPDOWN_ACTIONS.dropDownGet(children?.children))
        dispatch(DROPDOWN_ACTIONS.toogleDropDown(children.name))
        dispatch(DROPDOWN_ACTIONS.setSelectedDropDown(!children.dropDownIsShow))

    }
    console.log(items);

    return items.length !== 0  && items.navBar !== undefined ? (
        <>
            {
                items.navBar.filter(item => item.type === classType).map(e => {
                    return (
                        <ul key={e.id + classType} className={`navBar__container__${e.type}`}>
                            <li key={e.id} className={`navBar__container__${e.type}__item`} name={e.name} onMouseOver={()=>{onMouseOverItemNavBar(e)}}>
                                <Link
                                    className={`navBar__container__${e.type}__item__link`}
                                    to={e.to}>
                                    {e.name}
                                    {e.dropDown ?
                                        <img
                                            className={`navBar__container__${e.type}__item__link__icon`}
                                            src={dropDownIcon}
                                            alt="icono drop down" />
                                        : undefined}
                                </Link>
                            </li>
                            {e?.children ?
                                <DropDown  classType={e.type} children={e.children} />
                                : undefined}
                        </ul>)
                })

            }
        </>

    ) : <span>falta el cargando</span>;
}

export default NavList;
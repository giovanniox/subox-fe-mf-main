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
    const divRef = useRef(null);


    const handleMouseEnter =(event, e) => {
        dispatch(DROPDOWN_ACTIONS.toogleDropDown(e))
    }

    function handleMouseLeave(event, e) {
        const {clientY } = event;
        const divRect = divRef.current.getBoundingClientRect();
        const roundedY = Math.round(divRect.bottom);
        const roundedYc = Math.ceil(divRect.bottom);
        const roundedYf = Math.floor(divRect.bottom);
        if (clientY > roundedY || clientY > roundedYc || clientY > roundedYf) {
              dispatch(DROPDOWN_ACTIONS.toogleDropDown(e))
        }else{
            dispatch(DROPDOWN_ACTIONS.toogleDropDown([]))
        }
    }

    return items.length !== 0  && items.navBar !== undefined ? (
        <>
            {
                items.navBar.filter(item => item.type === classType).map(e => {
                    return (
                        <ul        key={e.id + classType} className={`navBar__container__${e.type}`}>
                            <li  key={e.id} className={`navBar__container__${e.type}__item`}
                                name={e.name}
                                onMouseEnter={(event)=>{handleMouseEnter(event,e)}}
                               onMouseLeave={(event)=>{handleMouseLeave(event,e)}}

                            >
                                <Link
                                    ref={divRef}
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
                                <DropDown parrent={e.name}  classType={e.type} children={e.children} />
                                : undefined}
                        </ul>)
                })

            }
        </>

    ) : <span>Cargando barra de navegacion...</span>;
}

export default NavList;

import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import "./dropDown.scss"
import { useMediaQuery } from 'react-responsive'
import {DROPDOWN_ACTIONS} from "../../../app/redux/actions/dropDownActions";

const DropDown = ({ classType, children,parrent }) => {
     const {      dropDownSelected } = useSelector(state => state.dropDown)
    const dispatch = useDispatch()

    function handleMouseLeave(event, e) {
            dispatch(DROPDOWN_ACTIONS.toogleDropDown([]))
        }
    return     <div className="navBar__dropdown">

            <ul className='navBar__dropdown__list'              onMouseLeave={()=>{handleMouseLeave()}}>
                {children.map((e) => {
                    return parrent === dropDownSelected && (
                        <li key={e.id}  className={`navBar__dropdown__list__${classType}`}>
                            <Link to={e.to}> {e.name}</Link>
                        </li>)
                })}
            </ul>
        </div >
}

export default DropDown;

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { DROPDOWN_ACTIONS } from '../../../app/redux/actions/navBar/dropDownActions';
import './dropDown.scss';

const DropDown = ({ classType,  parrent }) => {
    const { dropDownSelected , children} = useSelector((state) => state.dropDown);
    const dispatch = useDispatch();

    const handleMouseLeave = () => {
        console.log("in")
        dispatch(DROPDOWN_ACTIONS.toogleDropDown(null));
        console.log(dropDownSelected , children)
    };

    return (
        <div  className="navBar__dropdown"  onMouseLeave={handleMouseLeave}  >
            <ul className="navBar__dropdown__list">
                {children?.map((e) => {
                    return parrent === dropDownSelected && (
                        <li  key={e.id} className={`navBar__dropdown__list__${classType}`}>
                            <Link to={e.to}>{e.name}</Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default DropDown;
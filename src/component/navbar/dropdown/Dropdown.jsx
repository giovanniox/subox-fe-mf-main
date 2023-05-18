
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import "./dropDown.scss"
import { useMediaQuery } from 'react-responsive'

const DropDown = ({ classType, children }) => {

    const {     dropDown,        dropDownSelected,        dropDownIsShow } = useSelector(state => state.dropDown)
    console.log(    dropDown,        dropDownSelected,        dropDownIsShow)
        //[] null false

    return dropDown  &&     dropDownSelected &&  dropDownIsShow ? (<div className="navBar__dropdown">
            <ul className='navBar__dropdown__list'>
                {children.map((e) => {
                    return (
                        <li key={e.id}  className={`navBar__dropdown__list__${classType}`}>
                            <Link to={e.to}> {e.name}</Link>
                        </li>)
                })}
            </ul>
        </div >) : undefined
}

export default DropDown;
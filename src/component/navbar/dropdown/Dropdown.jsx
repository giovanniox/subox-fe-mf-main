
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import "./dropDown.scss"
import { useMediaQuery } from 'react-responsive'

const DropDown = ({ classType, children }) => {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })

    const { dropdownIsShow } = useSelector(state => state.navBar)

    return children !== undefined ? (
        <div className="navBar__dropdown">
            <ul className='navBar__dropdown__list'>
                {children.map((e) => {
                    return (
                        <li className={`navBar__dropdown__list__${classType}`}>
                            <Link to={e.to}> {e.name}</Link>
                        </li>)

                })}
            </ul>
        </div >) : undefined;
}

export default DropDown;
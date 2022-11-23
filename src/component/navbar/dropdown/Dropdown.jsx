
import { useSelector } from 'react-redux'

const DropDown = () => {

    const { items } = useSelector(state => state.navbar)

    const KEY_CHILD = "childSession"
    return (<>
        <ul className="navbar__dropdown">
            <li className='navbar__dropdown__child'>
                {
                    //  console.log(items.filter(items => items.children !== undefined).filter(
                    //      e=>e
                    //  ))
                }

            </li>
        </ul></>);
}

export default DropDown;
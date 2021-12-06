import React from 'react';
import './Control.scss'
import ControlCategories from './controlCategory/ControlCategories';
import ControlProducto from './controlProduct/ControlCategories';
const Control = () => {
    return ( 
        <div className="container-control">
            <div className="box-container">
                <div>
                    <h1>Control Panel</h1>
                </div>
               <ControlCategories/>
                <ControlProducto/>
            </div>
        </div>
     );
}
 
export default Control;
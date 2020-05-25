import React from 'react';
import {BtnLogin} from './style'
const LoginButton = ({text,src,alt}) => {
    return ( 
        <BtnLogin>
         <button href="#">
            <img src={src} alt={alt}/>
            <span>{text}</span>
             </button>    
        </BtnLogin>
     );
}
 
export default LoginButton;

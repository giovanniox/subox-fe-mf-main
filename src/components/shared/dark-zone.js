import React from 'react'
import styled from "styled-components";
 
const DarkZone = ({loginState,handleLogin}) => {



    return (
        loginState ?
    <Zone onClick={()=>{handleLogin(false)}}/>
    :
    null
    );
}
 
export default DarkZone;

const Zone =  styled.div`
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: #aeaeae;
    opacity: 0.5;
    z-index: -1;
`
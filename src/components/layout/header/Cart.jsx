import React,{useEffect,useState,} from 'react';
import CartImage from './../../../static/img/cart.jpg'
import styled from 'styled-components'
const Cart = () => {





    return (
        <ContainerCart>
            <Accountant>
                1
            </Accountant>
            <ImageCart src={CartImage} alt="cart" />

        </ContainerCart>
    );
}

export default Cart;

const ContainerCart = styled.div`
    border: 2px solid black;
    border-radius: 30px;
    padding: 5px;
    cursor: pointer;
    margin-right: 20px;
    position: relative;
`
const ImageCart = styled.img`
    width: 30px;
`
const Accountant = styled.div`
    position: absolute;
    left: 32px;
    top: -8px;
    border-radius: 53px;
    background-color: red;
    font-size: 14px;
    color: white;
    width: 20px;
    height: 20px;
    text-align: center;
    overflow: hidden;
`
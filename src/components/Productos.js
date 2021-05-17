import React, { Fragment, useEffect } from 'react';
import Producto from './Producto';
import styled from 'styled-components'
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { obtenerProductosAction } from '../redux/actions/productActions/productoActions';

const Productos = () => {

    const dispatch = useDispatch();

    useEffect( ()=> {

        // Consultar la api
        const cargarProductos = () => dispatch( obtenerProductosAction() );
        cargarProductos();
        // eslint-disable-next-line
    }, []);

    // obtener el state
    const productos = useSelector( state => state.productos.productos );
    const error = useSelector(state => state.productos.error);
    const cargando = useSelector(state => state.productos.loading);

    return ( 
       <Container>
           <ContainerOne/>
           <ContainerTwo/>
       </Container>
     );
}
 
export default Productos;



//STYLED COMPONENT
const Container = styled.div`
    display: inline-flex;
    flex-direction: row;
    background: #7ed47e;
    position: relative;
    margin: 0 !important;
    padding: 15px 0px;
    width: 100%;
    min-height: 100%;
    height:86vh;
`;
const ContainerOne = styled.div`
    width: 70%;
    background: #585757;
`;

const ContainerTwo = styled.div`
    width: 30%;
    background: #444242;
`;

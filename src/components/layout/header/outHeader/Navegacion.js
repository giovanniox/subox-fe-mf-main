import React from 'react';
import { Link } from 'react-router-dom'


const Navegacion = () => {

    return (
        <nav className='navbar-container'>
            <Link to="/">
                Inicio
            </Link>
            <Link to="/populares">
                Populares
            </Link>
            <Link to="/finalizar">
                Finalizar
            </Link>
            <Link to="/como-funcionamos">
                Como funcionamos
            </Link>
            {true && (
                <Link to={"/productos/nuevo"}
                >Agregar Producto &#43;
                </Link>
            )}

        </nav>
    );
}

export default Navegacion;



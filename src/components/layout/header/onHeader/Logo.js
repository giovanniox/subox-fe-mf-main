import React from 'react';
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <div className='logo-container'>
            <Link to="/" className='logo'>
                Subox
            </Link>
        </div>
    );
}

export default Logo;
import React from 'react';


const Lookfor = () => {

    const onSubmitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <div className='lookfor-container'>
            <form
                onSubmit={onSubmitHandler}
            >
                <input className='input-look-for'
                    type="text"
                    placeholder="Buscar Productos"
                />

                <button
                    className="button-look-for"
                    type="submit"
                >Buscar</button>
            </form>
        </div>
    );
}

export default Lookfor;


import React, { useState } from 'react';
import "./loginForm.scss"
const LoginForm = () => {
    const [correo, setCorreo] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true);



    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password === confirmPassword) {
            // Contraseñas coinciden, puedes continuar
            console.log('Contraseñas coinciden');
        } else {
            console.log('Las contraseñas no coinciden');
            setPasswordMatch(false);
        }



        if (passwordMatch) {
            const formData = {
                correo,
                password,
                userName
            };
            try {
                const response = await fetch('http://localhost:7000/api/users/me', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });
                if (response.ok) {
                    console.log('Registro exitoso');
                } else {
                    console.log('Error en el registro');
                }
            } catch (error) {
                console.log('Error en la solicitud:', error);
            }
        }

    };

    return (
        <form className='wrapper-input' onSubmit={handleSubmit}>
     
            <div className="input-container">
                <input type="email" value={correo} id="correo" className="input-container-input" required onChange={(e) => setCorreo(e.target.value)} />
                <label htmlFor="correo" className="input-container-label">Ingresar usuario/correo</label>
            </div>
            <div className="input-container">
                <input type="password" value={password} id="password" className="input-container-input" required onChange={(e) => setPassword(e.target.value)} />
                <label htmlFor="password" className="input-container-label">Ingresar contraseña</label>
            </div>

            

            <button type="submit" className="btnRegister">Iniciar</button>
        </form>
    );
};

export default LoginForm;

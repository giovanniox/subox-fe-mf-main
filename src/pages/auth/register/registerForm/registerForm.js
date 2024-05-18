import React, { useState, useRef } from 'react';
import "./registerForm.scss"
import { TbEyeClosed } from "react-icons/tb";
import { ImEye } from "react-icons/im";


const RegisterForm = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        email: "",
        confirmPassword: '',
    });

    const [formErrors, setFormErrors] = useState({
        username: '',
        password: '',
        email: '',
        confirmPassword: '',
    });

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };

    const validateField = (fieldName, value) => {
        switch (fieldName) {
            case 'username':
                if (value.trim() === '') {
                    return 'Por favor, ingresa un nombre de usuario.';
                } else if (!/^[a-zA-Z0-9._-]+$/.test(value)) {
                    return 'El nombre de usuario solo puede contener letras, números, guiones bajos, guiones y puntos.';
                } else if (value.length < 3) {
                    return 'El nombre de usuario debe tener al menos 3 caracteres.';
                } else if (value.length > 20) {
                    return 'El nombre de usuario no puede tener más de 20 caracteres.';
                }
                break;
            case 'email':
                if (value.trim() === '') {
                    return 'Por favor, ingresa un email electrónico.';
                } else if (!/\S+@\S+\.\S+/.test(value)) {
                    return 'Por favor, ingresa un email electrónico válido.';
                }
                break;
            case 'password':
                if (value.trim() === '') {
                    return 'Por favor, ingresa una contraseña.';
                } else if (value.length < 6) {
                    return 'La contraseña debe tener al menos 6 caracteres.';
                }
                break;
            case 'confirmPassword':
                if (value.trim() === '') {
                    return 'Por favor, confirma tu contraseña.';
                } else if (value !== formData.password) {
                    return 'Las contraseñas no coinciden.';
                }
                break;
            default:
                return '';
        }
        return '';
    };

    const validateForm = () => {
        let errors = {};

        for (const fieldName in formData) {
            const errorMessage = validateField(fieldName, formData[fieldName]);
            if (errorMessage) {
                errors[fieldName] = errorMessage;
            }
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            callApi();
        }
    };

    const callApi = async () => {
        console.log('Call Api Registro');
        try {
            const { confirmPassword, ...formDataWithoutConfirmPassword } = formData;
            const response = await fetch('http://localhost:7000/api/auth/registrar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formDataWithoutConfirmPassword)
            });
            if (response.ok) {
                alert('Registro exitoso');
            } else {
                alert('Error en el registro');
            }
        } catch (error) {
            console.log('Error en la solicitud:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        let error = validateField(name, formData[name])
        let errorValue = validateField(name, value)

        setFormErrors({
            ...formErrors,
            [name]: error
        });
        setFormErrors({
            ...formErrors,
            [name]: errorValue
        });
    };
    return (
        <form noValidate className='wrapper-input' onSubmit={handleSubmit}>
            <div className="input-container">
                <input className="input-container-input" type="text" required id="username" name="username" value={formData.username} onChange={handleChange} />
                <label htmlFor="username" className="input-container-label">Ingresar usuario</label>
                {formErrors.username && <div id="error-username" className="error-message">{formErrors.username}</div>}
            </div>
            <div className="input-container">
                <input type="text" required value={formData.email} id="email" name="email" className="input-container-input" onChange={handleChange} />
                <label htmlFor="email" className="input-container-label">Ingresar email</label>
                {formErrors.email && <div id="error-email" className="error-message">{formErrors.email}</div>}
            </div>
            <div className="input-container">
                <input type={passwordVisible ? 'text' : 'password'} required value={formData.password} id="password" name="password" className="input-container-input" onChange={handleChange} />
                <label htmlFor="password" className="input-container-label">Ingresar contraseña</label>
                {formErrors.password && <div id="password-error" className="error-message">{formErrors.password}</div>}
                <span onClick={togglePasswordVisibility} className='icon-eye'>
                    {passwordVisible ? <ImEye /> : <TbEyeClosed />}
                </span>
            </div>
            <div className="input-container">
                <input type={confirmPasswordVisible ? 'text' : 'password'} required value={formData.confirmPassword} id="confirmPassword" name="confirmPassword" className="input-container-input" onChange={handleChange} />
                <label htmlFor="confirmPassword" className="input-container-label">Confirmar contraseña</label>
                {formErrors.confirmPassword && <div id="confirmPassword-error" className="error-message">{formErrors.confirmPassword}</div>}
                <span onClick={toggleConfirmPasswordVisibility} className='icon-eye'>
                    {confirmPasswordVisible ? <ImEye /> : <TbEyeClosed />}
                </span>
            </div>
            <button type="submit" className="btnRegister">Registrar</button>
        </form>
    );
};
export default RegisterForm;

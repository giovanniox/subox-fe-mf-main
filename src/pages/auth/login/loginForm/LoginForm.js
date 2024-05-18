import React, { useState } from 'react';
import "./loginForm.scss"
import { TbEyeClosed } from "react-icons/tb";
import { ImEye } from "react-icons/im";
import { useNavigate } from 'react-router-dom';
import { AUTH_ACTIONS } from "../../../../app/redux/actions/authActions"
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from '../../../../provider/AuthProvider';


const RegisterForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { setToken } = useAuth();


    const [passwordVisible, setPasswordVisible] = useState(false);


    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const [formErrors, setFormErrors] = useState({
        username: '',
        password: '',
    });


    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
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

            case 'password':
                if (value.trim() === '') {
                    return 'Por favor, ingresa una contraseña.';
                } else if (value.length < 6) {
                    return 'La contraseña debe tener al menos 6 caracteres.';
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
           dispatch(AUTH_ACTIONS.login(formData, setToken, navigate));
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
                <input type={passwordVisible ? 'text' : 'password'} required value={formData.password} id="password" name="password" className="input-container-input" onChange={handleChange} />
                <label htmlFor="password" className="input-container-label">Ingresar contraseña</label>
                {formErrors.password && <div id="password-error" className="error-message">{formErrors.password}</div>}
                <span onClick={togglePasswordVisibility} className='icon-eye'>
                    {passwordVisible ? <ImEye /> : <TbEyeClosed />}
                </span>
            </div>

            <button type="submit" className="btnRegister">Registrar</button>
        </form>
    );
};
export default RegisterForm;

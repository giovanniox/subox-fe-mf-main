import React, { useState } from 'react';
import "./loginForm.scss"
import { TbEyeClosed } from "react-icons/tb";
import { ImEye } from "react-icons/im";
import { useNavigate } from 'react-router-dom';
import { AUTH_ACTIONS } from "../../../../app/redux/actions/authActions"
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from '../../../../provider/AuthProvider';
import Input from '../../../../component/common/input/Input';
import SubmitButton from '../../../../component/common/button/SubmitButton';
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
        <form noValidate className='loginForm' onSubmit={handleSubmit}>
            <Input
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                label="Ingresar usuariosss"
                error={formErrors.username}
            />
              <Input
                id="password"
                name="password"
                type={passwordVisible ? 'text' : 'password'}
                value={formData.password}
                onChange={handleChange}
                label="Ingresar contraseña"
                error={formErrors.password}
                icon={passwordVisible ? <ImEye /> : <TbEyeClosed />}
                onIconClick={togglePasswordVisibility}
            />

            <SubmitButton text={"Entrar"}/>
        </form>
    );
};
export default RegisterForm;

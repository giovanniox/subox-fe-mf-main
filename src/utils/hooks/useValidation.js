import { useState, useEffect } from 'react';

const useValidation = (stateInit, validate, fn) => {

    const [values, setValues] = useState(stateInit);
    const [error, setError] = useState({});
    const [submitForm, setSubmitForm] = useState(false);

    useEffect(() => {
        if (submitForm) {
            const noErros = Object.keys(error).length === 0;

            if (noErros) {
                fn();
            }
            setSubmitForm(false);
        }
    }, [error]);


    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = e => {
        e.preventDefault();
        const errorsValidation = validate(values);
        setError(errorsValidation);
        setSubmitForm(true);
    }


    const handleBlur = () => {
        const errorsValidation = validate(values);
        setError(errorsValidation);
    }

    return {
        values,
        error,
        handleSubmit,
        handleChange,
        handleBlur
    }
}

export default useValidation;
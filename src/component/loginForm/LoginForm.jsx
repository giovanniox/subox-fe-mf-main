import React, { useState } from 'react';
import './loginForm.scss'
const LoginForm = ({ login }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        login(username, email, password);
    };

    return (
        <form className="form__container" onSubmit={handleSubmit}>
            <div>
                <label className="form__label">Username</label>
                <input
                    type="text"
                    className="form__input"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label className="form__label">Email</label>
                <input
                    type="email"
                    className="form__input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label className="form__label">Password</label>
                <input
                    type="password"
                    className="form__input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit" className="form__button">Log In</button>
        </form>
    );
};

export default LoginForm;
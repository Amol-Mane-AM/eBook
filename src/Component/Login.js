/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log("Email:", email);
    //     console.log("Password:", password);

    //     // Check if the email is correct (you can add more validation here)
    //     if (password === '111') {
    //         navigate('/nav'); // Navigate to the Nav component after successful login
    //     } else {
    //         alert('Invalid email or password');
    //     }
    // };

    const handleSubmit = (e) => {
        debugger
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);

    if (password === '111') {
        navigate('/nav'); // Navigate to the Nav component after successful login
    } else {
        alert('Invalid email or password');
    }
};

    return (
        <div className="login-container">
            <div className="login-box animate-pop">
                <h2 className="login-title">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group mb-4">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-login w-100">Login</button>
                </form>
                <p className="text-center mt-3">
                    Don't have an account? <a href="#">Register</a>
                </p>
            </div>
        </div>
    );
}

export default Login;

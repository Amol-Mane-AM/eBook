// src/Component/ErrorPage.js
import React from 'react';

const ErrorPage = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Oops! Something went wrong.</h1>
            <p>The page you are looking for does not exist.</p>
            <a href="/">Go back to the home page</a>
        </div>
    );
};

export default ErrorPage;

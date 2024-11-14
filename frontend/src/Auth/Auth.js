import React, { useState } from 'react';
import Register from './Register';
import Login from './Login';

function Auth() {
    const [isRegister, setIsRegister] = useState(false); // Toggle between login and register

    return (
        <div>
            <h2>{isRegister ? 'Register' : 'Login'}</h2>
            {isRegister ? <Register /> : <Login />}
            <button onClick={() => setIsRegister(!isRegister)}>
                {isRegister ? 'Already have an account? Login' : 'New user? Register'}
            </button>
        </div>
    );
}

export default Auth;

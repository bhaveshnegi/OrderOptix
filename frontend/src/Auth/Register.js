import React, { useState } from 'react';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('retailer'); // Default to retailer

    const handleRegister = async () => {
        try {
            const response = await fetch('/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password, role }),
            });
            const data = await response.json();

            if (data.success) {
                alert('Registration successful! You can now log in.');
                // Redirect to login page or reset form
            } else {
                alert(data.message || 'Registration failed.');
            }
        } catch (error) {
            console.error('Registration error:', error);
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="retailer">Retailer</option>
                <option value="wholesaler">Wholesaler</option>
            </select>
            <button onClick={handleRegister}>Register</button>
        </div>
    );
}

export default Register;

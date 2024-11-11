import React, { useState } from 'react';
import axios from 'axios';

export default function ForgotPasswordComponent() {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const passwordChange = async (e) => {
        e.preventDefault();
        let params = new URLSearchParams(window.location.search);
        let token = params.get('token');

        let data = {
            newPassword,
            confirmPassword
        };
        console.log("data", data);

        try {
            let response = await axios.patch('http://localhost:3000/reset-password', data, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log('response', response);
            // Optionally handle successful password reset
        } catch (error) {
            console.log('error', error);
            // Optionally handle error in the UI
        }
    };

    return (
        <form onSubmit={passwordChange}>
            <div>
                <label>New Password:</label>
                <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Confirm Password:</label>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Change Password</button>
        </form>
    );
}

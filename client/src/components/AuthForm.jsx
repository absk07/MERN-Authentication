import React, { useState } from 'react';

function AuthForm({ headerText, buttonText }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <h1>{headerText}</h1>
            <input
                name="email"
                id="email"
                type="text"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <br />
            <input
                name="password"
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <br />
            <button
                type="submit"
                onClick={() => console.log('Submit')}
            >
                {buttonText}
            </button>
        </>
    );
}

export default AuthForm;
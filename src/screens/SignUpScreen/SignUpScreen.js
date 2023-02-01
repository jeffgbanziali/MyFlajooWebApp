import React, { useState } from 'react';

const SignUpScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [pseudo, setPseudo] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);

    }
    return (
        <>
            <div
                className='register'
            >
                <div
                    className='col-1'
                >
                    <h1>Sign In</h1>
                    <p>Sign in to your account</p>
                    <form onSubmit={handleSubmit}
                        className='flex flex-col'
                    >
                        <label for='pseudo'>Pseudo</label>
                        <input
                            type="text"
                            name="pseudo"
                            placeholder='enter your email'
                            id='pseudo'
                            value={pseudo}
                            onChange={(e) => setPseudo(e.target.value)}
                        />
                        <label for='email'>firstName</label>
                        <input
                            type="text"
                            name="firstName"
                            placeholder='enter your email'
                            id='firstName'
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <label for='email'>lastName</label>
                        <input
                            type="text"
                            name="lastName"
                            placeholder='enter your email'
                            id='lastName'
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <label for='email'>Name</label>
                        <input
                            type="email"
                            name="email"
                            placeholder='enter your email'
                            id='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label for='password'>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder='enter your password'
                            id='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label for='confirmPassword'>Confirm your password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder='enter your password'
                            id='confirmPassword'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <label>Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            placeholder='enter your phone number'
                            id='phone'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />

                        <button type='submit'>Sign In</button>
                    </form>
                    <p>Don't Have an account ?</p>
                    <button> Sign Up</button>
                </div>
            </div>
        </>
    );
}

export default SignUpScreen;

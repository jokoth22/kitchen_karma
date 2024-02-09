import React, { useState } from 'react';
import { Link, redirect } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import AuthService from '../utils/auth';

const LoginPage = () => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [loginUser, { error }] = useMutation(LOGIN_USER);
    // const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await loginUser({
                variables: { ...formState },
            });
            console.log(data);
            if (data && data.login && data.login.token) {
                AuthService.login(data.login.token);
                console.log('logged in');
                window.location.replace('/meals');
            }
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <main>
            <h2>Don't have an account? <Link to='/signup'>Sign Up!</Link></h2>
            <h1>Login</h1>
            <div>
                <form onSubmit={handleFormSubmit}>
                        <label htmlFor='email'>Email:</label>
                    <input
                        id='email'
                        name='email'
                        type='email'
                        placeholder='Your Email'
                        value={formState.email}
                        onChange={handleChange}
                    />
                    <br />
                    <br />
                    <label htmlFor='password'>Password:</label>
                    <input
                        id='password'
                        name='password'
                        type='password'
                        placeholder='Your Password'
                        value={formState.password}
                        onChange={handleChange}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </main>
    );
};

export default LoginPage;

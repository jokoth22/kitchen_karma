import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

const LoginPage = (props) => {

  const handleLogin = (props) => {
    const [formState, setFormState] = useState({ email: '', password: ''});
    const [login, {error, data}] = useMutation(LOGIN_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
            const { data } = await login ({
                variables: { ...formState },
            });
            
            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }

        setFormState({
            email: '',
            password: '',
          });      

    }

};

return (
    <main>
        <h2>Don't have an account? <Link to='/signup'>Sign Up!</Link></h2>
        <h1>Login</h1>
    <div>
        <form onSubmit={handleFormSubmit}>
        <label for='usernamefield'>Username:</label>
        <input 
        id='usernamefield'
        name='usernamefield' 
        placeholder='Your Username' 
        value={formState.email} 
        onchange={handleChange}></input>
        <br></br>
        <br></br>
        <label for='passwordfield'>Password:</label>
        <input 
        id='passwordfield'
        name='passwordfield' 
        placeholder='Your Password' 
        value={formState.email} 
        onchange={handleChange}></input>
        <button type="submit">Submit</button>
        </form>
    </div>
    </main>
);
};

export default LoginPage;

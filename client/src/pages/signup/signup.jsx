import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import "../signup/style.css";

const Signup = () => {
    const [formState, setFormState] = useState({
      username: '',
      email: '',
      password: '',
    });
    const [addUser, { error, data }] = useMutation(ADD_USER);
  
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
        const { data } = await addUser({
          variables: { ...formState },
        });
  
        Auth.login(data.addUser.token);
      } catch (e) {
        console.error(e);
      }
    };

    return (
      <div>
      <Header />
        <main>
            <div>
                <h2>Already Signed Up? <Link to='/LoginPage'>Login!</Link></h2>
                <h1>Sign Up!</h1>
                <form onSubmit={handleFormSubmit}>
                <input
                        className="form-input"
                        placeholder="Enter your Username"
                        name="username"
                        type="username"
                        value={formState.username}
                        onChange={handleChange}
                    />
                    <input
                        className="form-input"
                        placeholder="Enter your Email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                    />
                    <input
                        className="form-input"
                        placeholder="Choose a Password!"
                        name="password"
                        type="password"
                        value={formState.password}
                        onChange={handleChange}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </main>
        <Footer />
        </div>
    );
};

export default Signup;

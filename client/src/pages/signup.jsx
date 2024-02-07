import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

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

    return (<main>
        <div>
          <h2>Already Signed Up? <Link to='/login'>Login!</Link></h2>
            <h1>Sign Up!</h1>
            <form onSubmit={handleFormSubmit}>
            <input
                  className="form-input"
                  placeholder="Choose a Username!"
                  name="username"
                  type="text"
                  value={formState.name}
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
                <button type="submit"> Submit </button>
            </form>
        </div>
    </main>)
}

export default Signup;
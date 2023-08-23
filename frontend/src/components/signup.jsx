import {React, useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import '../styles/signStyles.css'

export function SignUp() {

    const [user, setUser] = useState({
        username: null,
        email: null,
        password: null
    })


    async function handleSubmit(event) {
        console.log(user)
        event.preventDefault();
        axios.post('/api/signup', user)
          .then((res) => console.log(res))
          .catch((err) => console.log(err));     
    }
  
    function handleInput(event) {
      setUser({ ...user, [event.target.name]: event.target.value });
    }

    return (
        <div className="register">
            <form method="post" onSubmit={handleSubmit}>
            <input type='text'
                 name="username"
                 onChange={handleInput}
                 placeholder='Username'
                 />
                <br/>
                <input type='text'
                 name="email"
                 onChange={handleInput}
                 placeholder='Email'
                 />
                <br/>
                <input type='text'
                 name="password"
                 onChange={handleInput}
                 placeholder='Password'
                 />
                 <br/>
                 <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account? <Link to="/signin">Sign In!</Link></p>
        </div>
    )
}
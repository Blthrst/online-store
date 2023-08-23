import {React, useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/signStyles.css'

export function SignIn() {

    const [user, setUser] = useState({
        email: null,
        password: null
    })

    async function handleSubmit(event) {
        console.log(user)
        event.preventDefault();
        console.log(user)
        axios.post('/api/signin', user)
          .then((res) => console.log(res))
          .catch((err) => console.log(err));     
    }
  
    function handleInput(event) {
      setUser({ ...user, [event.target.name]: event.target.value });
    }

    return (
        <div className="login">
            <form method="post" onSubmit={handleSubmit}>
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
                 <button type="submit">Sign In</button>
            </form>
            <p>Or <Link to="/signup">Sign Up!</Link></p>
        </div>
    )
}
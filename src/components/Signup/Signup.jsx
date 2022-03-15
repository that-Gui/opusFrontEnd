//section for utilities
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Signup.css';
//section for components



function Signup() {
 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');


    const navigate = useNavigate();

    const handleEmail = (e) => setEmail(e.target.value);
    const handleUsername = (e) => setUsername(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);


  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { email, username, password };

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/signup`, body)
      .then((response) => {
        navigate('/login');
      })
      .catch((err) => console.log(err));
  };
  
    return (
    <div className='container'>
        <div className="suc">
            <h1>Signup</h1>
            <form onSubmit={handleSubmit}>
            <div>
            {/* <label htmlFor="email">email</label> */}
            <input type="email" name="email" value={email} onChange={handleEmail} placeholder='email'/>
            </div>
            <div>
            {/* <label htmlFor="username">Username</label> */}
            <input type="text" name="username" value={username} onChange={handleUsername} placeholder='username'/>
            </div>
            <div>
            {/* <label htmlFor="password">Password</label> */}
            <input type="password" name="password" value={password} onChange={handlePassword} placeholder='password'/>
            </div>
            <div>
            <button type="submit" className='subtn'> Signup</button>
            </div>
            </form>
        </div>
    </div>
  )
}

export default Signup
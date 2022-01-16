
import './App.css';
import { useState } from 'react'
import axios from 'axios';

function App() {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const urlPost = 'http://localhost:4000/app/signup';

  const changeFullName = (e) => {
    setFullName(e.target.value)
  }
  const changeUserName = (e) => {
    setUserName(e.target.value)
  }
  const changeEmail = (e) => {
    setEmail(e.target.value)
  }
  const changePassword = (e) => {
    setPassword(e.target.value)
  }
  const onSubmit = (e) => {
    e.preventDefault();
    const registered = {
      fullName: fullName,
      userName: userName,
      email: email,
      password: password
    }
    axios.post(urlPost, registered)
    // window.location = '/'
    setFullName("");
    setUserName("");
    setEmail("");
    setPassword("");
  }
  return (
    <div className='signup_container'>
      <div className='signup_form_container'>
        <div className='left'>
          <h1>Sign up</h1>
        </div>
        <div className='right'>
          <form className='form_container' onSubmit={onSubmit}>
            <h1>Create Account</h1>
            <input type="text"
              placeholder='Full Name'
              name='Full Name'
              onChange={changeFullName}
              value={fullName}
              required
              className='input'
            />

            <input type="text"
              placeholder='User Name'
              name='userName'
              onChange={changeUserName}
              value={userName}
              required
              className='input'
            />

            <input type="email"
              placeholder='Email'
              name='email'
              onChange={changeEmail}
              value={email}
              required
              className='input'
            />

            <input type="password"
              placeholder='Password'
              name='password'
              onChange={changePassword}
              value={password}
              required
              className='input'
            />
            <button type="submit" className='green_btn'>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

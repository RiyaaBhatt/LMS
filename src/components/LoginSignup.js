import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Assests/css/LoginSignup.css';
import { Link } from 'react-router-dom';
import Header from '../components/Header'; 

const LoginSignup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin') {
      navigate('/admin');
    } else if (username === 'librarian') {
      navigate('/librarian');
    } else {
      navigate('/user');
    }
  };

  return (
    <>
      <Header />
      <div className="login-signup-container">
        <div className="login-signup-form">
          <form onSubmit={handleLogin}>
            <label>
              Username:
              <input
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button type="submit" className="login-button">Login</button>
          </form>
          <p><Link to="/signup-google">Signup using Google</Link></p>
          <p><Link to="/signup-email">Signup using Email address</Link></p>
        </div>
      </div>
    </>
  );
}

export default LoginSignup;

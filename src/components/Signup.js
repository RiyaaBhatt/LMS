import React, { useState } from 'react';
import '../Assests/css/Signup.css';
import Header from '../Assests/css/Signup.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('User');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
const [user,serUser]=useState('')
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      localStorage.setItem('username',username)
      localStorage.setItem('id',email)

      console.log(role)
      if (role === 'User')
      navigate('/user')
    else if(role === 'Admin')
      navigate('/admin')
    else if(role === 'Librarian')
      navigate('/librarian')
      if (response.status === '201'){
        serUser(response.data)
      }
      console.log(response.data)
      setUsers(response.data);
    } catch (error) {
      console.log('Error fetching users');
    } 
  };

  return (
    <div>
   
    <div className="signup-container">
    
      <form className="signup-form" onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <label>
          Role:
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="Admin">Admin</option>
            <option value="Librarian">Librarian</option>
            <option value="User">User</option>
          </select>
        </label>
        <label>
          First Name:
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </label>
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </label>
        <label>
          Phone Number:
          <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </label>
        <button type="submit" className="signup-button">Signup</button>
      </form>
    </div></div>
  );
}

export default Signup;

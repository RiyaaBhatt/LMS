// import React from 'react';
import user from '../Assests/images/imag.jpg'

import React from 'react';
import '../Assests/css/UserProfile.css';

function UserProfile() {
  
  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <img src={user} alt="User Avatar" />
      <p>Name: Mitchell Admin</p>
      <p>Role: Administrator</p>
      <h3>Your Contact</h3>
      <p>Email: mitchell@example.com</p>
      <p>Phone: +123456789</p>
      <p>Address: 123, Main Street, City</p>
    </div>
  );
}

export default UserProfile;


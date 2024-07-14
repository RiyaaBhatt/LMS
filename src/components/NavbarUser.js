import React from 'react';
import Home from './Home'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="navbar">
      <h2>Public Library</h2>
      <div className="nav-links">
        <Link to="/Home">Home</Link>
        <Link to="/Logout">Logout</Link>
      </div>
    </div>
  );
};

export default Navbar;

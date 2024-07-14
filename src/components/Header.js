import React from 'react';
import { FaBell } from 'react-icons/fa';
import logo from '../Assests/images/book.png';
import '../Assests/css/Header.css';
import { Link } from 'react-router-dom';
const Header = () => {
  const notifications = 3;

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Library Logo" />
        <span>Public Library</span>
      </div>
      <div className="header-right">
        <div className="notifications">
          <FaBell />
          {notifications > 0 && <span className="notification-badge">{notifications}</span>}
        </div>
        <Link className="signout-button" to="/search">Search</Link>

        <Link className="signout-button" to="/">Sign Out</Link>
      </div>
    </header>
  );
};

export default Header;

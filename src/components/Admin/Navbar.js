import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChartBar, faCalendarAlt, faUserPlus, faHistory, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../../Assests/css/Navbarstyle.css';
// import avatar from '../Assests/Image/avtar.jpeg';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <span className="logo-text">Public Library</span>
        <hr className="divider" />
      </div>
      <div className="nav-content">
        <Link to="/admin/home" className="nav-link">
          <FontAwesomeIcon icon={faHome} className="nav-icon" />
          <span className="nav-text">Home</span>
        </Link>          
        <Link to="/admin/Books" className="nav-link">
          <FontAwesomeIcon icon={faChartBar} className="nav-icon" />
          <span className="nav-text">Books</span>
        </Link>
        <Link to="/admin/student" className="nav-link">
          <FontAwesomeIcon icon={faCalendarAlt} className="nav-icon" />
          <span className="nav-text">student</span>
        </Link>
        {/* <Link to="/staff" className="nav-link">
          <FontAwesomeIcon icon={faUserPlus} className="nav-icon" />
          <span className="nav-text">staff</span>
        </Link> */}
        
       
      </div>
      <div className="bottom-links">
        <Link to="/profile" className="profile-link nav-link">
<img alt="Avatar" className="profile-image" />
          <span className="nav-text">Admin</span>
        </Link>
        
        <Link to="/" className="nav-link">
          <FontAwesomeIcon icon={faSignOutAlt} className="nav-icon" />
          <span className="nav-text">Log Out</span>
        </Link>
      </div>
    </div>
  );
}

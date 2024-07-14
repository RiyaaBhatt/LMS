// components/LayoutWithNavbar.js
import React from 'react';
import Navbar from './Navbar'; // Make sure this path is correct based on your file structure
import { Outlet } from 'react-router-dom';
import BorrowedBookList from '../BorrowwedBookList';
const LayoutWithNavbar = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Navbar />
      <div style={{ marginLeft: '250px', padding: '20px', flexGrow: 1 }}>
        <Outlet />
        
      </div>
    </div>
  );
};

export default LayoutWithNavbar;

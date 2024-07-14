import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import LoginSignup from './components/LoginSignup';
import MainApp from './components/Admin/Layout';
import LayoutWithNavbar from './components/Admin/Layout';
import Books from './components/Admin/Books';
import StudentsData from './components/Admin/StudentsData';
import HomePage from './components/Admin/HomePage';
import User from './components/User';
import Home from './components/Home';
import BorrowerList from './components/BorrowerList';

const App = () => {
  return (
    <div>
      <Router>
        
        <Routes>
          <Route path="/" element={<LoginSignup />} />
          <Route path="/signup-google" element={<Signup />} />
          <Route path="/signup-email" element={<Signup />} />
          <Route path="/admin" element={<LayoutWithNavbar />}>
            <Route index element={<MainApp />} />
            <Route path="home" element={<HomePage />} />
            <Route path="books" element={<Books />} />
            <Route path="student" element={<StudentsData />} />
          </Route>
          <Route path="/user" element={<User />} />
          <Route path="/search" element={<Home />} />
          <Route path="/librarian" element={<BorrowerList />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

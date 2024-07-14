import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear any authentication state (e.g., remove tokens from localStorage)
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');

    // Redirect to the signup page
    navigate('/');
  }, [navigate]);

  return (
    <div>
      Logging out...
    </div>
  );
}

export default Logout;

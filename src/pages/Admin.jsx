import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin.css';

const Admin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate(); // Hook to navigate between routes

  const handleLogin = async (event) => {
    event.preventDefault();
    setError(''); // Reset any previous error
    setSuccessMessage(''); // Reset success message

    try {
      const response = await fetch('https://pinabh-productionbackend.onrender.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      const data = await response.json();
      localStorage.setItem('token', data.token);
      setSuccessMessage('Login successful! Redirecting...');

      // Redirect to the Dashboard after a short delay
      setTimeout(() => {
        navigate('/dashboard'); // Change to your desired route
      }, 2000); // Delay for 2 seconds

    } catch (err) {
      setError(err.message);
      console.error(err);
    }
  };

  return (
    <div className="Admin">
      <div className="container">
        <form className="form" onSubmit={handleLogin}>
          <div className="form_front">
            <div className="form_details">Login</div>
            {error && <div className="error">{error}</div>} {/* Display error message */}
            {successMessage && <div className="success">{successMessage}</div>} {/* Display success message */}
            <input
              placeholder="Username"
              className="input"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              placeholder="Password"
              className="input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className="btn">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Admin;

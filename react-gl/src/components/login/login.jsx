import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './login.css'
const Login = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('')
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        console.log("data of user:",userData)
      const response = await axios.post('http://localhost:8000/api/avocat/login', userData);
      console.log(response.data);
        if(response.data.redirect) {
            window.location.href = response.data.redirect;
        }
        
    } catch (error) {
        console.error('Error logging in:', error);
        console.log(error.response.data.message)
        setMessage(error.response.data.message);
    }
  };

  return (
    <div className="login">
      <div className="card">
        <img src="images/logo.png" alt="Logo" className="logo" />
        <div className="container">
          <div className="title">Se Connecter</div>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                name="email"
                value={userData.email}
                onChange={handleChange}
                placeholder=""
                required  // Added the 'required' attribute
              />
              <label>E-mail</label>
            </div>

            <div className="input-group">
              <input
                type="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
                placeholder=""
                required  // Added the 'required' attribute
              />
              <label>Mot de passe</label>
            </div>
            {message && (
                    <div className="message">
                        {message}
                    </div>
                )}
            <button type="submit">Se connecter</button>
            
          </form>
          <p className="signup-link">
            Vous n’avez pas de compte ? <Link to="/signup" className="link">S’inscrire</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

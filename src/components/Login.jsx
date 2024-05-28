// Login.js
import React from "react";
import "../styles/Signup.css"; // Koristi zajednički CSS fajl za stilizaciju

const Login = ({ onClose, onSwitchToSignup }) => {
  return (
    <div className="popup">
      <div className="popup-header">
        {/* <button className="close-button" onClick={onClose}>×</button> */}
      </div>
      <div className="popup-content">
        <div className="login-container">
          <div className="login-tabs">
            <button className="login-tab active">Login</button>
            <button className="login-tab" onClick={onSwitchToSignup}>Sign up</button>
            <button className="close-button" onClick={onClose}>×</button>
          </div>
          <form className="login-form">
            <input type="text" placeholder="User Name" className="login-input" />
            <input type="password" placeholder="Password" className="login-input" />
            <button type="submit" className="login-button">Login Now</button>
          </form>
          <a href="#" className="forgot-password">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;

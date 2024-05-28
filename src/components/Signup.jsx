// Signup.js
import React from "react";
import "../styles/Signup.css"; // Koristi zajednički CSS fajl za stilizaciju

const Signup = ({ onClose, onSwitchToLogin }) => {
  return (
    <div className="popup">
      <div className="popup-header">
      {/* <button className="close-button" onClick={onClose}>×</button> */}
      </div>
      <div className="popup-content">
        <div className="login-container">
          <div className="login-tabs">
            <button className="login-tab" onClick={onSwitchToLogin}>Login</button>
            <button className="login-tab active">Sign up</button>
            <button className="close-button" onClick={onClose}>×</button>
          </div>
          <form className="login-form">
            <div className="first2">
            <input type="text" placeholder="First name:" className="login-input" />
            <input type="text" placeholder="Last name:" className="login-input" />
            </div>
                <div className="second2">
                <input type="text" placeholder="User Name:" className="login-input" />
                <input type="password" placeholder="Password:" className="login-input" />
                </div>
            <input type="email" placeholder="Email:" className="login-input" />
            <input type="tel" placeholder="Telephone:" className="login-input" />
            <input type="text" placeholder="Address:" className="login-input" />
            <input type="text" placeholder="ZIP Code:" className="login-input" />
            <select className="login-input">
              <option>Select country</option>
            </select>
            <select className="login-input">
              <option>Gender</option>
            </select>
            <div className="birthdate-container">
              <label>Birthdate:</label>
              <select className="login-input">
                <option>Year</option>
              </select>
              <select className="login-input">
                <option>Month</option>
              </select>
              <select className="login-input">
                <option>Day</option>
              </select>
            </div>
            <button type="submit" className="login-button">Sign up</button>
          </form>
          <p>By clicking the Sign Up button, you confirm that you accept our <a href="#">Terms of use</a> and <a href="#">Privacy Policy</a>.</p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

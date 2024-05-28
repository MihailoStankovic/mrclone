import "../styles/Navbar.css";
import React, { useState } from "react";
import logo from "../assets/mro_casino_colored.jpg";
import Login from "./Login"; // Importujte Login komponentu
import Signup from "./Signup"; // Importujte Signup komponentu

function Navbar() {
  const [showPopup, setShowPopup] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const handleLoginClick = () => {
    setIsLogin(true);
    setShowPopup(true);
  };

  const handleSignupClick = () => {
    setIsLogin(false);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo-div">
          <img className="logo-picture" src={logo} alt="logo" />
        </div>
        <div className="buttons-div">
          <ul>
            <li>
              <a>
                <button className="login-button" onClick={handleLoginClick}>
                  Login
                </button>
              </a>
            </li>
            <li>
              <a>
                <button className="signup-button" onClick={handleSignupClick}>
                  Sign up
                </button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {showPopup && (
        isLogin ? (
          <Login onClose={closePopup} onSwitchToSignup={handleSignupClick} />
        ) : (
          <Signup onClose={closePopup} onSwitchToLogin={handleLoginClick} />
        )
      )}
    </div>
  );
}

export default Navbar;

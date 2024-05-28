import React, { useState } from 'react';
import { FaBars, FaTimes, FaHome, FaGamepad, FaGift, FaPiggyBank, FaCrown, FaMedal, FaHeadset, FaBlog } from 'react-icons/fa';
import '../styles/VerticalSlider.css';

import logo from "../assets/mro_casino_colored.jpg";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className="header">
                <div className="toggle-button" onClick={toggleSidebar}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
                {isOpen && (
                    <div className="logo">
                        <img src={logo} alt="mro-logo" className='mro-logo'/>
                    </div>
                )}
            </div>
            <nav className="nav-items">
                <button className='dugme'><FaHome /><span className="nav-text">Home</span></button>
                <button className='dugme'><FaGamepad /><span className="nav-text">Games</span></button>
                <button className='dugme'><FaGift /><span className="nav-text">Promotions</span></button>
                <button><FaPiggyBank /><span className="nav-text">Banking</span></button>
                <button><FaCrown /><span className="nav-text">VIP Program</span></button>
                <button><FaMedal /><span className="nav-text">Rewards</span></button>
                <button><FaHeadset /><span className="nav-text">Support</span></button>
                <button><FaBlog /><span className="nav-text">Blog</span></button>
            </nav>
            {isOpen && (
                <div className="additional-info">
                    <h2>Additional information</h2>
                    <ul>
                        <li>About us</li>
                        <li>FAQ</li>
                        <li>Affiliates</li>
                        <li>Responsible Gambling</li>
                        <li>Privacy Policy</li>
                        <li>Terms and Conditions</li>
                    </ul>
                    <div className="crypto">
                        <p>Accepted Crypto Currencies</p>
                        <div className="crypto-icons">
                            <span>Google Pay</span>
                            <span>Apple Pay</span>
                            <span>Visa</span>
                            <span>Mastercard</span>
                            <span>Bitcoin</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Sidebar;

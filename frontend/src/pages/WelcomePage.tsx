import React from 'react';
import '../css/WelcomePage.css';
import welcomebg from '../images/welcomebg.png';
import logo from '../icons/Logo.png';

const WelcomePage: React.FC = () => {
  return (
    <div className="welcome-bg" style={{ backgroundImage: `url(${welcomebg})` }}>
      <div className="welcome-overlay">
        <img src={logo} alt="Novaterra Logo" className="welcome-logo-img" />
        <h1 className="welcome-title">Your Journey Starts Here</h1>
        <button className="welcome-btn">EXPLORE NOW</button>
      </div>
    </div>
  );
};

export default WelcomePage;

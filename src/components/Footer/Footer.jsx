import React from 'react';
import logoImg from '../../assets/vybzroulette-img.jpg';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-logo">
          <img src={logoImg} alt="VybzRoulette" className="logo-img" />
        </div>
        <div className="footer-links">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#success-stories">Success Stories</a>
        </div>
        <p>&copy; {new Date().getFullYear()} VybzRoulette. All rights reserved. Your stage. Your legacy.</p>
      </div>
    </footer>
  );
}

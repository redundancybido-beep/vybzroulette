import React, { useState, useEffect } from 'react';
import { IconArrowRight } from '../Icons';
import logoImg from '../../assets/vybzroulette-img.jpg';
import './Navbar.css';

export default function Navbar({ onDemoClick }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container">
        <a href="#" className="logo">
          <img src={logoImg} alt="VybzRoulette" className="logo-img" />
        </a>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <button className="btn btn-outline navbar-cta" onClick={onDemoClick} style={{ border: '1px solid rgba(255,255,255,0.15)' }}>
            See Demo
          </button>
          <a href="#pricing" className="btn btn-primary navbar-cta">
            Claim Your Stage <IconArrowRight size={14} />
          </a>
        </div>
      </div>
    </nav>
  );
}

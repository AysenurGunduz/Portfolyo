import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" onClick={closeMenu}>Ayşenur Ebrar Gündüz</Link>
      </div>
      <button className="navbar-toggle" onClick={toggleMenu}>
        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </button>
      <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={closeMenu}>Ana Sayfa</Link>
        <Link to="/about" onClick={closeMenu}>Ben Kimim?</Link>
        <Link to="/services" onClick={closeMenu}>Neler Yapabilirim?</Link>
        <Link to="/portfolio" onClick={closeMenu}>Portfolyo</Link>
        <Link to="/contact" onClick={closeMenu}>İletişim</Link>
      </div>
    </nav>
  );
}

export default Navbar; 
import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://x.com/?lang=tr" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://github.com/AysenurGunduz" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.facebook.com/?locale=tr_TR" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
      </div>
      <div className="footer-text">
        <p>&copy; 2025 Ayşenur Ebrar Gündüz. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
}

export default Footer; 
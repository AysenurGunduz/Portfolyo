import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  // GitHub profilinizin linkini buraya ekleyin
  const githubUrl = "https://github.com/AysenurGunduz";

  return (
    <div className="home">
      <div className="hero-section">
        <div className="profile-image">
          <img src="/images/profil.jpg" alt="Ayşenur Ebrar Gündüz" />
        </div>
        <h1>Hoşgeldiniz</h1>
        <h1>Ayşenur Ebrar Gündüz</h1>
        <h2>Bilgisayar Mühendisliği Öğrencisi</h2>
        <p>Savunma Sanayi Sistemleri</p>
        <div className="cta-buttons">
          <Link to="/portfolio" className="btn primary">Portfolyomu Gör</Link>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="btn primary github-btn">
            <i className="fab fa-github"></i> GitHub
          </a>
          <Link to="/contact" className="btn primary">İletişime Geç</Link>
        </div>
      </div>
      
      <div className="featured-section">
        <h3>Öne Çıkan Yetenekler</h3>
        <div className="skills-grid">
          <div className="skill-card">
            <i className="fas fa-laptop-code"></i>
            <h4>Uygulama Tasarımı</h4>
            <p>Modern uygulama tasarımları</p>
          </div>
          <div className="skill-card">
            <i className="fas fa-chart-bar"></i>
            <h4>Raporlama ve Analiz</h4>
            <p>Office uygulamarı kullanarak raporlama ve analiz </p>
          </div>
          <div className="skill-card">
            <i className="fas fa-rocket"></i>
            <h4>Algoritma ve Programlama</h4>
            <p>Model roketler için algoritma ve programlama</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home; 
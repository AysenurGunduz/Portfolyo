import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Home.css';

function Home() {
  // GitHub profilinizin linkini buraya ekleyin
  const githubUrl = "https://github.com/AysenurGunduz";

  // Animasyon varyantları
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.2
      }
    }
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <div className="home">
      <motion.div 
        className="hero-section"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="profile-image"
          variants={imageVariants}
        >
          <img src="/images/profil.jpg" alt="Ayşenur Ebrar Gündüz" />
        </motion.div>

        <motion.h1 variants={itemVariants}>Hoşgeldiniz</motion.h1>
        <motion.h1 variants={itemVariants}>Ayşenur Ebrar Gündüz</motion.h1>
        <motion.h2 variants={itemVariants}>Bilgisayar Mühendisliği Öğrencisi</motion.h2>
        <motion.p variants={itemVariants}>Savunma Sanayi Sistemleri</motion.p>

        <motion.div 
          className="cta-buttons"
          variants={containerVariants}
        >
          <motion.div variants={buttonVariants} whileHover="hover">
          <Link to="/portfolio" className="btn primary">Portfolyomu Gör</Link>
          </motion.div>
          
          <motion.div variants={buttonVariants} whileHover="hover">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="btn primary github-btn">
            <i className="fab fa-github"></i> GitHub
          </a>
          </motion.div>
          
          <motion.div variants={buttonVariants} whileHover="hover">
          <Link to="/contact" className="btn primary">İletişime Geç</Link>
          </motion.div>
        </motion.div>
      </motion.div>
      
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
            <p>Office uygulamaları kullanarak raporlama ve analiz </p>
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
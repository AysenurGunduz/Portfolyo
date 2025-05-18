import React, { useState } from 'react';
import '../styles/Portfolio.css';

function Portfolio() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: '2022 Teknofest Roket Yarışması Lise Kategorisi Finalisti',
      categories: ['Sertifika'],
      image: '/images/r2.jpg',
      description: '2022 senesinde takımımla beraber katıldığım Teknofest Roket Yarışmasında Lise Kategorisinde Türkiye Genelinde 9. olduk.'
    },
    {
      id: 2,
      title: '2024 Teknofest Roket Yarışması Yüksek İrtifa Kategorisi Finalisti',
      categories: ['Sertifika'],
      image: '/images/r1.jpg',
      description: '2024 senesinde takımımla beraber katıldığım Teknofest Roket Yarışmasında Yüksek İrtifa Kategorisinde Türkiye Genelinde 9. olduk.'
    },
    {
      id: 3,
      title: 'Savunma Sanayi 101 Eğitimi',
      categories: ['Eğitim'],
      image: '/images/roket.png',
      description: '2024-2025 senesi bahar yarıyılı için belli sayıda öğrenci alınan Savunma Sanayi 101 Eğitime kabul edildim. Eğitimim devam etmektedir.'
    },
    {
      id: 4,
      title: 'OpenRocket Eğitimi',
      categories: ['Sertifika', 'Eğitim'],
      image: '/images/openrocket.png',
      description: 'Model roket tasarımlarında kullanılan OpenRocket programının kullanımını öğrendim.'
    },
    {
      id: 5,
      title: 'Roket Yarışması Eğitim Projesi',
      categories: ['Eğitim', 'Sertifika'],
      image: '/images/Roketsan.jpg',
      description: 'React ile geliştirilmiş sosyal medya platformu.'
    },
    {
      id: 6,
      title: 'Deprem Kayıt Uygulaması',
      categories: ['Proje'],
      image: '/images/dku2.png',
      description: 'Depremde kullanılması için geliştirdiğim ve hala geliştirmekte olduğum Deprem Kayıt Uygulamam',
      githubUrl: 'https://github.com/AysenurGunduz/Deprem-Uygulamas-'
    },
    {
      id: 7,
      title: 'Soru Bankası Uygulaması',
      categories: ['Proje'],
      image: '/images/SoruBankasi.png',
      description: 'Soruları veri tabanına kaydedip, seçim üzerine yazdırım işlemleri yapan soru bankası uygulaması',
      githubUrl: 'https://github.com/AysenurGunduz/Soru-Bankas-'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.categories.includes(filter));

  return (
    <div className="portfolio">
      <div className="portfolio-content">
        <h2>Portfolyo</h2>
        <p className="portfolio-intro">
          Son çalışmalarım ve projelerimden örnekler
        </p>
        
        <div className="portfolio-filters">
          <button 
            className={filter === 'all' ? 'active' : ''} 
            onClick={() => setFilter('all')}
          >
            Tümü
          </button>
          <button 
            className={filter === 'Sertifika' ? 'active' : ''} 
            onClick={() => setFilter('Sertifika')}
          >
            Sertifikalar
          </button>
          <button 
            className={filter === 'Proje' ? 'active' : ''} 
            onClick={() => setFilter('Proje')}
          >
            Projeler
          </button>
          <button 
            className={filter === 'Eğitim' ? 'active' : ''} 
            onClick={() => setFilter('Eğitim')}
          >
            Eğitimler
          </button>
        </div>
        
        <div className="portfolio-grid">
          {filteredProjects.map(project => (
            <div className="portfolio-card" key={project.id}>
              <div className="portfolio-card-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="portfolio-card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="category-tags">
                  {project.categories.map(cat => (
                    <span key={cat} className="category-tag">{cat}</span>
                  ))}
                </div>
                <div className="card-buttons">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="github-link-btn"
                    >
                      <i className="fab fa-github"></i> GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio; 
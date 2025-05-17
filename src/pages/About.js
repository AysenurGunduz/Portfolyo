import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <div className="about">
      <div className="about-content">
        <h2>Ben Kimim?</h2>
        
        <div className="about-grid">
          <div className="about-text">
            <p>
              Merhaba! Ben Ayşenur Ebrar Gündüz. Balıkesir Üniversitesinde Bilgisayar Mühendisliği
              2. sınıf öğrencisiyim. Savunma Sanayi projelerine ilgiliyim...
              ...... DEVAMINI YAZ
            </p>
            <p>
              DLSKJFLSDFHJLDKFJLKSLDKFJDLKSDJGHNLSKDJLDKFNÇKJKDLJLKJSLKDFNLSN
            </p>
            <div className="personal-info">
              <div className="info-row">
                <span className="info-label">Yaş:</span>
                <span className="info-value">20</span>
              </div>
              <div className="info-row">
                <span className="info-label">Konum:</span>
                <span className="info-value">Balıkesir/Türkiye</span>
              </div>
              <div className="info-row">
                <span className="info-label">E-posta:</span>
                <span className="info-value">ahebrar02@gmail.com</span>
              </div>
            </div>
          </div>
          
          <div className="skills-section">
            <h3>Yeteneklerim</h3>
            <div className="skill-bars">
              <div className="skill-bar">
                <div className="skill-info">
                  <span>HTML/CSS</span>
                  <span>75%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{width: '75%'}}></div>
                </div>
              </div>
              
              <div className="skill-bar">
                <div className="skill-info">
                  <span>C#</span>
                  <span>85%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{width: '85%'}}></div>
                </div>
              </div>
              
              <div className="skill-bar">
                <div className="skill-info">
                  <span>Arduino</span>
                  <span>80%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{width: '80%'}}></div>
                </div>
              </div>

              <div className="skill-bar">
                <div className="skill-info">
                  <span>Java</span>
                  <span>70%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{width: '70%'}}></div>
                </div>
              </div>
              
              <div className="skill-bar">
                <div className="skill-info">
                  <span>Uygulama Geliştirme</span>
                  <span>60%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{width: '60%'}}></div>
                </div>
              </div>

              <div className="skill-bar">
                <div className="skill-info">
                  <span>Office Uygulamarı Kullanımı</span>
                  <span>85%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{width: '85%'}}></div>
                </div>
              </div>

              <div className="skill-bar">
                <div className="skill-info">
                  <span>Python</span>
                  <span>55%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{width: '55%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About; 
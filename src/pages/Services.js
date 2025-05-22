import React from 'react';
import '../styles/Services.css';

function Services() {
  const services = [
    {
      icon: '',
      title: 'Uygulama Geliştirme',
      description: 'Kullanıcı dostu arayüzler tasarlama, özgün fikirlerle uygulamalar geliştirme.'
    },
    {
      icon: '',
      title: 'Raporlama ve Analiz',
      description: 'Office Uygulamaları ile raporlama ve analiz yapma.'
    },
    {
      icon: '',
      title: 'Algoritma ve Programlama',
      description: 'Algoritma tasarımları üzerine çalışmalar'
    },
    {
      icon: '',
      title: 'Sensör ve Mikrodenetleyici Sistem Çalışmaları',
      description: 'Sensörleri ve mikrodenetleyicileri kullanarak projeler geliştirme, kodlama'
    },
    {
      icon: '',
      title: 'Web Tasarımı',
      description: 'HTML, CSS, React, Javascript kullanarak modern web sayfaları tasarlama'
    },
    {
      icon: '',
      title: 'Model Roket Tasarımı',
      description: 'Openrocket kullanarak başlangıç düzeyi model roket tasarlama'
    },
  ];

  return (
    <div className="services">
      <div className="services-content">
        <h2>Neler Yapabilirim?</h2>
        <p className="services-intro">
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services; 
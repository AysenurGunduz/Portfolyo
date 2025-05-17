import React from 'react';
import '../styles/Services.css';

function Services() {
  const services = [
    {
      icon: 'fas fa-code',
      title: 'Uygulama Geliştirme',
      description: 'Kullanıcı dostu arayüzler tasarlama, modern ve etkileyici web tasarımları oluşturma.'
    },
    {
      icon: 'fas fa-paint-brush',
      title: 'Raporlama ve Analiz',
      description: 'Office Uygulamaları ile raporlama ve analiz yapma.'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Algoritma',
      description: 'Tüm cihazlarda kusursuz çalışan responsive tasarımlar ve mobil öncelikli geliştirme.'
    },
    {
      icon: 'fas fa-search',
      title: 'SEO Optimizasyonu',
      description: 'Arama motoru optimizasyonu ile web sitenizin görünürlüğünü artırma ve organik trafiği yükseltme.'
    },
    {
      icon: 'fas fa-cogs',
      title: 'Teknik Danışmanlık',
      description: 'Web projeleri için teknik danışmanlık, en uygun teknoloji stack seçimi ve proje planlaması.'
    },
    {
      icon: 'fas fa-server',
      title: 'Web Bakım',
      description: 'Mevcut web sitelerinin bakımı, güncellenmesi ve performans optimizasyonu.'
    }
  ];

  return (
    <div className="services">
      <div className="services-content">
        <h2>Neler Yapabilirim?</h2>
        <p className="services-intro">
          Modern ve kullanıcı dostu web çözümleri için ihtiyacınız olan tüm hizmetleri sunuyorum.
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
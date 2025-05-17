import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form gönderme işlemi burada yapılacak
    console.log('Form data:', formData);
    alert('Mesajınız gönderildi! En kısa sürede size dönüş yapacağım.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact">
      <div className="contact-content">
        <h2>İletişime Geç</h2>
        <p>Projeleriniz için benimle iletişime geçebilirsiniz.</p>
        
        <div className="contact-info">
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <p>ahebrar02@gmail.com</p>
          </div>
          <div className="info-item">
            <i className="fas fa-phone"></i>
            <p>+90 506 187 23 43</p>
          </div>
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <p>Balıkesir/Türkiye</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Ad Soyad</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Adınız ve Soyadınız"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">E-posta</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="E-posta adresiniz"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Mesaj</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Mesajınızı buraya yazın..."
            ></textarea>
          </div>
          
          <button type="submit" className="submit-btn">
            <i className="fas fa-paper-plane"></i> Gönder
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact; 
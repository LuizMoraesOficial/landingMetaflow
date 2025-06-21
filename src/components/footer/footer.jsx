import React from 'react';
import './footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-brand">
          <h3 className="footer-title">Metaflow Company</h3>
          <p className="footer-tagline">Transformando ideias em realidade digital</p>
        </div>
        
        <div className="footer-info">
          <p className="footer-copyright">
            © {currentYear} Metaflow Company. Todos os direitos reservados.
          </p>
          <p className="footer-description">
            Desenvolvimento Web • Marketing Digital • Soluções Inovadoras
          </p>
        </div>
      </div>
      
      <div className="footer-glow">
        <div className="glow-line"></div>
      </div>
    </footer>
  );
};

export default Footer;


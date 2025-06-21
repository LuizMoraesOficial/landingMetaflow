import React, { useEffect, useRef } from 'react';
import './header.css';

const Header = () => {
  const logoRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const logo = logoRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;

    if (logo && title && subtitle) {
      setTimeout(() => logo.classList.add('animate-in'), 100);
      setTimeout(() => title.classList.add('animate-in'), 500);
      setTimeout(() => subtitle.classList.add('animate-in'), 1000);
    }
  }, []);

  return (
    <header className="header-container">
      <div ref={logoRef} className="logo-container">
        <img
          src="/logo.png"
          alt="Metaflow Company Logo"
          className="company-logo"
        />
      </div>

      <div className="header-content">
        <h1 ref={titleRef} className="main-title">
          <span className="title-line">Conheça nosso</span>
          <span className="title-highlight">TRABALHO!</span>
        </h1>

        <p ref={subtitleRef} className="subtitle">
          <span className="company-name">Metaflow Company</span>
          <span className="company-description">Desenvolvimento & Marketing Digital</span>
        </p>
      </div>

      <div className="header-decoration">
        <div className="glow-orb glow-1"></div>
        <div className="glow-orb glow-2"></div>
        <div className="glow-orb glow-3"></div>
      </div>
    </header>
  );
};

export default Header;

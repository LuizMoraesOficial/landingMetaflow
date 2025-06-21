import React, { useEffect, useRef } from 'react';
import { MessageCircle, ExternalLink, Play } from 'lucide-react';
import Background from '../components/background/background';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import CustomButton from '../components/button/button';
import './Home.css';

const Home = () => {
  const buttonsRef = useRef(null);

  // Carregando links do arquivo .env
  const whatsappLink = import.meta.env.VITE_WHATSAPP_LINK || "https://wa.me/5511999999999?text=Olá! Gostaria de conhecer mais sobre os serviços da Metaflow Company";
  const portfolioLink = import.meta.env.VITE_PORTFOLIO_LINK || "https://portfolio.metaflow.com";
  const youtubeLink = import.meta.env.VITE_YOUTUBE_LINK || "https://youtube.com/@metaflowcompany";

  useEffect(() => {
    const buttons = buttonsRef.current;
    if (buttons) {
      setTimeout(() => {
        buttons.classList.add('animate-in');
      }, 1500);
    }
  }, []);

  return (
    <Background>
      <div className="home-container">
        <Header />
        
        <main className="main-content">
          <div ref={buttonsRef} className="buttons-container">
            <CustomButton
              href={whatsappLink}
              icon={<MessageCircle />}
              variant="primary"
              className="action-button whatsapp-button"
            >
              Fale Conosco
            </CustomButton>
            
            <CustomButton
              href={portfolioLink}
              icon={<ExternalLink />}
              variant="secondary"
              className="action-button portfolio-button"
            >
              Nosso Portfólio
            </CustomButton>
            
            <CustomButton
              href={youtubeLink}
              icon={<Play />}
              variant="primary"
              className="action-button youtube-button"
            >
              Assista no YouTube
            </CustomButton>
          </div>
          
          <div className="features-section">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Desenvolvimento Web</h3>
              <p>Criamos sites e aplicações modernas com as melhores tecnologias do mercado</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Marketing Digital</h3>
              <p>Estratégias personalizadas para aumentar sua presença online e gerar resultados</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">💡</div>
              <h3>Soluções Inovadoras</h3>
              <p>Transformamos suas ideias em realidade com criatividade e tecnologia de ponta</p>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </Background>
  );
};

export default Home;


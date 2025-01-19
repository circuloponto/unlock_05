import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SlideSection from './SlideSection';
import { useTranslation } from 'react-i18next';
import rumoLogo from '../../assets/images/rumo.png';
import consultisLogo from '../../assets/images/consultis.png';
import suemLogo from '../../assets/images/suem.png';
import ptDisclaimer from '../../assets/images/PT_Disclaimer.png';
import nlDisclaimer from '../../assets/images/NL_Disclaimer.jpg';
import enDisclaimer from '../../assets/images/EN_Disclaimer.png';
import news1 from '../../assets/images/news_01.jpg';
import news2 from '../../assets/images/news_02.jpg';
import news3 from '../../assets/images/news_03.jpg';
import news4 from '../../assets/images/news_04.jpg';
import styled from 'styled-components';

const DisclaimerSection = styled(SlideSection)`
  left: 0;
  top: 0;
`;

const NewsCard = styled.div`
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ReadMore = styled.div`
  display: inline-block;
  margin: 0 30px 0 0;
  color: #e6811e;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Slide0 = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  
  const disclaimerImages = {
    pt: ptDisclaimer,
    nl: nlDisclaimer,
    en: enDisclaimer
  };
  
  return (
    <DisclaimerSection>
      <div className="slide-container">
        <div className="slide slide_0" style={{gap:'0',padding:'0'}}>  
          <div className="title highlight">UNLOCK - Unlocking New Life Opportunities in Carreer Knowledge</div> 
          <img src={disclaimerImages[currentLang]} alt="Disclaimer" style={{ maxWidth: '100%', height: 'auto' }} />
          <div className="disclaimer-text">
            {t('slides.disclaimer')}
          </div>
        </div>
      </div>
    </DisclaimerSection>
  );
};

const Slide1 = () => {
  const { t } = useTranslation();
  return (
    <SlideSection>
      <div className="slide-container">
        <div className="slide slide_1">   
          
            <div className="title highlight">UNLOCK - Unlocking New Life Opportunities in Carreer Knowledge</div>
            {t('slides.slide1.paragraph1')}
          
          <div>
          </div>
          
        </div>
      </div>
    </SlideSection>
  );
};

const Slide2 = () => {
  const { t } = useTranslation();
  return (
    <SlideSection>
      <div className="slide-container">
      <div className="slide slide_2">  
      {t('slides.slide1.paragraph2')}
       
      <div>
            <span className="highlight">
              {t('slides.slide1.paragraph3').split(' - ')[0]}
            </span>
            {' - ' + t('slides.slide1.paragraph3').split(' - ').slice(1).join(' - ')}
          </div>
          <div>
            <span className="highlight">
              {t('slides.slide1.paragraph4').split(' - ')[0]}
            </span>
            {' - ' + t('slides.slide1.paragraph4').split(' - ').slice(1).join(' - ')}
          </div>
          <div>
            <span className="highlight">
              {t('slides.slide1.paragraph5').split(' - ')[0]}
            </span>
            {' - ' + t('slides.slide1.paragraph5').split(' - ').slice(1).join(' - ')}
          </div>
        
          <div>
            <span className="highlight">
              {t('slides.slide1.paragraph6').split(' - ')[0]}
            </span>
            {' - ' + t('slides.slide1.paragraph6').split(' - ').slice(1).join(' - ')}
          </div>
      </div>
      </div>
    </SlideSection>
  );
};

const Slide3 = () => {
  const { t } = useTranslation();
  return (
    <SlideSection>
      <div className="slide-container">
      <div className="slide slide_3">  
          <div>{t('slides.slide2.section1.paragraph1')}</div>
          <div>
            <span className="highlight">
              {t('slides.slide2.section1.paragraph2').split(':')[0]}:
            </span>
            {t('slides.slide2.section1.paragraph2').split(':')[1]}
          </div>
          <div>
            <span className="highlight">
              {t('slides.slide2.section1.paragraph3').split(':')[0]}:
            </span>
            {t('slides.slide2.section1.paragraph3').split(':')[1]}
          </div>
          <div>
            <span className="highlight">
              {t('slides.slide2.section1.paragraph4').split(':')[0]}:
            </span>
            {t('slides.slide2.section1.paragraph4').split(':')[1]}
          </div>
         
      </div>
      </div>
    </SlideSection>
  );
};


const Slide4 = () => {
  const { t } = useTranslation();
  return (
    <SlideSection>
      <div className="slide-container">
      <div className="slide slide_4">  
      <div>
            <span className="highlight">
              {t('slides.slide2.section2.paragraph1').split(':')[0]}:
            </span>
            {t('slides.slide2.section2.paragraph1').split(':')[1]}
          </div>
        
          <div>
            <span className="highlight">
              {t('slides.slide2.section2.paragraph2').split(':')[0]}:
            </span>
            {t('slides.slide2.section2.paragraph2').split(':')[1]}
          </div>
          <div>
            <span className="highlight">
              {t('slides.slide2.section2.paragraph3').split(':')[0]}:
            </span>
            {t('slides.slide2.section2.paragraph3').split(':')[1]}
          </div>
      
          <div>
           
              {t('slides.slide2.section2.paragraph4')}
           
            
          </div>
      </div>
      </div>
    </SlideSection>
  );
};

const Slide5 = () => {
  const { t } = useTranslation();
  return (
    <SlideSection>
      <div className="slide-container">
      <div className="slide slide_5">  
          <div>{t('slides.slide3.section1.paragraph1')}</div>
          <div>
            {(() => {
              const text = t('slides.slide3.section1.paragraph2');
              const phrase = "Toolkit para o Emprego Apoiado";
              const index = text.indexOf(phrase);
              return (
                <>
                  {text.substring(0, index)}
                  <span className="highlight">{phrase}</span>
                  {text.substring(index + phrase.length)}
                </>
              );
            })()}
          </div>
      </div>
      </div>
    </SlideSection>
  );
};

const Slide6 = () => {
  const { t } = useTranslation();
  return (
    <SlideSection>
      <div className="slide-container">
      <div className="slide slide_6"> 
        <div>
          <div>
            {(() => {
              const text = t('slides.slide3.section2.paragraph1');
              const phrase = "Formação Piloto: Desenvolvimento Profissional para o Apoio à Reintegração de Ex-Reclusos";
              const index = text.indexOf(phrase);
              return (
                <>
                  {text.substring(0, index)}
                  <span className="highlight">{phrase}</span>
                  {text.substring(index + phrase.length)}
                </>
              );
            })()}
          </div>
          <div>
            {(() => {
              const text = t('slides.slide3.section2.paragraph2');
              const phrase = "Disseminação, Exploração e Eventos Multiplicadores";
              const index = text.indexOf(phrase);
              return (
                <>
                  {text.substring(0, index)}
                  <span className="highlight">{phrase}</span>
                  {text.substring(index + phrase.length)}
                </>
              );
            })()}
          </div>
        </div>
      </div>
      </div>
    </SlideSection>
  );
};

const Slide7 = () => {
  const { t } = useTranslation();
  return (
    <SlideSection>
      <div className="slide-container">
      <div className="slide slide_7"> 
          <div>{t('slides.slide4.section1.paragraph1')}</div>
          <div>
            <span className="highlight">
              {t('slides.slide4.section1.paragraph2').split(':')[0]}:
            </span>
            {t('slides.slide4.section1.paragraph2').split(':')[1]}
          </div>
          <div>
            <span className="highlight">
              {t('slides.slide4.section1.paragraph3').split(':')[0]}:
            </span>
            {t('slides.slide4.section1.paragraph3').split(':')[1]}
          </div>
      </div>
      </div>
    </SlideSection>
  );
};

const Slide8 = () => {
  const { t } = useTranslation();
  return (
    <SlideSection>
      <div className="slide-container">
        <div className="slide slide_8">
          <div>
            <span className="highlight">
              {t('slides.slide4.section2.paragraph1').split(':')[0]}:
            </span>
            {t('slides.slide4.section2.paragraph1').split(':')[1]}
          </div>
          <div>
            <span className="highlight">
              {t('slides.slide4.section2.paragraph2').split(':')[0]}:
            </span>
            {t('slides.slide4.section2.paragraph2').split(':')[1]}
          </div>
          <div>
            <span className="highlight">
              {t('slides.slide4.section2.paragraph3').split(':')[0]}:
            </span>
            {t('slides.slide4.section2.paragraph3').split(':')[1]}
          </div>
        </div>
      </div>
    </SlideSection>
  );
};
const Slide9 = () => {
  const { t } = useTranslation();
  return (
    <SlideSection>
      <div className="slide-container">
        <div className="slide slide_9">
          <img src={rumoLogo} alt="Rumo Logo" className="partner-logo rumo" />
          <div className="partner-text">
            {(() => {
              const text = t('slides.slide5.section1.paragraph1');
              const phrase = "Rumo, Cooperativa de Solidariedade Social, Crl";
              const websiteText = "https://www.rumo.org.pt/";
              const index = text.indexOf(phrase);
              const websiteIndex = text.indexOf(websiteText);
              
              return (
                <>
                 <span>A </span>
                  <span className="highlight">{phrase}</span>
                  {text.substring(index + phrase.length, websiteIndex)}
                  <span className="highlight">
                    <a href={websiteText} target="_blank" rel="noopener noreferrer">
                      {websiteText}
                    </a>
                  </span>
                </>
              );
            })()}
          </div>
        </div>
      </div>
    </SlideSection>
  );
};

const Slide10 = () => {
  const { t } = useTranslation();
  return (
    <SlideSection>
      <div className="slide-container">
        <div className="slide slide_10">
          <img src={consultisLogo} alt="Consultis Logo" className="partner-logo consultis" />
          <div className="partner-text">
            {(() => {
              const text = t('slides.slide5.section2.paragraph1');
              const phrase = "Consultis";
              const websiteText = "www.consultis.pt";
              const index = text.indexOf(phrase);
              const websiteIndex = text.indexOf(websiteText);
              
              return (
                <>
                <span>A </span>
                  <span className="highlight">{phrase}</span>
                  {text.substring(index + phrase.length, websiteIndex)}
                  <span className="highlight">
                    <a href="https://www.consultis.pt" target="_blank" rel="noopener noreferrer">
                      {websiteText}
                    </a>
                  </span>
                </>
              );
            })()}
          </div>
        </div>
      </div>
    </SlideSection>
  );
};

const Slide11 = () => {
  const { t } = useTranslation();
  return (
    <SlideSection>
      <div className="slide-container">
        <div className="slide slide_11">
          <img src={suemLogo} alt="SUEM.BE Logo" className="partner-logo suem" />
          <div className="partner-text">
            {(() => {
              const text = t('slides.slide5.section3.paragraph1');
              const phrase = "SUEM.BE";
              const websiteText = "https://www.suem.be/";
              const index = text.indexOf(phrase);
              const websiteIndex = text.indexOf(websiteText);
              
              return (
                <>
                 <span>A </span>
                  <span className="highlight">{phrase}</span>
                  {text.substring(index + phrase.length, websiteIndex)}
                  <span className="highlight">
                    <a href={websiteText} target="_blank" rel="noopener noreferrer">
                      {websiteText}
                    </a>
                  </span>
                </>
              );
            })()}
          </div>
        </div>
      </div>
    </SlideSection>
  );
};

const Slide12 = () => {
  const { t } = useTranslation();
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const newsItems = [
    {
      id: 1,
      date: '2024',
      title: 'Rumo ao Futuro',
      content: 'O projeto "Rumo ao Futuro" é uma iniciativa inovadora que visa capacitar jovens em situação de vulnerabilidade social, oferecendo formação profissional em tecnologia e desenvolvimento pessoal...',
      images: [news1, news2, news3, news4]
    },
    {
      id: 2,
      date: '2023',
      title: 'Tecnologia e Inclusão',
      content: 'A iniciativa "Tecnologia e Inclusão" representa um marco importante em nosso compromisso com a democratização do acesso à tecnologia...',
      images: [news2, news3, news4, news1]
    },
    {
      id: 3,
      title: "Lançamento do Projeto UNLOCK",
      date: "2024-01-15",
      content: "O projeto UNLOCK foi oficialmente lançado hoje com uma cerimónia virtual que reuniu parceiros de Portugal, Holanda e Bélgica. Este projeto inovador visa desenvolver competências digitais em adultos através de uma abordagem única que combina aprendizagem presencial e online. A RUMO, como parceiro português, destaca a importância desta iniciativa para a inclusão digital.",
      images: [news1, news2, news3, news4]
    }
  ];

  const handlePrevImage = () => {
    const imageCount = newsItems[currentNewsIndex].images.length;
    setCurrentImageIndex((prev) => (prev - 1 + imageCount) % imageCount);
  };

  const handleNextImage = () => {
    const imageCount = newsItems[currentNewsIndex].images.length;
    setCurrentImageIndex((prev) => (prev + 1) % imageCount);
  };

  const handleNewsChange = (index) => {
    setCurrentNewsIndex(index);
    setCurrentImageIndex(0);
  };

  const handlePrevNews = () => {
    setCurrentNewsIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length);
    setCurrentImageIndex(0);
  };

  const handleNextNews = () => {
    setCurrentNewsIndex((prev) => (prev + 1) % newsItems.length);
    setCurrentImageIndex(0);
  };

  return (
    <SlideSection>
      <div className="slide-container">
        <div className="slide slide_12">
         

          <div className="news-grid">
            {/* Left Column - News Content */}
            <Link to={`/news/${newsItems[currentNewsIndex].id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <NewsCard className="news-content">
                <div className="news-header">
                  <h2 className="news-title highlight">Notícias</h2>
                  <div className="news-date">{newsItems[currentNewsIndex].date}</div>
                  <h3 className="news-title">{newsItems[currentNewsIndex].title}</h3>
                </div>
                <div className="news-content-preview">
                  <div className="news-text">
                    {newsItems[currentNewsIndex].content}
                    <Link to={`/news/${newsItems[currentNewsIndex].id}`} style={{ textDecoration: 'none', color: '#e6811e' }}>
                      <ReadMore>Read more →</ReadMore>
                    </Link>
                  </div>
                  
                </div>
                <div className="breadcrumbs" onClick={(e) => e.preventDefault()}>
                  {newsItems.map((item, index) => (
                    <button
                      key={item.id}
                      className={`breadcrumb ${index === currentNewsIndex ? 'active' : ''}`}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleNewsChange(index);
                      }}
                      title={item.title}
                    />
                  ))}
                </div>
              </NewsCard>
            </Link>

            {/* Right Column - Image Slideshow */}
            <div className="news-slideshow-column">
              <div className="slideshow-container">
                <button className="slideshow-nav prev" onClick={handlePrevImage}>
                  ←
                </button>
                <div className="slideshow-image">
                  <img 
                    src={newsItems[currentNewsIndex].images[currentImageIndex]} 
                    alt={`News ${currentImageIndex + 1}`}
                  />
                </div>
                <button className="slideshow-nav next" onClick={handleNextImage}>
                  →
                </button>
                <div className="dot-indicators">
                  {newsItems[currentNewsIndex].images.map((_, idx) => (
                    <div 
                      key={idx}
                      className={`dot ${idx === currentImageIndex ? 'active' : ''}`}
                      onClick={() => setCurrentImageIndex(idx)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideSection>
  );
};

// Create all slide rows (6 sections with varying slides)
export const slides = [
  [<Slide0 key="slide-0.0" />],
  [<Slide1 key="slide-1.0" />, <Slide2 key="slide-1.1" />],
  [<Slide3 key="slide-2.0" />, <Slide4 key="slide-2.1" />],
  [<Slide5 key="slide-3.0" />, <Slide6 key="slide-3.1" />],
  [<Slide7 key="slide-4.0" />, <Slide8 key="slide-4.1" />],
  [<Slide9 key="slide-5.0" />, <Slide10 key="slide-5.1" />, <Slide11 key="slide-5.2" />],
  [<Slide12 key="slide-6.0" />]
];

// Export Slide0 separately since it's positioned differently
export const disclaimerSlide = <Slide0 key="disclaimer" />;

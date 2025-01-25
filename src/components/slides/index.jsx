import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SlideSection from './SlideSection';
import { useTranslation } from 'react-i18next';
import rumoLogo from '../../assets/images/rumo.png';
import consultisLogo from '../../assets/images/consultis.png';
import suemLogo from '../../assets/images/suem.png';
import ptDisclaimer from '../../assets/images/PT_Disclaimer.png';
import nlDisclaimer from '../../assets/images/NL_Disclaimer.png';
import enDisclaimer from '../../assets/images/EN_Disclaimer.png';
import news1 from '../../assets/images/news_01_01.jpg';
import news2 from '../../assets/images/news_01_02.jpg';
import news3 from '../../assets/images/news_01_03.jpg';

import styled from 'styled-components';
/* import { newsItems } from '../../data/newsItems'; */

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

const truncateText = (text, maxLength = 50) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
};

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
          <div className="title highlight">Tailoring and Enhancing the European Model of Supported Employment to Unlock Job Opportunities for Ex-Offenders</div> 
          <div className="subtitle">2024-1-PT01-KA210-VET-000257459</div>
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
          
            <div style={{textIndent:'-50px'}}className="title highlight">Tailoring and Enhancing the European Model of Supported Employment to Unlock Job Opportunities for Ex-Offenders</div>
          <div style={{textIndent:'50px'}}>

           {t('slides.slide1.paragraph1')}
          </div>
          <div className="last-paragraph">
          {t('slides.slide1.paragraph1.1')}
          </div>
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
            {'-' + t('slides.slide1.paragraph6').split(' - ').slice(1).join(' - ')}
          </div>
          <div className='last-paragraph'>
            
            {t('slides.slide1.paragraph7')}
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
            <span className="highlight bullet">
              {t('slides.slide2.section1.paragraph2').split(':')[0]}:
            </span>
            {t('slides.slide2.section1.paragraph2').split(':')[1]}
          </div>
          <div>
            <span className="highlight bullet">
              {t('slides.slide2.section1.paragraph3').split(':')[0]}:
            </span>
            {t('slides.slide2.section1.paragraph3').split(':')[1]}
          </div>
          <div>
            <span className="highlight bullet">
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
            <span className="highlight bullet">
              {t('slides.slide2.section2.paragraph1').split(':')[0]}:
            </span>
            {t('slides.slide2.section2.paragraph1').split(':')[1]}
          </div>
        
          <div>
            <span className="highlight bullet">
              {t('slides.slide2.section2.paragraph2').split(':')[0]}:
            </span>
            {t('slides.slide2.section2.paragraph2').split(':')[1]}
          </div>
          <div>
            <span className="highlight bullet">
              {t('slides.slide2.section2.paragraph3').split(':')[0]}:
            </span>
            {t('slides.slide2.section2.paragraph3').split(':')[1]}
          </div>
      
          <div className="last-paragraph">
           
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
              const text = t('slides.slide3.section1.paragraph2').split(' ');
              return (
                <div className="last-paragraph">
                  {text[0]} {text[1]} {' '}
                  <span className="highlight">
                     {text[2]} {text[3]} {text[4]} {text[5]} {text[6]}
                  </span>
                  {' '}{text.slice(7).join(' ')}
                </div>
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
                const text = t('slides.slide3.section2.paragraph1').split(' ');
                return (
                  <>
                    {text[0]} {text[1]} {' '}
                    <span className="highlight">
                       {text[2]} {text[3]} {text[4]} {text[5]} {text[6]} {text[7]} {text[8]} {text[9]} {text[10]} {text[11]} {text[12]}
                    </span>
                    {' '}{text.slice(13).join(' ')}
                  </>
                );
              })()}
            </div>
            <div>
              {(() => {
                const text = t('slides.slide3.section2.paragraph2').split(' ');
                return (
                  <>
                    {text[0]} {text[1]} {text[2]} {text[3]} {' '}
                    <span className="highlight">
                     {text[4]} {text[5]} {text[6]} {text[7]} {text[8]}
                    </span>
                    {' '}{text.slice(9).join(' ')}
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
            <span className="highlight bullet">
              {t('slides.slide4.section1.paragraph2').split(':')[0]}:
            </span>
            {t('slides.slide4.section1.paragraph2').split(':')[1]}
          </div>
          <div>
            <span className="highlight bullet">
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
            <span className="highlight bullet">
              {t('slides.slide4.section2.paragraph1').split(':')[0]}:
            </span>
            {t('slides.slide4.section2.paragraph1').split(':')[1]}
          </div>
          <div>
            <span className="highlight bullet">
              {t('slides.slide4.section2.paragraph2').split(':')[0]}:
            </span>
            {t('slides.slide4.section2.paragraph2').split(':')[1]}
          </div>
          <div>
            <span className="highlight bullet">
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
  const { t, i18n } = useTranslation();
  return (
    <SlideSection>
      <div className="slide-container">
        <div className="slide slide_9">
          <img src={rumoLogo} alt="Rumo Logo" className="partner-logo rumo" />
          <div className="partner-text">
            {(() => {
              const text = t('slides.slide5.section1.paragraph1');
              const phrase = "Rumo, Cooperativa de Solidariedade Social, Crl";
              const websiteText = "www.rumo.org.pt";
              const websiteLink = "https://" + websiteText;
              const index = text.indexOf(phrase);
              const websiteIndex = text.indexOf(websiteText);
              
              return (
                <>
                  {i18n.language === 'pt' && 'A '}
                  <span className="highlight">{phrase}</span>
                  {text.substring(index + phrase.length, websiteIndex)}
                  <span className="highlight">
                    <a href={websiteLink} target="_blank" rel="noopener noreferrer">
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
  const { t, i18n } = useTranslation();
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
              const websiteLink = "https://" + websiteText;
              const index = text.indexOf(phrase);
              const websiteIndex = text.indexOf(websiteText);
              
              return (
                <>
                  {i18n.language === 'pt' && 'A '}
                  <span className="highlight">{phrase}</span>
                  {text.substring(index + phrase.length, websiteIndex)}
                  <span className="highlight">
                    <a href={websiteLink} target="_blank" rel="noopener noreferrer">
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
  const { t, i18n } = useTranslation();
  return (
    <SlideSection>
      <div className="slide-container">
        <div className="slide slide_11">
          <img src={suemLogo} alt="Suem Logo" className="partner-logo suem" />
          <div className="partner-text">
            {(() => {
              const text = t('slides.slide5.section3.paragraph1');
              const phrase = "SUEM.BE";
              const websiteText = "www.suem.be";
              const websiteLink = "https://" + websiteText;
              const index = text.indexOf(phrase);
              const websiteIndex = text.indexOf(websiteText);
              
              return (
                <>
                  {i18n.language === 'pt' && 'A '}
                  <span className="highlight">{phrase}</span>
                  {text.substring(index + phrase.length, websiteIndex)}
                  <span className="highlight">
                    <a href={websiteLink} target="_blank" rel="noopener noreferrer">
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
  const { t, i18n } = useTranslation();
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Get news items from translations
  const newsItems = t('news.newsItems', { returnObjects: true }) || [];
  const totalNews = newsItems.length;

  // Create array of images
  const images = [news1, news2, news3];

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => 
      (prev - 1 + images.length) % images.length
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
      (prev + 1) % images.length
    );
  };

  const handleNewsChange = (index) => {
    setCurrentNewsIndex(index);
    setCurrentImageIndex(0);
  };

  // Don't render if no news available
  if (totalNews === 0) return null;

  const currentNews = newsItems[currentNewsIndex];

  return (
    <SlideSection>
      <div className="slide-container">
        <div className="slide slide_12">
          <div className="news-grid">
            {/* Left Column - News Content */}
            <div className="news-content">
              <div className="news-header">
                <h2 className="news-title highlight">{t('news.newsItems.0.titleSection')}</h2>
                <div className="news-date">{currentNews.date}</div>
                <h3 className="news-title">{currentNews.title}</h3>
              </div>
              <div className="news-content-preview">
                <div className="news-text">
                  {truncateText(currentNews.content, 250)}
                  <Link to={`/news/${currentNews.id}`} style={{ textDecoration: 'none', color: '#e6811e' }}>
                    <div className="read-more">{t('news.ui.readMore')}</div>
                  </Link>
                </div>
              </div>
              {totalNews > 1 && (
                <div className="breadcrumbs" onClick={(e) => e.preventDefault()}>
                  {newsItems.map((_, index) => (
                    <button
                      key={index}
                      className={`breadcrumb ${index === currentNewsIndex ? 'active' : ''}`}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleNewsChange(index);
                      }}
                      title={newsItems[index].title}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Right Column - Image Slideshow */}
            <div className="news-slideshow-column">
              <div className="slideshow-container">
                {images.length > 1 && (
                  <button className="slideshow-nav prev" onClick={handlePrevImage}>
                    ←
                  </button>
                )}
                <div className="slideshow-image">
                  <img 
                    src={images[currentImageIndex]}
                    alt={currentNews.title}
                  />
                </div>
                {images.length > 1 && (
                  <button className="slideshow-nav next" onClick={handleNextImage}>
                    →
                  </button>
                )}
                {images.length > 1 && (
                  <div className="dot-indicators">
                    {images.map((_, idx) => (
                      <div 
                        key={idx}
                        className={`dot ${idx === currentImageIndex ? 'active' : ''}`}
                        onClick={() => setCurrentImageIndex(idx)}
                      />
                    ))}
                  </div>
                )}
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

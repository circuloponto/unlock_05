import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Grid from '../components/Grid';
import styles from './NewsPage.module.css';
import news1 from '../assets/images/news_01.jpg';
import news2 from '../assets/images/news_02.jpg';
import news3 from '../assets/images/news_03.jpg';
import news4 from '../assets/images/news_04.jpg';

const newsItems = [
  {
    id: 1,
    title: "Lançamento do Projeto UNLOCK",
    date: "2024-01-15",
    content: `O projeto UNLOCK foi oficialmente lançado hoje com uma cerimónia virtual que reuniu parceiros de Portugal, Holanda e Bélgica. Este projeto inovador visa desenvolver competências digitais em adultos através de uma abordagem única que combina aprendizagem presencial e online. A RUMO, como parceiro português, destaca a importância desta iniciativa para a inclusão digital.

    O programa desenvolve soluções tecnológicas adaptadas às necessidades específicas de comunidades carentes, incluindo aplicativos móveis para educação à distância, plataformas de microcrédito e sistemas de gestão para pequenos empreendedores. Cada solução é desenvolvida em estreita colaboração com as comunidades beneficiadas, garantindo sua relevância e efetividade.

    Os resultados têm sido notáveis: aumento significativo no acesso à educação digital, crescimento do empreendedorismo local e fortalecimento das redes de apoio comunitário. O projeto não apenas fornece ferramentas tecnológicas, mas também capacita as comunidades para utilizá-las de forma autônoma e sustentável.`,
    images: [news1, news2, news3, news4]
  },
  {
    id: 2,
    title: "Workshop de Competências Digitais",
    date: "2024-01-10",
    content: `A CONSULTIS realizou hoje um workshop sobre competências digitais básicas, parte integrante do projeto UNLOCK. O evento contou com a participação de 20 adultos que aprenderam sobre segurança online, uso de email e ferramentas básicas de produtividade. O feedback dos participantes foi extremamente positivo, destacando a abordagem prática e acessível.

    O programa desenvolve soluções tecnológicas adaptadas às necessidades específicas de comunidades carentes, incluindo aplicativos móveis para educação à distância, plataformas de microcrédito e sistemas de gestão para pequenos empreendedores. Cada solução é desenvolvida em estreita colaboração com as comunidades beneficiadas, garantindo sua relevância e efetividade.

    Os resultados têm sido notáveis: aumento significativo no acesso à educação digital, crescimento do empreendedorismo local e fortalecimento das redes de apoio comunitário. O projeto não apenas fornece ferramentas tecnológicas, mas também capacita as comunidades para utilizá-las de forma autônoma e sustentável.`,
    images: [news2, news3, news4, news1]
  },
  {
    id: 3,
    title: "Parceria com SUEM Fortalece Projeto",
    date: "2024-01-05",
    content: `A parceria com a SUEM trouxe novos desenvolvimentos ao projeto UNLOCK. A experiência desta organização em educação de adultos está a contribuir significativamente para o desenvolvimento de metodologias inovadoras. Foram estabelecidos novos objetivos para 2024, focando na expansão do alcance do projeto.

    O programa desenvolve soluções tecnológicas adaptadas às necessidades específicas de comunidades carentes, incluindo aplicativos móveis para educação à distância, plataformas de microcrédito e sistemas de gestão para pequenos empreendedores. Cada solução é desenvolvida em estreita colaboração com as comunidades beneficiadas, garantindo sua relevância e efetividade.

    Os resultados têm sido notáveis: aumento significativo no acesso à educação digital, crescimento do empreendedorismo local e fortalecimento das redes de apoio comunitário. O projeto não apenas fornece ferramentas tecnológicas, mas também capacita as comunidades para utilizá-las de forma autônoma e sustentável.`,
    images: [news3, news4, news1, news2]
  }
];

const NewsPage = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const currentNewsIndex = newsItems.findIndex(item => item.id === parseInt(id));
  
  if (currentNewsIndex === -1) {
    return <div className={styles.newsContainer}>News not found</div>;
  }

  const newsItem = newsItems[currentNewsIndex];

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => 
      (prev - 1 + newsItem.images.length) % newsItem.images.length
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
      (prev + 1) % newsItem.images.length
    );
  };

  const nextNewsId = newsItems[(currentNewsIndex + 1) % newsItems.length].id;
  const prevNewsId = newsItems[(currentNewsIndex - 1 + newsItems.length) % newsItems.length].id;

  return (
    <div className={styles.newsContainer}>
      <Grid />
    
      <div className={styles.contentWrapper}>
        <div className={styles.navigation}>
          <Link to="/" className={styles.backButton}>← Back to Home</Link>
          <div className={styles.breadcrumbs}>
            {newsItems.map((item, index) => (
              <Link
                key={item.id}
                to={`/news/${item.id}`}
                className={`${styles.breadcrumb} ${currentNewsIndex === index ? styles.breadcrumbActive : ''}`}
                title={item.title}
              />
            ))}
          </div>
          <div className={styles.newsNavigation}>
            <Link to={`/news/${prevNewsId}`} className={styles.navButton}>← Previous</Link>
            <Link to={`/news/${nextNewsId}`} className={styles.navButton}>Next →</Link>
          </div>
        </div>

        <div className={styles.slideshowContainer}>
          <div className={styles.slideshowWrapper}>
            <div className={styles.imageContainer}>
              <img 
                className={styles.newsImage}
                src={newsItem.images[currentImageIndex]} 
                alt={`${newsItem.title} - Image ${currentImageIndex + 1}`} 
              />
              <button className={styles.slideButtonLeft} onClick={handlePrevImage}>
                ←
              </button>
              <button className={styles.slideButtonRight} onClick={handleNextImage}>
                →
              </button>
            </div>
            <div className={styles.dotIndicators}>
              {newsItem.images.map((_, index) => (
                <button 
                  key={index}
                  className={index === currentImageIndex ? styles.dotActive : styles.dot}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.textContent}>
          <div className={styles.newsHeader}>
            <div className={styles.newsDate}>{newsItem.date}</div>
            <h1 className={styles.newsTitle}>{newsItem.title}</h1>
          </div>
          <div className={styles.newsContent}>
            {newsItem.content.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;

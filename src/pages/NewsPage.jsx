import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Grid from '../components/Grid';
import styles from './NewsPage.module.css';
import { newsItems } from '../data/newsItems';

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

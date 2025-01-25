import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Grid from '../components/Grid';
import styles from './NewsPage.module.css';
import news1 from '../assets/images/news_01_01.jpg';
import news2 from '../assets/images/news_01_02.jpg';
import news3 from '../assets/images/news_01_03.jpg';


const newsImages = {
  1: [news1, news2, news3,],
  2: [news1, news2]
};

const NewsPage = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const lastTouchY = useRef(null);
  
  // Get all news items
  const newsItems = t('news.newsItems', { returnObjects: true }) || [];
  const newsItem = newsItems.find(item => item.id === id);
  const currentNewsIndex = newsItems.findIndex(item => item.id === id);
  
  useEffect(() => {
    console.log('NewsPage mounted');
    const container = document.querySelector(`.${styles.newsContainer}`);
    
    if (container) {
      console.log('Container found:', {
        height: container.clientHeight,
        scrollHeight: container.scrollHeight,
        style: window.getComputedStyle(container),
        overflow: window.getComputedStyle(container).overflow,
      });

      const handleTouchStart = (e) => {
        lastTouchY.current = e.touches[0].clientY;
        console.log('Touch start:', lastTouchY.current);
      };

      const handleTouchMove = (e) => {
        if (!lastTouchY.current) {
          return;
        }

        const currentY = e.touches[0].clientY;
        const deltaY = lastTouchY.current - currentY;
        lastTouchY.current = currentY;

        console.log('Touch move:', {
          deltaY,
          currentScroll: container.scrollTop,
          maxScroll: container.scrollHeight - container.clientHeight
        });

        // Force scroll the container
        container.scrollTop += deltaY;

        // Prevent default only if we're not at boundaries or moving away from them
        const isAtBottom = container.scrollHeight - container.scrollTop <= container.clientHeight;
        const isAtTop = container.scrollTop <= 0;

        if ((!isAtBottom || deltaY < 0) && (!isAtTop || deltaY > 0)) {
          e.preventDefault();
          e.stopPropagation();
        }
      };

      const handleTouchEnd = () => {
        lastTouchY.current = null;
        console.log('Touch end');
      };

      // Add event listeners
      container.addEventListener('touchstart', handleTouchStart, { passive: false });
      container.addEventListener('touchmove', handleTouchMove, { passive: false });
      container.addEventListener('touchend', handleTouchEnd, { passive: false });
      
      return () => {
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('touchmove', handleTouchMove);
        container.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, []);
  
  // Check if news exists
  if (!newsItem) {
    return <div className={styles.newsContainer}>{t('news.ui.notFound')}</div>;
  }

  const images = newsImages[id] || [];

  const handlePrevImage = (e) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => 
      (prev - 1 + images.length) % images.length
    );
  };

  const handleNextImage = (e) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => 
      (prev + 1) % images.length
    );
  };

  return (
    <div className={styles.newsContainer}>
      <Grid />
      <div className={styles.contentWrapper}>
        <div className={styles.navigation}>
          <Link to="/" className={styles.backButton}>{t('news.ui.backToHome')}</Link>
          <div className={styles.newsNavigation}>
            <Link 
              to={currentNewsIndex > 0 ? `/news/${newsItems[currentNewsIndex - 1].id}` : '#'}
              className={`${styles.navButton} ${currentNewsIndex === 0 ? styles.navButtonDisabled : ''}`}
              onClick={e => currentNewsIndex === 0 && e.preventDefault()}
            >
              {t('news.ui.previous')}
            </Link>
            <Link 
              to={currentNewsIndex < newsItems.length - 1 ? `/news/${newsItems[currentNewsIndex + 1].id}` : '#'}
              className={`${styles.navButton} ${currentNewsIndex === newsItems.length - 1 ? styles.navButtonDisabled : ''}`}
              onClick={e => currentNewsIndex === newsItems.length - 1 && e.preventDefault()}
            >
              {t('news.ui.next')}
            </Link>
          </div>
        </div>

        <div className={styles.textContent}>
          <div className={styles.newsHeader}>
            <div className={styles.newsDate}>{newsItem.date}</div>
            <h1 className={styles.newsTitle}>{newsItem.title}</h1>
          </div>
          
          {images.length > 0 && (
            <div className={styles.slideshowContainer}>
              <img 
                src={images[currentImageIndex]} 
                alt={`${newsItem.title} - Image ${currentImageIndex + 1}`}
                className={styles.slideImage}
              />
              {images.length > 1 && (
                <>
                  <button className={`${styles.slideButton} ${styles.slideButtonLeft}`} onClick={handlePrevImage}>←</button>
                  <button className={`${styles.slideButton} ${styles.slideButtonRight}`} onClick={handleNextImage}>→</button>
               {/*    <div className={styles.dotIndicators}>
                    {images.map((_, index) => (
                      <button 
                        key={index}
                        className={`${styles.dot} ${index === currentImageIndex ? styles.dotActive : ''}`}
                        onClick={() => setCurrentImageIndex(index)}
                      />
                    ))}
                  </div> */}
                </>
              )}
            </div>
          )}

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

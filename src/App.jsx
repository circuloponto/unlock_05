import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Slider from './components/Slider';
import ProgressBar from './components/ProgressBar';
import DiamondIndicator from './components/DiamondIndicator';
import Grid from './components/Grid';
//import Menu from './components/Menu';
import Modal from './components/ContactModal';
import Navbar from './components/Navbar';
import { slides } from './components/slides/index';
import './App.css';
import './i18n';
import './assets/fonts/fonts.css';
import Breadcrumb from './components/Breadcrumb';
import NewsPage from './pages/NewsPage';

// Separate component for the main presentation
const MainPresentation = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [currentVerticalIndex, setCurrentVerticalIndex] = React.useState(0);
  const [currentHorizontalIndex, setCurrentHorizontalIndex] = React.useState(0);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className={`app ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="maskTop"></div>
      <Grid />
      <div className="app-content">
        <Slider
          slides={slides}
          currentVerticalIndex={currentVerticalIndex}
          currentHorizontalIndex={currentHorizontalIndex}
          setCurrentVerticalIndex={setCurrentVerticalIndex}
          setCurrentHorizontalIndex={setCurrentHorizontalIndex}
          isMenuOpen={isMenuOpen}
          isModalOpen={isModalOpen}
        />
      </div>

      <Navbar 
        onMenuToggle={handleMenuToggle}
        isMenuOpen={isMenuOpen}
        setCurrentVerticalIndex={setCurrentVerticalIndex}
        setCurrentHorizontalIndex={setCurrentHorizontalIndex}
        currentVerticalIndex={currentVerticalIndex}
        currentHorizontalIndex={currentHorizontalIndex}
        setIsModalOpen={setIsModalOpen}
      />
      <Breadcrumb
        slides={slides}
        currentVerticalIndex={currentVerticalIndex}
        currentHorizontalIndex={currentHorizontalIndex}
        setCurrentVerticalIndex={setCurrentVerticalIndex}
        setCurrentHorizontalIndex={setCurrentHorizontalIndex}
        isMenuOpen={isMenuOpen}
      />
      <DiamondIndicator 
        currentVerticalIndex={currentVerticalIndex}
        currentHorizontalIndex={currentHorizontalIndex}
        isMenuOpen={isMenuOpen}
        setCurrentVerticalIndex={setCurrentVerticalIndex}
        setCurrentHorizontalIndex={setCurrentHorizontalIndex}
      />

      <ProgressBar 
        currentVerticalIndex={currentVerticalIndex}
        currentHorizontalIndex={currentHorizontalIndex}
        isMenuOpen={isMenuOpen}
      />

      <div className="maskBottom"></div>
    </div>
  );
};

// Main App component with routing
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPresentation />} />
        <Route path="/news/:id" element={<NewsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

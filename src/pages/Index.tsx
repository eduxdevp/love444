import { useState } from 'react';
import Puzzle from '@/components/Puzzle';
import Popup from '@/components/Popup';
import MainPage from '@/components/MainPage';
import ThemeToggle from '@/components/ThemeToggle';

const Index = () => {
  const [puzzleSolved, setPuzzleSolved] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showMainPage, setShowMainPage] = useState(false);
  


  const handlePuzzleSolved = () => {
    setPuzzleSolved(true);
    setShowPopup(true);
  };

  const handlePopupComplete = () => {
    setShowPopup(false);
    setShowMainPage(true);
  };

  return (
    <div className="min-h-screen">
      {/* Theme Toggle - siempre visible */}
      <ThemeToggle />
      
      {!showMainPage && (
        <div className="relative">
          <Puzzle onSolved={handlePuzzleSolved} />
          

        </div>
      )}
      
      <Popup 
        isVisible={showPopup} 
        onComplete={handlePopupComplete} 
      />
      
      {showMainPage && <MainPage />}
    </div>
  );
};

export default Index;

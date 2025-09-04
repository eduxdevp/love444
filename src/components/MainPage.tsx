import { useState, useEffect } from 'react';
import PhotoSection from './PhotoSection';
import SongSection from './SongSection';
import ReasonsSection from './ReasonsSection';
import LetterSection from './LetterSection';

const MainPage = () => {
  const [typedText, setTypedText] = useState('');
  const [showContent, setShowContent] = useState(false);

  const [heartSnow, setHeartSnow] = useState<Array<{id: number, x: number, delay: number}>>([]);
  const fullText = 'Para mi amor';

  // Generate heart snow effect
  useEffect(() => {
    const hearts = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5
    }));
    setHeartSnow(hearts);
  }, []);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => setShowContent(true), 500);
      }
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen relative transition-colors duration-300">
      {/* Heart Snow Effect */}
      {heartSnow.map((heart) => (
        <div
          key={heart.id}
          className="fixed pointer-events-none text-2xl text-romantic-primary/30 animate-fall z-0"
          style={{
            left: `${heart.x}%`,
            animationDelay: `${heart.delay}s`,
            animationDuration: '8s'
          }}
        >
          💖
        </div>
      ))}
      
      {/* Fondo con gradiente romántico */}
      <div className="min-h-screen bg-gradient-to-br from-romantic-bg via-background to-romantic-light/20 dark:to-romantic-primary/10 relative z-10">

      
      {/* Header romántico con animaciones */}
      <header className="relative bg-gradient-to-r from-romantic-primary via-pink-500 to-romantic-medium py-12 sm:py-16 overflow-hidden animate-gradient-x z-10">
        {/* Partículas flotantes */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            >
              💕
            </div>
          ))}
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-romantic text-white mb-4 drop-shadow-lg animate-fade-in leading-tight">
            {typedText}
            <span className="animate-pulse">|</span>
          </h1>
        </div>
      </header>

      {/* Secciones principales con animaciones */}
      <div className={`transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <PhotoSection />
        </div>
        <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <SongSection />
        </div>
        <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <ReasonsSection />
        </div>
        <div className="animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <LetterSection />
        </div>
      </div>

      {/* Footer romántico con efectos */}
      <footer className="bg-gradient-to-r from-romantic-primary to-romantic-medium py-6 sm:py-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <p className="text-white text-base sm:text-lg font-romantic hover:scale-105 transition-transform duration-300 cursor-default">
            Hecho con mucho amor para ti
          </p>
        </div>
      </footer>
      </div>
    </div>
  );
};

export default MainPage;
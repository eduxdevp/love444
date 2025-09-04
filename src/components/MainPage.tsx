import PhotoSection from './PhotoSection';
import SongSection from './SongSection';
import ReasonsSection from './ReasonsSection';
import LetterSection from './LetterSection';

const MainPage = () => {
  return (
    <div className="min-h-screen">
      {/* Header romántico */}
      <header className="bg-gradient-to-r from-romantic-primary to-romantic-medium py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-7xl font-romantic text-white mb-4 drop-shadow-lg">
            Para mi amor ❤️
          </h1>
          <p className="text-xl text-white/90 font-light">
            Un lugar especial lleno de nuestros recuerdos y mi amor por ti
          </p>
        </div>
      </header>

      {/* Secciones principales */}
      <PhotoSection />
      <SongSection />
      <ReasonsSection />
      <LetterSection />

      {/* Footer romántico */}
      <footer className="bg-romantic-primary py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white text-lg font-romantic">
            Hecho con mucho amor para ti 💕
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MainPage;
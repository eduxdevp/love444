import { useEffect, useState } from 'react';

interface PopupProps {
  isVisible: boolean;
  onComplete: () => void;
}

const Popup = ({ isVisible, onComplete }: PopupProps) => {
  const [hearts, setHearts] = useState<Array<{ id: number; left: number; delay: number }>>([]);

  useEffect(() => {
    if (isVisible) {
      // Crear corazones que caen
      const heartArray = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 2
      }));
      setHearts(heartArray);

      // Completar después de 3 segundos
      const timer = setTimeout(() => {
        onComplete();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {/* Lluvia de corazones */}
      <div className="hearts-rain">
        {hearts.map((heart) => (
          <div
            key={heart.id}
            className="heart"
            style={{
              left: `${heart.left}%`,
              animationDelay: `${heart.delay}s`
            }}
          >
            💕
          </div>
        ))}
      </div>

      {/* Popup central */}
      <div className="fade-zoom-in bg-white rounded-2xl p-8 max-w-md mx-4 text-center shadow-2xl">
        <p className="text-2xl font-romantic text-romantic-primary leading-relaxed">
          epa, yo sabía que eras inteligente mi amor :3
        </p>
      </div>
    </div>
  );
};

export default Popup;
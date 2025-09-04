import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface PuzzleProps {
  onSolved: () => void;
}

const Puzzle = ({ onSolved }: PuzzleProps) => {
  const [answers, setAnswers] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: ''
  });
  
  const [solved, setSolved] = useState({
    q1: false,
    q2: false,
    q3: false,
    q4: false,
    q5: false
  });
  
  const [errors, setErrors] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: ''
  });

  const [shakeAnimation, setShakeAnimation] = useState({
    q1: false,
    q2: false,
    q3: false,
    q4: false,
    q5: false
  });

  const [celebrationAnimation, setCelebrationAnimation] = useState({
    q1: false,
    q2: false,
    q3: false,
    q4: false,
    q5: false
  });

  const [confetti, setConfetti] = useState<Array<{id: number, x: number, y: number}>>([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const solvedCount = Object.values(solved).filter(Boolean).length;
    setProgress((solvedCount / 5) * 100);
  }, [solved]);

  const questions = {
    q1: "¿Cuál es tu número favorito?",
    q2: "¿Cuál es tu anime favorito?",
    q3: "¿Cuál es tu película favorita?",
    q4: "¿Cuál es la mejor ciudad de Venezuela?",
    q5: "¿Me amas?"
  };

  const correctAnswers = {
    q1: ["4", "el 4"],
    q2: ["jujutsu kaisen", "jjk"],
    q3: ["enredados", "tangled"],
    q4: ["maracaibo"],
    q5: ["sí", "si", "te amo", "mucho", "obvio"]
  };

  const triggerConfetti = (questionKey: keyof typeof answers) => {
    const newConfetti = Array.from({ length: 10 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100,
      y: Math.random() * 100
    }));
    setConfetti(newConfetti);
    setTimeout(() => setConfetti([]), 1000);
  };

  const checkAnswer = (questionKey: keyof typeof answers, value: string) => {
    const normalizedValue = value.toLowerCase().trim();
    const isCorrect = correctAnswers[questionKey].some(answer => 
      answer.toLowerCase() === normalizedValue
    );

    if (isCorrect) {
      setSolved(prev => ({ ...prev, [questionKey]: true }));
      setErrors(prev => ({ ...prev, [questionKey]: '' }));
      
      // Trigger celebration animation
      setCelebrationAnimation(prev => ({ ...prev, [questionKey]: true }));
      triggerConfetti(questionKey);
      
      setTimeout(() => {
        setCelebrationAnimation(prev => ({ ...prev, [questionKey]: false }));
      }, 1000);
      
      // Check if all questions are solved
      const newSolved = { ...solved, [questionKey]: true };
      if (Object.values(newSolved).every(Boolean)) {
        setTimeout(onSolved, 1500);
      }
    } else {
      // Trigger shake animation
      setShakeAnimation(prev => ({ ...prev, [questionKey]: true }));
      setTimeout(() => {
        setShakeAnimation(prev => ({ ...prev, [questionKey]: false }));
      }, 500);
      
      let errorMessage;
      if (questionKey === 'q4') {
        errorMessage = "mi alma loca, la tenei fácil";
      } else if (questionKey === 'q5') {
        errorMessage = "pon si porfa";
      } else {
        errorMessage = "nopi, tai mal";
      }
      setErrors(prev => ({ ...prev, [questionKey]: errorMessage }));
    }
  };

  const handleSubmit = (questionKey: keyof typeof answers) => {
    const value = answers[questionKey];
    if (value.trim()) {
      checkAnswer(questionKey, value);
    }
  };

  const updateAnswer = (questionKey: keyof typeof answers, value: string) => {
    setAnswers(prev => ({ ...prev, [questionKey]: value }));
    setErrors(prev => ({ ...prev, [questionKey]: '' }));
  };

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 relative overflow-hidden transition-all duration-1000 ${
      Object.values(solved).filter(Boolean).length > 2 
        ? 'bg-gradient-to-br from-romantic-primary/20 via-pink-100 dark:via-pink-900/20 to-romantic-medium/20' 
        : 'bg-gradient-to-br from-romantic-bg to-background'
    }`}>
      {/* Confetti Effect */}
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute animate-confetti pointer-events-none text-2xl"
          style={{
            left: `${piece.x}%`,
            top: `${piece.y}%`,
          }}
        >
          🎉
        </div>
      ))}
      
      {/* Floating Hearts Effect */}
      {Object.values(solved).filter(Boolean).length > 0 && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={i}
              className="absolute animate-float text-romantic-primary/40"
              style={{
                left: `${10 + (i * 12)}%`,
                top: `${20 + (i % 3) * 25}%`,
                animationDelay: `${i * 0.5}s`,
                fontSize: '1.5rem'
              }}
            >
              💖
            </div>
          ))}
        </div>
      )}
      
      <div className="w-full max-w-4xl relative z-10">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-romantic-text">Progreso</span>
            <span className="text-sm font-medium text-romantic-text">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-romantic-primary to-romantic-medium h-3 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-romantic text-romantic-primary text-center mb-8 sm:mb-12 animate-fade-in px-4">
          Ánimo, está fácil. {'<3'}
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto px-4">
          {/* Pregunta 1 - Arriba izquierda */}
          <div className={`puzzle-box p-4 sm:p-6 transition-all duration-300 bg-gradient-to-br from-background to-romantic-bg border-2 border-romantic-light/50 dark:border-romantic-primary/30 hover:border-romantic-medium shadow-lg hover:shadow-xl dark:shadow-romantic-primary/10 rounded-2xl ${
            !solved.q1 ? 'animate-pulse-glow' : ''
          } ${
            shakeAnimation.q1 ? 'animate-shake' : ''
          } ${
            celebrationAnimation.q1 ? 'scale-105 shadow-lg' : ''
          }`}>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base text-romantic-text">{questions.q1}</h3>
            {!solved.q1 ? (
              <div className="space-y-2">
                <Input
                  value={answers.q1}
                  onChange={(e) => updateAnswer('q1', e.target.value)}
                  className="border-romantic-medium focus:ring-romantic-primary"
                  onKeyPress={(e) => e.key === 'Enter' && handleSubmit('q1')}
                />
                <Button 
                  onClick={() => handleSubmit('q1')}
                  className="w-full bg-romantic-primary hover:bg-romantic-medium"
                >
                  Responder
                </Button>
                {errors.q1 && (
                  <p className="text-romantic-primary text-sm">{errors.q1}</p>
                )}
              </div>
            ) : (
              <div className="text-center animate-fade-in">
                <div className="relative">
                  <span className="text-4xl animate-pulse">💖</span>
                  <div className="absolute -top-2 -right-2 animate-float">
                    <span className="text-sm">✨</span>
                  </div>
                </div>
                <p className="text-romantic-primary font-medium mt-2">¡Correcto!</p>
              </div>
            )}
          </div>

          {/* Pregunta 2 - Arriba derecha */}
          <div className={`puzzle-box p-4 sm:p-6 transition-all duration-300 bg-gradient-to-br from-background to-romantic-bg border-2 border-romantic-light/50 dark:border-romantic-primary/30 hover:border-romantic-medium shadow-lg hover:shadow-xl dark:shadow-romantic-primary/10 rounded-2xl ${
            !solved.q2 ? 'animate-pulse-glow' : ''
          } ${
            shakeAnimation.q2 ? 'animate-shake' : ''
          } ${
            celebrationAnimation.q2 ? 'scale-105 shadow-lg' : ''
          }`}>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base text-romantic-text">{questions.q2}</h3>
            {!solved.q2 ? (
              <div className="space-y-2">
                <Input
                  value={answers.q2}
                  onChange={(e) => updateAnswer('q2', e.target.value)}
                  className="border-romantic-medium focus:ring-romantic-primary"
                  onKeyPress={(e) => e.key === 'Enter' && handleSubmit('q2')}
                />
                <Button 
                  onClick={() => handleSubmit('q2')}
                  className="w-full bg-romantic-primary hover:bg-romantic-medium"
                >
                  Responder
                </Button>
                {errors.q2 && (
                  <p className="text-romantic-primary text-sm">{errors.q2}</p>
                )}
              </div>
            ) : (
              <div className="text-center animate-fade-in">
                <div className="relative">
                  <span className="text-4xl animate-pulse">💖</span>
                  <div className="absolute -top-2 -right-2 animate-float">
                    <span className="text-sm">✨</span>
                  </div>
                </div>
                <p className="text-romantic-primary font-medium mt-2">¡Correcto!</p>
              </div>
            )}
          </div>

          {/* Pregunta 5 - Centro (más grande) */}
          <div className={`md:col-span-2 puzzle-box puzzle-center p-6 sm:p-8 transition-all duration-300 bg-gradient-to-br from-romantic-primary to-romantic-medium dark:from-romantic-primary/80 dark:to-romantic-medium/80 rounded-2xl shadow-xl dark:shadow-romantic-primary/20 ${
            !solved.q5 ? 'animate-pulse-glow' : ''
          } ${
            shakeAnimation.q5 ? 'animate-shake' : ''
          } ${
            celebrationAnimation.q5 ? 'scale-105 shadow-lg' : ''
          }`}>
            <h3 className="font-romantic text-lg sm:text-2xl mb-4 sm:mb-6 text-white text-center">{questions.q5}</h3>
            {!solved.q5 ? (
              <div className="space-y-3 max-w-md mx-auto">
                <Input
                  value={answers.q5}
                  onChange={(e) => updateAnswer('q5', e.target.value)}
                  className="border-white focus:ring-white text-center text-lg"
                  onKeyPress={(e) => e.key === 'Enter' && handleSubmit('q5')}
                />
                <Button 
                  onClick={() => handleSubmit('q5')}
                  className="w-full bg-white text-romantic-medium hover:bg-gray-100"
                >
                  Responder
                </Button>
                {errors.q5 && (
                  <p className="text-white text-sm text-center">{errors.q5}</p>
                )}
              </div>
            ) : (
              <div className="text-center">
                <span className="text-4xl">💕</span>
                <p className="text-white font-medium text-lg">yo sabía jejej</p>
              </div>
            )}
          </div>

          {/* Pregunta 3 - Abajo izquierda */}
          <div className={`puzzle-box p-4 sm:p-6 transition-all duration-300 bg-gradient-to-br from-background to-romantic-bg border-2 border-romantic-light/50 dark:border-romantic-primary/30 hover:border-romantic-medium shadow-lg hover:shadow-xl dark:shadow-romantic-primary/10 rounded-2xl ${
            !solved.q3 ? 'animate-pulse-glow' : ''
          } ${
            shakeAnimation.q3 ? 'animate-shake' : ''
          } ${
            celebrationAnimation.q3 ? 'scale-105 shadow-lg' : ''
          }`}>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base text-romantic-text">{questions.q3}</h3>
            {!solved.q3 ? (
              <div className="space-y-2">
                <Input
                  value={answers.q3}
                  onChange={(e) => updateAnswer('q3', e.target.value)}
                  className="border-romantic-medium focus:ring-romantic-primary"
                  onKeyPress={(e) => e.key === 'Enter' && handleSubmit('q3')}
                />
                <Button 
                  onClick={() => handleSubmit('q3')}
                  className="w-full bg-romantic-primary hover:bg-romantic-medium"
                >
                  Responder
                </Button>
                {errors.q3 && (
                  <p className="text-romantic-primary text-sm">{errors.q3}</p>
                )}
              </div>
            ) : (
              <div className="text-center animate-fade-in">
                <div className="relative">
                  <span className="text-4xl animate-pulse">💖</span>
                  <div className="absolute -top-2 -right-2 animate-float">
                    <span className="text-sm">✨</span>
                  </div>
                </div>
                <p className="text-romantic-primary font-medium mt-2">¡Correcto!</p>
              </div>
            )}
          </div>

          {/* Pregunta 4 - Abajo derecha */}
          <div className={`puzzle-box p-4 sm:p-6 transition-all duration-300 bg-gradient-to-br from-background to-romantic-bg border-2 border-romantic-light/50 dark:border-romantic-primary/30 hover:border-romantic-medium shadow-lg hover:shadow-xl dark:shadow-romantic-primary/10 rounded-2xl ${
            !solved.q4 ? 'animate-pulse-glow' : ''
          } ${
            shakeAnimation.q4 ? 'animate-shake' : ''
          } ${
            celebrationAnimation.q4 ? 'scale-105 shadow-lg' : ''
          }`}>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base text-romantic-text">{questions.q4}</h3>
            {!solved.q4 ? (
              <div className="space-y-2">
                <Input
                  value={answers.q4}
                  onChange={(e) => updateAnswer('q4', e.target.value)}
                  className="border-romantic-medium focus:ring-romantic-primary"
                  onKeyPress={(e) => e.key === 'Enter' && handleSubmit('q4')}
                />
                <Button 
                  onClick={() => handleSubmit('q4')}
                  className="w-full bg-romantic-primary hover:bg-romantic-medium"
                >
                  Responder
                </Button>
                {errors.q4 && (
                  <p className="text-romantic-primary text-sm">{errors.q4}</p>
                )}
              </div>
            ) : (
              <div className="text-center animate-fade-in">
                <div className="relative">
                  <span className="text-4xl animate-pulse">💖</span>
                  <div className="absolute -top-2 -right-2 animate-float">
                    <span className="text-sm">✨</span>
                  </div>
                </div>
                <p className="text-romantic-primary font-medium mt-2">¡Correcto!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Puzzle;
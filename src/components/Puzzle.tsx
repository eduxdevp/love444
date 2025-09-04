import { useState } from 'react';
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

  const checkAnswer = (questionKey: keyof typeof answers, value: string) => {
    const normalizedValue = value.toLowerCase().trim();
    const isCorrect = correctAnswers[questionKey].some(answer => 
      answer.toLowerCase() === normalizedValue
    );

    if (isCorrect) {
      setSolved(prev => ({ ...prev, [questionKey]: true }));
      setErrors(prev => ({ ...prev, [questionKey]: '' }));
      
      // Check if all questions are solved
      const newSolved = { ...solved, [questionKey]: true };
      if (Object.values(newSolved).every(Boolean)) {
        setTimeout(onSolved, 500);
      }
    } else {
      const errorMessage = questionKey === 'q4' 
        ? "mi alma loca, la tenei fácil" 
        : "tai mal";
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
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-romantic-bg to-white">
      <div className="w-full max-w-4xl">
        <h1 className="text-6xl font-romantic text-romantic-primary text-center mb-12">
          Resuelve este puzzle, mi amor ✨
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Pregunta 1 - Arriba izquierda */}
          <div className="puzzle-box p-6">
            <h3 className="font-semibold mb-4 text-romantic-text">{questions.q1}</h3>
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
              <div className="text-center">
                <span className="text-2xl">✅</span>
                <p className="text-romantic-primary font-medium">¡Correcto!</p>
              </div>
            )}
          </div>

          {/* Pregunta 2 - Arriba derecha */}
          <div className="puzzle-box p-6">
            <h3 className="font-semibold mb-4 text-romantic-text">{questions.q2}</h3>
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
              <div className="text-center">
                <span className="text-2xl">✅</span>
                <p className="text-romantic-primary font-medium">¡Correcto!</p>
              </div>
            )}
          </div>

          {/* Pregunta 5 - Centro (más grande) */}
          <div className="md:col-span-2 puzzle-box puzzle-center p-8">
            <h3 className="font-romantic text-2xl mb-6 text-white text-center">{questions.q5}</h3>
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
                <p className="text-white font-medium text-lg">¡Sabía que me amabas!</p>
              </div>
            )}
          </div>

          {/* Pregunta 3 - Abajo izquierda */}
          <div className="puzzle-box p-6">
            <h3 className="font-semibold mb-4 text-romantic-text">{questions.q3}</h3>
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
              <div className="text-center">
                <span className="text-2xl">✅</span>
                <p className="text-romantic-primary font-medium">¡Correcto!</p>
              </div>
            )}
          </div>

          {/* Pregunta 4 - Abajo derecha */}
          <div className="puzzle-box p-6">
            <h3 className="font-semibold mb-4 text-romantic-text">{questions.q4}</h3>
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
              <div className="text-center">
                <span className="text-2xl">✅</span>
                <p className="text-romantic-primary font-medium">¡Correcto!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Puzzle;
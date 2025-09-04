import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import letterTexture from '@/assets/letter-paper-texture.jpg';

const LetterSection = () => {
  const [isLetterOpen, setIsLetterOpen] = useState(false);

  const letterContent = `Mi amor querido,

Hay tantas cosas que quiero decirte y no sé por dónde empezar. Desde el momento en que llegaste a mi vida, todo cambió de la manera más hermosa posible.

Eres luz en mis días grises, calma en mis tormentas y alegría en mis momentos más felices. Tu presencia hace que todo tenga sentido, que cada día valga la pena vivir al máximo.

Me encanta la forma en que me miras, como si fuera la persona más importante del mundo. Me encanta tu risa, que es capaz de sanar cualquier herida en mi corazón. Me encanta tu inteligencia, que me desafía a ser mejor cada día.

No importa lo que el futuro nos depare, quiero que sepas que mi amor por ti es eterno, incondicional y verdadero. Eres mi persona favorita, mi compañera de aventuras, mi hogar.

Gracias por existir, por amarme y por hacer que cada día sea una nueva oportunidad de ser feliz.

Con todo mi amor,
Tu persona favorita ❤️`;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-romantic text-romantic-primary text-center mb-16">
          💌 Una carta para ti
        </h2>
        
        <div className="text-center">
          <div className="inline-block relative">
            <div className="bg-romantic-bg border-2 border-romantic-light rounded-2xl p-8 shadow-lg max-w-md">
              <div className="text-6xl mb-4">💌</div>
              <h3 className="text-2xl font-romantic text-romantic-primary mb-4">
                Carta de Amor
              </h3>
              <p className="text-romantic-text mb-6">
                He escrito algo especial para ti...
              </p>
              <Button
                onClick={() => setIsLetterOpen(true)}
                className="bg-romantic-primary hover:bg-romantic-medium text-white px-8 py-3 rounded-full text-lg"
              >
                Abrir Carta
              </Button>
            </div>
          </div>
        </div>

        {/* Modal de la carta */}
        {isLetterOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="letter-background rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative animate-in slide-in-from-bottom-4 duration-500 shadow-2xl border border-romantic-light">
              {/* Botón cerrar */}
              <button
                onClick={() => setIsLetterOpen(false)}
                className="absolute top-4 right-4 p-2 hover:bg-romantic-bg rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-romantic-text" />
              </button>

              {/* Contenido de la carta */}
              <div className="p-8 pt-12">
                {/* Decoración superior */}
                <div className="text-center mb-8">
                  <div className="text-4xl mb-2">💕</div>
                  <div className="w-24 h-1 bg-romantic-primary mx-auto rounded-full"></div>
                </div>

                {/* Texto de la carta */}
                <div className="space-y-6">
                  {letterContent.split('\n\n').map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-romantic-text leading-relaxed text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Decoración inferior */}
                <div className="text-center mt-8">
                  <div className="w-24 h-1 bg-romantic-primary mx-auto rounded-full mb-4"></div>
                  <div className="text-4xl">💖</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default LetterSection;
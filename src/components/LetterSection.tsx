import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import letterTexture from '@/assets/letter-paper-texture.jpg';

const LetterSection = () => {
  const [isLetterOpen, setIsLetterOpen] = useState(false);

  const letterContent = `Mi niña hermosa,

Hoy, 4 de septiembre de 2025, estás de cumple y es un día muy especial porque me hace recordar todo lo que hemos vivido, a pesar de tener malos momentos, lo único que pienso cuando pienso en ti es en todos esos momentos lindos que hemos vivido viendo series, jugando o haciendo cualquier cosa, saber que hay tantas cosas que me recuerdan a ti cuando voy por la calle manejando o simplemente viendo cualquier cosa en cualquier lugar, colores, personajes, canciones, cantantes, tantísimas cosas que me hacen acordarme de ti y sacarme una sonrisa.

Hoy se cumple el tercer año en el que paso un cumpleaños contigo por así decirlo, y me parece increíble porque ha pasado el tiempo demasiado rápido, sin embargo, no me quejo, quiero que pase el tiempo rápido para que cada vez esté más cerca el día en el que estemos juntos y podamos disfrutar de las cosas juntos.

A pesar de la distancia y de las tantas cosas que pueden pasar o que hayan pasado entre nosotros, quiero que sepas que te amo muchísimo y que estoy dispuesto a esforzarme y a esperar lo que sea necesario por ti, para estar contigo.

Te preparé este detalle con mucho amor, te deseo un feliz cumpleaños y que cumplas muchísimos más mi amor, se que estás enfermita pero espero este detalle te alegre al menos un poquito los días malos que estás pasando por estos momentos, y que cada vez que veas y leas todo esto que te preparé, te des cuenta de lo mucho que te quiero, te aprecio y te amo.

Feliz cumple mi niña, con amor, Edu <3.`;

  return (
    <section className="py-16 bg-background transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-romantic text-romantic-primary text-center mb-16">
          Cartita especial para ti, bonita.
        </h2>
        
        <div className="text-center">
          <div className="inline-block relative">
            <div className="bg-romantic-bg dark:bg-romantic-primary/10 border-2 border-romantic-light dark:border-romantic-primary/30 rounded-2xl p-8 shadow-lg dark:shadow-romantic-primary/20 max-w-md">
              <div className="text-6xl mb-4">💌</div>
              <h3 className="text-2xl font-romantic text-romantic-primary mb-4">
                Carta de Amor
              </h3>
              <p className="text-romantic-text mb-6">
                Carta con amor, hecha para mi amor.
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
          <div className="fixed inset-0 bg-black/20 dark:bg-black/40 flex items-center justify-center z-[99999] p-2 sm:p-4">
            <div 
              className="bg-rose-50 dark:bg-rose-900/20 rounded-2xl max-w-2xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto relative animate-in slide-in-from-bottom-4 duration-500 shadow-2xl"
              style={{
                backgroundImage: `url(${letterTexture}?v=${Date.now()})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlendMode: 'soft-light',
                border: '12px solid #fbb6ce'
              }}
            >
              {/* Botón cerrar */}
              <button
                onClick={() => setIsLetterOpen(false)}
                className="absolute top-4 right-4 p-2 hover:bg-romantic-bg rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-romantic-text" />
              </button>

              {/* Contenido de la carta */}
              <div 
                className="p-4 sm:p-8 pt-8 sm:pt-12 bg-white/90 dark:bg-background/90 rounded-xl m-2 sm:m-4 shadow-inner"
                style={{
                  backgroundImage: `url(${letterTexture}?v=${Date.now()})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundBlendMode: 'multiply'
                }}
              >
                {/* Decoración superior */}
                <div className="text-center mb-6 sm:mb-8">
                    <div className="text-3xl sm:text-4xl mb-2">💕</div>
                    <div className="w-20 sm:w-24 h-1 bg-rose-400 mx-auto rounded-full"></div>
                  </div>

                {/* Texto de la carta */}
                <div className="space-y-4 sm:space-y-6">
                  {letterContent.split('\n\n').map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-rose-800 leading-relaxed text-base sm:text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Decoración inferior */}
                <div className="text-center mt-6 sm:mt-8">
                    <div className="w-20 sm:w-24 h-1 bg-rose-400 mx-auto rounded-full mb-3 sm:mb-4"></div>
                    <div className="text-3xl sm:text-4xl">💖</div>
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
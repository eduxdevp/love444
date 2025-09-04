import { useState } from 'react';
import childhoodGirl from '@/assets/childhood-girl.jpg';
import childhoodBoy from '@/assets/childhood-boy.jpg';
import coupleDrawing from '@/assets/couple-drawing.jpg';

const PhotoSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const photos = [
    {
      image: childhoodGirl,
      text: "Esa niña linda estaría orgullosa de ser quien es hoy en día, te amo, mi amor.",
      imageLeft: true
    },
    {
      image: childhoodBoy,
      text: "Y este niño definitivamente estaría enamorado de ti de haberte conocido en ese momento, recuerda que cuando me tratas mal, tai maltratando a ese niñito cabezón y triste",
      imageLeft: false
    },
    {
      image: coupleDrawing,
      text: "El dibujito con el que más me esmeré en que me quedara bien para ti, y como dije en ese momento, te quiero, hermosa.",
      imageLeft: true
    }
  ];

  return (
    <section className="py-16 bg-romantic-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-romantic text-romantic-primary text-center mb-16">
          Fotos especiales
        </h2>
        
        <div className="space-y-16">
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                photo.imageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-8 lg:gap-12 group transition-all duration-700 hover:scale-105`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Imagen */}
              <div className="w-full lg:w-1/3 relative overflow-hidden">
                <div className={`transform transition-all duration-500 ${
                  hoveredIndex === index ? 'scale-110 rotate-1' : 'scale-100'
                }`}>
                  <img
                    src={photo.image}
                    alt={`Recuerdo ${index + 1}`}
                    className="photo-card w-full h-auto max-h-80 object-contain bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300"
                  />
                </div>
                {hoveredIndex === index && (
                  <div className="absolute inset-0 bg-gradient-to-t from-romantic-primary/20 to-transparent animate-fade-in pointer-events-none" />
                )}
              </div>
              
              {/* Texto */}
              <div className={`w-full lg:w-2/3 transform transition-all duration-500 ${
                hoveredIndex === index ? 'translate-y-[-10px]' : 'translate-y-0'
              }`}>
                <div className="relative">
                  {hoveredIndex === index && (
                    <div className="absolute -inset-4 bg-gradient-to-r from-romantic-primary/10 to-romantic-medium/10 rounded-lg animate-fade-in" />
                  )}
                  <p className="text-xl text-romantic-text leading-relaxed font-body relative z-10">
                    {photo.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoSection;
import childhoodGirl from '@/assets/childhood-girl.jpg';
import childhoodBoy from '@/assets/childhood-boy.jpg';
import coupleDrawing from '@/assets/couple-drawing.jpg';

const PhotoSection = () => {
  const photos = [
    {
      image: childhoodGirl,
      text: "Esa niña linda estaría orgullosa de ser quien es hoy en día, te amo, mi amor.",
      imageLeft: true
    },
    {
      image: childhoodBoy,
      text: "Y este niño definitivamente estaría enamorado de ti de haberte conocido en ese momento…",
      imageLeft: false
    },
    {
      image: coupleDrawing,
      text: "El dibujito con el que más me esmeré en que me quedara bien para ti…",
      imageLeft: true
    }
  ];

  return (
    <section className="py-16 bg-romantic-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-romantic text-romantic-primary text-center mb-16">
          📸 Nuestros recuerdos
        </h2>
        
        <div className="space-y-16">
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                photo.imageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-8 lg:gap-16`}
            >
              {/* Imagen */}
              <div className="w-full lg:w-2/5">
                <img
                  src={photo.image}
                  alt={`Recuerdo ${index + 1}`}
                  className="photo-card w-full h-80 object-cover"
                />
              </div>
              
              {/* Texto */}
              <div className="w-full lg:w-3/5">
                <p className="text-xl text-romantic-text leading-relaxed font-body">
                  {photo.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoSection;
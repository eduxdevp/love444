import { useState } from 'react';

const SongSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const songs = [
    {
      title: "Sweet / I Thought You Wanted to Dance - Tyler, The Creator",
      videoId: "ZKjIHQxG_3Q"
    },
    {
      title: "Melting - Kali Uchis",
      videoId: "PCQldI3q6yc"
    },
    {
      title: "Mi Bendición - Juan Luis Guerra",
      videoId: "LakJahiBl2Y"
    },
    {
      title: "I Wish You Roses - Kali Uchis",
      videoId: "-Y7zc0eO26k"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-romantic text-romantic-primary text-center mb-16">
          Canciones que me recuerdan a ti
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {songs.map((song, index) => (
            <div 
              key={index} 
              className={`song-card group transition-all duration-500 hover:scale-105 ${
                hoveredIndex === index ? 'z-10' : 'z-0'
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`relative h-56 rounded-lg overflow-hidden shadow-lg transition-all duration-300 ${
                hoveredIndex === index ? 'shadow-2xl transform rotate-1' : 'shadow-lg'
              }`}>
                <iframe
                  src={`https://www.youtube.com/embed/${song.videoId}`}
                  title={song.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className={`p-4 relative transition-all duration-300 ${
                hoveredIndex === index ? 'bg-gradient-to-r from-romantic-primary/5 to-romantic-medium/5' : ''
              }`}>
                {hoveredIndex === index && (
                  <div className="absolute inset-0 bg-gradient-to-t from-romantic-primary/10 to-transparent animate-fade-in rounded-b-lg" />
                )}
                <h3 className={`text-lg font-semibold text-romantic-text text-center relative z-10 transition-all duration-300 ${
                  hoveredIndex === index ? 'transform translate-y-[-2px] text-romantic-primary' : ''
                }`}>
                  {song.title}
                </h3>
                {hoveredIndex === index && (
                  <div className="flex justify-center mt-2 animate-fade-in">
                    <span className="text-romantic-primary animate-pulse">♪ ♫ ♪</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SongSection;
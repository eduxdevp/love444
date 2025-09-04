const SongSection = () => {
  const songs = [
    {
      title: "Perfect - Ed Sheeran",
      videoId: "2Vv-BfVoq4g"
    },
    {
      title: "All of Me - John Legend",
      videoId: "450p7goxZqg"
    },
    {
      title: "Thinking Out Loud - Ed Sheeran",
      videoId: "lp-EO5I60KA"
    },
    {
      title: "A Thousand Years - Christina Perri",
      videoId: "rtOvBOTyX00"
    },
    {
      title: "Make You Feel My Love - Adele",
      videoId: "0put0_a--Ng"
    },
    {
      title: "Can't Help Myself - Four Tops",
      videoId: "T6QKqFPRZSA"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-romantic text-romantic-primary text-center mb-16">
          🎶 Canciones que me recuerdan a ti
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {songs.map((song, index) => (
            <div key={index} className="song-card">
              <div className="relative h-56 rounded-lg overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${song.videoId}`}
                  title={song.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-romantic-text text-center">
                  {song.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SongSection;
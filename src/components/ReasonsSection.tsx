const ReasonsSection = () => {
  const reasons = [
    "Tu sonrisa ilumina mis días más oscuros",
    "Eres la persona más inteligente que conozco",
    "Tu corazón es tan grande como hermoso",
    "Me haces querer ser una mejor persona cada día",
    "Tu risa es mi sonido favorito en el mundo",
    "Eres mi lugar seguro en este mundo loco",
    "Tu forma de ver la vida me inspira constantemente",
    "Cada momento contigo se siente como magia",
    "Tu amor me da fuerzas para enfrentar cualquier cosa",
    "Simplemente eres perfecta tal como eres"
  ];

  return (
    <section className="py-16 bg-romantic-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-romantic text-romantic-primary text-center mb-16">
          💘 10 razones por las que te amo
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <ol className="space-y-6">
            {reasons.map((reason, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-romantic-primary text-white rounded-full flex items-center justify-center font-semibold">
                  {index + 1}
                </span>
                <p className="text-lg text-romantic-text leading-relaxed pt-1">
                  {reason}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;
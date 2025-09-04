const ReasonsSection = () => {
  const reasons = [
    "Por la manera en la que me haces ver la vida.",
    "Por estar siempre para mí.",
    "Por creer en mí.",
    "Por esa sonrisa hermosa que tienes.",
    "Por la manera y madurez con la que afrontas las cosas.",
    "Por esos ojitos lindos que tanto me gustan.",
    "Por tu sentido del humor único y especial.",
    "Por tu manera de querer y amar.",
    "Por decidir esperarme a pesar de todo.",
    "Y obvio, por ser perfecta tal como eres <3."
  ];

  return (
    <section className="py-16 bg-romantic-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-romantic text-romantic-primary text-center mb-16">
          10 razones por las que te amo
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
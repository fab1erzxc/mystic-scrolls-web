import { useScrollReveal } from '@/hooks/useScrollReveal';
import ritualCards from '@/assets/ritual-cards.jpg';
import ritualPentagram from '@/assets/ritual-pentagram.jpg';
import ritualCandles from '@/assets/ritual-candles.jpg';
import ritualTarot from '@/assets/ritual-tarot.jpg';

const rituals = [
  {
    image: ritualCards,
    title: "Divination Reading",
    description: "Sacred card reading with crystals and herbs to reveal hidden truths and future paths."
  },
  {
    image: ritualPentagram,
    title: "Protection Ritual",
    description: "Powerful pentagram ceremony for spiritual protection and energy cleansing."
  },
  {
    image: ritualCandles,
    title: "Healing Circle",
    description: "Candlelight healing ritual with natural herbs for emotional and spiritual restoration."
  },
  {
    image: ritualTarot,
    title: "Love Attraction",
    description: "Ancient tarot ceremony with golden elements to attract love and strengthen relationships."
  }
];

const RitualGallery = () => {
  const galleryRef = useScrollReveal<HTMLElement>();

  return (
    <section ref={galleryRef} className="mystical-section py-16 px-4 scroll-reveal">
      <div className="max-w-4xl mx-auto">
        <h2 className="mystical-heading text-3xl md:text-4xl text-center text-primary mb-12">
          Sacred Rituals & Ceremonies
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rituals.map((ritual, index) => (
            <div 
              key={index}
              className="group mystical-card p-6 rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-mystical"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img 
                  src={ritual.image} 
                  alt={ritual.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <h3 className="mystical-text text-xl font-semibold text-primary mb-2">
                {ritual.title}
              </h3>
              
              <p className="mystical-text text-muted-foreground leading-relaxed">
                {ritual.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RitualGallery;
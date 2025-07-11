import { useScrollReveal } from '@/hooks/useScrollReveal';

const rituals = [
  {
    image: "/lovable-uploads/2470b693-1d8c-4bc3-a797-539aaa4ff23c.png",
    title: "Divination Reading",
    description: "Sacred card reading with crystals and herbs to reveal hidden truths and future paths."
  },
  {
    image: "/lovable-uploads/33721e5a-a118-40f4-a342-a4c0f9523f5e.png",
    title: "Protection Ritual",
    description: "Powerful pentagram ceremony for spiritual protection and energy cleansing."
  },
  {
    image: "/lovable-uploads/a56adfb8-98ca-4daf-9a57-98e06e027d38.png",
    title: "Healing Circle",
    description: "Candlelight healing ritual with natural herbs for emotional and spiritual restoration."
  },
  {
    image: "/lovable-uploads/1e4c10e8-3bfb-457e-8af1-b23d9c656750.png",
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
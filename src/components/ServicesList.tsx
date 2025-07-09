import { Star, Heart, Shield, Coins } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServicesList = () => {
  const sectionRef = useScrollReveal<HTMLElement>();
  const titleRef = useScrollReveal<HTMLHeadingElement>();

  const services: Service[] = [
    {
      icon: <Star className="w-8 h-8 text-primary mystical-float" />,
      title: "Tarot card reading",
      description: "Discover the secrets of the past, present and future through ancient Tarot cards"
    },
    {
      icon: <Heart className="w-8 h-8 text-primary mystical-float-delayed" />,
      title: "Love magic",
      description: "I will return love, strengthen relationships, attract a soul mate"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary mystical-float" />,
      title: "Removal of negativity",
      description: "I will protect you from enemies, remove damage and the evil eye, cleanse your energy"
    },
    {
      icon: <Coins className="w-8 h-8 text-primary mystical-float-delayed" />,
      title: "Attracting good luck",
      description: "I will open money channels, attract success in business"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-16 px-4 mystical-section scroll-reveal"
    >
      <h2 
        ref={titleRef}
        className="mystical-heading text-3xl md:text-4xl text-center mb-12 text-primary scroll-reveal-scale"
      >
        My services
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {services.map((service, index) => {
          const cardRef = useScrollReveal<HTMLDivElement>();
          return (
            <div 
              key={index}
              ref={cardRef}
              className={`mystical-border bg-card p-6 text-center mystical-glow hover:scale-105 transition-all duration-300 scroll-reveal delay-${index + 1}`}
            >
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              
              <h3 className="mystical-heading text-xl md:text-2xl mb-4 text-primary">
                {service.title}
              </h3>
              
              <p className="mystical-text text-card-foreground">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesList;
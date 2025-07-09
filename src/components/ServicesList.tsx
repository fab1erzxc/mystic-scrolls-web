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
      title: "Гадание на картах Таро",
      description: "Откройте тайны прошлого, настоящего и будущего через древние карты Таро"
    },
    {
      icon: <Heart className="w-8 h-8 text-primary mystical-float-delayed" />,
      title: "Любовная магия",
      description: "Верну любовь, укреплю отношения, привлеку вторую половинку"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary mystical-float" />,
      title: "Снятие негатива",
      description: "Защищу от врагов, сниму порчу и сглаз, очищу энергетику"
    },
    {
      icon: <Coins className="w-8 h-8 text-primary mystical-float-delayed" />,
      title: "Привлечение удачи",
      description: "Открою денежные каналы, привлеку успех в делах и бизнесе"
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
        Мои услуги
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
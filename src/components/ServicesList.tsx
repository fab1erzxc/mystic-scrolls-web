import { Star, Heart, Shield, Coins } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServicesList = () => {
  const services: Service[] = [
    {
      icon: <Star className="w-8 h-8 text-primary" />,
      title: "Гадание на картах Таро",
      description: "Откройте тайны прошлого, настоящего и будущего через древние карты Таро"
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Любовная магия",
      description: "Верну любовь, укреплю отношения, привлеку вторую половинку"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Снятие негатива",
      description: "Защищу от врагов, сниму порчу и сглаз, очищу энергетику"
    },
    {
      icon: <Coins className="w-8 h-8 text-primary" />,
      title: "Привлечение удачи",
      description: "Открою денежные каналы, привлеку успех в делах и бизнесе"
    }
  ];

  return (
    <section className="py-12 px-4">
      <h2 className="mystical-heading text-3xl md:text-4xl text-center mb-12 text-primary">
        Мои услуги
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="mystical-border bg-card p-6 text-center mystical-glow hover:scale-105 transition-all duration-300"
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
        ))}
      </div>
    </section>
  );
};

export default ServicesList;
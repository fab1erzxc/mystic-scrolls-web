import { Award, Users, Clock, Shield } from 'lucide-react';

const WhyChooseMe = () => {
  const advantages = [
    {
      icon: <Award className="w-12 h-12 text-primary" />,
      title: "25+ лет опыта",
      description: "Потомственная ясновидящая в 3-м поколении"
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "1000+ довольных клиентов",
      description: "Помогла решить проблемы в семье и бизнесе"
    },
    {
      icon: <Clock className="w-12 h-12 text-primary" />,
      title: "Быстрый результат",
      description: "Первые изменения уже через 3-7 дней"
    },
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Гарантия качества",
      description: "Работаю до получения результата"
    }
  ];

  return (
    <section className="py-12 px-4 bg-muted">
      <h2 className="mystical-heading text-3xl md:text-4xl text-center mb-12 text-primary">
        Почему выбирают меня?
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {advantages.map((advantage, index) => (
          <div key={index} className="text-center">
            <div className="flex justify-center mb-4">
              {advantage.icon}
            </div>
            
            <h3 className="mystical-heading text-xl md:text-2xl mb-4 text-primary">
              {advantage.title}
            </h3>
            
            <p className="mystical-text text-muted-foreground">
              {advantage.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseMe;
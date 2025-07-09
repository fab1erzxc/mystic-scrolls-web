import { Award, Users, Clock, Shield } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const WhyChooseMe = () => {
  const sectionRef = useScrollReveal<HTMLElement>();
  const titleRef = useScrollReveal<HTMLHeadingElement>();

  const advantages = [
    {
      icon: <Award className="w-12 h-12 text-primary mystical-float" />,
      title: "25+ лет опыта",
      description: "Потомственная ясновидящая в 3-м поколении"
    },
    {
      icon: <Users className="w-12 h-12 text-primary mystical-float-delayed" />,
      title: "1000+ довольных клиентов",
      description: "Помогла решить проблемы в семье и бизнесе"
    },
    {
      icon: <Clock className="w-12 h-12 text-primary mystical-float" />,
      title: "Быстрый результат",
      description: "Первые изменения уже через 3-7 дней"
    },
    {
      icon: <Shield className="w-12 h-12 text-primary mystical-float-delayed" />,
      title: "Гарантия качества",
      description: "Работаю до получения результата"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-16 px-4 mystical-section scroll-reveal"
      style={{
        background: 'linear-gradient(135deg, hsl(var(--muted)) 0%, hsl(var(--background)) 100%)',
      }}
    >
      <h2 
        ref={titleRef}
        className="mystical-heading text-3xl md:text-4xl text-center mb-12 text-primary scroll-reveal-scale"
      >
        Почему выбирают меня?
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {advantages.map((advantage, index) => {
          const cardRef = useScrollReveal<HTMLDivElement>();
          return (
            <div 
              key={index} 
              ref={cardRef}
              className={`text-center scroll-reveal delay-${index + 1}`}
            >
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
          );
        })}
      </div>
    </section>
  );
};

export default WhyChooseMe;
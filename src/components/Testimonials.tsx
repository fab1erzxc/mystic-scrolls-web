import { Star, Quote } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface Testimonial {
  name: string;
  text: string;
  rating: number;
}

const Testimonials = () => {
  const sectionRef = useScrollReveal<HTMLElement>();
  const titleRef = useScrollReveal<HTMLHeadingElement>();

  const testimonials: Testimonial[] = [
    {
      name: "Мария, 42 года",
      text: "Елена Владимировна помогла мне вернуть любовь в семью. Муж стал внимательнее, дети послушнее. Рекомендую всем!",
      rating: 5
    },
    {
      name: "Светлана, 38 лет", 
      text: "Обратилась с проблемами на работе. После консультации все наладилось - получила повышение и прибавку к зарплате.",
      rating: 5
    },
    {
      name: "Анна, 45 лет",
      text: "Долго мучилась от негативного воздействия. Елена Владимировна сняла порчу, теперь жизнь изменилась к лучшему.",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star 
        key={index} 
        className={`w-4 h-4 ${index < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-400'} mystical-float`}
      />
    ));
  };

  return (
    <section 
      ref={sectionRef}
      className="py-16 px-4 mystical-section scroll-reveal"
    >
      <h2 
        ref={titleRef}
        className="mystical-heading text-3xl md:text-4xl text-center mb-12 text-primary scroll-reveal-scale"
      >
        Отзывы клиентов
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => {
          const cardRef = useScrollReveal<HTMLDivElement>();
          return (
            <div 
              key={index}
              ref={cardRef}
              className={`mystical-border bg-card p-6 relative mystical-glow hover:scale-105 transition-all duration-300 scroll-reveal delay-${index + 1}`}
            >
              <Quote className="w-8 h-8 text-primary opacity-50 mb-4 mystical-float" />
              
              <p className="mystical-text text-card-foreground mb-6 text-sm md:text-base">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center justify-between">
                <span className="mystical-heading text-primary text-sm">
                  {testimonial.name}
                </span>
                
                <div className="flex gap-1">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
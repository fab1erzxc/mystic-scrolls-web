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
      name: "Maria, 42 years old",
      text: "Elena Vladimirovna helped me bring love back to my family. My husband became more attentive, my children more obedient. I recommend her to everyone!",
      rating: 5
    },
    {
      name: "Svetlana, 38 years old", 
      text: "I had problems at work. After the consultation, everything worked out - I got a promotion and a raise.",
      rating: 5
    },
    {
      name: "Anna, 45 years old",
      text: "I suffered from a negative influence for a long time. Elena Vladimirovna removed the curse, now my life has changed for the better.",
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
        Client testimonials
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
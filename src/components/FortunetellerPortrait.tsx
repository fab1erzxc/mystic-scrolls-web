import fortuneTellerPortrait from '@/assets/main-portrait.jpg';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface FortunetellerPortraitProps {
  name: string;
  description: string;
}

const FortunetellerPortrait = ({ name, description }: FortunetellerPortraitProps) => {
  const sectionRef = useScrollReveal<HTMLElement>();
  const imageRef = useScrollReveal<HTMLDivElement>();
  const nameRef = useScrollReveal<HTMLHeadingElement>();
  const descriptionRef = useScrollReveal<HTMLParagraphElement>();

  return (
    <section 
      ref={sectionRef}
      className="flex flex-col items-center py-12 px-4 mystical-section scroll-reveal"
    >
      <div 
        ref={imageRef}
        className="mystical-border mystical-glow mystical-pulse mb-8 max-w-sm scroll-reveal-scale"
      >
        <img 
          src={fortuneTellerPortrait} 
          alt={name}
          className="w-full h-auto rounded-lg"
        />
      </div>
      
      <div className="text-center max-w-2xl">
        <h2 
          ref={nameRef}
          className="mystical-heading text-2xl md:text-3xl mb-6 text-primary scroll-reveal-left delay-1"
        >
          {name}
        </h2>
        
        <p 
          ref={descriptionRef}
          className="mystical-text text-base md:text-lg leading-relaxed text-foreground scroll-reveal-right delay-2"
        >
          {description}
        </p>
      </div>
    </section>
  );
};

export default FortunetellerPortrait;
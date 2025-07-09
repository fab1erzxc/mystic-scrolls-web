import mysticalBorder from '@/assets/mystical-border.png';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface MysticalHeaderProps {
  title: string;
  subtitle: string;
}

const MysticalHeader = ({ title, subtitle }: MysticalHeaderProps) => {
  const headerRef = useScrollReveal<HTMLElement>();
  const titleRef = useScrollReveal<HTMLHeadingElement>();
  const subtitleRef = useScrollReveal<HTMLParagraphElement>();

  return (
    <header ref={headerRef} className="text-center py-8 px-4 relative mystical-section scroll-reveal">
      <div className="mb-6 mystical-float">
        <img 
          src={mysticalBorder} 
          alt="Mystical border" 
          className="w-full max-w-md mx-auto h-16 object-cover opacity-60"
        />
      </div>
      
      <h1 
        ref={titleRef}
        className="mystical-heading text-4xl md:text-5xl lg:text-6xl mb-4 text-primary scroll-reveal-scale delay-1"
      >
        {title}
      </h1>
      
      <p 
        ref={subtitleRef}
        className="mystical-text text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 max-w-2xl mx-auto scroll-reveal delay-2"
      >
        {subtitle}
      </p>
      
      <div className="mb-6 mystical-float-delayed">
        <img 
          src={mysticalBorder} 
          alt="Mystical border" 
          className="w-full max-w-md mx-auto h-16 object-cover opacity-60 rotate-180"
        />
      </div>
    </header>
  );
};

export default MysticalHeader;
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
    <header ref={headerRef} className="text-center py-8 relative mystical-section scroll-reveal w-full">
      <div className="relative w-full">
        {/* Background mystical border */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none w-full">
          <img 
            src={mysticalBorder} 
            alt="Mystical border background" 
            className="w-full h-20 md:h-24 object-cover object-center"
          />
        </div>
        
        <div className="relative z-10 px-4 max-w-4xl mx-auto">
          <h1 
            ref={titleRef}
            className="mystical-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 text-primary scroll-reveal-scale delay-1"
          >
            {title}
          </h1>
          
          <p 
            ref={subtitleRef}
            className="mystical-text text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground mb-6 max-w-2xl mx-auto scroll-reveal delay-2"
          >
            {subtitle}
          </p>
        </div>
      </div>
    </header>
  );
};

export default MysticalHeader;
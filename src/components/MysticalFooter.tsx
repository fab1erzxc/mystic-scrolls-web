import { Clock, MapPin, Phone } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const MysticalFooter = () => {
  const footerRef = useScrollReveal<HTMLElement>();

  return (
    <footer 
      ref={footerRef}
      className="bg-card py-8 px-4 mystical-section scroll-reveal"
      style={{
        background: 'linear-gradient(135deg, hsl(var(--card)) 0%, hsl(var(--background)) 100%)',
        borderTop: '1px solid hsl(var(--border))',
      }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-5 h-5 text-primary mystical-float" />
              <span className="mystical-heading text-primary">Working hours</span>
            </div>
            <p className="mystical-text text-card-foreground text-sm">
              Daily from 9:00 to 22:00
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-5 h-5 text-primary mystical-float-delayed" />
              <span className="mystical-heading text-primary">Location</span>
            </div>
            <p className="mystical-text text-card-foreground text-sm">
              Online and offline consultations
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-2">
              <Phone className="w-5 h-5 text-primary mystical-float" />
              <span className="mystical-heading text-primary">Contacts</span>
            </div>
            <p className="mystical-text text-card-foreground text-sm">
              Communication only via WhatsApp
            </p>
          </div>
        </div>
        
        <div className="text-center mt-8 pt-8 border-t border-border">
          <p className="mystical-text text-muted-foreground text-sm">
            © 2024 Hereditary Clairvoyant. I will help you find answers to important questions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default MysticalFooter;
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
              <span className="mystical-heading text-primary">Время работы</span>
            </div>
            <p className="mystical-text text-card-foreground text-sm">
              Ежедневно с 9:00 до 22:00
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-5 h-5 text-primary mystical-float-delayed" />
              <span className="mystical-heading text-primary">Локация</span>
            </div>
            <p className="mystical-text text-card-foreground text-sm">
              Консультации онлайн и офлайн
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-2">
              <Phone className="w-5 h-5 text-primary mystical-float" />
              <span className="mystical-heading text-primary">Контакты</span>
            </div>
            <p className="mystical-text text-card-foreground text-sm">
              Связь только через WhatsApp
            </p>
          </div>
        </div>
        
        <div className="text-center mt-8 pt-8 border-t border-border">
          <p className="mystical-text text-muted-foreground text-sm">
            © 2024 Наследственная Ясновидящая. Помогу найти ответы на важные вопросы.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default MysticalFooter;
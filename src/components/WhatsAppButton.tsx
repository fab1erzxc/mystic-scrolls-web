import { MessageCircle } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

const WhatsAppButton = ({ phoneNumber, message = "Здравствуйте! Хочу записаться на консультацию" }: WhatsAppButtonProps) => {
  const sectionRef = useScrollReveal<HTMLDivElement>();
  const titleRef = useScrollReveal<HTMLHeadingElement>();
  const buttonRef = useScrollReveal<HTMLButtonElement>();
  const textRef = useScrollReveal<HTMLParagraphElement>();

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div 
      ref={sectionRef}
      className="text-center py-16 px-4 mystical-section scroll-reveal"
    >
      <h2 
        ref={titleRef}
        className="mystical-heading text-2xl md:text-3xl mb-8 text-primary scroll-reveal-scale"
      >
        Записаться на консультацию
      </h2>
      
      <button 
        ref={buttonRef}
        onClick={handleClick}
        className="whatsapp-button flex items-center justify-center gap-3 mx-auto text-lg md:text-xl mystical-pulse scroll-reveal delay-1"
      >
        <MessageCircle className="w-6 h-6 mystical-float" />
        Написать в WhatsApp
      </button>
      
      <p 
        ref={textRef}
        className="mystical-text text-muted-foreground mt-6 text-sm md:text-base scroll-reveal delay-2"
      >
        Отвечаю быстро, консультации проводятся онлайн и офлайн
      </p>
    </div>
  );
};

export default WhatsAppButton;
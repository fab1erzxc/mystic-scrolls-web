import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

const WhatsAppButton = ({ phoneNumber, message = "Здравствуйте! Хочу записаться на консультацию" }: WhatsAppButtonProps) => {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="text-center py-12 px-4">
      <h2 className="mystical-heading text-2xl md:text-3xl mb-8 text-primary">
        Записаться на консультацию
      </h2>
      
      <button 
        onClick={handleClick}
        className="whatsapp-button flex items-center justify-center gap-3 mx-auto text-lg md:text-xl"
      >
        <MessageCircle className="w-6 h-6" />
        Написать в WhatsApp
      </button>
      
      <p className="mystical-text text-muted-foreground mt-6 text-sm md:text-base">
        Отвечаю быстро, консультации проводятся онлайн и офлайн
      </p>
    </div>
  );
};

export default WhatsAppButton;
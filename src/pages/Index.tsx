import MysticalHeader from '@/components/MysticalHeader';
import FortunetellerPortrait from '@/components/FortunetellerPortrait';
import ServicesList from '@/components/ServicesList';
import RitualGallery from '@/components/RitualGallery';
import WhyChooseMe from '@/components/WhyChooseMe';
import Testimonials from '@/components/Testimonials';
import WhatsAppButton from '@/components/WhatsAppButton';
import MysticalFooter from '@/components/MysticalFooter';
import mysticalBackground from '@/assets/mystical-background.jpg';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Background image */}
      <div 
        className="fixed inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `url(${mysticalBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Content with flowing sections */}
      <div className="relative z-10">
        <MysticalHeader 
          title="HEREDITARY CLAIRVOYANT"
          subtitle="FORTUNE TELLER • PSYCHIC • MEDIUM • HEALER"
        />
        
        <FortunetellerPortrait 
          name="Diana the Fortune Teller"
          description="A hereditary clairvoyant with over 25 years of experience helping people find answers to life's most important questions. I work with Tarot cards, runes, crystals. I perform love magic rituals, remove negative influences, attract good luck and well-being."
        />
        
        <ServicesList />
        
        <RitualGallery />
        
        <WhyChooseMe />
        
        <Testimonials />
        
        <WhatsAppButton 
          phoneNumber="79001234567"
          message="Hello! I am interested in a consultation with a clairvoyant. When can I make an appointment?"
        />
        
        <MysticalFooter />
      </div>
    </div>
  );
};

export default Index;
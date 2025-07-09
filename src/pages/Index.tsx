import MysticalHeader from '@/components/MysticalHeader';
import FortunetellerPortrait from '@/components/FortunetellerPortrait';
import ServicesList from '@/components/ServicesList';
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
          title="НАСЛЕДСТВЕННАЯ ЯСНОВИДЯЩАЯ"
          subtitle="ГАДАЛКА • ЭКСТРАСЕНС • МЕДИУМ • ЦЕЛИТЕЛЬНИЦА"
        />
        
        <FortunetellerPortrait 
          name="Елена Владимировна"
          description="Потомственная ясновидящая в 3-м поколении. Более 25 лет помогаю людям найти ответы на самые важные вопросы жизни. Работаю с картами Таро, рунами, кристаллами. Провожу ритуалы любовной магии, снимаю негативные воздействия, привлекаю удачу и благополучие."
        />
        
        <ServicesList />
        
        <WhyChooseMe />
        
        <Testimonials />
        
        <WhatsAppButton 
          phoneNumber="79001234567"
          message="Здравствуйте! Меня интересует консультация ясновидящей. Когда можно записаться?"
        />
        
        <MysticalFooter />
      </div>
    </div>
  );
};

export default Index;
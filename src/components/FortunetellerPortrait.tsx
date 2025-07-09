import fortuneTellerPortrait from '@/assets/fortune-teller-portrait.jpg';

interface FortunetellerPortraitProps {
  name: string;
  description: string;
}

const FortunetellerPortrait = ({ name, description }: FortunetellerPortraitProps) => {
  return (
    <section className="flex flex-col items-center py-8 px-4">
      <div className="mystical-border mystical-glow mb-8 max-w-sm">
        <img 
          src={fortuneTellerPortrait} 
          alt={name}
          className="w-full h-auto rounded-lg"
        />
      </div>
      
      <div className="text-center max-w-2xl">
        <h2 className="mystical-heading text-2xl md:text-3xl mb-6 text-primary">
          {name}
        </h2>
        
        <p className="mystical-text text-base md:text-lg leading-relaxed text-foreground">
          {description}
        </p>
      </div>
    </section>
  );
};

export default FortunetellerPortrait;
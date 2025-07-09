import mysticalBorder from '@/assets/mystical-border.png';

interface MysticalHeaderProps {
  title: string;
  subtitle: string;
}

const MysticalHeader = ({ title, subtitle }: MysticalHeaderProps) => {
  return (
    <header className="text-center py-8 px-4 relative">
      <div className="mb-6">
        <img 
          src={mysticalBorder} 
          alt="Mystical border" 
          className="w-full max-w-md mx-auto h-16 object-cover opacity-60"
        />
      </div>
      
      <h1 className="mystical-heading text-4xl md:text-5xl lg:text-6xl mb-4 text-primary">
        {title}
      </h1>
      
      <p className="mystical-text text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 max-w-2xl mx-auto">
        {subtitle}
      </p>
      
      <div className="mb-6">
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
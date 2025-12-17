import React from 'react';
import { Star } from 'lucide-react';

interface MarqueeProps {
  text: string;
  bgColor?: string;
  textColor?: string;
  rotate?: boolean;
}

const Marquee: React.FC<MarqueeProps> = ({ 
  text, 
  bgColor = 'bg-pop-coral', 
  textColor = 'text-white',
  rotate = false
}) => {
  return (
    <div className={`w-full overflow-hidden py-4 ${bgColor} ${textColor} ${rotate ? '-rotate-1 md:-rotate-2 scale-105 transform origin-center my-12 border-y-2 border-flat-black' : ''}`}>
      <div className="whitespace-nowrap flex animate-infinite-scroll items-center">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center mx-4">
            <span className="text-4xl md:text-6xl font-black uppercase tracking-tight mx-4">
              {text}
            </span>
            <Star className="w-8 h-8 fill-current" strokeWidth={0} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
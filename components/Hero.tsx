import React, { useRef, useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  const phrases = [
    "DIGITAL REALITY.",
    "SMART SYSTEMS.",
    "NEXT-GEN TECH."
  ];

  // Mouse tracking for grid highlight
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  // Typewriter Effect
  useEffect(() => {
    const currentPhrase = phrases[textIndex];
    const typeSpeed = isDeleting ? 50 : 100;
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentPhrase.substring(0, displayText.length + 1));
        if (displayText.length === currentPhrase.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayText(currentPhrase.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  return (
    <section 
      id="hero"
      ref={containerRef}
      className="min-h-screen flex flex-col justify-center relative pt-20 px-6 md:px-12 bg-pastel-peach text-flat-black overflow-hidden"
    >
      
      {/* Base Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 animate-grid-drift"
        style={{
          backgroundImage: 'radial-gradient(#1a1a1a 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      />

      {/* Interactive Highlight Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-100 transition-opacity duration-300 animate-grid-drift"
        style={{
          backgroundImage: 'radial-gradient(#FF6B6B 2px, transparent 2px)',
          backgroundSize: '20px 20px',
          maskImage: `radial-gradient(circle 250px at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
          WebkitMaskImage: `radial-gradient(circle 250px at ${mousePos.x}px ${mousePos.y}px, black, transparent)`
        }}
      />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Speech Bubble */}
        <div className="animate-bounce-in mb-8 inline-block relative z-20">
          <div className="relative drop-shadow-[5px_5px_0px_#1a1a1a] transition-all duration-300 transform -rotate-2 hover:rotate-0">
            <div className="bg-white border-2 border-flat-black px-8 py-4 rounded-2xl relative">
              <span className="font-bold text-lg md:text-xl font-mono tracking-wider">
                HELLO, I'M SHUBHAM!
              </span>
            </div>
            <div className="absolute -bottom-3 left-8 w-6 h-6 bg-white border-b-2 border-r-2 border-flat-black transform rotate-45" />
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold leading-[0.9] tracking-tighter mb-12 min-h-[3ch] lg:min-h-[2.5ch]">
          <span className="block mb-2">CRAFTING</span>
          <span className="block text-pop-coral">
            {displayText}
            <span className="animate-blink ml-1 text-flat-black">|</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-3xl max-w-2xl font-medium leading-relaxed bg-white/50 backdrop-blur-sm p-4 rounded-xl border-2 border-flat-black/5 md:border-none md:p-0 md:bg-transparent md:backdrop-blur-none animate-fade-in">
          An <span className="squiggle-underline font-bold text-flat-black">AI & ML Enthusiast</span> turning data into intelligence and code into experiences.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float z-20">
        <a
          href="#work"
          className="p-5 bg-white border-2 border-flat-black rounded-full shadow-[4px_4px_0px_0px_#1a1a1a] block hover:translate-y-1 hover:shadow-none transition-all group"
        >
          <ArrowDown size={28} className="group-hover:text-pop-coral transition-colors" />
        </a>
      </div>

      <style>{`
        @keyframes grid-drift {
          0% { background-position: 0 0; }
          100% { background-position: 20px 20px; }
        }
        .animate-grid-drift {
          animation: grid-drift 3s linear infinite;
        }
        @keyframes bounce-in {
          0% { transform: scale(0.8); opacity: 0; }
          60% { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(1); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translate(-50%, 0); }
          50% { transform: translate(-50%, -10px); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-bounce-in { animation: bounce-in 0.6s ease-out forwards; }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-blink { animation: blink 1s step-end infinite; }
      `}</style>
    </section>
  );
};

export default Hero;

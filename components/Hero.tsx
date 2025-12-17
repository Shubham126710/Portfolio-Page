import React, { useRef, useEffect, useState } from 'react';
import { ArrowDown, Star, Code, Cpu } from 'lucide-react';

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

  // Mouse tracking for grid and parallax
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

  // Calculate parallax offsets (subtle movement)
  // Default to 0 if container ref isn't ready, centered roughly
  const centerX = containerRef.current ? containerRef.current.clientWidth / 2 : 0;
  const centerY = containerRef.current ? containerRef.current.clientHeight / 2 : 0;
  
  const moveX = (factor: number) => (mousePos.x - centerX) * factor;
  const moveY = (factor: number) => (mousePos.y - centerY) * factor;

  return (
    <section 
      id="hero"
      ref={containerRef}
      className="min-h-screen flex flex-col justify-center relative pt-20 px-6 md:px-12 bg-pastel-peach text-flat-black overflow-hidden perspective-1000"
    >
      
      {/* Base Grid - Moving automatically */}
      <div className="absolute inset-0 pointer-events-none opacity-20 animate-grid-drift" 
           style={{
             backgroundImage: 'radial-gradient(#1a1a1a 1px, transparent 1px)',
             backgroundSize: '20px 20px'
           }}>
      </div>
      
      {/* Interactive Highlight Grid - Follows Mouse */}
      <div className="absolute inset-0 pointer-events-none opacity-100 transition-opacity duration-300 animate-grid-drift" 
           style={{
             backgroundImage: 'radial-gradient(#FF6B6B 2px, transparent 2px)',
             backgroundSize: '20px 20px',
             // We use a mask to only show this grid around the mouse
             maskImage: `radial-gradient(circle 250px at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
             WebkitMaskImage: `radial-gradient(circle 250px at ${mousePos.x}px ${mousePos.y}px, black, transparent)`
           }}>
      </div>

      {/* --- Dynamic Background Shapes (Parallax) --- */}
      
      {/* Top Right: Spinning Star Outline */}
      <div 
        className="absolute top-[15%] right-[10%] opacity-80 hidden md:block transition-transform duration-100 ease-out"
        style={{ transform: `translate(${moveX(-0.02)}px, ${moveY(-0.02)}px)` }}
      >
        <Star 
          size={120} 
          strokeWidth={1} 
          className="text-flat-black fill-transparent animate-spin-slow-reverse"
        />
      </div>

      {/* Bottom Left: Solid Circle */}
      <div 
        className="absolute bottom-[20%] left-[5%] opacity-60 hidden md:block transition-transform duration-100 ease-out z-0"
        style={{ transform: `translate(${moveX(0.03)}px, ${moveY(0.03)}px)` }}
      >
        <div className="w-32 h-32 rounded-full bg-pastel-mint border-2 border-flat-black shadow-[4px_4px_0px_0px_#1a1a1a]"></div>
      </div>

      {/* Center Right: Floating Code Bracket */}
      <div 
        className="absolute top-[40%] right-[20%] opacity-40 hidden md:block transition-transform duration-100 ease-out"
        style={{ transform: `translate(${moveX(0.01)}px, ${moveY(0.01)}px) rotate(15deg)` }}
      >
        <Code size={180} strokeWidth={1.5} className="text-pop-coral" />
      </div>

      {/* Top Left: CPU Icon (Small) */}
      <div 
        className="absolute top-[20%] left-[30%] opacity-20 hidden md:block transition-transform duration-100 ease-out"
        style={{ transform: `translate(${moveX(0.04)}px, ${moveY(0.04)}px)` }}
      >
        <Cpu size={64} className="text-flat-black" />
      </div>


      {/* --- Main Content --- */}

      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* NEW: Dialogue Box (Speech Bubble) */}
        <div className="animate-bounce-in mb-8 inline-block relative z-20">
           {/* Used drop-shadow so the tail part is included in the shadow shape */}
           <div className="relative drop-shadow-[5px_5px_0px_#1a1a1a] hover:drop-shadow-[2px_2px_0px_#1a1a1a] transition-all duration-300 transform -rotate-2 hover:rotate-0">
              <div className="bg-white border-2 border-flat-black px-8 py-4 rounded-2xl relative">
                 <span className="font-bold text-lg md:text-xl font-mono tracking-wider flex items-center gap-2">
                    HELLO, I'M SHUBHAM!
                 </span>
              </div>
              {/* Tail of the bubble - positioned at bottom left */}
              <div className="absolute -bottom-3 left-8 w-6 h-6 bg-white border-b-2 border-r-2 border-flat-black transform rotate-45"></div>
           </div>
        </div>
        
        {/* Typography */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold leading-[0.9] tracking-tighter mb-12 min-h-[3ch] lg:min-h-[2.5ch]">
          <span className="block mb-2">CRAFTING</span>
          {/* Replaced gradient text with flat pop-coral color */}
          <span className="block text-pop-coral">
            {displayText}
            <span className="animate-blink ml-1 text-flat-black">|</span>
          </span>
        </h1>

        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-12 mt-4 animate-fade-in" style={{animationDelay: '0.8s'}}>
          <p className="text-xl md:text-3xl max-w-2xl font-medium leading-relaxed bg-white/50 backdrop-blur-sm p-4 rounded-xl border-2 border-flat-black/5 md:border-none md:p-0 md:bg-transparent md:backdrop-blur-none">
            An <span className="squiggle-underline font-bold text-flat-black">AI & ML Enthusiast</span> turning data into intelligence and code into experiences.
          </p>
          
          <div className="hidden md:block text-right">
            <span className="font-mono text-sm opacity-60 block mb-1">LOCATION</span>
            <span className="font-bold text-xl flex items-center gap-2 justify-end">
               PUNJAB, INDIA
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float z-20">
        <a href="#work" className="p-5 bg-white border-2 border-flat-black rounded-full shadow-[4px_4px_0px_0px_#1a1a1a] block hover:translate-y-1 hover:shadow-none transition-all group">
          <ArrowDown size={28} className="group-hover:text-pop-coral transition-colors"/>
        </a>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        /* Custom Squiggle Underline */
        .squiggle-underline {
          background-image: url("data:image/svg+xml,%3Csvg width='10' height='10' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 8 Q 2.5 4 5 8 T 10 8' stroke='%23FF6B6B' stroke-width='3' fill='none'/%3E%3C/svg%3E");
          background-position: 0 100%;
          background-size: 12px 10px; /* Controls density (width) and height */
          background-repeat: repeat-x;
          padding-bottom: 2px;
          text-decoration: none;
        }
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
        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-bounce-in { animation: bounce-in 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; opacity: 0; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-blink { animation: blink 1s step-end infinite; }
        .animate-spin-slow-reverse { animation: spin-slow-reverse 20s linear infinite; }
      `}</style>
    </section>
  );
};

export default Hero;
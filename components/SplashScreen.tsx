import React, { useEffect, useState, useMemo } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExit, setIsExit] = useState(false);
  const [quote, setQuote] = useState("");

  const quotes = [
    "Simplicity is the ultimate sophistication.",
    "Design is intelligence made visible.",
    "Code is poetry.",
    "Make it simple, but significant.",
    "Details are not the details. They make the design.",
    "Creativity is intelligence having fun."
  ];

  // Generate a random color sequence ensuring we start with Orange (Coral)
  const animationKeyframes = useMemo(() => {
    const colors = [
      '#FF6B6B', // Pop Coral (Start)
      '#FFB74D', // Orange
      '#4DB6AC', // Teal
      '#9575CD', // Purple
      '#81C784', // Green
      '#4DD0E1', // Cyan
    ];
    
    // Keep the first color (Coral) fixed
    const startColor = colors[0];
    const otherColors = colors.slice(1);
    
    // Shuffle the rest
    for (let i = otherColors.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [otherColors[i], otherColors[j]] = [otherColors[j], otherColors[i]];
    }

    // Reconstruct array: Start -> ...Random -> Start (for smooth loop)
    const sequence = [startColor, ...otherColors, startColor];
    
    // Build CSS keyframes string
    let keyframes = '@keyframes random-pastel-cycle {';
    const step = 100 / (sequence.length - 1);
    
    sequence.forEach((color, index) => {
      keyframes += `${Math.round(index * step)}% { background-color: ${color}; } `;
    });
    keyframes += '}';
    return keyframes;
  }, []);

  useEffect(() => {
    // Select a random quote on mount
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);

    // Progress Timer
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsExit(true);
          setTimeout(onComplete, 800); // Wait for slide up animation
          return 100;
        }
        // Faster progress
        const increment = Math.random() * 8 + 2; 
        return Math.min(prev + increment, 100);
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden transition-transform duration-1000 ease-[cubic-bezier(0.87,0,0.13,1)] ${isExit ? '-translate-y-full' : 'translate-y-0'}`}
      style={{ animation: 'random-pastel-cycle 3s infinite linear' }}
    >
      <style>{animationKeyframes}</style>

      <div className="relative z-10 flex flex-col items-center px-4 text-center max-w-2xl">
        {/* Logo Animation */}
        <div className="mb-12 relative">
           <span className="text-6xl md:text-8xl font-bold font-mono tracking-tighter text-flat-black">shubham</span>
        </div>
        
        {/* Quote */}
        <div className="h-20 mb-12 flex items-center justify-center">
          <p className="font-mono text-xl md:text-2xl italic text-flat-black/70 leading-relaxed animate-fade-in-up">
            "{quote}"
          </p>
        </div>
        
        {/* Flat Progress Bar */}
        <div className="w-full max-w-sm relative">
           <div className="flex justify-between text-xs font-mono font-bold mb-2 opacity-60 uppercase tracking-widest text-flat-black">
              <span>Loading Assets</span>
              <span>{Math.round(progress)}%</span>
           </div>
           <div className="h-3 w-full bg-flat-black/10 rounded-full overflow-hidden border border-flat-black/20">
              <div 
                className="h-full bg-flat-black transition-all duration-100 ease-out rounded-full"
                style={{ width: `${progress}%` }}
              >
              </div>
           </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;
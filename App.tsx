import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkSection from './components/WorkSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Marquee from './components/Marquee';
import SplashScreen from './components/SplashScreen';

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  // Allow re-triggering splash from Navbar
  const handleLogoClick = () => {
    setShowSplash(true);
  };

  return (
    <div className="min-h-screen font-sans selection:bg-pop-coral selection:text-white">
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      
      {/* Main content is always rendered underneath the splash screen */}
      <div className="opacity-100">
        <Navbar onLogoClick={handleLogoClick} />
        <main>
          <Hero />
          <Marquee text="AI/ML • Web Development • Data Analysis • Design •" rotate={true} />
          <WorkSection />
          <AboutSection />
          <ContactSection />
        </main>
      </div>
      
      {/* Global animation styles for the marquee and other custom animations */}
      <style>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 20s linear infinite;
        }
        .animate-spin-slow {
          animation: spin 10s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default App;
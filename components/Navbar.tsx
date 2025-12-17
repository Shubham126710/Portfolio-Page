import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onLogoClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLogoClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navBg, setNavBg] = useState('bg-pastel-peach'); // Default to Hero Yellow

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Define sections and their corresponding navbar colors
      const sections = [
        { id: 'hero', color: 'bg-pastel-peach' },    // Yellow
        { id: 'work', color: 'bg-pastel-mint' },     // Green
        { id: 'about', color: 'bg-pastel-lavender' }, // Orange
        { id: 'contact', color: 'bg-pastel-lavender' } // Orange (matches footer base)
      ];

      const scrollY = window.scrollY;
      const navHeightOffset = 100; // Trigger change slightly before section hits top

      let newColor = 'bg-pastel-peach'; // Default fallback

      // Iterate to find the last section that has been scrolled past
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          // If we have scrolled past the top of this section (minus offset)
          if (element.offsetTop - navHeightOffset <= scrollY) {
            newColor = section.color;
          }
        }
      }
      setNavBg(newColor);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Work', href: '#work', sub: 'My Projects' },
    { name: 'About', href: '#about', sub: 'Who I Am' },
    { name: 'Contact', href: '#contact', sub: 'Say Hello' },
  ];

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onLogoClick();
  };

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Determine the final class string.
  // If at top (!scrolled), use transparent to show Hero bg.
  // If scrolled, use the dynamic navBg + border.
  const navbarClasses = scrolled && !isOpen 
    ? `py-4 ${navBg} border-b-2 border-flat-black` 
    : 'py-8 bg-transparent';

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navbarClasses}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center relative z-50">
          {/* Logo */}
          <a 
            href="#" 
            onClick={handleLogoClick}
            className={`text-2xl font-bold font-mono tracking-tighter hover:scale-105 transition-transform text-flat-black`}
          >
            shubham.
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-12 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium hover:text-pop-coral transition-colors relative group text-flat-black"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pop-coral transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-flat-black focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Full Screen Mobile Menu Overlay - Uses current navBg for consistency */}
      <div 
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'} ${navBg}`}
      >
        <div className="flex flex-col gap-8 text-center">
          {navLinks.map((link, index) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
              className={`group relative text-5xl font-extrabold tracking-tighter text-flat-black transition-all duration-500 hover:text-pop-coral ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {link.name}
              <span className="block text-lg font-mono font-normal opacity-50 mt-2 group-hover:opacity-100 transition-opacity">
                {link.sub}
              </span>
            </a>
          ))}
        </div>

        {/* Decorative Grid in Menu */}
        <div className="absolute inset-0 pointer-events-none opacity-5" 
           style={{
             backgroundImage: 'radial-gradient(#1a1a1a 1px, transparent 1px)',
             backgroundSize: '20px 20px'
           }}>
        </div>
      </div>
    </>
  );
};

export default Navbar;
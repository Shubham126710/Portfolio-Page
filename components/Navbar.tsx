import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onLogoClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLogoClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navBg, setNavBg] = useState('bg-pastel-peach');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = [
        { id: 'hero', color: 'bg-pastel-peach' },
        { id: 'work', color: 'bg-pastel-mint' },
        { id: 'about', color: 'bg-pastel-lavender' },
        { id: 'contact', color: 'bg-pastel-lavender' },
      ];

      const scrollY = window.scrollY;
      const offset = 100;
      let newColor = 'bg-pastel-peach';

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el && el.offsetTop - offset <= scrollY) {
          newColor = section.color;
        }
      }

      setNavBg(newColor);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
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
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navbarClasses =
    scrolled && !isOpen
      ? `py-4 ${navBg} border-b-2 border-flat-black`
      : 'py-8 bg-transparent';

  return (
    <>
      {/* Top Bar */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navbarClasses}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* Logo */}
          <a
            href="#"
            onClick={handleLogoClick}
            className="text-2xl font-bold font-mono tracking-tighter text-flat-black hover:scale-105 transition-transform"
          >
            shubham.
          </a>

          {/* Hamburger (ALL screen sizes) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="p-2 text-flat-black focus:outline-none"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Fullscreen Menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.87,0,0.13,1)]
        ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'} ${navBg}`}
      >
        <div className="flex flex-col gap-8 text-center">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
              className={`text-5xl font-extrabold tracking-tighter text-flat-black hover:text-pop-coral transition-all duration-500
              ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {link.name}
              <span className="block text-lg font-mono opacity-50 mt-2">
                {link.sub}
              </span>
            </a>
          ))}
        </div>

        {/* Subtle Grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-5"
          style={{
            backgroundImage: 'radial-gradient(#1a1a1a 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />
      </div>
    </>
  );
};

export default Navbar;

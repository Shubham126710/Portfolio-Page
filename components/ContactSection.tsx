import React from 'react';
import { SOCIALS } from '../constants';
import { Github, Linkedin, Instagram, Twitter } from 'lucide-react';

const ContactSection: React.FC = () => {
  const getIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'github': return <Github size={32} />;
      case 'linkedin': return <Linkedin size={32} />;
      case 'instagram': return <Instagram size={32} />;
      case 'twitter': return <Twitter size={32} />;
      default: return null;
    }
  };

  return (
    // Added bg-pastel-lavender here to extend the previous section's color behind the wave separator
    <footer id="contact" className="relative z-40 -mt-24 bg-pastel-lavender">
      {/* Cloud-like Separator */}
      {/* Increased width to 110% and negative margin to ensure no side gaps */}
      <div className="w-[110%] -ml-[5%] relative z-10 translate-y-1 overflow-hidden">
        <svg viewBox="0 0 1440 320" className="w-full h-auto text-pop-coral fill-current block" preserveAspectRatio="none">
           <path fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="bg-pop-coral text-white pt-10 pb-24 relative">
        <div className="container mx-auto px-6 md:px-12 text-center md:text-left">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20">
            <div>
              <h2 className="text-5xl md:text-8xl font-extrabold mb-8 tracking-tight leading-none">
                GET IN<br/>TOUCH.
              </h2>
              <p className="text-2xl font-medium opacity-90 max-w-lg">
                Currently open for internships and opportunities in AI/ML and Full Stack Development.
              </p>
            </div>

            <div className="mt-12 md:mt-0 flex flex-col gap-4 items-start md:items-end w-full md:w-auto">
               <a href="mailto:shubham360upadhyay@gmail.com" className="text-2xl md:text-4xl font-bold border-b-2 border-white hover:text-flat-black hover:border-flat-black transition-colors">
                 shubham360upadhyay@gmail.com
               </a>
               <a href="tel:+918897773251" className="text-xl md:text-2xl font-mono opacity-80 hover:opacity-100">
                 +91 8897773251
               </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-white/30">
             <div>
                <ul className="flex flex-wrap gap-8 justify-center md:justify-start">
                  {SOCIALS.map(social => (
                    <li key={social.platform}>
                      <a 
                        href={social.url} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 border-2 border-white rounded-full hover:bg-white hover:text-pop-coral transition-all transform hover:-translate-y-1 block"
                        aria-label={social.platform}
                      >
                        {getIcon(social.platform)}
                      </a>
                    </li>
                  ))}
                </ul>
             </div>
             
             <div className="flex flex-col md:flex-row justify-end items-center md:gap-8 opacity-70 text-sm font-mono">
                <span>Gharuan, Punjab</span>
                <span>© {new Date().getFullYear()} Shubham Upadhyay</span>
             </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
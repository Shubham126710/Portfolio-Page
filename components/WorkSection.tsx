import React, { useEffect, useRef } from 'react';
import { PROJECTS } from '../constants';
import { Github, ExternalLink } from 'lucide-react';

const WorkSection: React.FC = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    // Replaced rounded corners with wave separator
    // Removed -mt-10 to allow wave to sit naturally, but can adjust margin if needed to pull closer to marquee
    <section id="work" className="relative z-20">
      
      {/* Wavy Separator - Text color set to pastel-mint (Green) to match the section background */}
      <div className="w-[110%] -ml-[5%] relative z-10 translate-y-1 overflow-hidden pointer-events-none">
        <svg viewBox="0 0 1440 320" className="w-full h-auto text-pastel-mint fill-current block" preserveAspectRatio="none">
           <path fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      {/* Main Content Container with Green Background */}
      <div className="bg-pastel-mint text-flat-black pb-24 pt-12">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal-on-scroll">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-flat-black drop-shadow-[2px_2px_0px_rgba(255,255,255,0.4)]">
              FEATURED<br/>PROJECTS
            </h2>
            <p className="text-xl font-mono mt-4 md:mt-0 opacity-90 text-flat-black font-bold">( RECENT WORK )</p>
          </div>

          <div className="flex flex-col gap-20">
            {PROJECTS.map((project, index) => (
              <div 
                key={project.id} 
                className={`reveal-on-scroll flex flex-col md:flex-row gap-8 md:gap-16 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Image Side */}
                <div className="w-full md:w-1/2">
                  <div className="relative rounded-[2rem] overflow-hidden border-2 border-flat-black shadow-[8px_8px_0px_0px_#1a1a1a] group transition-transform hover:-translate-y-2 bg-white">
                     <div className="aspect-video relative flex items-center justify-center bg-gray-50 overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="object-cover object-top w-full h-full transition-transform duration-700 group-hover:scale-105"
                          onError={(e) => {
                            const target = e.currentTarget;
                            target.onerror = null;
                            target.src = `https://placehold.co/800x600/FFEEE4/FF6B6B?text=${encodeURIComponent(project.title)}`;
                          }}
                        />
                     </div>
                  </div>
                </div>
                
                {/* Text Side */}
                <div className="w-full md:w-1/2">
                  <span className="font-mono text-sm font-bold uppercase tracking-wider bg-white border border-flat-black px-3 py-1 rounded-full text-flat-black mb-4 inline-block shadow-[4px_4px_0px_0px_#1a1a1a]">
                       {project.category}
                  </span>
                  
                  <h3 className="text-4xl md:text-5xl font-bold mb-6 text-flat-black">
                    {project.title}
                  </h3>
                  
                  <p className="text-lg md:text-xl text-flat-black/90 mb-8 leading-relaxed font-bold">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-sm font-bold text-flat-black bg-white border border-flat-black px-2 py-1 rounded shadow-[2px_2px_0px_0px_#1a1a1a]">#{tag}</span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a 
                      href={project.githubUrl}
                      className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-flat-black font-bold bg-white text-flat-black hover:bg-flat-black hover:text-white transition-colors shadow-[4px_4px_0px_0px_#1a1a1a] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                    >
                      <Github size={20} />
                      Code
                    </a>
                    <a 
                      href={project.demoUrl}
                      className="flex items-center gap-2 px-6 py-3 rounded-xl bg-flat-black border-2 border-flat-black text-white font-bold hover:bg-white hover:text-flat-black transition-colors shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                    >
                      <ExternalLink size={20} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .reveal-on-scroll {
          opacity: 0;
          transform: translateY(50px);
          transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
};

export default WorkSection;
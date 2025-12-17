import React from 'react';
import { SKILLS } from '../constants';
import { Briefcase } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-pastel-lavender text-flat-black rounded-t-[3rem] md:rounded-t-[5rem] -mt-10 relative z-30">
      <div className="container mx-auto px-6 md:px-12">
        {/* Flattened Layout for precise control over mobile ordering */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-x-20 lg:items-start">
          
          {/* 1. Heading (Mobile Order 1, Desktop Top Right) */}
          <div className="order-1 lg:col-span-7 lg:col-start-6 lg:row-start-1 mb-12 lg:mb-8">
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-flat-black text-center lg:text-left">
              ABOUT <span className="text-white drop-shadow-[4px_4px_0px_#1a1a1a] italic">ME</span>
            </h2>
          </div>

          {/* 2. Avatar (Mobile Order 2, Desktop Left Spanning 2 Rows) */}
          <div className="order-2 lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:row-span-2 flex justify-center mb-12 lg:mb-0">
             <div className="relative w-72 h-72 md:w-96 md:h-96 group">
                
                {/* Background Starburst / Circle for Comic Effect */}
                <div className="absolute inset-0 bg-white rounded-full border-4 border-flat-black shadow-[15px_15px_0px_0px_#1a1a1a] transition-transform duration-300 group-hover:scale-[1.02] group-hover:shadow-[20px_20px_0px_0px_#1a1a1a] z-0"></div>
                
                {/* Comic Dots Background Pattern */}
                <div className="absolute inset-4 rounded-full overflow-hidden opacity-10 z-0" 
                     style={{backgroundImage: 'radial-gradient(#1a1a1a 1.5px, transparent 1.5px)', backgroundSize: '10px 10px'}}>
                </div>

                {/* Comic Avatar Construction */}
                <div className="absolute inset-0 flex items-center justify-center rounded-full overflow-hidden z-10">
                   <div className="relative w-full h-full transform translate-y-8 scale-90">
                      
                      {/* Body (Hoodie) */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[70%] h-[40%] bg-pop-coral border-4 border-flat-black rounded-t-[4rem] z-20 shadow-[-10px_0px_0px_0px_rgba(0,0,0,0.2)_inset]">
                         {/* Hoodie Strings */}
                         <div className="absolute top-12 left-[30%] w-2 h-16 bg-white border-2 border-flat-black rounded-full"></div>
                         <div className="absolute top-12 right-[30%] w-2 h-16 bg-white border-2 border-flat-black rounded-full"></div>
                      </div>

                      {/* Neck */}
                      <div className="absolute bottom-[38%] left-1/2 transform -translate-x-1/2 w-[20%] h-[15%] bg-[#ffdbac] border-x-4 border-flat-black z-10">
                         <div className="absolute top-0 right-0 w-[40%] h-full bg-black/10"></div> {/* Shadow */}
                      </div>

                      {/* Face */}
                      <div className="absolute top-[25%] left-1/2 transform -translate-x-1/2 w-[48%] h-[48%] bg-[#ffdbac] border-4 border-flat-black rounded-[3rem] z-30 overflow-hidden">
                         {/* Face Shadow (Comic style) */}
                         <div className="absolute right-0 top-0 w-[20%] h-full bg-black/10"></div>
                         
                         {/* Blush Lines */}
                         <div className="absolute top-[60%] left-[15%] flex gap-1">
                             <div className="w-1 h-3 bg-pop-coral rotate-12 rounded-full"></div>
                             <div className="w-1 h-3 bg-pop-coral rotate-12 rounded-full"></div>
                         </div>
                         <div className="absolute top-[60%] right-[15%] flex gap-1">
                             <div className="w-1 h-3 bg-pop-coral -rotate-12 rounded-full"></div>
                             <div className="w-1 h-3 bg-pop-coral -rotate-12 rounded-full"></div>
                         </div>

                         {/* Eyes - Tall Ovals (No Glasses) */}
                         <div className="absolute top-[45%] left-[22%] w-4 h-6 bg-flat-black rounded-full animate-blink">
                             <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-white rounded-full"></div>
                         </div>
                         <div className="absolute top-[45%] right-[22%] w-4 h-6 bg-flat-black rounded-full animate-blink">
                             <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-white rounded-full"></div>
                         </div>
                         
                         {/* Eyebrows */}
                         <div className="absolute top-[38%] left-[20%] w-6 h-1.5 bg-flat-black -rotate-6 rounded-full"></div>
                         <div className="absolute top-[38%] right-[20%] w-6 h-1.5 bg-flat-black rotate-6 rounded-full"></div>

                         {/* Mouth - Smirk */}
                         <div className="absolute bottom-[22%] left-1/2 transform -translate-x-1/2 w-8 h-4 border-b-4 border-flat-black rounded-full"></div>
                      </div>

                      {/* Ears */}
                      <div className="absolute top-[42%] left-[22%] w-5 h-8 bg-[#ffdbac] border-4 border-flat-black rounded-l-xl z-20"></div>
                      <div className="absolute top-[42%] right-[22%] w-5 h-8 bg-[#ffdbac] border-4 border-flat-black rounded-r-xl z-20"></div>

                      {/* Hair - Comic Spiky */}
                      <div className="absolute top-[18%] left-1/2 transform -translate-x-1/2 w-[55%] h-[20%] bg-flat-black z-40 rounded-t-lg">
                         {/* Spikes */}
                         <div className="absolute -top-6 -left-4 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[40px] border-b-flat-black -rotate-45"></div>
                         <div className="absolute -top-8 left-2 w-0 h-0 border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent border-b-[50px] border-b-flat-black -rotate-12"></div>
                         <div className="absolute -top-8 right-2 w-0 h-0 border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent border-b-[50px] border-b-flat-black rotate-12"></div>
                         <div className="absolute -top-6 -right-4 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[40px] border-b-flat-black rotate-45"></div>
                      </div>
                      {/* Hair Back */}
                      <div className="absolute top-[30%] left-1/2 transform -translate-x-1/2 w-[58%] h-[40%] bg-flat-black rounded-[3rem] -z-10 border-4 border-flat-black"></div>

                   </div>
                </div>

                {/* Rotating Badge - Comic Style */}
                <div className="absolute -bottom-4 -right-4 md:bottom-0 md:right-0 w-32 h-32 bg-pop-coral rounded-full border-4 border-flat-black flex items-center justify-center animate-spin-slow z-50 shadow-[8px_8px_0px_0px_#1a1a1a]">
                   <svg viewBox="0 0 100 100" width="100%" height="100%" className="p-2">
                     <defs>
                       <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                     </defs>
                     <text fontSize="11" fontWeight="900" fill="#fff" letterSpacing="1.2">
                       <textPath xlinkHref="#circle">
                         OPEN TO WORK • OPEN TO WORK •
                       </textPath>
                     </text>
                   </svg>
                 </div>
             </div>
          </div>

          {/* 3. Text Body (Mobile Order 3, Desktop Bottom Right) */}
          <div className="order-3 lg:col-span-7 lg:col-start-6 lg:row-start-2 flex flex-col justify-center">
            <div className="space-y-6 text-xl md:text-2xl leading-relaxed font-bold text-flat-black text-center lg:text-left">
              <p>
                I am a motivated <strong>Artificial Intelligence and Machine Learning (AIML)</strong> student with a strong foundation in clean, minimal web design, DBMS, and content writing.
              </p>
              <p>
                Experienced in developing real-time projects and collaborating effectively in team-based environments.
              </p>
              <p>
                Passionate about building user-focused, well-designed digital solutions while continuously learning and applying emerging technologies.
              </p>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-mono font-bold mb-8 uppercase tracking-widest text-flat-black text-center lg:text-left">Skills & Tech</h3>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                {SKILLS.map((skill) => (
                  <div 
                    key={skill.name} 
                    className="px-6 py-3 bg-white border-2 border-flat-black rounded-xl shadow-[4px_4px_0px_0px_#1a1a1a] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-default"
                  >
                    <span className="font-bold text-flat-black">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
      <style>{`
        @keyframes blink {
          0%, 90%, 100% { transform: scaleY(1); }
          95% { transform: scaleY(0.1); }
        }
        .animate-blink {
          animation: blink 4s infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
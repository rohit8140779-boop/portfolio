import React from 'react';
import { ChevronDown, Volume2 } from 'lucide-react';
import { Section } from '../types';

interface HeroProps {
  scrollToSection: (section: Section) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section id="home" className="relative w-full min-h-screen flex flex-col items-center justify-center py-24 bg-black overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20 blur-sm scale-105 grayscale"
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl w-full px-6 flex flex-col items-center text-center mt-10">
        
        {/* Badge - Increased Size */}
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm md:text-base font-bold tracking-widest mb-10 animate-fade-in-up shadow-[0_0_20px_rgba(59,130,246,0.2)]">
          <span className="w-3 h-3 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_#3b82f6]"></span>
          AVAILABLE FOR FREELANCE & JOB
        </div>

        {/* Central Intro Video - Restored to previous link */}
        <div className="w-full max-w-3xl aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.15)] border border-white/10 mb-6 group relative animate-reveal">
            <iframe 
              src="https://player.vimeo.com/video/1150871309?badge=0&autopause=0&player_id=0&app_id=58479&loop=1&autoplay=1&muted=0"
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
              allowFullScreen
              title="Intro Video"
            ></iframe>
            
            {/* Sound Indicator Overlay */}
            <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
              <Volume2 size={14} className="text-blue-400" />
              <span className="text-[10px] font-bold text-white uppercase tracking-tighter">Audio Enabled</span>
            </div>
        </div>

        <p className="text-sm text-gray-500 mb-6 italic animate-pulse">
          Tip: If audio doesn't start, click anywhere on the page to unmute.
        </p>
        
        {/* Description */}
        <p className="text-xl md:text-2xl text-gray-200 font-light max-w-4xl leading-relaxed mb-10 animate-reveal" style={{ animationDelay: '0.2s' }}>
          I'm <span className="font-bold text-white">Abhishek Sharma</span>. 
          A specialized video editor with 
          <span className="relative inline-block mx-2 group">
            <span className="relative z-10 font-black italic animate-shimmer text-2xl md:text-3xl">1.5+ Years Experience</span>
            <span className="absolute -inset-1 bg-blue-500/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </span>
          turning raw footage into compelling narratives. Commercials, Youtube videos, Short Form Content, AI Ads, and Documentary.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 animate-reveal" style={{ animationDelay: '0.4s' }}>
            <a 
              href={`#${Section.WORK}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(Section.WORK);
              }}
              className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold tracking-wide transition-all rounded-lg shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-0.5 inline-flex items-center justify-center cursor-pointer"
            >
              VIEW MY WORK
            </a>
            <a 
               href={`#${Section.CONTACT}`}
               onClick={(e) => {
                 e.preventDefault();
                 scrollToSection(Section.CONTACT);
               }}
               className="w-full sm:w-auto px-8 py-3.5 border border-white/20 text-white font-medium hover:bg-white/10 transition-colors rounded-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              CONTACT ME
            </a>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce text-gray-500 opacity-75">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
};

export default Hero;
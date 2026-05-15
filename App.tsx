import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import ContactSection from './components/ContactSection';
import AIChatBot from './components/AIChatBot';
import SkillsSection from './components/SkillsSection';
import ClickEffect from './components/ClickEffect';
import TestimonialsSection from './components/TestimonialsSection';
import ImpactSection from './components/ImpactSection';
import { Section } from './types';

function App() {
  const [activeSection, setActiveSection] = useState<Section>(Section.HOME);

  const scrollToSection = (section: Section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500 selection:text-white cursor-default">
      <ClickEffect />
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <main>
        <Hero scrollToSection={scrollToSection} />
        
        {/* Impact/Results Section */}
        <ImpactSection />

        {/* Skills Section */}
        <SkillsSection />

        <Portfolio />
        
        <TestimonialsSection />
        
        <ContactSection />
      </main>

      <footer className="py-12 bg-black border-t border-white/10 text-center">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-4">
          <p className="text-white font-bold tracking-widest text-lg">
            ABHI<span className="text-blue-500">VISUALS.IN</span>
          </p>
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Abhishek Sharma. All rights reserved.
          </p>
        </div>
      </footer>

      <AIChatBot />
    </div>
  );
}

export default App;
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
        
        {/* New Impact/Results Section */}
        <ImpactSection />

        {/* Skills Section */}
        <SkillsSection />

        <Portfolio />
        
        <TestimonialsSection />
        
        <ContactSection />
      </main>

      <footer className="py-8 bg-black border-t border-white/10 text-center text-gray-600 text-sm">
        <p>&copy; {new Date().getFullYear()} Abhishek Visuals. All rights reserved.</p>
      </footer>

      <AIChatBot />
    </div>
  );
}

export default App;
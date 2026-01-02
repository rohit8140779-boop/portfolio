import React, { useState, useEffect } from 'react';
import { Menu, X, Film, Scissors } from 'lucide-react';
import { Section } from '../types';

interface NavbarProps {
  activeSection: Section;
  scrollToSection: (section: Section) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: Section.HOME, label: 'Intro' },
    { id: Section.WORK, label: 'Work' },
    // About section removed
    { id: Section.CONTACT, label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => scrollToSection(Section.HOME)}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 blur-sm opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <Film className="w-8 h-8 text-blue-400 relative z-10" />
            <Scissors className="w-4 h-4 text-white absolute -bottom-1 -right-1 z-20" />
          </div>
          <span className="text-xl font-bold tracking-wider text-white">
            ABHISHEK<span className="text-blue-500">VISUALS</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.id);
              }}
              className={`text-sm font-medium tracking-wide transition-colors ${
                activeSection === link.id
                  ? 'text-blue-400'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.label.toUpperCase()}
            </a>
          ))}
          <a 
            href={`#${Section.CONTACT}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(Section.CONTACT);
            }}
            className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-full transition-all hover:shadow-[0_0_15px_rgba(37,99,235,0.5)] cursor-pointer"
          >
            HIRE ME
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-950 border-b border-white/10 px-6 py-8 absolute w-full top-20 left-0 shadow-2xl">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-lg font-medium text-left ${
                  activeSection === link.id ? 'text-blue-400' : 'text-gray-300'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
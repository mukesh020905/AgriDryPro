import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import Button from './Button';
import Logo from './Logo';

interface NavbarProps {
    onNavigate?: (view: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll listener to adjust navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when screen size increases
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (id?: string) => {
    if (id && onNavigate) {
        onNavigate(id);
        setIsOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
        <nav 
            className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                isOpen 
                ? 'top-4 w-[95%] max-w-[400px] rounded-[2rem] bg-[#150a0a] border border-white/10 shadow-2xl shadow-orange-900/20' 
                : scrolled
                    ? 'top-4 w-[95%] md:w-[90%] max-w-6xl rounded-full bg-[#150a0a]/80 backdrop-blur-xl border border-white/10 shadow-lg shadow-orange-900/5 py-4' 
                    : 'top-6 w-[95%] md:w-[95%] max-w-7xl rounded-full bg-[#150a0a]/40 backdrop-blur-sm border border-white/5 py-5'
            }`}
        >
          <div className={`flex items-center justify-between pl-8 pr-4 ${isOpen ? 'pt-5 mb-3 px-6' : ''}`}>
            
            {/* Logo Section */}
            <div 
                className="flex items-center gap-4 cursor-pointer group"
                onClick={() => handleNavClick('landing')}
            >
              <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center overflow-hidden border border-white/20 group-hover:scale-105 transition-transform duration-300">
                 <Logo className="w-full h-full" />
              </div>
              <span className={`font-semibold text-base tracking-tight text-white ${isOpen ? 'block' : 'hidden md:block'}`}>
                Agridrypro.in
              </span>
            </div>

            {/* Desktop Links */}
            <div className={`hidden md:flex items-center justify-center flex-1 space-x-8 mx-8 ${isOpen ? 'hidden' : ''}`}>
              {NAV_LINKS.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.id)}
                  className="px-6 py-2.5 text-sm font-medium text-gray-300 hover:text-white relative group transition-colors rounded-full hover:bg-white/5"
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className={`hidden md:block ${isOpen ? 'hidden' : ''}`}>
              <Button 
                variant="gradient" 
                className="px-8 py-2.5 text-sm h-11"
                onClick={() => handleNavClick('contact')}
              >
                Contact
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden pr-3">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white p-3 focus:outline-none bg-white/5 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Content (Dynamic Island Expansion) */}
          <div 
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isOpen ? 'max-h-[450px] opacity-100 pb-3' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="flex flex-col px-5 pb-5 gap-2">
              <div className="h-px w-full bg-white/5 my-2"></div>
              {NAV_LINKS.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.id)}
                  className="w-full text-left px-5 py-4 text-lg font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-2xl transition-all flex items-center justify-between group"
                >
                  {link.name}
                  <span className="w-2 h-2 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </button>
              ))}
              <div className="h-px w-full bg-white/5 my-2"></div>
              <Button 
                  variant="gradient" 
                  fullWidth 
                  className="py-4 text-base mt-2" 
                  onClick={() => handleNavClick('contact')}
              >
                  Get in Touch
              </Button>
            </div>
          </div>
        </nav>
        
        {/* Backdrop for mobile menu */}
        {isOpen && (
            <div 
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 animate-fade-in"
              onClick={() => setIsOpen(false)}
            />
        )}
    </>
  );
};

export default Navbar;
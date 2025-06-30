import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { CalendlyModal } from './CalendlyModal';
import { useCalendlyModal } from '../hooks/useCalendlyModal';

const navLinks = [
  { name: 'Services', href: '#services', external: false },
  { name: 'Case Studies', href: 'https://www.upwork.com/ag/varbintech', external: true },
  { name: 'About', href: 'https://www.linkedin.com/company/varbintech', external: true },
  { name: 'FAQ', href: '#faq', external: false },
];

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isOpen: isCalendlyOpen, openModal: openCalendly, closeModal: closeCalendly } = useCalendlyModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookCall = () => {
    setIsMenuOpen(false);
    openCalendly();
  };

  const handleLinkClick = (href: string, external: boolean) => {
    setIsMenuOpen(false);
    
    if (external) {
      window.open(href, '_blank', 'noopener noreferrer');
    } else {
      // For internal links, use smooth scrolling
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-md py-2' 
            : 'bg-white py-4'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            <Logo isScrolled={isScrolled} />
            
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.href, link.external)}
                  className="text-sm font-medium transition-colors hover:text-neutral-600 text-neutral-900"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={handleBookCall}
                className="px-4 py-2 text-sm font-medium rounded-md bg-neutral-900 text-white hover:bg-neutral-800 transition-colors"
              >
                Book a Call
              </button>
            </div>

            <button
              className="md:hidden text-2xl focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="text-neutral-900" size={24} />
              ) : (
                <Menu className="text-neutral-900" size={24} />
              )}
            </button>
          </div>

          <div
            className={`md:hidden transition-all duration-300 overflow-hidden ${
              isMenuOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.href, link.external)}
                  className="text-sm font-medium text-neutral-900 text-left"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={handleBookCall}
                className="px-4 py-2 text-sm font-medium text-center rounded-md bg-neutral-900 text-white hover:bg-neutral-800 transition-colors"
              >
                Book a Call
              </button>
            </div>
          </div>
        </div>
      </nav>

      <CalendlyModal isOpen={isCalendlyOpen} onClose={closeCalendly} />
    </>
  );
};
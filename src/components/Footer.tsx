import React from 'react';
import { Logo } from './Logo';
import { Mail, Phone, MapPin } from 'lucide-react';
import { XIcon, LinkedInIcon, GitHubIcon, ClutchIcon, UpworkIcon } from './SocialIcons';

const companyLinks = [
  { name: 'About Us', href: 'https://www.linkedin.com/company/varbintech', external: true },
  { name: 'Our Work', href: 'https://www.upwork.com/ag/varbintech', external: true },
  { name: 'Services', href: '#services', external: false },
  { name: 'Contact', href: '#contact', external: false },
];

const serviceLinks = [
  'Custom Web Development',
  'Responsive Web Design',
  'API Development',
  'SaaS Solutions',
  'Performance Optimization',
  'E-commerce Solutions'
];

export const Footer: React.FC = () => {
  const handleLinkClick = (href: string, external: boolean) => {
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

  const handleServiceLinkClick = () => {
    // Scroll to the services section
    const servicesElement = document.querySelector('#services');
    if (servicesElement) {
      servicesElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="bg-white inline-block p-2 rounded">
              <Logo />
            </div>
            <p className="mt-4 text-neutral-400 max-w-xs">
              Building exceptional digital experiences that drive growth and help businesses succeed.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://github.com/Varbintech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
                aria-label="Visit our GitHub"
              >
                <GitHubIcon size={20} />
              </a>
              <a 
                href="https://x.com/varbintech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
                aria-label="Follow us on X"
              >
                <XIcon size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/company/varbintech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
                aria-label="Connect with us on LinkedIn"
              >
                <LinkedInIcon size={20} />
              </a>
              <a 
                href="https://clutch.co/profile/varbintech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
                aria-label="View our Clutch profile"
              >
                <ClutchIcon size={20} />
              </a>
              <a 
                href="https://www.upwork.com/ag/varbintech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
                aria-label="Hire us on Upwork"
              >
                <UpworkIcon size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleLinkClick(link.href, link.external)}
                    className="text-sm font-medium text-neutral-400 hover:text-white transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((item) => (
                <li key={item}>
                  <button
                    onClick={handleServiceLinkClick}
                    className="text-neutral-400 hover:text-white transition-colors text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail size={20} className="text-neutral-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-neutral-400">contact@varbintech.com</span>
              </li>
              <li className="flex items-start">
                <Phone size={20} className="text-neutral-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-neutral-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="text-neutral-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-neutral-400">123 Tech Avenue, San Francisco, CA 94107</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-500 text-sm">
              &copy; {new Date().getFullYear()} Varbintech. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-neutral-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-neutral-500 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-neutral-500 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from './Button';
import { CalendlyModal } from './CalendlyModal';
import { useCalendlyModal } from '../hooks/useCalendlyModal';

// Digital Toucan Logo Component
const DigitalToucanLogo: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg 
    focusable="false" 
    aria-hidden="true" 
    viewBox="0 0 64 64" 
    aria-label="Digital Toucan logo" 
    className={className}
  >
    <path d="M34.061 26.494c-.5-.2-1.1-.5-1.6-.7-.1-.1-.2-.1-.4-.2-.4-.2-.8-.4-1.2-.7-.1-.1-.3-.2-.4-.2l-1.5-.9c-.5-.3-.9-.7-1.4-1-.1-.1-.3-.2-.4-.3-.4-.3-.7-.6-1.1-.9-.1-.1-.2-.2-.3-.2-.4-.4-.9-.8-1.3-1.2l-.3-.3-1-1c-.1-.1-.2-.2-.3-.4-.4-.4-.8-.9-1.1-1.4l-.9-1.2c-.1-.1-.2-.3-.3-.4l-.6-.9c-.1-.2-.2-.3-.3-.5-.2-.3-.3-.5-.5-.8-.1-.2-.2-.4-.3-.5-.2-.3-.3-.5-.4-.8-.1-.2-.2-.4-.3-.5-.1-.3-.3-.6-.4-.9-.1-.2-.2-.3-.2-.5-.2-.3-.3-.7-.4-1 0-.1-.1-.3-.2-.4-.2-.5-.3-.9-.5-1.4-7 4.3-11.8 11.4-13.3 19.4l30.9-.2zm-17.9-4.9c-.7.8-1.8 1.2-2.9 1-1.6-.3-2.7-1.9-2.4-3.5.3-1.6 1.9-2.7 3.5-2.4 1.2.2 2.1 1.2 2.4 2.4.2.9 0 1.8-.6 2.5z" fill="#fff"></path>
    <path d="M60.9 24.6c-.4.3-.8.7-1.2 1-.1 0-.1.1-.2.1-.3.3-.7.5-1.1.8-.1.1-.3.2-.4.3l-.9.6c-.2.1-.3.2-.5.3-.3.2-.6.3-.9.5-.2.1-.3.2-.5.3-.3.2-.7.4-1 .5-.1.1-.2.1-.4.2-.5.2-.9.4-1.4.6H66c-.1-.7-.3-1.4-.5-2.1-.5-1.9-1.2-3.8-2.1-5.5l-.2.2-.7.7-.4.4c-.3.3-.5.5-.8.7l-.4.4z" fill="#4284f3" transform="translate(-5.039 -3.306)"></path>
    <path d="M24.2 9.9c.1.3.2.5.3.8.1.2.2.4.2.6.1.3.2.5.3.8.1.2.2.4.2.6.1.3.2.5.4.8.1.2.2.4.3.5.1.3.3.5.4.7.1.2.2.3.3.5.2.3.3.5.5.8.1.2.2.3.3.5.2.3.4.5.5.8.1.1.2.3.3.4l.9 1.2c.3.3.5.7.8 1l.3.3c.2.2.4.5.6.7l.3.3.6.6c.1.1.3.2.4.4.2.2.4.3.6.5.1.1.3.2.4.4.2.2.4.3.6.5.2.1.3.2.5.3.2.2.4.3.6.4.2.1.3.2.5.3.2.1.4.3.6.4.2.1.3.2.5.3.2.1.4.3.6.4.2.1.3.2.5.3l.6.3c.2.1.3.2.5.3l.6.3c.2.1.4.2.5.3l.6.3c.2.1.4.2.5.2l.6.3c.2.1.4.1.6.2.2.1.4.2.6.2.2.1.4.1.6.2.2.1.4.1.7.2.2.1.4.1.6.2.2.1.4.1.7.2.2 0 .4.1.6.1.2 0 .3.1.5.1s.4-.1.6-.1c.2 0 .3-.1.5-.1.3-.1.5-.1.8-.2.1 0 .3-.1.4-.1l.9-.3c.1 0 .2-.1.3-.1.4-.1.8-.3 1.2-.4l.2-.1c.3-.1.6-.2.9-.4.1-.1.3-.1.4-.2.2-.1.5-.2.7-.3.2-.1.3-.2.4-.2.2-.1.4-.2.7-.3.2-.1.3-.2.5-.3.2-.1.4-.2.6-.4.2-.1.3-.2.5-.3.2-.1.4-.2.6-.4.2-.1.3-.2.5-.3.2-.1.4-.3.6-.4.2-.1.3-.2.5-.3.2-.1.4-.3.5-.4.1-.1.3-.2.4-.3.2-.1.3-.3.5-.4.1-.1.3-.2.4-.4l.5-.5.4-.4.5-.5.4-.4.5-.5c.1-.1.2-.3.4-.4l.1-.1C56 10.3 45.2 5 34 6.1c-3.5.4-7 1.4-10.1 3 0 .1.1.2.1.2 0 .2.1.4.2.6z" fill="#f5a623" transform="translate(-5.039 -3.306)"></path>
    <path d="M14.361 16.694c-1.6-.3-3.2.8-3.5 2.5-.3 1.6.8 3.2 2.5 3.4 1 .2 2.1-.2 2.8-1 .6-.7.8-1.6.7-2.5-.3-1.2-1.3-2.2-2.5-2.4z" fill="#333"></path>
    <path d="M56.061 51.094c-2.4-9.8-9.3-17.9-18.5-21.8h26.4l-.2-1.6c-.5-3.9-1.7-7.6-3.6-11l-.5-.8-1-1.7c-6-8.9-16-14.3-26.7-14.3-1.1 0-2.2.1-3.4.2-3.7.4-7.2 1.4-10.6 3l-1.5.8-.9.5c-7.9 4.8-13.5 12.9-15.1 22.2l-.2 1.1-.2 1.5c0 1-.1 1.9-.1 2.8 0 17.7 14.3 32 32 32 8.9 0 17.5-3.7 23.6-10.3.1-.2.3-.3.4-.4l.4-.5-.2-1.1-.1-.6zm1.3-31.2.7-.7.2-.2c.9 1.8 1.6 3.6 2.1 5.5.2.7.3 1.4.5 2.1h-13.3c.5-.2.9-.4 1.4-.6.1-.1.2-.1.4-.2.3-.2.7-.3 1-.5.2-.1.3-.2.5-.3.3-.2.6-.3.9-.5.2-.1.3-.2.5-.3l.9-.6c.1-.1.3-.2.4-.3.4-.3.7-.5 1.1-.8.1 0 .1-.1.2-.1.4-.3.8-.6 1.2-1l.3-.3c.3-.2.5-.5.8-.7 0-.3.1-.4.2-.5zm-38.5-14.1c3.2-1.6 6.6-2.6 10.1-3 11.2-1.1 22 4.2 28 13.7l-.1.1c-.1.1-.2.3-.4.4l-.5.5-.4.4-.5.5-.4.4-.5.5c-.1.1-.3.2-.4.4-.2.1-.3.3-.5.4-.1.1-.3.2-.4.3-.2.1-.4.3-.5.4-.2.1-.3.2-.5.3-.2.1-.4.3-.6.4-.2.1-.3.2-.5.3-.2.1-.4.2-.6.4-.2.1-.3.2-.5.3-.2.1-.4.2-.6.4-.2.1-.3.2-.5.3-.2.1-.4.2-.7.3-.2.1-.3.2-.4.2-.2.1-.5.2-.7.3-.1.1-.3.1-.4.2-.3.1-.6.3-.9.4l-.2.1c-.4.1-.8.3-1.2.4-.1 0-.2.1-.3.1l-.9.3c-.1 0-.3.1-.4.1-.3.1-.5.1-.8.2-.2 0-.3.1-.5.1s-.4.1-.6.1c-.2 0-.3-.1-.5-.1s-.4-.1-.6-.1c-.2-.1-.4-.1-.7-.2-.2-.1-.4-.1-.6-.2-.2-.1-.4-.1-.7-.2-.2-.1-.4-.1-.6-.2-.2-.1-.4-.2-.6-.2-.2-.1-.4-.1-.6-.2l-.6-.3c-.2-.1-.4-.2-.5-.2l-.6-.3c-.2-.1-.4-.2-.5-.3l-.6-.3c-.2-.1-.3-.2-.5-.3l-.6-.3c-.2-.1-.3-.2-.5-.3-.2-.1-.4-.2-.6-.4-.2-.1-.3-.2-.5-.3-.2-.1-.4-.3-.6-.4-.2-.1-.3-.2-.5-.3-.2-.1-.4-.3-.6-.4-.2-.1-.3-.2-.5-.3-.2-.2-.4-.3-.6-.5-.1-.1-.3-.2-.4-.4-.2-.2-.4-.3-.6-.5-.1-.1-.3-.2-.4-.4l-.6-.6-.3-.3c-.2-.2-.4-.5-.6-.7l-.3-.3c-.3-.3-.6-.7-.8-1l-.9-1.2c-.1-.1-.2-.3-.3-.4-.2-.3-.4-.5-.5-.8-.1-.2-.2-.3-.3-.5-.2-.3-.3-.5-.5-.8-.1-.2-.2-.3-.3-.5-.1-.2-.3-.5-.4-.7-.1-.2-.2-.4-.3-.5-.1-.2-.2-.5-.4-.8.6-.2.5-.4.5-.6-.1-.3-.2-.5-.3-.8-.1-.2-.2-.4-.2-.6-.1-.3-.2-.5-.3-.8-.1-.2-.1-.4-.2-.6-.1 0-.1 0-.1-.1zm-15.7 20.8c1.5-8.1 6.4-15.1 13.3-19.4.2.5.3.9.5 1.4 0 .1.1.3.2.4.1.3.3.7.4 1 .1.2.2.3.2.5.1.3.3.6.4.9.1.2.2.4.3.5.1.3.3.6.4.8.1.2.2.4.3.5.2.3.3.5.5.8.1.2.2.3.3.5l.6.9c.1.1.2.3.3.4l.9 1.2c.4.5.8.9 1.1 1.4.1.1.2.2.3.4.3.3.6.7 1 1l.3.3c.4.4.8.8 1.3 1.2.1.1.2.2.3.2.4.3.7.6 1.1.9.1.1.3.2.4.3.5.3.9.7 1.4 1l1.5.9c.1.1.3.2.4.2.4.2.8.5 1.2.7.1.1.2.1.4.2.5.3 1 .5 1.6.7h.1l-31 .2zm49.6 24.4h-.5c-.3 0-.5-.1-.8-.1-.2 0-.3 0-.5-.1-.3 0-.6-.1-1-.2h-.3c-.4-.1-.8-.2-1.2-.2-.1 0-.2 0-.3-.1-.3-.1-.6-.1-.9-.2-.1 0-.3-.1-.4-.1-.2-.1-.5-.1-.7-.2-.2 0-.3-.1-.5-.2s-.5-.2-.7-.2c-.2-.1-.3-.1-.5-.2s-.4-.2-.7-.3c-.2-.1-.3-.1-.5-.2l-.6-.3c-.2-.1-.3-.1-.5-.2l-.6-.3c-.2-.1-.3-.2-.5-.2l-.6-.3c-.2-.1-.3-.2-.4-.2-.2-.1-.4-.2-.6-.4-.1-.1-.3-.2-.4-.3-.2-.1-.4-.3-.6-.4-.1-.1-.2-.2-.4-.2-.2-.2-.5-.3-.7-.5-.1-.1-.2-.1-.3-.2-.3-.2-.6-.5-.9-.7l-.1-.1c-.3-.2-.5-.4-.8-.7l-.3-.3c-.2-.2-.4-.3-.6-.5-.1-.1-.2-.2-.4-.3l-.5-.5c-.1-.1-.2-.3-.4-.4l-.5-.5c-.1-.1-.2-.3-.4-.4-.1-.2-.3-.3-.4-.5-.1-.1-.2-.3-.3-.4-.1-.2-.3-.3-.4-.5-.1-.2-.2-.3-.3-.4-.1-.2-.2-.3-.4-.5-.1-.2-.2-.3-.3-.5-.1-.2-.2-.4-.4-.5-.1-.2-.2-.3-.3-.5l-.3-.6c-.1-.2-.2-.3-.3-.5l-.3-.6c-.1-.2-.2-.3-.2-.5-.1-.2-.2-.5-.4-.7-.1-.1-.1-.2-.2-.4-.2-.4-.3-.7-.5-1.1-.1-.2-.1-.3-.2-.5s-.2-.5-.3-.7c-.1-.2-.1-.3-.2-.5s-.2-.4-.2-.7c-.1-.2-.1-.4-.2-.5 0-.2-.1-.3-.1-.5 12.7.7 23.4 9.5 26.7 21.7.5.1.3.1.1.1z" fill="#333"></path>
    <path d="M26.561 29.294c0 .2.1.3.1.5.1.2.1.4.2.5.1.2.1.4.2.7.1.2.1.3.2.5s.2.5.3.7c.1.2.1.3.2.5.1.4.3.7.5 1.1.1.1.1.2.2.4s.2.5.4.7c.1.2.2.3.2.5l.3.6c.1.2.2.3.3.5l.3.6c.1.2.2.3.3.5.1.2.2.4.4.5.1.2.2.3.3.5.1.2.2.4.4.5.1.2.2.3.3.4.1.2.3.3.4.5.1.2.2.3.3.4.1.2.3.3.4.5.1.1.2.3.4.4l.5.5c.1.1.2.3.4.4l.5.5c.1.1.2.2.4.3.2.2.4.3.6.5l.3.3c.3.2.5.4.8.7l.1.1c.3.2.6.5.9.7.1.1.2.1.3.2.2.2.5.3.7.5.1.1.2.2.4.2.2.1.4.3.6.4.1.1.3.2.4.3.2.1.4.2.6.4.2.1.3.2.4.2l.6.3c.2.1.3.2.5.2l.6.3c.2.1.3.1.5.2l.6.3c.2.1.3.1.5.2s.4.2.7.3c.2.1.3.1.5.2s.5.2.7.2c.2 0 .3.1.5.2s.5.2.7.2c.1 0 .3.1.4.1.3.1.6.2.9.2.1 0 .2.1.3.1.4.1.8.2 1.2.2h.3c.3.1.6.1 1 .2.2 0 .3 0 .5.1.3 0 .5.1.8.1h1c-3.9-12.3-14.6-21.1-27.3-21.8z" fill="#fff"></path>
  </svg>
);

// Leeway Logo Component
const LeewayLogo: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg 
    focusable="false" 
    aria-hidden="true" 
    viewBox="0 0 425.19685 113.38583" 
    aria-label="Leeway logo"
    className={className}
  >
    <path d="M131.162 77.769v8.799h-36.31V24.579h9.077v53.19ZM311.54 40.313l-15.284 46.314h-9.077l-10.375-32.512-10.374 32.512h-9.078l-15.284-46.314h9.263l10.56 34.366 10.375-34.366h9.076l10.376 34.366 10.56-34.366ZM373.013 90.796h10.19a10.542 10.542 0 0 0 9.54 5.558c7.132 0 11.208-4.724 11.208-10.93v-2.502a15.272 15.272 0 0 1-11.208 4.447c-11.856 0-20.379-7.132-20.379-22.695V40.313h9.078v24.361c0 9.448 4.076 13.895 11.301 13.895 7.132 0 11.3-4.354 11.3-13.34V40.314h9.077v43.998c0 11.857-8.52 20.842-20.377 20.842-9.54 0-16.58-5.835-19.73-14.357ZM213.236 78.57c-7.448 0-12.974-4.841-13.78-11.618l-.023-.323V66h37.51a29.289 29.289 0 0 0 .191-3.364c-.463-14.357-11.95-23.064-23.898-23.064-13.338 0-23.528 10.93-23.528 23.99a23.68 23.68 0 0 0 23.806 23.806 24.289 24.289 0 0 0 21.675-13.339l-10.837-.092a14.642 14.642 0 0 1-11.116 4.631Zm.278-30.198a14.545 14.545 0 0 1 13.894 11.023h-27.974a14.278 14.278 0 0 1 14.08-11.023ZM158.075 78.57c-7.448 0-12.974-4.841-13.779-11.618l-.024-.323V66h37.51a29.289 29.289 0 0 0 .191-3.364c-.463-14.357-11.95-23.064-23.898-23.064-13.338 0-23.527 10.93-23.527 23.99a23.68 23.68 0 0 0 23.805 23.806 24.289 24.289 0 0 0 21.675-13.339l-10.836-.092a14.642 14.642 0 0 1-11.117 4.631Zm.278-30.198a14.545 14.545 0 0 1 13.895 11.023h-27.974a14.278 14.278 0 0 1 14.08-11.023Z"></path>
    <path d="M324.256 60.75a14.673 14.673 0 0 1 14.672-12.378 14.463 14.463 0 0 1 14.493 12.377h9.057a23.836 23.836 0 0 0-47.376 0Z" fill="#179e80"></path>
    <path d="M353.445 66a14.54 14.54 0 0 1-14.517 12.57A14.747 14.747 0 0 1 324.231 66h-9.158a23.899 23.899 0 0 0 23.762 21.369c6.577 0 12.505-3.52 14.729-8.06v7.318h9.077V66ZM21.335 87.09A15.047 15.047 0 0 1 36.53 72.016c8.581 0 14.847 6.632 15.007 15.074h9.164a24.314 24.314 0 0 0-48.625 0Z"></path>
    <path d="M21.335 33.791A15.047 15.047 0 0 0 36.53 48.866c8.581 0 14.847-6.632 15.007-15.075h9.164a24.314 24.314 0 0 1-48.625 0Z" fill="#179e80"></path>
  </svg>
);

export const Hero: React.FC = () => {
  const { isOpen: isCalendlyOpen, openModal: openCalendly, closeModal: closeCalendly } = useCalendlyModal();

  return (
    <>
      <div className="relative min-h-screen flex flex-col items-center justify-center pt-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 z-10">
          {/* Centered Case Study Badge */}
          <div className="flex justify-center lg:mt-0 mb-8 mt-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-neutral-900 text-white text-sm font-medium shadow-lg">
              <span>New case study:</span>
              <a href="#" className="ml-2 underline hover:text-neutral-200 transition-colors">Enjoy the reading here</a>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 py-4">
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="space-y-4 max-w-2xl">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-neutral-100 text-neutral-900 text-sm">
                  <span className="flex h-2 w-2 rounded-full bg-neutral-900 mr-2"></span>
                  <span>E-Commerce & SaaS Experts</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight">
                  Transforming Ideas Into <span className="text-white [text-shadow:_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000]">Digital Solutions</span>
                </h1>
                <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">
                  We build exceptional digital experiences that drive growth and help businesses succeed in the modern digital landscape.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="primary" 
                  size="lg" 
                  onClick={openCalendly}
                  className="bg-neutral-900 hover:bg-neutral-800"
                >
                  Book a Free Consultation
                  <ArrowRight size={20} />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  href="#services"
                  className="border-neutral-900 text-neutral-900 hover:bg-neutral-50"
                >
                  Explore Our Services
                </Button>
              </div>
              
              <div className="pt-8">
                <p className="text-neutral-900 font-medium mb-6">Trusted by innovative companies</p>
                <div className="flex flex-wrap gap-8 items-center">
                  <a 
                    href="https://digitaltoucan.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="transition-opacity hover:opacity-70"
                    aria-label="Digital Toucan"
                  >
                    <DigitalToucanLogo className="h-8 w-auto text-neutral-700" />
                  </a>
                  <a 
                    href="https://leeway.tech" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="transition-opacity hover:opacity-70"
                    aria-label="Leeway"
                  >
                    <LeewayLogo className="h-8 w-auto text-neutral-700" />
                  </a>
                  <a 
                    href="https://www.tin.info" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="transition-opacity hover:opacity-70"
                    aria-label="The Intelligent Network"
                  >
                    <img 
                      src="/TIN-logo.ee74632b.webp" 
                      alt="The Intelligent Network" 
                      className="h-8 w-auto"
                    />
                  </a>
                  <a 
                    href="https://www.musicscoodle.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="transition-opacity hover:opacity-70"
                    aria-label="MusicScoodle"
                  >
                    <img 
                      src="/musicscoodle-logo.94cfaecd.webp" 
                      alt="MusicScoodle" 
                      className="h-8 w-auto"
                    />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 lg:pl-8">
              <div className="relative bg-neutral-50 rounded-2xl p-8 shadow-xl border border-neutral-200 transform transition-transform hover:translate-y-[-5px]">
                <h3 className="text-2xl font-bold text-neutral-900 mb-6">Why Choose Varbintech?</h3>
                <div className="space-y-4">
                  {[
                    'Expertise in modern web technologies',
                    'Custom solutions tailored to your business',
                    'Scalable architecture for future growth',
                    'Strategic approach focused on ROI',
                    'Ongoing support and maintenance'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <Check size={18} className="text-neutral-900" />
                      </div>
                      <p className="ml-3 text-neutral-700">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Button 
                    variant="primary" 
                    size="md"
                    href="#testimonials"
                    className="w-full bg-neutral-900 text-white hover:bg-neutral-800"
                  >
                    See Client Success Stories
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CalendlyModal isOpen={isCalendlyOpen} onClose={closeCalendly} />
    </>
  );
};
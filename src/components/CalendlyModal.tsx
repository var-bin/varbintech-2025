import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CalendlyModal: React.FC<CalendlyModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const calendlyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Load Calendly widget script
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        if (window.Calendly && calendlyRef.current) {
          window.Calendly.initInlineWidget({
            url: 'https://calendly.com/varbincom/dc15-30',
            parentElement: calendlyRef.current,
            prefill: {},
            utm: {}
          });
        }
      };

      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';

      // Handle ESC key
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      document.addEventListener('keydown', handleEsc);

      return () => {
        document.removeEventListener('keydown', handleEsc);
        document.body.style.overflow = 'unset';
        
        // Clean up Calendly script
        const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
        if (existingScript) {
          existingScript.remove();
        }
      };
    }
  }, [isOpen, onClose]);

  // Handle backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === modalRef.current) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in-0 zoom-in-95 duration-300">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-200">
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">Book Your Free Consultation</h2>
            <p className="text-neutral-600 mt-1">Schedule a 30-minute call with our experts</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-neutral-100 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2"
            aria-label="Close modal"
          >
            <X size={24} className="text-neutral-600" />
          </button>
        </div>

        {/* Calendly Widget Container */}
        <div className="h-[600px] overflow-hidden">
          <div 
            ref={calendlyRef}
            className="calendly-inline-widget h-full w-full"
            data-url="https://calendly.com/varbincom/dc15-30"
          />
        </div>

        {/* Footer */}
        <div className="p-6 bg-neutral-50 border-t border-neutral-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-neutral-600">
              <p>✓ No obligation consultation</p>
              <p>✓ Expert guidance and insights</p>
              <p>✓ Custom project roadmap</p>
            </div>
            <div className="text-sm text-neutral-500">
              Powered by Calendly
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Extend Window interface for Calendly
declare global {
  interface Window {
    Calendly: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
        prefill: Record<string, any>;
        utm: Record<string, any>;
      }) => void;
    };
  }
}
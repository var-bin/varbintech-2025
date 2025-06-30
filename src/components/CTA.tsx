import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { CalendlyModal } from './CalendlyModal';
import { useCalendlyModal } from '../hooks/useCalendlyModal';
import { LinkedInIcon } from './SocialIcons';

export const CTA: React.FC = () => {
  const { isOpen: isCalendlyOpen, openModal: openCalendly, closeModal: closeCalendly } = useCalendlyModal();

  return (
    <>
      <section id="contact" className="py-24 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Ready to Transform Your Digital Presence?</h2>
                <p className="text-lg text-neutral-600 mb-8">
                  Book a free 30-minute consultation with our experts to discuss your project needs and goals. No strings attached - just valuable insights and a clear path forward.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-neutral-900 flex items-center justify-center mt-1">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-neutral-900 mb-1">Expert Analysis</h4>
                      <p className="text-neutral-600">Get professional insights on your current digital strategy and opportunities for improvement.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-neutral-900 flex items-center justify-center mt-1">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-neutral-900 mb-1">Custom Roadmap</h4>
                      <p className="text-neutral-600">Receive a tailored project plan with clear next steps and realistic timelines.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-neutral-900 flex items-center justify-center mt-1">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-neutral-900 mb-1">No Obligation</h4>
                      <p className="text-neutral-600">Our consultation is completely free with no pressure to commit to anything.</p>
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={openCalendly}
                  className="cta-button relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-neutral-800 rounded-lg transition-all duration-300 transform translate-y-[-2px] shadow-lg hover:bg-neutral-700 hover:translate-y-[-4px] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2"
                >
                  Book Your Free Consultation
                  <ArrowRight size={20} className="ml-2" />
                </button>
                
                <p className="text-neutral-500 text-sm mt-4">
                  We'll get back to you within 24 hours.
                </p>
              </div>
              
              <div className="relative bg-neutral-900 p-8 md:p-12 lg:p-16 text-white flex flex-col justify-center">
                <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDRjMCAyLjIxIDEuNzkgNCA0IDRzNC0xLjc5IDQtNHptLTQgMmMtMS4xIDAtMi0uOS0yLTJzLjktMiAyLTIgMiAuOSAyIDItLjkgMi0yIDJ6Ii8+PHBhdGggZD0iTTQwIDMwYy0yLjIxIDAtNCAxLjc5LTQgNHMxLjc5IDQgNCA0IDQtMS43OSA0LTQtMS43OS00LTQtNHptMCA2Yy0xLjEgMC0yLS45LTItMnMuOS0yIDItMiAyIC45IDIgMi0uOSAyLTIgMnoiLz48cGF0aCBkPSJNNDQgMjRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDRjMCAyLjIxIDEuNzkgNCA0IDRzNC0xLjc5IDQtNHptLTQgMmMtMS4xIDAtMi0uOS0yLTJzLjktMiAyLTIgMiAuOSAyIDItLjkgMi0yIDJ6Ii8+PHBhdGggZD0iTTIwIDI0YzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0YzAgMi4yMSAxLjc5IDQgNCA0czQtMS43OSA0LTR6bS00IDJjLTEuMSAwLTItLjktMi0ycy45LTIgMi0yIDIgLjkgMiAyLS45IDItMiAyeiIvPjxwYXRoIGQ9Ik0yNCAzMGMtMi4yMSAwLTQgMS43OS00IDRzMS43OSA0IDQgNCA0LTEuNzkgNC00LTEuNzktNC00LTR6bTAgNmMtMS4xIDAtMi0uOS0yLTJzLjktMiAyLTIgMiAuOSAyIDItLjkgMi0yIDJ6Ii8+PHBhdGggZD0iTTMyIDQ0YzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0YzAgMi4yMSAxLjc5IDQgNCA0czQtMS43OSA0LTR6bS00IDJjLTEuMSAwLTItLjktMi0ycy45LTIgMi0yIDIgLjkgMiAyLS45IDItMiAyeiIvPjxwYXRoIGQ9Ik0yOCAyNGMtMi4yMSAwLTQgMS43OS00IDRzMS43OSA0IDQgNCA0LTEuNzkgNC00LTEuNzktNC00LTR6bTAgNmMtMS4xIDAtMi0uOS0yLTJzLjktMiAyLTIgMiAuOSAyIDItLjkgMi0yIDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] -z-10"></div>
                
                <h3 className="text-2xl font-bold mb-6">What You'll Get</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Strategic Assessment</h4>
                    <p className="text-neutral-300">
                      Comprehensive review of your current digital presence and competitive landscape.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Technology Recommendations</h4>
                    <p className="text-neutral-300">
                      Expert advice on the best tech stack and architecture for your specific needs.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Project Roadmap</h4>
                    <p className="text-neutral-300">
                      Detailed timeline with milestones, deliverables, and realistic budget estimates.
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                  <p className="text-neutral-100 italic">
                    "The consultation alone provided tremendous value. Varbintech quickly understood our needs and outlined a clear path forward."
                  </p>
                  <div className="flex flex-col justify-between mt-4">
                    <div className="flex flex-col items-end gap-3">
                      <div className="flex items-center gap-3">
                        <p className="text-white font-medium">— David Wilson</p>
                        <a 
                          href="https://www.linkedin.com/in/dwil23" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-white hover:text-neutral-300 transition-colors"
                          aria-label="Connect with David Wilson on LinkedIn"
                        >
                          <LinkedInIcon size={20} />
                        </a>
                      </div>
                      <div className="flex self-end">
                        CEO at&nbsp;<a 
                          href="https://www.fosway.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-white font-medium underline hover:text-neutral-200 transition-colors"
                        >
                          Fosway Group
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CalendlyModal isOpen={isCalendlyOpen} onClose={closeCalendly} />
    </>
  );
};
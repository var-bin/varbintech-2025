import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

function App() {
  useEffect(() => {
    // Update page title
    document.title = 'Varbintech | Custom Web Development Solutions';
    
    // Add smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href') as string;
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);
  
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Testimonials />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
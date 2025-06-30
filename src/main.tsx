import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Animation observer for scroll animations
function setupScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        
        // Add stagger effect to children if needed
        const staggerItems = entry.target.querySelectorAll('.stagger-item');
        staggerItems.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add('stagger-visible');
          }, index * 100);
        });
      }
    });
  }, { threshold: 0.1 });
  
  // Observe all elements with animation class
  document.querySelectorAll('.animate-on-scroll').forEach(element => {
    observer.observe(element);
  });
  
  return observer;
}

// Component with animation setup
function AppWithAnimations() {
  useEffect(() => {
    const observer = setupScrollAnimations();
    return () => observer.disconnect();
  }, []);
  
  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
}

createRoot(document.getElementById('root')!).render(<AppWithAnimations />);
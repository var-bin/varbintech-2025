import React from 'react';
import { Code, Globe, Server, Cloud, LineChart, LayoutDashboard } from 'lucide-react';
import { Button } from './Button';

const services = [
  {
    icon: <Code size={24} />,
    title: 'Custom Web Development',
    description: 'Bespoke web applications built with modern frameworks and best practices to meet your specific business needs.',
  },
  {
    icon: <Globe size={24} />,
    title: 'Responsive Web Design',
    description: 'Beautiful, functional websites that provide an optimal viewing experience across all devices and screen sizes.',
  },
  {
    icon: <Server size={24} />,
    title: 'API Development',
    description: 'Robust and scalable APIs that connect your services and enable seamless third-party integrations.',
  },
  {
    icon: <Cloud size={24} />,
    title: 'SaaS Solutions',
    description: 'Complete Software-as-a-Service platforms with user management, billing, analytics, and scalable cloud infrastructure.',
  },
  {
    icon: <LineChart size={24} />,
    title: 'Performance Optimization',
    description: 'Speed up your digital products with our expert optimization services for maximum efficiency.',
  },
  {
    icon: <LayoutDashboard size={24} />,
    title: 'E-commerce Solutions',
    description: 'End-to-end e-commerce implementations with secure payment processing and inventory management.',
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Our Specialized Services</h2>
          <p className="text-lg text-neutral-600">
            We deliver comprehensive web development solutions to help your business thrive in the digital world
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-item relative bg-neutral-50 p-8 rounded-xl shadow-sm border border-neutral-100 transition-all duration-300 hover:shadow-md hover:translate-y-[-5px] group"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary-100 text-primary-600 mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">{service.title}</h3>
              <p className="text-neutral-600 mb-6">{service.description}</p>
              <Button 
                variant="text" 
                href="#contact"
                className="text-primary-600 hover:text-primary-700 p-0 hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-[#141629] focus:ring-offset-2 rounded hover:ring-2 hover:ring-[#141629] hover:ring-offset-2 rounded"
              >
                Learn more →
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button 
            variant="primary" 
            size="lg" 
            href="#contact"
          >
            Discuss Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};
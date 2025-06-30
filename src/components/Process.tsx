import React from 'react';
import { Lightbulb, MessageSquare, Code2, Gauge, CheckCircle2, ArrowDown } from 'lucide-react';

const steps = [
  {
    icon: <Lightbulb size={50} />,
    title: 'Discovery',
    description: 'We start by understanding your business goals, target audience, and project requirements.',
  },
  {
    icon: <MessageSquare size={50} />,
    title: 'Planning',
    description: 'Our team creates a detailed roadmap with timelines, milestones, and deliverables.',
  },
  {
    icon: <Code2 size={50} />,
    title: 'Development',
    description: 'We build your solution using clean, maintainable code and modern development practices.',
  },
  {
    icon: <Gauge size={50} />,
    title: 'Testing',
    description: 'Rigorous quality assurance ensures your product meets our high standards.',
  },
  {
    icon: <CheckCircle2 size={50} />,
    title: 'Deployment',
    description: 'We launch your solution and provide training for your team.',
  },
];

export const Process: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Our Development Process</h2>
          <p className="text-lg text-neutral-600">
            We follow a proven, structured approach to deliver successful projects every time
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex flex-col md:flex-row items-center gap-3 lg:gap-6 mb-4 lg:mb-12 relative development-process-item"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-[50px] top-[100px] bottom-0 w-0.5 bg-neutral-200"></div>
              )}
              
              {/* Icon */}
              <div className="process-icon relative w-[100px] h-[100px] flex items-center justify-center rounded-full bg-neutral-100 text-neutral-900 z-10 transition-all duration-300 hover:transform hover:translate-y-[-3px] group">
                {step.icon}
              </div>
              
              {/* Content */}
              <div className="md:ml-4 flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{step.title}</h3>
                <p className="text-neutral-600">{step.description}</p>
              </div>
              
              {/* Arrow for mobile */}
              {index < steps.length - 1 && (
                <div className="md:hidden mt-4 mb-8">
                  <ArrowDown size={24} className="text-neutral-300" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
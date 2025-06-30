import React from 'react';
import { Check, X } from 'lucide-react';
import { Button } from './Button';

const plans = [
  {
    name: 'Website',
    description: 'Perfect for small businesses needing a professional online presence',
    price: '$4,999',
    features: [
      'Custom responsive design',
      'Up to 10 pages',
      'Contact form',
      'Basic SEO optimization',
      'Content management system',
      '2 rounds of revisions',
      '1 month of support',
    ],
    notIncluded: [
      'E-commerce functionality',
      'Custom database',
      'API integrations',
    ],
    accent: false,
  },
  {
    name: 'Web Application',
    description: 'Ideal for businesses needing interactive web functionality',
    price: '$9,999',
    features: [
      'Everything in Website package',
      'User authentication',
      'Database design & implementation',
      'Custom functionality',
      'Basic API integrations',
      'Admin dashboard',
      '3 months of support',
    ],
    notIncluded: [
      'Complex payment processing',
      'Advanced analytics',
    ],
    accent: true,
  },
  {
    name: 'Enterprise Solution',
    description: 'Comprehensive custom solution for complex business needs',
    price: 'Custom',
    features: [
      'Everything in Web Application',
      'Advanced security features',
      'Scalable architecture',
      'Multiple API integrations',
      'Payment processing',
      'Advanced analytics',
      'Custom admin features',
      '6 months of support',
    ],
    notIncluded: [],
    accent: false,
  },
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Transparent Pricing</h2>
          <p className="text-lg text-neutral-600">
            No hidden fees. Choose the package that fits your business needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${
                plan.accent 
                  ? 'border-2 border-primary-500 relative transform translate-y-[-8px]' 
                  : 'border border-neutral-200'
              }`}
            >
              {plan.accent && (
                <div className="bg-primary-500 text-white text-center py-2 font-medium text-sm">
                  Most Popular
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">{plan.name}</h3>
                <p className="text-neutral-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-3xl font-bold text-neutral-900">{plan.price}</span>
                  {!plan.price.includes('Custom') && <span className="text-neutral-600"> / project</span>}
                </div>
                
                <Button 
                  variant={plan.accent ? 'primary' : 'outline'}
                  href="#contact"
                  className="w-full mb-8"
                >
                  Get Started
                </Button>
                
                <div className="space-y-4">
                  <p className="font-medium text-neutral-900">What's included:</p>
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <Check size={18} className="text-success-500 mt-0.5 flex-shrink-0" />
                      <span className="ml-3 text-neutral-700">{feature}</span>
                    </div>
                  ))}
                  
                  {plan.notIncluded.length > 0 && (
                    <>
                      <p className="font-medium text-neutral-900 mt-6">Not included:</p>
                      {plan.notIncluded.map((feature, i) => (
                        <div key={i} className="flex items-start">
                          <X size={18} className="text-neutral-400 mt-0.5 flex-shrink-0" />
                          <span className="ml-3 text-neutral-500">{feature}</span>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-neutral-600 mb-4">Need a custom solution? We can help!</p>
          <Button 
            variant="secondary" 
            size="lg" 
            href="#contact"
          >
            Contact for Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};
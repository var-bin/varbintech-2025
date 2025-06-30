import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-neutral-200 py-5">
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-neutral-900">{question}</h3>
        <span className="ml-4 flex-shrink-0">
          {isOpen ? (
            <Minus size={20} className="text-primary-600" />
          ) : (
            <Plus size={20} className="text-primary-600" />
          )}
        </span>
      </button>
      <div 
        className={`mt-2 transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-neutral-600">{answer}</p>
      </div>
    </div>
  );
};

const faqs = [
  {
    question: "How long does a typical web development project take?",
    answer: "Project timelines vary based on complexity and scope. A simple website might take 4-6 weeks, while a complex web application could take 3-6 months. During our initial consultation, we'll provide a detailed timeline based on your specific requirements."
  },
  {
    question: "What technologies do you use?",
    answer: "We work with modern web technologies including React, Vue, Angular, Node.js, and various backend frameworks. Our stack is chosen based on your project's specific needs rather than a one-size-fits-all approach."
  },
  {
    question: "How much does a website or web application cost?",
    answer: "Pricing depends on the complexity, features, and timeline of your project. Our website packages start at $4,999, while web applications start at $9,999. For enterprise solutions, we provide custom quotes based on your requirements."
  },
  {
    question: "Do you offer ongoing maintenance and support?",
    answer: "Yes, we offer various maintenance packages to keep your website or application secure, up-to-date, and functioning optimally. All our projects include an initial support period, and extended support can be arranged based on your needs."
  },
  {
    question: "Can you help with an existing project or do you only build from scratch?",
    answer: "We can help with both! Whether you need to enhance an existing website, fix issues, or build something entirely new, our team has the expertise to assist you."
  },
  {
    question: "What is your payment structure?",
    answer: "We typically work with a 50% upfront deposit and the remaining 50% upon project completion. For larger projects, we can arrange milestone-based payments to spread the cost throughout the development process."
  },
];

export const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-24 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-neutral-600">
            Get answers to common questions about our services and process
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8">
          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <FAQItem 
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-neutral-600 mb-4">Don't see your question?</p>
          <a 
            href="#contact" 
            className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
          >
            Contact us for more information →
          </a>
        </div>
      </div>
    </section>
  );
};
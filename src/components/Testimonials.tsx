import React from 'react';
import { Star } from 'lucide-react';
import { LinkedInIcon } from './SocialIcons';

const testimonials = [
  {
    content: "Working with Varbintech transformed our business. Their team delivered a solution that exceeded our expectations and helped us increase conversions by 35%.",
    author: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc.",
    companyUrl: "https://techstart.com",
    linkedinUrl: "https://linkedin.com/in/sarah-johnson",
    rating: 5,
  },
  {
    content: "The Varbintech team is exceptional. They not only built our platform on time and within budget, but also provided strategic insights that improved our overall business model.",
    author: "Michael Chen",
    role: "CTO",
    company: "GrowthMetrics",
    companyUrl: "https://growthmetrics.com",
    linkedinUrl: "https://linkedin.com/in/michael-chen",
    rating: 5,
  },
  {
    content: "We've worked with several development agencies, but Varbintech stands out for their technical expertise and professionalism. They're now our go-to partner for all web projects.",
    author: "Emma Rodriguez",
    role: "Marketing Director",
    company: "InnovateX",
    companyUrl: "https://innovatex.com",
    linkedinUrl: "https://linkedin.com/in/emma-rodriguez",
    rating: 5,
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-neutral-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-neutral-300">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="testimonial-item relative bg-white/5 p-8 rounded-xl border border-white/10 transition-all duration-300 hover:transform hover:translate-y-[-5px] group"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-white fill-white" />
                ))}
              </div>
              <p className="text-neutral-100 mb-6">"{testimonial.content}"</p>
              <div>
                <div className="flex items-center justify-start gap-3">
                  <p className="font-bold text-white">{testimonial.author}</p>
                  <a 
                    href={testimonial.linkedinUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white hover:text-neutral-300 transition-colors"
                    aria-label={`Connect with ${testimonial.author} on LinkedIn`}
                  >
                    <LinkedInIcon size={20} />
                  </a>
                </div>
                <p className="text-neutral-400 text-sm mt-1">
                  {testimonial.role} at <a href={testimonial.companyUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">{testimonial.company}</a>
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="testimonial-button relative inline-flex items-center px-6 py-3 rounded-full bg-white/5 border border-white/10 transition-all duration-300 hover:transform hover:translate-y-[-2px] group">
            <span className="text-white">Ready to start your project?</span>
            <a href="#contact" className="ml-4 font-medium text-white hover:text-neutral-200 transition-colors">
              Contact us today →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
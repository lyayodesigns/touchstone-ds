
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const PricingSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Animated rocket icon */}
      <div className="absolute top-20 left-32 opacity-70 animate-float">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.6997 2.00214C12.9382 2.00214 12.2267 2.46157 11.7536 3.27407L6.26469 12.7304C5.43584 14.1652 5.84355 16.0542 7.24303 16.941L8.07188 17.4645C8.42073 17.6872 8.82844 17.799 9.2497 17.799H14.7386C16.3847 17.799 17.6885 16.4311 17.6885 14.7439V6.50386C17.6885 5.15842 17.269 3.92456 16.5325 3.27407C15.8694 2.4001 14.4728 2.00214 13.6997 2.00214Z" stroke="#9b87f5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17.7001 7.05566C18.6 7.05566 19.125 6.55566 19.5 5.55566" stroke="#9b87f5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9.24998 17.7988H14.7386C16.3848 17.7988 17.6886 16.4309 17.6886 14.7437V14.3542" stroke="#9b87f5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10.5 21C12.1569 21 13.5 19.6569 13.5 18C13.5 16.3431 12.1569 15 10.5 15C8.84315 15 7.5 16.3431 7.5 18C7.5 19.6569 8.84315 21 10.5 21Z" stroke="#9b87f5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      
      {/* Animated rocket icon */}
      <div className="absolute top-40 right-52 opacity-70 animate-float">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.6997 2.00214C12.9382 2.00214 12.2267 2.46157 11.7536 3.27407L6.26469 12.7304C5.43584 14.1652 5.84355 16.0542 7.24303 16.941L8.07188 17.4645C8.42073 17.6872 8.82844 17.799 9.2497 17.799H14.7386C16.3847 17.799 17.6885 16.4311 17.6885 14.7439V6.50386C17.6885 5.15842 17.269 3.92456 16.5325 3.27407C15.8694 2.4001 14.4728 2.00214 13.6997 2.00214Z" stroke="#33C3F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17.7001 7.05566C18.6 7.05566 19.125 6.55566 19.5 5.55566" stroke="#33C3F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9.24998 17.7988H14.7386C16.3848 17.7988 17.6886 16.4309 17.6886 14.7437V14.3542" stroke="#33C3F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10.5 21C12.1569 21 13.5 19.6569 13.5 18C13.5 16.3431 12.1569 15 10.5 15C8.84315 15 7.5 16.3431 7.5 18C7.5 19.6569 8.84315 21 10.5 21Z" stroke="#33C3F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      
      <div className="container px-4 mx-auto text-center">
        <p className="text-sm text-indigo-400 font-medium mb-2">One Price for Everything</p>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          The simplest pricing in the industry.
        </h2>
        
        <p className="text-xl md:text-2xl mb-10">
          You won't need a <span className="text-gray-400">calculator for this.</span>
        </p>
        
        <div className="flex justify-center mb-16">
          <Button className="px-8 py-6 h-auto">Get Started</Button>
        </div>
        
        <div className="max-w-md mx-auto bg-card border border-white/10 rounded-xl p-8 relative overflow-hidden">
          {/* Small rocket decoration */}
          <div className="absolute top-2 right-2 opacity-70">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.6997 2.00214C12.9382 2.00214 12.2267 2.46157 11.7536 3.27407L6.26469 12.7304C5.43584 14.1652 5.84355 16.0542 7.24303 16.941L8.07188 17.4645C8.42073 17.6872 8.82844 17.799 9.2497 17.799H14.7386C16.3847 17.799 17.6885 16.4311 17.6885 14.7439V6.50386C17.6885 5.15842 17.269 3.92456 16.5325 3.27407C15.8694 2.4001 14.4728 2.00214 13.6997 2.00214Z" stroke="#9b87f5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17.7001 7.05566C18.6 7.05566 19.125 6.55566 19.5 5.55566" stroke="#9b87f5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9.24998 17.7988H14.7386C16.3848 17.7988 17.6886 16.4309 17.6886 14.7437V14.3542" stroke="#9b87f5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10.5 21C12.1569 21 13.5 19.6569 13.5 18C13.5 16.3431 12.1569 15 10.5 15C8.84315 15 7.5 16.3431 7.5 18C7.5 19.6569 8.84315 21 10.5 21Z" stroke="#9b87f5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <div className="text-left mb-4">
            <p className="text-sm">
              Join thousands of successful entrepreneurs and businesses who rely on us to grow, optimize, and thrive.
            </p>
          </div>
          
          <div className="flex items-end gap-2 mb-6">
            <span className="text-4xl font-bold">$25</span>
            <div className="text-sm text-indigo-400 mb-1">
              <div>/ Month</div>
              <div>Billed Monthly</div>
            </div>
          </div>
          
          <div className="text-left mb-6">
            <p className="text-sm font-medium mb-3">What's included:</p>
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 text-indigo-400 mt-0.5" />
              <p className="text-sm">Complete access to the platform and support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

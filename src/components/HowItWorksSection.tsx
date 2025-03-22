
import React from 'react';
import { Button } from '@/components/ui/button';

const HowItWorksSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-sm text-indigo-400 font-medium mb-2">How it works</p>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Let <span className="text-indigo-400">Michael</span> Take Over
            </h2>
            
            <p className="text-sm text-gray-400 mb-10">
              Work efficiently and align your tech stack with the right sales AI 
              tool and AI sales team assistant made to support every step of the 
              B2B sales journey, designed for the modern sales team.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-indigo-400/20 flex items-center justify-center text-indigo-400 text-sm font-medium">
                    01
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Sign up</h3>
                  <p className="text-sm text-gray-400">
                    Launch our App, sign up, and log into Agilepitch to use our sales AI tool.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-indigo-400/20 flex items-center justify-center text-indigo-400 text-sm font-medium">
                    02
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Integrate your Tech Stack</h3>
                  <p className="text-sm text-gray-400">
                    Access consistent, real-time data across tools, automate repetitive tasks
                    across platforms, and view customer interactions and sales performance.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-indigo-400/20 flex items-center justify-center text-indigo-400 text-sm font-medium">
                    03
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Manage your Business</h3>
                  <p className="text-sm text-gray-400">
                    Leverage sales intelligence and engagement platforms to manage your
                    activities and propel your business toward a better future.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <Button variant="outline" className="border-indigo-400/30 hover:border-indigo-400/70">
                GET STARTED
              </Button>
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md mx-auto">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-8">Contact Us</h3>
                
                <div className="text-2xl font-bold mb-8">Get in Touch</div>
              </div>
              
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-sm font-medium block text-left">
                    Full Name:
                  </label>
                  <input 
                    type="text" 
                    id="fullName" 
                    placeholder="Your full name ?" 
                    className="w-full rounded-md bg-background border border-white/10 px-4 py-2"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium block text-left">
                    Email:
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="Your email address ?" 
                    className="w-full rounded-md bg-background border border-white/10 px-4 py-2"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium block text-left">
                    Message:
                  </label>
                  <textarea 
                    id="message" 
                    placeholder="Type your message..." 
                    rows={5}
                    className="w-full rounded-md bg-background border border-white/10 px-4 py-2"
                  />
                </div>
                
                <Button type="submit" className="w-full py-6 h-auto">
                  Send
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

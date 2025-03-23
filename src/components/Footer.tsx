import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thank you for subscribing!");
      setEmail('');
    } else {
      toast.error("Please enter a valid email address");
    }
  };

  return (
    <footer className="py-12 border-t border-white/10 bg-background">
      {/* Subscription Section */}
      <div className="container px-4 md:px-6 mx-auto mb-12">
        <div className="flex flex-col md:flex-row items-start justify-between">
          <div className="mb-6 md:mb-0 max-w-md">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-background flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-purple-500"></div>
                </div>
              </div>
            </div>
            <h3 className="text-lg font-medium mb-2">Stay Updated on Digital Hall of Fame Innovations</h3>
            <p className="text-xs text-gray-400 mb-4">*By subscribing, you'll receive updates on our latest features and success stories.</p>
            
            <form onSubmit={handleSubscribe} className="flex gap-2 w-full">
              <Input
                type="email"
                placeholder="Your e-mail address"
                className="flex-grow bg-background border-white/10"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button type="submit" className="bg-purple-500 hover:bg-purple-600">Subscribe</Button>
            </form>
          </div>
          
          <div className="w-full md:w-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
              <div>
                <h4 className="text-sm font-medium mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="#products" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Digital Displays</a></li>
                  <li><a href="#solutions" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Hall of Fame Solutions</a></li>
                  <li><a href="#pricing" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Pricing</a></li>
                  <li><a href="#guide" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Implementation Guide</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li><a href="#privacy" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Privacy Policy</a></li>
                  <li><a href="#terms" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Terms & Conditions</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* About Section */}
      <div className="container px-4 md:px-6 mx-auto border-t border-white/10 pt-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-medium">TOUCHSTONE DIGITAL SOLUTIONS</span>
            </div>
            <p className="text-sm text-gray-400 max-w-md">
              Dynamic. Interactive. Unforgettable. - Creating digital Halls of Fame for schools, teams, and communities nationwide.
            </p>
            <div className="mt-4 space-y-2 text-sm text-gray-400">
              <p>📞 (603) 361-7541</p>
              <p>✉️ info@touchstone-ds.com</p>
              <p><a href="#demo" className="text-purple-400 hover:text-purple-300 transition-colors">🔗 Schedule a Demo</a></p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 pt-4">
          <div>
            Honoring the past. Inspiring the future.
          </div>
          <div>
            &copy; 2025 Touchstone Digital Solutions. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

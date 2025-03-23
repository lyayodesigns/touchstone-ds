import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? "py-3 bg-black/80 backdrop-blur-md border-b border-white/10" 
        : "py-5 bg-transparent"
    )}>
      <div className="container px-4 md:px-6 mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-background flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></div>
            </div>
          </div>
          <span className="font-display text-lg font-medium">TOUCHSTONE DIGITAL SOLUTIONS</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-sm opacity-80 hover:opacity-100 transition-opacity">About Us</a>
          <a href="#services" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Services</a>
          <a href="#portfolio" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Portfolio</a>
          <a href="#contact" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Contact Us</a>
        </nav>
        
        <div>
          <button className="bg-purple-500 text-white font-medium rounded-full px-5 py-2 text-sm transition-all hover:bg-purple-600">
            SCHEDULE A DEMO
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

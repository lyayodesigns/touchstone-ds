
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-background flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></div>
              </div>
            </div>
            <span className="font-display text-lg font-medium">AGILEPITCH.IO</span>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <a href="#products" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Products</a>
            <a href="#solutions" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Solutions</a>
            <a href="#pricing" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Pricing</a>
            <a href="#contact" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Contact Us</a>
            <a href="#privacy" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Privacy</a>
            <a href="#terms" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Terms</a>
          </nav>
        </div>
        
        <div className="text-center text-white/50 text-sm">
          © {new Date().getFullYear()} Agilepitch.io. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

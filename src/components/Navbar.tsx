import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { colors } from "@/styles/colors";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Check if the current path matches the link
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/' || location.pathname === '/home/';
    }
    return location.pathname.startsWith(path);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? `py-3 bg-white border-b border-gray-200 shadow-sm`
          : "py-5 bg-white/80 backdrop-blur-sm"
      )}
    >
      <div className="container px-4 md:px-6 mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
          <img
            src="/logo/logo-light.png"
            alt="Touchstone Digital Solutions"
            className="h-8 lg:h-10 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
          <a
            href="/"
            className={cn(
              "text-sm lg:text-base transition-colors whitespace-nowrap",
              isActive('/') 
                ? "text-gradient-purple-blue font-medium" 
                : "hover:text-gradient-purple-blue"
            )}
          >
            Home
          </a>
          <a
            href="/about/"
            className={cn(
              "text-sm lg:text-base transition-colors whitespace-nowrap",
              isActive('/about/') 
                ? "text-gradient-purple-blue font-medium" 
                : "hover:text-gradient-purple-blue"
            )}
          >
            About Us
          </a>
         
          <a
            href="/features/"
            className={cn(
              "text-sm lg:text-base transition-colors whitespace-nowrap",
              isActive('/features/') 
                ? "text-gradient-purple-blue font-medium" 
                : "hover:text-gradient-purple-blue"
            )}
          >
            Features
          </a>
          <a
            href="/contact/"
            className={cn(
              "text-sm lg:text-base transition-colors whitespace-nowrap",
              isActive('/contact/') 
                ? "text-gradient-purple-blue font-medium" 
                : "hover:text-gradient-purple-blue"
            )}
          >
            Contact
          </a>
          <a
            href="/faq/"
            className={cn(
              "text-sm lg:text-base transition-colors whitespace-nowrap",
              isActive('/faq/') 
                ? "text-gradient-purple-blue font-medium" 
                : "hover:text-gradient-purple-blue"
            )}
          >
            FAQ
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <button
            className="hidden md:block btn-gradient hover-lift font-medium rounded-full px-4 lg:px-5 py-2 text-sm lg:text-base whitespace-nowrap"
          >
            SCHEDULE A DEMO
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-black hover:text-black/80"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile menu overlay */}
        <div
          className={cn(
            `fixed inset-0 bg-white/95 backdrop-blur-md z-50 md:hidden transition-all duration-500`, 
            isMobileMenuOpen 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-8 pointer-events-none"
          )}
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
          
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 p-2 text-black/70 hover:text-black transition-colors rounded-full hover:bg-gray-100"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
          
          <div className="flex flex-col items-center justify-center h-full max-w-md mx-auto px-8">
            <div className="w-full space-y-6">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about/" },
                { name: "Features", href: "#products" },
                { name: "Contact", href: "#contact" }
              ].map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "block w-full py-3 text-lg font-medium border-b border-gray-100 transition-all hover:pl-2",
                    item.href.startsWith('#') 
                      ? "text-black/80 hover:text-black hover:text-gradient-purple-blue" 
                      : isActive(item.href)
                        ? "text-gradient-purple-blue"
                        : "text-black/80 hover:text-black hover:text-gradient-purple-blue"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ 
                    transitionDelay: `${index * 50}ms`,
                    opacity: isMobileMenuOpen ? 1 : 0,
                    transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)'
                  }}
                >
                  {item.name}
                </a>
              ))}
              
              <div 
                className="pt-8 w-full"
                style={{ 
                  transitionDelay: '250ms',
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)'
                }}
              >
                <button
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>SCHEDULE A DEMO</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute bottom-8 left-8 text-gray-200 text-5xl font-bold opacity-20">TDS</div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

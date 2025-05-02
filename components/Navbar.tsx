"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";
// import { colors } from "@/styles/colors";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  // SSR: Always render as not scrolled, mobile menu closed
  const isScrolled = false;
  const isMobileMenuOpen = false;

  // Helper to check if route is active
  const normalize = (p: string) => (p !== '/' ? p.replace(/\/$/, '') : '/');
  const isActive = (path: string) => {
    const current = normalize(pathname);
    const target = normalize(path);
    if (target === '/') {
      return current === '/';
    }
    return current === target || current.startsWith(target + '/');
  };

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
        <Link href="/" prefetch={true} className="flex items-center space-x-2 flex-shrink-0">
          <img
            src="/logo/logo-midnight.png"
            alt="Touchstone Digital Solutions"
            className="h-8 lg:h-10 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
          <Link
            href="/"
            prefetch={true}
            className={cn(
              "text-sm lg:text-base transition-colors whitespace-nowrap",
              isActive('/') 
                ? "text-gradient-purple-blue font-medium" 
                : "hover:text-gradient-purple-blue"
            )}
          >
            Home
          </Link>
          <Link
            href="/about/"
            prefetch={true}
            className={cn(
              "text-sm lg:text-base transition-colors whitespace-nowrap",
              isActive('/about/') 
                ? "text-gradient-purple-blue font-medium" 
                : "hover:text-gradient-purple-blue"
            )}
          >
            About Us
          </Link>
         
          <Link
            href="/features/"
            prefetch={true}
            className={cn(
              "text-sm lg:text-base transition-colors whitespace-nowrap",
              isActive('/features/') 
                ? "text-gradient-purple-blue font-medium" 
                : "hover:text-gradient-purple-blue"
            )}
          >
            Features
          </Link>
     
          <Link
            href="/faq/"
            prefetch={true}
            className={cn(
              "text-sm lg:text-base transition-colors whitespace-nowrap",
              isActive('/faq/') 
                ? "text-gradient-purple-blue font-medium" 
                : "hover:text-gradient-purple-blue"
            )}
          >
            FAQ
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <button
            className="hidden md:block btn-gradient hover-lift font-medium rounded-full px-4 lg:px-5 py-2 text-sm lg:text-base whitespace-nowrap"
            onClick={() => window.location.href = '/contact/'}
          >
            CONTACT US
          </button>
          <button
            className="hidden md:block btn-gradient hover-lift font-medium rounded-full px-4 lg:px-5 py-2 text-sm lg:text-base whitespace-nowrap"
            onClick={() => window.open('https://calendly.com/touchstone-ds/custom-guided-tour?atm_source=website', '_blank')}
          >
            SCHEDULE A DEMO
          </button>
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            aria-label="Open main menu"
            type="button"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile menu overlay */}
        <div
          className={cn(
            `fixed inset-0 bg-white z-50 md:hidden transition-all duration-300`, 
            isMobileMenuOpen 
              ? "opacity-100 top-0" 
              : "opacity-0 top-[-100%] pointer-events-none"
          )}
          style={{ backgroundColor: '#ffffff' }}
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-white"></div>
          
          <div className="container px-4 pt-6 pb-4 flex justify-between items-center border-b border-gray-100 bg-white">
            <Link href="/" prefetch={true} className="flex items-center space-x-2 flex-shrink-0">
              <img
                src="/logo/logo-midnight.png"
                alt="Touchstone Digital Solutions"
                className="h-8 w-auto"
              />
            </Link>
            
            <button
              className="p-2 text-black/70 hover:text-black transition-colors rounded-full hover:bg-gray-100"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <div className="bg-white">
            <div className="container px-4 py-8 bg-white">
              <div className="w-full space-y-0">
                {[
                  { name: "Home", href: "/" },
                  { name: "About Us", href: "/about/" },
                  { name: "Features", href: "/features/" },
                  { name: "Contact", href: "/contact/" },
                  { name: "FAQ", href: "/faq/" }
                ].map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    prefetch={true}
                    className={cn(
                      "block w-full py-4 text-lg font-medium border-b border-gray-100 transition-colors bg-white",
                      isActive(item.href)
                        ? "text-gradient-purple-blue"
                        : "text-gray-800 hover:text-gradient-purple-blue"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                
                <div className="pt-8 w-full bg-white flex flex-col items-center space-y-2">
                  <button
                    className="w-full btn-gradient hover-lift font-medium rounded-full px-4 py-2 text-sm md:text-base whitespace-nowrap"
                    onClick={() => window.location.href = '/contact/'}
                  >
                    CONTACT US
                  </button>
                  <button
                    className="w-full btn-gradient hover-lift font-medium rounded-full px-4 py-2 text-sm md:text-base whitespace-nowrap"
                    onClick={() => window.open('https://calendly.com/touchstone-ds/custom-guided-tour?atm_source=website', '_blank')}
                  >
                    SCHEDULE A DEMO
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { colors } from "@/styles/colors";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            src="/logo/logo-dark.png"
            alt="Touchstone Digital Solutions"
            className="h-8 lg:h-10 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
          <a
            href="#about"
            className="text-sm lg:text-base transition-colors whitespace-nowrap hover:text-gradient-purple-blue"
          >
            About Us
          </a>
          <a
            href="#products"
            className="text-sm lg:text-base transition-colors whitespace-nowrap hover:text-gradient-purple-blue"
          >
            Features
          </a>
          <a
            href="#contact"
            className="text-sm lg:text-base transition-colors whitespace-nowrap hover:text-gradient-purple-blue"
          >
            Contact
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
            className="md:hidden p-2 text-white/80 hover:text-white"
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
            `fixed inset-0 bg-white z-50 md:hidden transition-transform duration-300`, 
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white transition-colors"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <a
              href="#about"
              className="text-xl font-medium text-white/80 hover:text-white transition-colors hover:text-gradient-purple-blue"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </a>
            <a
              href="#products"
              className="text-xl font-medium text-white/80 hover:text-white transition-colors hover:text-gradient-purple-blue"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#contact"
              className="text-xl font-medium text-white/80 hover:text-white transition-colors hover:text-gradient-purple-blue"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <button
              className="btn-gradient hover-lift font-medium rounded-full px-6 py-3 text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              SCHEDULE A DEMO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

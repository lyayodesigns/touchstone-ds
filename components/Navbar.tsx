import React from "react";
import Link from "next/link";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <div className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-5 bg-white/80 backdrop-blur-sm"
    )}>
      <div className="container px-4 md:px-6 mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
          <img
            src="/logo/logo-midnight.png"
            alt="Touchstone Digital Solutions"
            className="h-8 lg:h-10 w-auto"
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
          <Link href="/" className="text-sm lg:text-base transition-colors whitespace-nowrap">Home</Link>
          <Link href="/about/" className="text-sm lg:text-base transition-colors whitespace-nowrap">About Us</Link>
          <Link href="/features/" className="text-sm lg:text-base transition-colors whitespace-nowrap">Features</Link>
          <Link href="/faq/" className="text-sm lg:text-base transition-colors whitespace-nowrap">FAQ</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/contact/" className="hidden md:block btn-gradient hover-lift font-medium rounded-full px-4 lg:px-5 py-2 text-sm lg:text-base whitespace-nowrap">
            CONTACT US
          </Link>
          <a
            href="https://calendly.com/touchstone-ds/custom-guided-tour?atm_source=website"
            target="_blank"
            rel="noopener"
            className="hidden md:block btn-gradient hover-lift font-medium rounded-full px-4 lg:px-5 py-2 text-sm lg:text-base whitespace-nowrap"
          >
            SCHEDULE A DEMO
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
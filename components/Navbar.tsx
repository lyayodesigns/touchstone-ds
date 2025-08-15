"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const pathname = usePathname();

  // Check if the current path matches the link
  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/" || pathname === "/home";
    }
    return pathname.startsWith(path);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? `py-3 bg-white border-b border-gray-200 shadow-sm`
            : "py-5 bg-white/80 backdrop-blur-sm"
        )}
      >
        <div className="container px-4 md:px-6 mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            <img
              src="/logo/logo-midnight.png"
              alt="Touchstone Digital Solutions"
              className="h-8 lg:h-10 w-auto"
            />
          </Link>
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <Link
              href="/"
              className={cn(
                "text-sm lg:text-base transition-colors whitespace-nowrap",
                isActive("/")
                  ? "text-gradient-purple-blue font-medium"
                  : "hover:text-gradient-purple-blue"
              )}
            >
              Home
            </Link>
            <Link
              href="/about/"
              className={cn(
                "text-sm lg:text-base transition-colors whitespace-nowrap",
                isActive("/about/")
                  ? "text-gradient-purple-blue font-medium"
                  : "hover:text-gradient-purple-blue"
              )}
            >
              About Us
            </Link>
            <Link
              href="/features/"
              className={cn(
                "text-sm lg:text-base transition-colors whitespace-nowrap",
                isActive("/features/")
                  ? "text-gradient-purple-blue font-medium"
                  : "hover:text-gradient-purple-blue"
              )}
            >
              Features
            </Link>
            <div className="relative group">
              <button
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                onMouseEnter={() => setIsResourcesOpen(true)}
                className={cn(
                  "text-sm lg:text-base transition-colors whitespace-nowrap flex items-center",
                  (isActive("/faq/") || isActive("/blog/") || isActive("/touchscreen-software/") || isActive("/compare-us/"))
                    ? "text-gradient-purple-blue font-medium"
                    : "hover:text-gradient-purple-blue"
                )}
              >
                Resources
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div
                className={cn(
                  "absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md py-2 w-40 transition-all duration-200",
                  isResourcesOpen ? "opacity-100 visible" : "opacity-0 invisible"
                )}
                onMouseLeave={() => setIsResourcesOpen(false)}
              >
                <Link
                  href="/touchscreen-software/"
                  className={cn(
                    "block px-4 py-2 text-sm transition-colors",
                    isActive("/touchscreen-software/")
                      ? "text-gradient-purple-blue font-medium"
                      : "text-gray-700 hover:text-gradient-purple-blue hover:bg-gray-50"
                  )}
                  onClick={() => setIsResourcesOpen(false)}
                >
                  Touchscreen Software
                </Link>
                <Link
                  href="/compare-us/"
                  className={cn(
                    "block px-4 py-2 text-sm transition-colors",
                    isActive("/compare-us/")
                      ? "text-gradient-purple-blue font-medium"
                      : "text-gray-700 hover:text-gradient-purple-blue hover:bg-gray-50"
                  )}
                  onClick={() => setIsResourcesOpen(false)}
                >
                  Compare Us
                </Link>
                <Link
                  href="/faq/"
                  className={cn(
                    "block px-4 py-2 text-sm transition-colors",
                    isActive("/faq/")
                      ? "text-gradient-purple-blue font-medium"
                      : "text-gray-700 hover:text-gradient-purple-blue hover:bg-gray-50"
                  )}
                  onClick={() => setIsResourcesOpen(false)}
                >
                  FAQ
                </Link>
                <Link
                  href="/blog/"
                  className={cn(
                    "block px-4 py-2 text-sm transition-colors",
                    isActive("/blog/")
                      ? "text-gradient-purple-blue font-medium"
                      : "text-gray-700 hover:text-gradient-purple-blue hover:bg-gray-50"
                  )}
                  onClick={() => setIsResourcesOpen(false)}
                >
                  Blog
                </Link>
              </div>
            </div>
          </nav>
          <div className="flex items-center space-x-4">
            <Link
              href="/contact/"
              className="hidden md:block btn-gradient hover-lift font-medium rounded-full px-4 lg:px-5 py-2 text-sm lg:text-base whitespace-nowrap"
            >
              CONTACT US
            </Link>
            <a
              href="https://calendly.com/touchstone-ds/custom-guided-tour?utm_source=website"
              target="_blank"
              rel="noopener"
              className="hidden md:block btn-gradient hover-lift font-medium rounded-full px-4 lg:px-5 py-2 text-sm lg:text-base whitespace-nowrap"
            >
              SCHEDULE A DEMO
            </a>
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
        </div>
      </div>
      
      {/* Mobile sticky buttons */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-t border-gray-200 px-4 py-3 safe-area-inset-bottom">
        <div className="flex items-center justify-center space-x-3">
          <Link
            href="/contact/"
            className="flex-1 btn-gradient hover-lift font-medium rounded-full px-4 py-2 text-sm text-center"
          >
            CONTACT US
          </Link>
          <a
            href="https://calendly.com/touchstone-ds/custom-guided-tour?utm_source=website"
            target="_blank"
            rel="noopener"
            className="flex-1 btn-gradient hover-lift font-medium rounded-full px-4 py-2 text-sm text-center"
          >
            SCHEDULE A DEMO
          </a>
        </div>
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
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            <img
              src="/logo/logo-midnight.png"
              alt="Touchstone Digital Solutions"
              className="h-8 w-auto"
            />
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
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
                { name: "Resources", href: "#", isDropdown: true },
                { name: "Touchscreen Software", href: "/touchscreen-software/", isSubItem: true },
                { name: "Compare Us", href: "/compare-us/", isSubItem: true },
                { name: "FAQ", href: "/faq/", isSubItem: true },
                { name: "Blog", href: "/blog/", isSubItem: true }
              ].map((item) => (
                item.isDropdown ? (
                  <div key={item.name} className="block w-full py-4 text-lg font-medium border-b border-gray-100 transition-colors bg-white text-gray-800">
                    {item.name}
                  </div>
                ) : item.isSubItem ? (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "block w-full py-3 pl-6 text-base font-medium border-b border-gray-100 transition-colors bg-white",
                      isActive(item.href)
                        ? "text-gradient-purple-blue"
                        : "text-gray-600 hover:text-gradient-purple-blue"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "block w-full py-4 text-lg font-medium border-b border-gray-100 transition-colors bg-white",
                      isActive(item.href)
                        ? "text-gradient-purple-blue"
                        : "text-gray-800 hover:text-gradient-purple-blue"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <div className="pt-8 w-full bg-white flex flex-col items-center space-y-2">
                <Link
                  href="/contact/"
                  className="w-full btn-gradient hover-lift font-medium rounded-full px-4 py-2 text-sm md:text-base whitespace-nowrap text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  CONTACT US
                </Link>
                <a
                  href="https://calendly.com/touchstone-ds/custom-guided-tour?utm_source=website"
                  target="_blank"
                  rel="noopener"
                  className="w-full btn-gradient hover-lift font-medium rounded-full px-4 py-2 text-sm md:text-base whitespace-nowrap text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  SCHEDULE A DEMO
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
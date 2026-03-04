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
  const [isUseCasesOpen, setIsUseCasesOpen] = useState(false);
  const [isMobileUseCasesOpen, setIsMobileUseCasesOpen] = useState(false);
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);
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
                onClick={() => setIsUseCasesOpen(!isUseCasesOpen)}
                onMouseEnter={() => setIsUseCasesOpen(true)}
                className={cn(
                  "text-sm lg:text-base transition-colors whitespace-nowrap flex items-center",
                  (isActive("/touchscreen-software/") || isActive("/digital-trophy-case/") || isActive("/digital-record-boards/") || isActive("/digital-donor-walls/") || isActive("/digital-yearbooks/") || isActive("/digital-history-archive/") || isActive("/interactive-athletic-environments/"))
                    ? "text-gradient-purple-blue font-medium"
                    : "hover:text-gradient-purple-blue"
                )}
              >
                Use Cases
                <ChevronDown className="ml-1 h-4 w-4 text-black" />
              </button>
              <div
                className={cn(
                  "absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md py-2 w-56 transition-all duration-200",
                  isUseCasesOpen ? "opacity-100 visible" : "opacity-0 invisible"
                )}
                onMouseLeave={() => setIsUseCasesOpen(false)}
              >
                <Link
                  href="/touchscreen-software/"
                  className={cn(
                    "block px-4 py-2 text-base transition-colors",
                    isActive("/touchscreen-software/")
                      ? "text-gradient-purple-blue font-medium"
                      : "text-gray-700 hover:text-gradient-purple-blue hover:bg-gray-50"
                  )}
                  onClick={() => setIsUseCasesOpen(false)}
                >
                  Touchscreen Software
                </Link>
                <Link
                  href="/digital-trophy-case/"
                  className={cn(
                    "block px-4 py-2 text-base transition-colors",
                    isActive("/digital-trophy-case/")
                      ? "text-gradient-purple-blue font-medium"
                      : "text-gray-700 hover:text-gradient-purple-blue hover:bg-gray-50"
                  )}
                  onClick={() => setIsUseCasesOpen(false)}
                >
                  Digital Trophy Case
                </Link>
                <Link
                  href="/digital-record-boards/"
                  className={cn(
                    "block px-4 py-2 text-base transition-colors",
                    isActive("/digital-record-boards/")
                      ? "text-gradient-purple-blue font-medium"
                      : "text-gray-700 hover:text-gradient-purple-blue hover:bg-gray-50"
                  )}
                  onClick={() => setIsUseCasesOpen(false)}
                >
                  Digital Record Boards
                </Link>
                <Link
                  href="/digital-donor-walls/"
                  className={cn(
                    "block px-4 py-2 text-base transition-colors",
                    isActive("/digital-donor-walls/")
                      ? "text-gradient-purple-blue font-medium"
                      : "text-gray-700 hover:text-gradient-purple-blue hover:bg-gray-50"
                  )}
                  onClick={() => setIsUseCasesOpen(false)}
                >
                  Digital Donor Walls
                </Link>
                <Link
                  href="/digital-yearbooks/"
                  className={cn(
                    "block px-4 py-2 text-base transition-colors",
                    isActive("/digital-yearbooks/")
                      ? "text-gradient-purple-blue font-medium"
                      : "text-gray-700 hover:text-gradient-purple-blue hover:bg-gray-50"
                  )}
                  onClick={() => setIsUseCasesOpen(false)}
                >
                  Digital Yearbooks
                </Link>
                <Link
                  href="/digital-history-archive/"
                  className={cn(
                    "block px-4 py-2 text-base transition-colors",
                    isActive("/digital-history-archive/")
                      ? "text-gradient-purple-blue font-medium"
                      : "text-gray-700 hover:text-gradient-purple-blue hover:bg-gray-50"
                  )}
                  onClick={() => setIsUseCasesOpen(false)}
                >
                  Digital History Archive
                </Link>
                <Link
                  href="/interactive-athletic-environments/"
                  className={cn(
                    "block px-4 py-2 text-base transition-colors",
                    isActive("/interactive-athletic-environments/")
                      ? "text-gradient-purple-blue font-medium"
                      : "text-gray-700 hover:text-gradient-purple-blue hover:bg-gray-50"
                  )}
                  onClick={() => setIsUseCasesOpen(false)}
                >
                  Experimental Design
                </Link>
              </div>
            </div>
            <Link
              href="/touchscreen-hardware/"
              className={cn(
                "text-sm lg:text-base transition-colors whitespace-nowrap",
                isActive("/touchscreen-hardware/")
                  ? "text-gradient-purple-blue font-medium"
                  : "hover:text-gradient-purple-blue"
              )}
            >
              Hardware
            </Link>
            <div className="relative group">
              <button
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                onMouseEnter={() => setIsResourcesOpen(true)}
                className={cn(
                  "text-sm lg:text-base transition-colors whitespace-nowrap flex items-center",
                  (isActive("/touchstone-fundraising/") || isActive("/yearbook-scanning/") || isActive("/compare-us/") || isActive("/blog/") || isActive("/faq/"))
                    ? "text-gradient-purple-blue font-medium"
                    : "hover:text-gradient-purple-blue"
                )}
              >
                Resources
                <ChevronDown className="ml-1 h-4 w-4 text-black" />
              </button>
              <div
                className={cn(
                  "absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md py-2 w-56 transition-all duration-200",
                  isResourcesOpen ? "opacity-100 visible" : "opacity-0 invisible"
                )}
                onMouseLeave={() => setIsResourcesOpen(false)}
              >
                <Link
                  href="/touchstone-fundraising/"
                  className={cn(
                    "block px-4 py-2 text-base transition-colors",
                    isActive("/touchstone-fundraising/")
                      ? "text-gradient-purple-blue font-medium"
                      : "text-gray-700 hover:text-gradient-purple-blue hover:bg-gray-50"
                  )}
                  onClick={() => setIsResourcesOpen(false)}
                >
                  Fundraise with Us
                </Link>
                <Link
                  href="/yearbook-scanning/"
                  className={cn(
                    "block px-4 py-2 text-base transition-colors",
                    isActive("/yearbook-scanning/")
                      ? "text-gradient-purple-blue font-medium"
                      : "text-gray-700 hover:text-gradient-purple-blue hover:bg-gray-50"
                  )}
                  onClick={() => setIsResourcesOpen(false)}
                >
                  Digitize Yearbooks
                </Link>
                <Link
                  href="/compare-us/"
                  className={cn(
                    "block px-4 py-2 text-base transition-colors",
                    isActive("/compare-us/")
                      ? "text-gradient-purple-blue font-medium"
                      : "text-gray-700 hover:text-gradient-purple-blue hover:bg-gray-50"
                  )}
                  onClick={() => setIsResourcesOpen(false)}
                >
                  Compare Us
                </Link>
                <Link
                  href="/blog/"
                  className={cn(
                    "block px-4 py-2 text-base transition-colors",
                    isActive("/blog/")
                      ? "text-gradient-purple-blue font-medium"
                      : "text-gray-700 hover:text-gradient-purple-blue hover:bg-gray-50"
                  )}
                  onClick={() => setIsResourcesOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/faq/"
                  className={cn(
                    "block px-4 py-2 text-base transition-colors",
                    isActive("/faq/")
                      ? "text-gradient-purple-blue font-medium"
                      : "text-gray-700 hover:text-gradient-purple-blue hover:bg-gray-50"
                  )}
                  onClick={() => setIsResourcesOpen(false)}
                >
                  FAQ
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
                { name: "Hardware", href: "/touchscreen-hardware/" },
                { name: "Contact", href: "/contact/" },
              ].map((item) => (
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
              ))}
              {/* Use Cases collapsible */}
              <div className="border-b border-gray-100">
                <button
                  onClick={() => setIsMobileUseCasesOpen(!isMobileUseCasesOpen)}
                  className="flex w-full items-center justify-between py-4 text-lg font-medium bg-white text-gray-800"
                >
                  Use Cases
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-gray-500 transition-transform duration-200",
                      isMobileUseCasesOpen ? "rotate-180" : ""
                    )}
                  />
                </button>
                {isMobileUseCasesOpen && (
                  <div className="pb-2">
                    {[
                      { name: "Touchscreen Software", href: "/touchscreen-software/" },
                      { name: "Digital Trophy Case", href: "/digital-trophy-case/" },
                      { name: "Digital Record Boards", href: "/digital-record-boards/" },
                      { name: "Digital Donor Walls", href: "/digital-donor-walls/" },
                      { name: "Digital Yearbooks", href: "/digital-yearbooks/" },
                      { name: "Digital History Archive", href: "/digital-history-archive/" },
                      { name: "Experimental Design", href: "/interactive-athletic-environments/" },
                    ].map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className={cn(
                          "block w-full py-3 pl-6 text-base font-medium border-b border-gray-50 transition-colors bg-white",
                          isActive(sub.href)
                            ? "text-gradient-purple-blue"
                            : "text-gray-600 hover:text-gradient-purple-blue"
                        )}
                        onClick={() => { setIsMobileMenuOpen(false); setIsMobileUseCasesOpen(false); }}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              {/* Resources collapsible */}
              <div className="border-b border-gray-100">
                <button
                  onClick={() => setIsMobileResourcesOpen(!isMobileResourcesOpen)}
                  className="flex w-full items-center justify-between py-4 text-lg font-medium bg-white text-gray-800"
                >
                  Resources
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-gray-500 transition-transform duration-200",
                      isMobileResourcesOpen ? "rotate-180" : ""
                    )}
                  />
                </button>
                {isMobileResourcesOpen && (
                  <div className="pb-2">
                    {[
                      { name: "Fundraise with Us", href: "/touchstone-fundraising/" },
                      { name: "Digitize Yearbooks", href: "/yearbook-scanning/" },
                      { name: "Compare Us", href: "/compare-us/" },
                      { name: "Blog", href: "/blog/" },
                      { name: "FAQ", href: "/faq/" },
                    ].map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className={cn(
                          "block w-full py-3 pl-6 text-base font-medium border-b border-gray-50 transition-colors bg-white",
                          isActive(sub.href)
                            ? "text-gradient-purple-blue"
                            : "text-gray-600 hover:text-gradient-purple-blue"
                        )}
                        onClick={() => { setIsMobileMenuOpen(false); setIsMobileResourcesOpen(false); }}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
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
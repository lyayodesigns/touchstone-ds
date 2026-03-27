"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";

// Navigation configuration
const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about/" },
  { name: "Features", href: "/features/" },
  {
    name: "Use Cases",
    href: "#",
    submenu: [
      { name: "Touchscreen Software", href: "/touchscreen-software/" },
      { name: "Digital Trophy Case", href: "/digital-trophy-case/" },
      { name: "Digital Record Boards", href: "/digital-record-boards/" },
      { name: "Digital Donor Walls", href: "/digital-donor-walls/" },
      { name: "Digital Yearbooks", href: "/digital-yearbooks/" },
      { name: "Digital History Archive", href: "/digital-history-archive/" },
    ],
  },
  { name: "Hardware", href: "/touchscreen-hardware/" },
  {
    name: "Resources",
    href: "#",
    submenu: [
      { name: "Fundraise with Us", href: "/touchstone-fundraising/" },
      { name: "Yearbook Scanning", href: "/yearbook-scanning/" },
      { name: "Compare Us", href: "/compare-us/" },
      { name: "Blog", href: "/blog/" },
      { name: "FAQ", href: "/faq/" },
    ],
  },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  // Check if the current path matches the link
  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/" || pathname === "/home";
    }
    return pathname.startsWith(path);
  };

  // Check if any submenu item is active
  const isSubmenuActive = (submenu: { href: string }[]) => {
    return submenu.some((item) => isActive(item.href));
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
    };
  }, [isMobileMenuOpen]);

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
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {NAV_ITEMS.map((item) => {
              if (item.submenu) {
                return (
                  <div key={item.name} className="relative group">
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                      onMouseEnter={() => setOpenDropdown(item.name)}
                      className={cn(
                        "text-sm lg:text-base transition-colors whitespace-nowrap flex items-center",
                        isSubmenuActive(item.submenu)
                          ? "text-gradient-purple-blue font-medium"
                          : "hover:text-gradient-purple-blue"
                      )}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4 text-black" />
                    </button>
                    <div
                      className={cn(
                        "absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md py-2 w-56 transition-all duration-200",
                        openDropdown === item.name ? "opacity-100 visible" : "opacity-0 invisible"
                      )}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className={cn(
                            "block px-4 py-2 text-base transition-colors",
                            isActive(subItem.href)
                              ? "text-gradient-purple-blue font-medium"
                              : "text-gray-700 hover:text-gradient-purple-blue hover:bg-gray-50"
                          )}
                          onClick={() => setOpenDropdown(null)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-sm lg:text-base transition-colors whitespace-nowrap",
                    isActive(item.href)
                      ? "text-gradient-purple-blue font-medium"
                      : "hover:text-gradient-purple-blue"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
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
      
      {/* Mobile sticky buttons - only render when menu is closed */}
      {!isMobileMenuOpen && (
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
      )}
      
      {/* Mobile menu overlay - only render when open */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-[60] md:hidden flex flex-col h-[100dvh]">
          <div className="absolute top-0 left-0 w-full h-1 bg-white" />
          <div className="bg-white border-b border-gray-100 flex-shrink-0">
            <div className="container px-4 pt-6 pb-4 flex justify-between items-center bg-white">
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
          </div>

          <div
            className="flex-1 min-h-0 overflow-y-auto bg-white"
            style={{ WebkitOverflowScrolling: "touch", touchAction: "pan-y" }}
          >
            <div className="container px-4 py-8 bg-white pb-24">
              <div className="w-full space-y-0">
                {NAV_ITEMS.map((item) => {
                  if (item.submenu) {
                    return (
                      <div key={item.name} className="border-b border-gray-100">
                        <button
                          onClick={() =>
                            setOpenMobileDropdown(
                              openMobileDropdown === item.name ? null : item.name,
                            )
                          }
                          className="flex w-full items-center justify-between py-4 text-lg font-medium bg-white text-gray-800"
                        >
                          {item.name}
                          <ChevronDown
                            className={cn(
                              "h-5 w-5 text-gray-500 transition-transform duration-200",
                              openMobileDropdown === item.name ? "rotate-180" : "",
                            )}
                          />
                        </button>
                        {openMobileDropdown === item.name && (
                          <div className="pb-2">
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className={cn(
                                  "block w-full py-3 pl-6 text-base font-medium border-b border-gray-50 transition-colors bg-white",
                                  isActive(subItem.href)
                                    ? "text-gradient-purple-blue"
                                    : "text-gray-600 hover:text-gradient-purple-blue",
                                )}
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setOpenMobileDropdown(null);
                                }}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }
                  
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "block w-full py-4 text-lg font-medium border-b border-gray-100 transition-colors bg-white",
                        isActive(item.href)
                          ? "text-gradient-purple-blue"
                        : "text-gray-800 hover:text-gradient-purple-blue",
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  );
                })}
                
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
      )}
    </>
  );
};

export default Navbar;
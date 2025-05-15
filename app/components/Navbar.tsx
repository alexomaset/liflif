"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface NavItem {
  label: string;
  href: string;
  dropdown?: NavItem[];
}

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const navItems: NavItem[] = [
    { 
      label: "Products", 
      href: "#",
      dropdown: [
        { label: "Delivery Management", href: "/features" },
        { label: "Route Optimization", href: "/features" },
        { label: "Real-time Tracking", href: "/features" }
      ]
    },
    { 
      label: "Company", 
      href: "#",
      dropdown: [
        { label: "About Us", href: "/about" },
        { label: "Contact", href: "/contact" }
      ]
    },
    { 
      label: "Support", 
      href: "#",
      dropdown: [
        { label: "Help Center", href: "/support/help" },
        { label: "FAQ", href: "/support/faq" }
      ]
    },
  ];

  return (
    <div className="fixed w-full z-50 transition-all duration-300">
    <nav
      className={`transition-all duration-300 w-full ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-blue-100"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="relative h-12 w-36 transition-transform duration-300 hover:scale-105"
          >
            <Image
              src="/logo.svg"
              alt="LIFLIF Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 ml-auto">
            {navItems.map((item) => (
              <div 
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    isScrolled
                      ? "text-gray-700 hover:text-blue-600"
                      : "text-white hover:text-blue-200"
                  } transition-colors duration-200`}
                  onClick={(e) => {
                    if (item.dropdown) {
                      e.preventDefault();
                      handleDropdownToggle(item.label);
                    }
                  }}
                >
                  <span className="flex items-center">
                    {item.label}
                    {item.dropdown && (
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </span>
                </Link>
                
                {/* Dropdown Menu */}
                {item.dropdown && (
                  <div 
                    className={`absolute left-0 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 origin-top-right ${
                      activeDropdown === item.label ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                    }`}
                  >
                    <div className="py-1">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.label}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Navbar items are now moved to the right */}

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg bg-blue-50 text-blue-600"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <motion.div
        initial={false}
        animate={{
          height: isMobileMenuOpen ? "auto" : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-white border-t border-blue-100 shadow-lg overflow-hidden"
      >
        <div className="container mx-auto px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <div key={item.label}>
              <div 
                className="flex justify-between items-center py-2 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg cursor-pointer"
                onClick={() => item.dropdown && handleDropdownToggle(item.label)}
              >
                <span>{item.label}</span>
                {item.dropdown && (
                  <svg
                    className={`w-4 h-4 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </div>
              
              {/* Mobile Dropdown Items */}
              {item.dropdown && activeDropdown === item.label && (
                <div className="pl-6 mt-1 space-y-1">
                  {item.dropdown.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.label}
                      href={dropdownItem.href}
                      className="block py-2 px-4 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
                    >
                      {dropdownItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          {/* Removed Get Started button */}
        </div>
      </motion.div>
    </nav>
    </div>
  );
};

export default Navbar;

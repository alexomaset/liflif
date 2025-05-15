"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void; 
}

const NavItem: React.FC<NavItemProps> = ({ href, children, isActive, onClick }) => (
  <Link 
    href={href} 
    className={`group relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
      isActive 
        ? 'text-white' 
        : 'text-blue-100 hover:text-white'
    }`}
    onClick={onClick}
  >
    {children}
    <span className={`nav-link-indicator ${isActive ? 'w-1/2' : ''}`}></span>
  </Link>
);

const Navigation: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>('#features');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['#features', '#about', '#contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.querySelector(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          
          if (scrollPosition >= elementTop && 
              scrollPosition < elementTop + rect.height) {
            setActiveItem(section);
            break;
          }
        }
      }
    };

    setIsMounted(true);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavItemClick = (item: string) => {
    setActiveItem(item);
    setIsMobileMenuOpen(false);
  };

  const NavigationItems = () => (
    <>
      <NavItem 
        href="#features" 
        isActive={activeItem === '#features'}
        onClick={() => handleNavItemClick('#features')}
      >
        Features
      </NavItem>
      <NavItem 
        href="#about" 
        isActive={activeItem === '#about'}
        onClick={() => handleNavItemClick('#about')}
      >
        About
      </NavItem>
      <NavItem 
        href="#contact" 
        isActive={activeItem === '#contact'}
        onClick={() => handleNavItemClick('#contact')}
      >
        Contact
      </NavItem>
      <div className="relative group">
        <button className="flex items-center text-sm font-medium px-4 py-2 text-blue-100 hover:text-white rounded-lg transition-all duration-300">
          Resources
          <ChevronDown className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
        </button>
        <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-blue-800/90 backdrop-blur-md rounded-lg shadow-xl p-2 border border-blue-700/50">
          <Link href="#docs" className="block px-4 py-2 text-sm text-blue-100 hover:text-white hover:bg-blue-700/50 rounded-md">
            Documentation
          </Link>
          <Link href="#blog" className="block px-4 py-2 text-sm text-blue-100 hover:text-white hover:bg-blue-700/50 rounded-md">
            Blog
          </Link>
          <Link href="#help" className="block px-4 py-2 text-sm text-blue-100 hover:text-white hover:bg-blue-700/50 rounded-md">
            Help Center
          </Link>
        </div>
      </div>
    </>
  );

  const SharedContent = () => (
    <div className="container mx-auto px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="transform transition-transform duration-300 hover:scale-105">
          <Link href="/" className="block relative h-16 w-40">
            <Image
              src="/logo.svg"
              alt="LIFLIF Logo"
              fill
              priority
              sizes="(max-width: 768px) 160px, 160px"
              className="object-contain"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <NavigationItems />
          <button 
            className="btn btn-primary ml-4 px-6 py-2.5 text-sm"
            aria-label="Get started with LIFLIF"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-lg bg-blue-700/30 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>
    </div>
  );

  const headerClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled 
      ? 'bg-blue-900/90 backdrop-blur-md shadow-lg border-b border-blue-800/50' 
      : 'bg-transparent'
  }`;

  if (!isMounted) {
    return (
      <header className={headerClass}>
        <SharedContent />
      </header>
    );
  }

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.header
          key="mounted-header"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className={headerClass}
        >
          <SharedContent />
        </motion.header>
      </AnimatePresence>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[72px] left-0 right-0 z-40 bg-blue-900/95 backdrop-blur-md border-b border-blue-800/50 shadow-lg md:hidden"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-3">
              <Link 
                href="#features" 
                className="py-3 px-4 text-blue-100 hover:text-white hover:bg-blue-800/50 rounded-lg"
                onClick={() => handleNavItemClick('#features')}
              >
                Features
              </Link>
              <Link 
                href="#about" 
                className="py-3 px-4 text-blue-100 hover:text-white hover:bg-blue-800/50 rounded-lg"
                onClick={() => handleNavItemClick('#about')}
              >
                About
              </Link>
              <Link 
                href="#contact" 
                className="py-3 px-4 text-blue-100 hover:text-white hover:bg-blue-800/50 rounded-lg"
                onClick={() => handleNavItemClick('#contact')}
              >
                Contact
              </Link>
              
              <div className="py-3 px-4">
                <div className="flex items-center justify-between text-blue-100 mb-2">
                  <span>Resources</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
                <div className="ml-2 pl-2 border-l border-blue-700">
                  <Link href="#docs" className="block py-2 text-sm text-blue-200 hover:text-white">Documentation</Link>
                  <Link href="#blog" className="block py-2 text-sm text-blue-200 hover:text-white">Blog</Link>
                  <Link href="#help" className="block py-2 text-sm text-blue-200 hover:text-white">Help Center</Link>
                </div>
              </div>
              
              <button className="btn btn-primary w-full py-3 mt-2">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
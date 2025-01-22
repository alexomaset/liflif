"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ href, children }) => (
  <Link 
    href={href} 
    className="text-gray-300 hover:text-white transition-colors"
  >
    {children}
  </Link>
);

const Navigation: React.FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
    };

    setIsMounted(true);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const SharedContent = () => (
    <div className="container mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <div 
          className="transform transition-transform duration-300"
          onMouseEnter={() => isMounted && setIsHovered(true)}
          onMouseLeave={() => isMounted && setIsHovered(false)}
        >
          <Link href="/" className="block">
            <div className="relative h-20 w-48">
              <div className="w-full h-full relative">
                <Image
                  src="/liflif.jpeg"
                  alt="LIFLIF Logo"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain"
                />
              </div>
              {isMounted && isHovered && (
                <div className="absolute inset-0 bg-cyan-500 opacity-20 rounded-lg transition-opacity duration-300" />
              )}
            </div>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <NavItem href="#features">Features</NavItem>
          <NavItem href="#about">About</NavItem>
          <NavItem href="#contact">Contact</NavItem>
          <button 
            className="bg-cyan-500 text-white px-6 py-2 rounded-full hover:bg-cyan-400 transition-colors"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );

  const headerClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled ? 'bg-gray-900/90 backdrop-blur-sm' : 'bg-transparent'
  }`;

  // Server-side and initial client render
  if (!isMounted) {
    return (
      <header className={headerClass}>
        <SharedContent />
      </header>
    );
  }

  // Client-side render after mount
  return (
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
  );
};

export default Navigation;
"use client";
import React from 'react';
import { ChevronDown } from 'lucide-react';

const ScrollIndicator = () => {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div 
      className="absolute bottom-32 left-1/2 transform -translate-x-1/2 cursor-pointer
                 animate-bounce hover:animate-none hover:scale-110 transition-transform"
      onClick={scrollToNextSection}
    >
      <div className="flex flex-col items-center text-white/80 hover:text-white">
        <span className="text-sm font-medium mb-2">Scroll to explore</span>
        <ChevronDown className="w-6 h-6" />
      </div>
    </div>
  );
};

export default ScrollIndicator;
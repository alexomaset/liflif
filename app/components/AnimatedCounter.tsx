"use client";
import React, { useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ end, suffix = '' }) => {
  const countRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentCount = countRef.current;
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = end / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      if (currentCount) {
        currentCount.textContent = Math.round(currentStep * increment).toString() + suffix;
      }
      if (currentStep >= steps) {
        if (currentCount) {
          currentCount.textContent = end.toString() + suffix;
        }
        clearInterval(interval);
      }
    }, stepDuration);

    return () => {
      clearInterval(interval);
    };
  }, [end, suffix]);

  return (
    <div ref={countRef}>
      {end}{suffix}
    </div>
  );
};

export default AnimatedCounter;
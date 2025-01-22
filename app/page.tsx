"use client";

import React, { useState, useRef, useEffect, ReactElement } from "react";
import {
  MapPin,
  Clock,
  Shield,
  Download,
  ChevronRight,
  Link,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import ScrollIndicator from "./components/ScrollIndicator";
import AppShowcase from "./components/AppShowcase";
import Footer from "./components/Footer";
import SystemShowcase from "./components/Systemshowcase";
import DemoRequest from "./components/DemoSes";
import dynamic from "next/dynamic";

const AnimatedDeliveryMap = dynamic(() => import('./components/AnimatedDeliveryMap'), {
  ssr: false
});


interface Feature {
  icon: ReactElement;
  title: string;
  description: string;
}

const Navigation: React.FC<{
  isScrolled: boolean;
  isHovered: boolean;
  setIsHovered: (value: boolean) => void;
}> = ({ isScrolled, isHovered, setIsHovered }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Initial SSR-safe version
  if (!isMounted) {
    return (
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-gray-900/90 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="relative h-20 w-48">
              <Image
                src="/liflif.jpeg"
                alt="LIFLIF Logo"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
              <button className="bg-cyan-500 text-white px-6 py-2 rounded-full hover:bg-cyan-400 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900/90 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div
            className="transform transition-transform duration-300 hover:scale-105"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Link href="/" className="flex items-center">
              <div className="relative h-20 w-48">
                <Image
                  src="/liflif.jpeg"
                  alt="LIFLIF Logo"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain"
                  priority
                />
                {isHovered && (
                  <div className="absolute inset-0 bg-cyan-500 opacity-20 rounded-lg transition-opacity duration-300" />
                )}
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-cyan-500 text-white px-6 py-2 rounded-full hover:bg-cyan-400 transition-colors"
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

const LiflifLandingPage: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<number>(0);
  const [, setIsAppSectionVisible] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const appSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAppSectionVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (appSectionRef.current) {
      observer.observe(appSectionRef.current);
    }

    return () => {
      if (appSectionRef.current) {
        observer.unobserve(appSectionRef.current);
      }
    };
  }, []);

  const features: Feature[] = [
    {
      icon: <MapPin className="w-12 h-12 text-cyan-400" />,
      title: "Real-Time Tracking",
      description:
        "Track your deliveries with precision, know exactly where your cargo is at any moment with our advanced GPS technology.",
    },
    {
      icon: <Clock className="w-12 h-12 text-cyan-400" />,
      title: "Efficient Routing",
      description:
        "AI-powered route optimization for faster deliveries, lower fuel costs, and improved operational efficiency.",
    },
    {
      icon: <Shield className="w-12 h-12 text-cyan-400" />,
      title: "Secure Transactions",
      description:
        "Bank-grade security for all payments with multiple payment options and instant confirmation.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gray-900">
      {/* Animated Background */}
      <AnimatedDeliveryMap />
      <Navigation 
        isScrolled={isScrolled}
        isHovered={isHovered}
        setIsHovered={setIsHovered}
      />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-gray-900/90 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div
              className="transform transition-transform duration-300 hover:scale-105"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Link href="/" className="flex items-center">
                <div className="relative h-20 w-48">
                  <Image
                    src="/liflif.jpeg" // Make sure this path is correct
                    alt="LIFLIF Logo"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain"
                    priority
                  />
                  {isHovered && (
                    <div className="absolute inset-0 bg-cyan-500 opacity-20 rounded-lg transition-opacity duration-300" />
                  )}
                </div>
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Features
              </a>
              <a
                href="#about"
                className="text-gray-300 hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-cyan-500 text-white px-6 py-2 rounded-full hover:bg-cyan-400 transition-colors"
              >
                Get Started
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="container mx-auto px-6 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-7xl font-bold text-white mb-8 leading-tight">
              <motion.span
                className="text-cyan-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Logistics
              </motion.span>{" "}
              Reimagined
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-2xl mb-10 text-cyan-100 leading-relaxed"
            >
              Transforming Delivery Logistics with Smart Technology and
              Innovative Solutions
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg group"
              >
                Download App
                <Download className="ml-2 w-5 h-5 inline group-hover:translate-y-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg group"
              >
                Learn More
                <ChevronRight className="ml-2 w-5 h-5 inline group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        <ScrollIndicator />

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent py-12"
        >
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <p className="text-gray-300">Delivery Success Rate</p>
              </div>
              <div className="text-center">
                <p className="text-gray-300">Average Delivery Time</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-cyan-400 mb-2">24/7</h3>
                <p className="text-gray-300">Customer Support</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="relative py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-cyan-400 mb-4">
              Our Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Innovative technology for seamless logistics management that
              transforms your business operations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`text-center p-8 rounded-xl backdrop-blur-sm 
                  ${
                    activeFeature === index
                      ? "bg-gray-800/50 shadow-xl"
                      : "hover:bg-gray-800/30"
                  }`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex justify-center mb-6"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      <AppShowcase />
      <SystemShowcase />
      {/* About Section */}

      {/* App Preview Section */}
      <DemoRequest />

      {/* Call to Action */}
      <section className="relative py-24 bg-gradient-to-b from-transparent to-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Delivery Operations?
            </h2>
            <p className="text-gray-300 text-lg mb-12">
              Join thousands of businesses that trust LIFLIF for their delivery
              needs. Get started today and experience the difference.
            </p>
            <button className="bg-cyan-500 text-white px-12 py-6 rounded-full text-xl font-medium hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105">
              Get Started Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

// Mobile features data

export default LiflifLandingPage;

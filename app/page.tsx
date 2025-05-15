"use client";

import React, { useState, useEffect } from "react";
import { Truck, Package, Users } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import AppShowcase from "./components/AppShowcase";
import SystemShowcase from "./components/Systemshowcase";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import QRCodeDownload from "./components/QRCodeDownload";
import CTASection from "./components/CTASection";
import Navbar from "./components/Navbar";

interface Feature {
  icon: React.ReactElement;
  title: string;
  description: string;
}

// Error boundary component
class ErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean, error: Error | null}> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h2>
            <p className="mb-4 text-gray-700">
              {this.state.error?.message || "An unexpected error occurred"}
            </p>
            <button
              onClick={() => this.setState({ hasError: false, error: null })}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Try again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const LiflifLandingPage: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };



  const handleVideoLoad = () => {
    setIsVideoLoading(false);
  };

  const features: Feature[] = [
    {
      icon: <Truck className="w-8 h-8 text-blue-600" />,
      title: "Last Mile Delivery",
      description:
        "Optimized routes and real-time tracking for efficient local deliveries",
    },
    {
      icon: <Package className="w-8 h-8 text-blue-600" />,
      title: "Same Day Delivery",
      description:
        "Express delivery service for urgent packages within city limits",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Multiple Dropoffs",
      description:
        "Efficient handling of multiple delivery points in a single trip",
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Mini About Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative h-80 w-full rounded-xl overflow-hidden shadow-xl"
            >
              <Image 
                src="/wallpaper.jpeg" 
                alt="Liflif team working" 
                fill 
                className="object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent"></div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="inline-block py-1 px-3 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Pioneering the Future of Logistics</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                LIFLIF is dedicated to transforming delivery management through smart technology and a customer-first approach. We empower businesses to optimize routes, track deliveries in real-time, and enhance overall operational efficiency.
              </p>
              <Link 
                href="/about"
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg font-medium group"
              >
                Learn More About Us
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-blue-100 relative overflow-hidden"
      >
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-200 rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-300 rounded-full opacity-50 blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">
              Watch Our Platform in Action
            </h2>
            <p className="text-xl text-blue-600 max-w-2xl mx-auto">
              See how LIFLIF transforms your delivery management with a quick
              overview
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12"
          >
            <button className="bg-blue-600 text-white hover:bg-blue-700 font-medium px-6 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
              Schedule a Custom Demo
            </button>
          </motion.div>
        </div>
      </motion.section>
      {/* <SystemShowcase /> */}
      {/* Features Section */}
      <Features />

      {/* How It Works - Enhanced */}
      <HowItWorks />

      {/* CTA Section */}

      {/* QR Code Download Section */}
      <QRCodeDownload />

      <Footer />

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 z-50"
          aria-label="Back to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

// Wrap the main component with the error boundary
export default function Home() {
  return (
    <ErrorBoundary>
      <LiflifLandingPage />
    </ErrorBoundary>
  );
}

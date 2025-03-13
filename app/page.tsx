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

interface Feature {
  icon: React.ReactElement;
  title: string;
  description: string;
}

const LiflifLandingPage: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-blue-100"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo with subtle hover effect */}
            <Link
              href="/"
              className="relative h-16 w-40 transition-transform duration-300 hover:scale-105"
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
            <div className="hidden md:flex items-center space-x-2">
              {/* Navigation Links with active indicator */}
              <div className="flex items-center mr-4">
                {[
                  { href: "solutions", label: "Solutions" },
                  { href: "features", label: "Features" },
                  { href: "pricing", label: "Pricing" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg mx-1 transition-all duration-300 group ${
                      isScrolled
                        ? "text-gray-700 hover:text-blue-600"
                        : "text-white hover:text-blue-200"
                    }`}
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-500 group-hover:w-1/2 transition-all duration-300"></span>
                  </Link>
                ))}
              </div>

              {/* CTA Button with enhanced styling */}
              <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center">
                <span>Get Started</span>
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Menu Button (only shown on mobile) */}
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
                xmlns="http://www.w3.org/2000/svg"
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

        {/* Mobile Navigation Dropdown (conditionally rendered when mobile menu is open) */}
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
            <Link
              href="solutions"
              className="block py-2 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
            >
              Solutions
            </Link>
            <Link
              href="features"
              className="block py-2 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
            >
              Features
            </Link>
            <Link
              href="pricing"
              className="block py-2 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
            >
              Pricing
            </Link>
            <button className="w-full mt-2 bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <HeroSection />
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-blue-100 relative overflow-hidden"
      >
        {/* Background elements */}
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

          <div className="max-w-4xl mx-auto">
            {/* Video card with custom frame */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-3 rounded-2xl shadow-lg border border-blue-200"
            >
              {/* Top bar to mimic a browser/video player */}
              <div className="bg-blue-50 rounded-t-xl p-3 flex items-center justify-between border-b border-blue-100 mb-2">
                <div className="flex space-x-2">
                  <span className="w-3 h-3 rounded-full bg-red-400"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                  <span className="w-3 h-3 rounded-full bg-green-400"></span>
                </div>
                <div className="text-blue-600 text-sm font-medium">
                  LIFLIF Demo
                </div>
                <div className="w-16"></div> {/* Spacer for balance */}
              </div>

              {/* Video container with loading state */}
              <div className="relative rounded-xl overflow-hidden">
                {isVideoLoading && (
                  <div className="absolute inset-0 bg-gray-100 animate-pulse flex items-center justify-center">
                    <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
                <video 
                  controls 
                  className={`w-full h-auto relative ${isVideoLoading ? 'opacity-0' : 'opacity-100'}`}
                  poster="/dliver.jpg"
                  onLoadedData={handleVideoLoad}
                  aria-label="LIFLIF Platform Demo"
                >
                  <source src="/lifvid.mp4" type="video/mp4" />
                  <div className="relative w-full h-full">
                    <Image 
                      src="/dliver.jpg" 
                      alt="LIFLIF Platform Demo" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  Your browser does not support the video tag.
                </video>

                {/* Optional play button overlay - appears before video plays */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 hover:opacity-100 transition-opacity">
                  <div className="bg-blue-600 bg-opacity-80 rounded-full p-4 shadow-lg">
                    <svg
                      className="w-12 h-12 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Video features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 mt-8 text-center"
            >
              <div className="bg-white p-4 rounded-xl shadow-md border border-blue-200">
                <div className="text-blue-500 text-sm mb-1">Product Demo</div>
                <div className="text-blue-800 font-medium">Full Overview</div>
              </div>
            </motion.div>
          </div>

          {/* Call to action */}
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
      <SystemShowcase />
      {/* Features Grid */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-blue-50 to-white"></div>
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Delivery Management Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage your delivery operations efficiently
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer relative group"
                role="article"
                aria-label={`${feature.title} feature`}
                onMouseEnter={() => setActiveFeature(index)}
                onMouseLeave={() => setActiveFeature(null)}
              >
                <div className="mb-4 bg-blue-50 p-4 rounded-xl inline-block">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
                
                {/* Tooltip */}
                {activeFeature === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap z-10"
                  >
                    Learn more about {feature.title}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-4 border-transparent border-b-gray-900"></div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <AppShowcase />

      {/* How It Works - Enhanced */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How LIFLIF Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple steps to transform your delivery operations
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: 1,
                title: "Sign Up",
                description:
                  "Create your account and set up your delivery preferences",
              },
              {
                step: 2,
                title: "Add Deliveries",
                description:
                  "Upload your delivery orders manually or through our API",
              },
              {
                step: 3,
                title: "Track & Manage",
                description:
                  "Monitor deliveries in real-time and optimize routes",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center relative"
              >
                <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl text-white font-bold">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-lg">{item.description}</p>
                {index < 2 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[40%] h-[2px] bg-blue-200">
                    <div className="absolute right-0 -mt-1 w-3 h-3 rounded-full bg-blue-600"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.png')] opacity-10"></div>
        <div className="container mx-auto px-6 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Delivery Operations?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that trust LIFLIF for their delivery operations. Start with a 14-day free trial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl text-lg font-semibold flex items-center">
                Start Free Trial
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors text-lg font-semibold flex items-center">
                Schedule Demo
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
            <div className="mt-8 flex items-center justify-center text-blue-100 text-sm">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              No credit card required • Cancel anytime
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h3>
            <p className="text-gray-600">Join companies that have transformed their delivery operations with LIFLIF</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {/* Add company logos here */}
            <div className="h-12 w-32 bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">Company 1</span>
            </div>
            <div className="h-12 w-32 bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">Company 2</span>
            </div>
            <div className="h-12 w-32 bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">Company 3</span>
            </div>
            <div className="h-12 w-32 bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">Company 4</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">What Our Clients Say</h3>
            <p className="text-gray-600">Real results from real businesses</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "LIFLIF has revolutionized our delivery operations. We've seen a 40% increase in efficiency.",
                author: "John Smith",
                role: "Operations Manager",
                company: "Express Delivery Co.",
                rating: 5
              },
              {
                quote: "The real-time tracking and analytics have given us unprecedented visibility into our operations.",
                author: "Sarah Johnson",
                role: "Logistics Director",
                company: "Global Logistics Inc.",
                rating: 5
              },
              {
                quote: "Customer satisfaction has improved significantly since implementing LIFLIF.",
                author: "Michael Chen",
                role: "Customer Success",
                company: "QuickShip Services",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role} at {testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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

export default LiflifLandingPage;

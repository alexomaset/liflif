"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Truck, Package, Users } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import AppShowcase from "./components/AppShowcase";
import SystemShowcase from "./components/Systemshowcase";
import Footer from "./components/Footer";

interface Feature {
  icon: React.ReactElement;
  title: string;
  description: string;
}

const LiflifLandingPage: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            <button className="md:hidden p-2 rounded-lg bg-blue-50 text-blue-600">
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown (conditionally rendered when mobile menu is open) */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-blue-100 shadow-lg">
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
          </div>
        )}
      </nav>

      {/* Hero Section */}
      {/* Hero Section */}
      <section
        className="relative pt-36 pb-24 bg-cover bg-center"
        style={{ backgroundImage: "url('/wallpaper.jpeg')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              <span className="text-blue-200">Smart</span>{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Delivery Management
              </span>{" "}
              <span className="text-white">for</span>{" "}
              <span className="text-blue-300">Modern Business</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 mx-auto max-w-3xl">
              Streamline your delivery operations with our{" "}
              <span className="text-blue-200 font-semibold">
                intelligent logistics platform
              </span>
              . <span className="text-white">Track</span>,{" "}
              <span className="text-white">manage</span>, and{" "}
              <span className="text-blue-200">optimize</span> your deliveries in
              real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 flex items-center justify-center transition-colors shadow-lg hover:shadow-xl border-2 border-blue-500">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 text-blue-200" />
              </button>
              <button className="bg-transparent text-white border-2 border-blue-300 hover:border-blue-400 hover:bg-blue-100/10 px-8 py-3 rounded-lg transition-colors shadow-lg hover:shadow-xl">
                Schedule Demo
              </button>
            </div>
          </motion.div>

          {/* Image Carousel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] max-w-5xl mx-auto"
          >
            {/* ... rest of the carousel code remains unchanged ... */}
          </motion.div>
        </div>
      </section>
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

              {/* Video container */}
              <div className="relative rounded-xl overflow-hidden">
                <video controls className="w-full h-auto" poster="/dliver.jpg">
                  <source src="/lifvid.mp4" type="video/mp4" />
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
                className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl"
              >
                <div className="mb-4 bg-blue-50 p-4 rounded-xl inline-block">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
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
              Ready to Optimize Your Deliveries?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that trust LIFLIF for their delivery
              operations
            </p>
            <button className="bg-white text-blue-600 px-10 py-4 rounded-lg hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl text-lg font-semibold">
              Get Started Now
            </button>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LiflifLandingPage;

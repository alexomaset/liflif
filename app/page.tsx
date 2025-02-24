"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Truck,
  Package,
  Users,
} from "lucide-react";
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
            ? "bg-white/90 backdrop-blur-sm shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="relative h-16 w-40">
              <Image
                src="/logo.svg"
                alt="LIFLIF Logo"
                fill
                className="object-contain"
                priority
              />
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="solutions"
                className="text-white-700 hover:text-blue-600"
              >
                Solutions
              </Link>
              <Link
                href="features"
                className="text-white-700 hover:text-blue-600"
              >
                Features
              </Link>
              <Link
                href="pricing"
                className="text-white-700 hover:text-blue-600"
              >
                Pricing
              </Link>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Watch Our Platform in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how LIFLIF transforms your delivery management with a quick
              overview
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl"
          >
            <video
              controls
              className="w-full h-auto"
              poster="/dliver.jpg" // Add a thumbnail frame
            >
              <source src="/lifvid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </div>
      </section>
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
      <AppShowcase />
      <SystemShowcase />

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

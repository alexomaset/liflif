"use client";

import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Clock, 
  Shield, 
  Zap, 
  Share2, 
  Truck, 
  Database, 
  Award,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const FeaturesPage = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const featureCategories = [
    {
      icon: <MapPin className="w-14 h-14 text-blue-600" />,
      title: "Advanced Tracking",
      description: "Real-time GPS tracking with precision and reliability.",
      details: [
        "Live Location Updates with 99.9% Accuracy",
        "Comprehensive Shipment History & Analytics",
        "Smart Geofencing with Custom Alerts",
        "AI-Powered Predictive Arrival Times"
      ]
    },
    {
      icon: <Clock className="w-14 h-14 text-blue-600" />,
      title: "Intelligent Routing",
      description: "Optimize delivery paths for maximum efficiency and cost-effectiveness.",
      details: [
        "AI-Powered Dynamic Route Planning",
        "Real-time Traffic & Weather Integration",
        "Advanced Fuel Efficiency Optimization",
        "Smart Dynamic Rerouting System"
      ]
    },
    {
      icon: <Shield className="w-14 h-14 text-blue-600" />,
      title: "Secure Transactions",
      description: "End-to-end secure payment and data protection solutions.",
      details: [
        "Bank-Grade Encrypted Payment Gateways",
        "Biometric Multi-Factor Authentication",
        "Advanced Fraud Detection & Prevention",
        "Global Security Standards Compliance"
      ]
    }
  ];

  const technologyFeatures = [
    {
      icon: <Zap className="w-12 h-12 text-blue-500" />,
      title: "AI-Powered Logistics",
      description: "Advanced machine learning algorithms that continuously learn and adapt to optimize your logistics operations."
    },
    {
      icon: <Database className="w-12 h-12 text-blue-500" />,
      title: "Big Data Analytics",
      description: "Transform raw data into actionable insights with our comprehensive analytics and visualization platform."
    },
    {
      icon: <Award className="w-12 h-12 text-blue-500" />,
      title: "Continuous Innovation",
      description: "Stay ahead with our regularly updated platform featuring the latest in logistics technology."
    }
  ];

  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 text-white min-h-screen flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-blue-900 opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/50"></div>
        </div>
        
        {/* Navigation */}
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-blue-800/95 shadow-lg backdrop-blur-sm' : 'bg-transparent'
        }`}>
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-4">
                <div className="relative w-12 h-12">
                  <Image
                    src="/liflif.jpeg"
                    alt="LIFLIF Logo"
                    width={48}
                    height={48}
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <span className="text-2xl font-bold">LIFLIF</span>
              </Link>
              
              <div className="flex items-center space-x-8">
                {/* <Link href="/services" className="text-lg font-medium hover:text-blue-200 transition-colors duration-200">
                  Services
                </Link> */}
                <Link href="/features" className="text-lg font-medium hover:text-blue-200 transition-colors duration-200">
                  Features
                </Link>
                <Link href="/contact" className="text-lg font-medium hover:text-blue-200 transition-colors duration-200">
                  Contact
                </Link>
                <a 
                  href="#" 
                  className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition-all duration-200 shadow-md"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="container mx-auto px-6 pt-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Innovation Meets Logistics
            </h1>
            <p className="text-2xl text-blue-100 mb-12 leading-relaxed">
              Discover our cutting-edge features that are revolutionizing 
              the future of logistics management
            </p>
            <div className="flex justify-center space-x-6">
              <a 
                href="#features" 
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-200 shadow-lg flex items-center group"
              >
                Explore Features
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#demo" 
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 flex items-center group"
              >
                Watch Demo
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Decorative wave shape */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg 
            viewBox="0 0 1440 120" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <path 
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" 
              fill="#F9FAFB"
            />
          </svg>
        </div>
      </header>

      {/* Core Features Section */}
      <section id="features" className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-600 mb-6">Powerful Features</h2>
          <p className="text-xl text-gray-600">
            Experience the next generation of logistics management with our comprehensive suite of features
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {featureCategories.map((feature, index) => (
            <div 
              key={feature.title} 
              className={`p-8 rounded-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                activeFeature === index 
                  ? 'bg-white shadow-xl ring-1 ring-blue-100' 
                  : 'hover:bg-white hover:shadow-lg'
              }`}
              onMouseEnter={() => setActiveFeature(index)}
            >
              <div className="flex justify-center mb-6 p-4 bg-blue-50 rounded-xl w-20 h-20 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">{feature.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
              <ul className="space-y-4">
                {feature.details.map((detail) => (
                  <li key={detail} className="flex items-center text-gray-700">
                    <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-600 text-sm">✓</span>
                    </span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Technology Features */}
      <section className="bg-gradient-to-b from-white to-blue-50 py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-16">
            Technological Innovations
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {technologyFeatures.map((feature) => (
              <div 
                key={feature.title}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-blue-50 rounded-xl">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-blue-800 mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparative Advantage */}
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-blue-800 mb-8">
                Why Our Features Matter
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our advanced features redefine logistics management, offering unprecedented 
                visibility, efficiency, and reliability in your supply chain operations.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="p-2 bg-blue-50 rounded-lg mr-4 mt-1">
                    <Truck className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">
                      Comprehensive Fleet Management
                    </h3>
                    <p className="text-gray-600">
                      Real-time monitoring and optimization of your entire fleet operations.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="p-2 bg-blue-50 rounded-lg mr-4 mt-1">
                    <Share2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">
                      Real-Time Communication
                    </h3>
                    <p className="text-gray-600">
                      Instant updates and seamless communication across your logistics network.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="p-2 bg-blue-50 rounded-lg mr-4 mt-1">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">
                      Predictive Analytics
                    </h3>
                    <p className="text-gray-600">
                      Data-driven insights to optimize performance and prevent issues before they occur.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400 transform rotate-3 rounded-2xl"></div>
              <img 
                src="/homes.jpg" 
                height={500}
                width={800}
                alt="LIFLIF Technological Innovation" 
                className="relative rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Experience the Future of Logistics</h2>
          <p className="text-xl mb-8">
            Discover how our innovative features can transform your business
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="#" 
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50"
            >
              Request Demo
            </a>
            <a 
              href="#" 
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
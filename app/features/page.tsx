"use client";

import React, { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  Shield, 
  Zap, 
  Share2, 
  Truck, 
  Database, 
  Award 
} from 'lucide-react';
import Link from 'next/link';

const FeaturesPage = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const featureCategories = [
    {
      icon: <MapPin className="w-12 h-12 text-blue-600" />,
      title: "Advanced Tracking",
      description: "Real-time GPS tracking with precision and reliability.",
      details: [
        "Live Location Updates",
        "Detailed Shipment History",
        "Geofencing Capabilities",
        "Predictive Arrival Times"
      ]
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-600" />,
      title: "Intelligent Routing",
      description: "Optimize delivery paths for maximum efficiency and cost-effectiveness.",
      details: [
        "AI-Powered Route Planning",
        "Traffic and Weather Integration",
        "Fuel Efficiency Optimization",
        "Dynamic Rerouting"
      ]
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Secure Transactions",
      description: "End-to-end secure payment and data protection solutions.",
      details: [
        "Encrypted Payment Gateways",
        "Multi-Factor Authentication",
        "Fraud Detection Systems",
        "Compliance with Global Standards"
      ]
    }
  ];

  const technologyFeatures = [
    {
      icon: <Zap className="w-10 h-10 text-blue-500" />,
      title: "AI-Powered Logistics",
      description: "Machine learning algorithms to predict and optimize logistics operations."
    },
    {
      icon: <Database className="w-10 h-10 text-blue-500" />,
      title: "Big Data Analytics",
      description: "Comprehensive insights through advanced data processing and visualization."
    },
    {
      icon: <Award className="w-10 h-10 text-blue-500" />,
      title: "Continuous Innovation",
      description: "Regular updates and improvements to our logistics technology platform."
    }
  ];

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-16 text-center">
      <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 100 100" 
                className="w-16 h-16 mr-4"
              >
                <circle cx="50" cy="50" r="45" fill="white" />
                <path 
                  d="M30 50 Q50 30, 70 50 T110 50" 
                  fill="none" 
                  stroke="#2563EB" 
                  strokeWidth="6" 
                />
                <text 
                  x="50" 
                  y="70" 
                  textAnchor="middle" 
                  fontSize="20" 
                  fontWeight="bold" 
                  fill="#2563EB"
                >
                  L
                </text>
              </svg>
              <h1 className="text-3xl font-bold">LIFLIF</h1>
            </div>
            <nav className="space-x-4">
              <Link href="/services" className="hover:text-blue-200">Services</Link>
              <Link href="/features" className="hover:text-blue-200">Features</Link>
              <Link href="/" className="hover:text-blue-200">Contact</Link>
            </nav>
          </div>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Cutting-Edge Features</h1>
          <p className="text-xl text-blue-100">
            Technology-driven solutions that transform logistics management
          </p>
        </div>
      </header>

      {/* Core Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {featureCategories.map((feature, index) => (
            <div 
              key={feature.title} 
              className={`text-center p-6 rounded-lg transition-all duration-300 ${
                activeFeature === index ? 'bg-blue-50 shadow-lg' : 'hover:bg-blue-50'
              }`}
              onMouseEnter={() => setActiveFeature(index)}
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-3 text-blue-800">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <ul className="space-y-2 text-gray-700">
                {feature.details.map((detail) => (
                  <li key={detail} className="flex items-center">
                    <span className="mr-2 text-blue-500">✓</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Technology Features */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">
            Technological Innovations
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {technologyFeatures.map((feature) => (
              <div 
                key={feature.title}
                className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparative Advantage */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-600">Why Our Features Matter</h2>
          <p className="text-gray-600 mt-4">
            We don't just move cargo, we revolutionize logistics management
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-blue-800 mb-6">
              Transforming Logistics Through Technology
            </h3>
            <p className="text-gray-700 mb-4">
              Our advanced features go beyond traditional logistics solutions. 
              We leverage cutting-edge technology to provide unprecedented visibility, 
              efficiency, and reliability in supply chain management.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <Truck className="mr-3 text-blue-500" />
                Comprehensive Fleet Management
              </li>
              <li className="flex items-center">
                <Share2 className="mr-3 text-blue-500" />
                Real-Time Communication
              </li>
              <li className="flex items-center">
                <Clock className="mr-3 text-blue-500" />
                Predictive Performance Analytics
              </li>
            </ul>
          </div>
          <div>
            <img 
              src="/api/placeholder/600/400" 
              alt="LIFLIF Technological Innovation" 
              className="rounded-lg shadow-xl"
            />
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
"use client";

import React from 'react';
import { 
  Truck, 
  Globe, 
  Package, 
  Clock, 
  ShieldCheck, 
  Map 
} from 'lucide-react';
import Link from 'next/link';

const ServicesPage = () => {
  const serviceCategories = [
    {
      icon: <Truck className="w-12 h-12 text-blue-600" />,
      title: "Freight Transportation",
      description: "Comprehensive logistics solutions for businesses of all sizes. We handle everything from local to international shipments.",
      features: [
        "Full Truckload (FTL) Shipping",
        "Less than Truckload (LTL) Shipping",
        "Refrigerated Transport",
        "Specialized Cargo Handling"
      ]
    },
    {
      icon: <Globe className="w-12 h-12 text-blue-600" />,
      title: "International Logistics",
      description: "Seamless cross-border shipping with customs clearance and end-to-end tracking.",
      features: [
        "Global Shipping Networks",
        "Customs Brokerage",
        "International Freight Forwarding",
        "Multi-Modal Transportation"
      ]
    },
    {
      icon: <Package className="w-12 h-12 text-blue-600" />,
      title: "Warehousing & Distribution",
      description: "Advanced storage and distribution solutions with real-time inventory management.",
      features: [
        "Secure Storage Facilities",
        "Inventory Tracking",
        "Order Fulfillment",
        "Just-in-Time Delivery"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: <Clock className="w-10 h-10 text-blue-500" />,
      title: "Expedited Shipping",
      description: "Guaranteed fastest delivery times for time-critical shipments."
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-blue-500" />,
      title: "Secure Logistics",
      description: "Advanced security protocols for high-value and sensitive cargo."
    },
    {
      icon: <Map className="w-10 h-10 text-blue-500" />,
      title: "Route Optimization",
      description: "Smart routing to minimize costs and reduce environmental impact."
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
          <h1 className="text-4xl font-bold mb-4">Our Comprehensive Logistics Services</h1>
          <p className="text-xl text-blue-100">
            Tailored solutions to meet your unique shipping and logistics needs
          </p>
        </div>
      </header>

      {/* Main Services Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {serviceCategories.map((service) => (
            <div 
              key={service.title} 
              className="bg-white border rounded-lg p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-blue-800 text-center mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center mb-4">{service.description}</p>
              <ul className="space-y-2 text-gray-700">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <span className="mr-2 text-blue-500">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">
            Additional Logistics Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service) => (
              <div 
                key={service.title}
                className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Logistics?</h2>
          <p className="text-xl mb-8">
            Contact our experts for a personalized logistics solution
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="#" 
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50"
            >
              Get a Quote
            </a>
            <a 
              href="#" 
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
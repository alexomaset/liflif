"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Truck,
  MapPin,
  Clock,
  Shield,
  Share2,
  Zap,
  Smartphone,
  Download,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ChevronRight,
  Star
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const LiflifLandingPage = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isAppSectionVisible, setIsAppSectionVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const appSectionRef = useRef(null);

  const features = [
    {
      icon: <MapPin className="w-12 h-12 text-blue-600" />,
      title: "Real-Time Tracking",
      description:
        "Track your deliveries with precision, know exactly where your cargo is at any moment with our advanced GPS technology.",
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-600" />,
      title: "Efficient Routing",
      description:
        "AI-powered route optimization for faster deliveries, lower fuel costs, and improved operational efficiency.",
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Secure Transactions",
      description:
        "Bank-grade security for all payments with multiple payment options and instant confirmation.",
    },
  ];

  const mobileAppFeatures = [
    {
      icon: <Smartphone className="w-8 h-8 text-blue-600" />,
      title: "Intuitive Interface",
      description: "User-friendly design with smart suggestions and quick actions.",
    },
    {
      icon: <Download className="w-8 h-8 text-blue-600" />,
      title: "Easy Tracking",
      description: "Live shipment updates with predictive ETA and delay alerts.",
    },
    {
      icon: <Share2 className="w-8 h-8 text-blue-600" />,
      title: "Instant Communication",
      description: "Real-time chat with delivery partners and automated updates.",
    },
  ];

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

  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 text-white shadow-xl">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-12">
            <div 
              className="transform transition-transform duration-300 hover:scale-105"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Link href="/" className="flex items-center">
                <div className="relative">
                  <Image
                    src="/liflif.jpeg"
                    height={120}
                    width={160}
                    alt="LIFLIF Logo"
                    className="rounded-lg shadow-xl"
                    priority
                  />
                  {isHovered && (
                    <div className="absolute inset-0 bg-blue-600 opacity-20 rounded-lg transition-opacity duration-300" />
                  )}
                </div>
              </Link>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              {/* <Link 
                href="/services" 
                className="text-lg font-medium hover:text-blue-200 transition-colors duration-200"
              >
                Services
              </Link> */}
              <Link 
                href="/features" 
                className="text-lg font-medium hover:text-blue-200 transition-colors duration-200"
              >
                Features
              </Link>
              <Link 
                href="/contact" 
                className="text-lg font-medium hover:text-blue-200 transition-colors duration-200"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl font-bold mb-6 tracking-tight leading-tight">
              Logistics Reimagined
            </h1>
            <p className="text-2xl mb-10 text-blue-100 leading-relaxed">
              Transforming Delivery Logistics with Smart Technology
              and Innovative Solutions
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="#"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors duration-200 shadow-lg flex items-center justify-center group"
              >
                Download App
                <Download className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </a>
              <a
                href="#"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-200 flex items-center justify-center group"
              >
                Learn More
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Decorative wave shape */}
        <div className="relative h-16">
          <svg
            className="absolute bottom-0 w-full h-16"
            preserveAspectRatio="none"
            viewBox="0 0 1440 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 27L48 22.3C96 17.7 192 8.3 288 5.3C384 2.3 480 5.7 576 13.7C672 21.7 768 34.3 864 37.3C960 40.3 1056 33.7 1152 28.3C1248 23 1344 19 1392 17L1440 15V54H1392C1344 54 1248 54 1152 54C1056 54 960 54 864 54C768 54 672 54 576 54C480 54 384 54 288 54C192 54 96 54 48 54H0V27Z"
              fill="currentColor"
              className="text-gray-50"
            />
          </svg>
        </div>
      </header>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">Our Solutions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Innovative technology for seamless logistics management that transforms your business operations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`text-center p-8 rounded-xl transition-all duration-300 transform hover:-translate-y-2 
                ${
                  activeFeature === index
                    ? "bg-white shadow-xl ring-1 ring-blue-100"
                    : "hover:bg-white hover:shadow-lg"
                }`}
              onMouseEnter={() => setActiveFeature(index)}
            >
              <div className="flex justify-center mb-6 transform transition-transform duration-300 hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Mobile App Section */}
      <section
        ref={appSectionRef}
        className="bg-gradient-to-b from-white to-blue-50 py-24 overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            {/* Mobile App Mockup */}
            <div className="relative flex justify-center">
              <div
                className={`
                transition-all duration-1000 transform 
                ${
                  isAppSectionVisible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-full opacity-0"
                }
              `}
              >
                <div className="relative w-72 h-[600px] bg-white rounded-3xl border-8 border-gray-800 shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white p-4">
                    <div className="bg-white rounded-xl p-4 mb-6 shadow-lg">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
                            <Truck className="w-6 h-6" />
                          </div>
                          <div className="ml-3">
                            <div className="h-4 bg-gray-200 rounded w-24"></div>
                            <div className="h-3 bg-gray-100 rounded w-16 mt-2"></div>
                          </div>
                        </div>
                        <Star className="w-6 h-6 text-yellow-400" />
                      </div>
                      <div className="space-y-2">
                        <div className="h-3 bg-gray-100 rounded w-full"></div>
                        <div className="h-3 bg-gray-100 rounded w-4/5"></div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {mobileAppFeatures.map((feature, index) => (
                        <div
                          key={feature.title}
                          className={`
                            bg-white rounded-xl p-4 shadow-lg 
                            transition-all duration-500 
                            ${
                              isAppSectionVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                            }
                          `}
                          style={{ transitionDelay: `${index * 200}ms` }}
                        >
                          <div className="flex items-center mb-3">
                            <div className="bg-blue-50 p-2 rounded-lg">
                              {feature.icon}
                            </div>
                            <h4 className="ml-3 font-semibold text-blue-800">
                              {feature.title}
                            </h4>
                          </div>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* App Description */}
            <div
              className={`
              transition-all duration-1000 
              ${
                isAppSectionVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-full opacity-0"
              }
            `}
            >
              <h2 className="text-4xl font-bold text-blue-600 mb-6">
                LIFLIF Mobile App
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Experience logistics management like never before with our
                cutting-edge mobile application. Designed for efficiency,
                transparency, and ease of use.
              </p>
              <div className="space-y-6">
                {mobileAppFeatures.map((feature) => (
                  <div key={feature.title} className="flex items-start">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      {feature.icon}
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-blue-800 mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 flex items-center space-x-6">
                <a
                  href="#"
                  className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold 
                             hover:bg-blue-700 transition-colors duration-200 shadow-lg
                             flex items-center group"
                >
                  Download Now
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#"
                  className="text-blue-600 font-semibold hover:text-blue-700 
                             flex items-center group"
                >
                  Learn More
                  <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose LIFLIF?</h2>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Zap className="mr-4 text-yellow-300" />
                  Fast and Reliable Deliveries
                </li>
                <li className="flex items-center">
                  <Share2 className="mr-4 text-yellow-300" />
                  Transparent Tracking
                </li>
                <li className="flex items-center">
                  <Truck className="mr-4 text-yellow-300" />
                  Multi-Vehicle Support
                </li>
              </ul>
            </div>
            <div>
              <img
                src="/lif.jpg"
                height={800}
                width={700}
                alt="LIFLIF Logistics"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">
          Ready to Streamline Your Logistics?
        </h2>
        <p className="text-gray-600 mb-8">
          Download the LIFLIF app and transform your delivery experience today!
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#"
            className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700"
          >
            Get Started
          </a>
          <a
            href="#"
            className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-12">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">LIFLIF</h3>
            <p>
              Revolutionizing logistics through smart technology and innovative
              solutions.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-200">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-200">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-200">
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <p>Email: support@liflif.com</p>
            <p>Phone: +254 (0) 797 586 660</p>
            <div className="mt-6 flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-blue-400"
              >
                <i className="w-6 h-6">
                  <Facebook />
                </i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-blue-400"
              >
                <i className="w-6 h-6">
                  <Twitter />
                </i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-blue-400"
              >
                <i className="w-6 h-6">
                  <Instagram />
                </i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-blue-400"
              >
                <i className="w-6 h-6">
                  <Linkedin />
                </i>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 border-t border-blue-700 pt-4">
          © 2025 LIFLIF Logistics. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default LiflifLandingPage;

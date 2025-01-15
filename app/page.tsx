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
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const LiflifLandingPage = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isAppSectionVisible, setIsAppSectionVisible] = useState(false);
  const appSectionRef = useRef(null);

  const features = [
    {
      icon: <MapPin className="w-12 h-12 text-blue-600" />,
      title: "Real-Time Tracking",
      description:
        "Track your deliveries with precision, know exactly where your cargo is at any moment.",
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-600" />,
      title: "Efficient Routing",
      description:
        "Optimize routes for faster deliveries, lower fuel costs, and improved efficiency.",
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Secure Transactions",
      description:
        "Seamless and secure payment integration with multiple payment options.",
    },
  ];

  const mobileAppFeatures = [
    {
      icon: <Smartphone className="w-8 h-8 text-blue-600" />,
      title: "Intuitive Interface",
      description: "User-friendly design makes logistics management a breeze.",
    },
    {
      icon: <Download className="w-8 h-8 text-blue-600" />,
      title: "Easy Tracking",
      description: "Real-time shipment updates at your fingertips.",
    },
    {
      icon: <Share2 className="w-8 h-8 text-blue-600" />,
      title: "Instant Communication",
      description: "Direct messaging with delivery partners.",
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
    <div className="bg-white text-gray-900">
      {/* Header */}
      <header className="bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/file.svg"
                  height={300}
                  width={400}
                  alt="LIFLIF Logo"
                  className="h-10 w-auto mr-2"
                />
                <h1 className="text-3xl font-bold">LIFLIF</h1>
              </Link>
            </div>
            <nav className="space-x-4">
              <Link href="/services" className="hover:text-blue-200">
                Services
              </Link>
              <Link href="/features" className="hover:text-blue-200">
                Features
              </Link>
              <Link href="/" className="hover:text-blue-200">
                Contact
              </Link>
            </nav>
          </div>

          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Logistics Reimagined</h2>
            <p className="text-xl mb-8">
              Transforming Delivery Logistics with Smart Technology
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="#"
                className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50"
              >
                Download App
              </a>
              <a
                href="#"
                className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-600">Our Solutions</h2>
          <p className="text-gray-600 mt-4">
            Innovative technology for seamless logistics management
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`text-center p-6 rounded-lg transition-all duration-300 ${
                activeFeature === index
                  ? "bg-blue-50 shadow-lg"
                  : "hover:bg-blue-50"
              }`}
              onMouseEnter={() => setActiveFeature(index)}
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-blue-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* New Mobile App Showcase Section */}
      <section
        ref={appSectionRef}
        className="container mx-auto px-4 py-16 overflow-hidden"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Mobile App Mockup & Screenshots */}
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
              <div className="relative w-64 h-[500px] bg-gray-100 rounded-3xl border-8 border-gray-800 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-blue-50 p-4">
                  <div className="bg-white rounded-lg p-4 mb-4 shadow-md animate-pulse">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </div>
                  <div className="space-y-4">
                    {mobileAppFeatures.map((feature, index) => (
                      <div
                        key={feature.title}
                        className={`
                          bg-white rounded-lg p-3 shadow-md 
                          transition-all duration-500 
                          ${
                            isAppSectionVisible
                              ? "opacity-100 translate-y-0"
                              : "opacity-0 translate-y-10"
                          }
                        `}
                        style={{ transitionDelay: `${index * 200}ms` }}
                      >
                        <div className="flex items-center mb-2">
                          {feature.icon}
                          <h4 className="ml-2 font-semibold text-blue-800">
                            {feature.title}
                          </h4>
                        </div>
                        <p className="text-gray-600 text-sm">
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
            <h2 className="text-3xl font-bold text-blue-600 mb-6">
              LIFLIF Mobile App
            </h2>
            <p className="text-gray-700 mb-6">
              Experience logistics management like never before with our
              cutting-edge mobile application. Designed for efficiency,
              transparency, and ease of use.
            </p>
            <div className="space-y-4">
              {mobileAppFeatures.map((feature) => (
                <div key={feature.title} className="flex items-center">
                  {feature.icon}
                  <div className="ml-4">
                    <h4 className="font-semibold text-blue-800">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex items-center space-x-4">
              <a
                href="#"
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold 
                           hover:bg-blue-700 transition flex items-center group"
              >
                Download Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition" />
              </a>
              <a
                href="#"
                className="text-blue-600 hover:underline flex items-center"
              >
                Learn More
              </a>
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
                height={700}
                width={800}
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
          </div>
        </div>
        <div className="text-center mt-8 border-t border-blue-700 pt-4">
          © 2024 LIFLIF Logistics. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default LiflifLandingPage;

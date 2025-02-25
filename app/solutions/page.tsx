"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Truck, MessageSquare, ChevronRight, Users, Package, Clock, ArrowRight, Star } from "lucide-react";
import Footer from "../components/Footer";


interface SolutionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  imagePath: string;
  features: string[];
  index: number;
  benefits: string[];
}

const SolutionsPage: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
    useScroll();
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: false });
  
  // Handle navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const solutions = [
    {
      title: "Fleet Management",
      description: "Efficiently manage your entire delivery fleet with real-time tracking and performance analytics.",
      icon: <Truck className="w-8 h-8 text-blue-600" />,
      imagePath: "/fleet-management.svg",
      features: [
        "Real-time vehicle tracking",
        "Driver performance analytics",
        "Maintenance scheduling",
        "Fuel consumption optimization",
        "Route history analysis"
      ],
      benefits: [
        "Reduce fuel costs by up to 20%",
        "Improve delivery times by 35%",
        "Lower maintenance costs"
      ]
    },
    {
      title: "WhatsApp Chatbot",
      description: "Streamline order placement with an intelligent WhatsApp chatbot for seamless delivery requests.",
      icon: <MessageSquare className="w-8 h-8 text-blue-600" />,
      imagePath: "/whatsapp-chatbot.svg",
      features: [
        "Easy order placement",
        "Automated order confirmation",
        "Real-time delivery updates",
        "Payment integration",
        "Natural language processing"
      ],
      benefits: [
        "Reduce customer service costs by 40%",
        "24/7 order availability",
        "Increase customer satisfaction"
      ]
    },
    {
      title: "Route Optimization",
      description: "Minimize delivery time and costs with AI-powered route planning and optimization.",
      icon: <ArrowRight className="w-8 h-8 text-blue-600" />,
      imagePath: "/route-optimization.svg",
      features: [
        "AI-powered route suggestions",
        "Traffic-aware planning",
        "Bulk delivery optimization",
        "Delivery time windows",
        "Multiple stop management"
      ],
      benefits: [
        "Cut delivery times by up to 30%",
        "Reduce fuel consumption by 25%",
        "Handle more deliveries per driver"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
           <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="relative h-16 w-40">
              <Image
                src="/logo.svg"
                alt="LIFLIF Logo"
                height={564}
                width={564}
                priority
              />
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="solutions" className="text-gray-700 hover:text-blue-600">Solutions</Link>
              <Link href="features" className="text-gray-700 hover:text-blue-600">Features</Link>
              <Link href="pricing" className="text-gray-700 hover:text-blue-600">Pricing</Link>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full opacity-20"
            animate={{ scale: [1, 1.1, 1], x: [0, 10, 0], y: [0, -10, 0] }}
            transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.div 
            className="absolute top-60 -left-20 w-60 h-60 bg-blue-300 rounded-full opacity-20"
            animate={{ scale: [1, 1.2, 1], x: [0, -10, 0], y: [0, 15, 0] }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", delay: 2 }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-40 h-40 bg-blue-400 rounded-full opacity-10"
            animate={{ scale: [1, 1.3, 1], x: [0, 15, 0], y: [0, -15, 0] }}
            transition={{ duration: 18, repeat: Infinity, repeatType: "reverse", delay: 1 }}
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.span 
              className="inline-block py-1 px-3 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.1, duration: 0.8 }}
            >
              Delivery Management Platform
            </motion.span>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Innovative <span className="text-blue-600 relative">
                Solutions
                <motion.svg
                  width="100%"
                  height="8"
                  viewBox="0 0 200 8"
                  className="absolute -bottom-2 left-0 w-full"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isHeroInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                  transition={{ delay: 0.6, duration: 1 }}
                >
                  <path
                    d="M1 5.5C30 2.5 170 -0.5 199 5.5"
                    stroke="#3B82F6"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                </motion.svg>
              </span> for Modern Delivery Challenges
            </motion.h1>
            
            <motion.p
              className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Discover how our cutting-edge delivery management platform can transform your logistics operations and help you deliver exceptional customer experiences.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            >
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:translate-y-[-2px] text-lg font-semibold w-full sm:w-auto">
                Explore Solutions
              </button>
              <button className="bg-white text-blue-600 border-2 border-blue-200 px-8 py-4 rounded-full hover:border-blue-400 transition-all shadow-md hover:shadow-lg text-lg font-semibold w-full sm:w-auto">
                Request Demo
              </button>
            </motion.div>
          </motion.div>

          {/* Enhanced Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-4xl mx-auto"
          >
            <div className="flex flex-col items-center gap-2 bg-white p-6 rounded-xl shadow-lg border-b-4 border-blue-500 hover:transform hover:translate-y-[-5px] transition-all duration-300">
              <Users className="text-blue-600 w-10 h-10 mb-2" />
              <span className="text-gray-500 text-sm font-medium">Trusted By</span>
              <span className="font-bold text-2xl">2,500+</span>
              <span className="font-medium">Businesses</span>
            </div>
            <div className="flex flex-col items-center gap-2 bg-white p-6 rounded-xl shadow-lg border-b-4 border-blue-500 hover:transform hover:translate-y-[-5px] transition-all duration-300">
              <Package className="text-blue-600 w-10 h-10 mb-2" />
              <span className="text-gray-500 text-sm font-medium">Completed</span>
              <span className="font-bold text-2xl">10M+</span>
              <span className="font-medium">Deliveries</span>
            </div>
            <div className="flex flex-col items-center gap-2 bg-white p-6 rounded-xl shadow-lg border-b-4 border-blue-500 hover:transform hover:translate-y-[-5px] transition-all duration-300">
              <Clock className="text-blue-600 w-10 h-10 mb-2" />
              <span className="text-gray-500 text-sm font-medium">Success Rate</span>
              <span className="font-bold text-2xl">99.8%</span>
              <span className="font-medium">On-time Delivery</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Title */}
      <div className="container mx-auto px-6 mb-12">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            Our Comprehensive Solutions
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="h-1 bg-blue-600 mx-auto mb-8"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-16"
          >
            Tailored tools to optimize every aspect of your delivery operations, from fleet management to customer communications.
          </motion.p>
        </div>
      </div>

      {/* Enhanced Solutions Section with More Context and Better Layout */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <SolutionCard 
                key={solution.title}
                title={solution.title}
                description={solution.description}
                icon={solution.icon}
                imagePath={solution.imagePath}
                features={solution.features}
                benefits={solution.benefits}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>



      

      {/* SVG Definitions for Card Illustrations */}
      <div className="hidden">
        {/* These SVGs will be referenced by the Image component */}
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('/grid.png')] opacity-10"></div>
            
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Delivery Operations?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Schedule a personalized demo to see how our solutions can work for your specific business needs.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors shadow-lg font-medium"
            >
              Request Demo
            </motion.button>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

// Solution Card Component with Animation
const SolutionCard: React.FC<SolutionCardProps> = ({ title, description, icon, features, benefits, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px 0px" });
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg border border-blue-100 group hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      <div className="h-56 bg-blue-50 relative overflow-hidden">]
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {title === "Fleet Management" ? (
            <FleetManagementIllustration />
          ) : title === "WhatsApp Chatbot" ? (
            <WhatsAppChatbotIllustration />
          ) : (
            <DefaultIllustration />
          )}
        </motion.div>
      </div>
      
      <div className="p-8 flex-grow flex flex-col">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-blue-100 rounded-full mr-4">
            {icon}
          </div>
          <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        </div>
        
        <p className="text-gray-600 mb-6">
          {description}
        </p>
        
        {/* Benefits Section */}
        <div className="mb-6 bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-3 text-blue-800 flex items-center">
            <Star className="w-4 h-4 mr-2 text-blue-600" /> Key Benefits:
          </h4>
          <ul className="space-y-2">
            {benefits.map((benefit, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ delay: 0.3 + (i * 0.1) }}
                className="flex items-start"
              >
                <ChevronRight className="text-blue-600 mt-1 mr-2 w-4 h-4 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </motion.li>
            ))}
          </ul>
        </div>
        
        <h4 className="font-semibold mb-3 text-blue-800">Features:</h4>
        <ul className="space-y-2 mb-8">
          {features.map((feature, i) => (
            <motion.li 
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ delay: 0.5 + (i * 0.1) }}
              className="flex items-start"
            >
              <ChevronRight className="text-blue-600 mt-1 mr-2 w-4 h-4 flex-shrink-0" />
              <span>{feature}</span>
            </motion.li>
          ))}
        </ul>
        
        <div className="mt-auto">
          <motion.button
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white font-medium flex items-center py-3 px-6 rounded-lg group-hover:bg-blue-700 transition-colors w-full justify-center"
          >
            Learn more
            <ChevronRight className="ml-1 w-5 h-5 group-hover:ml-2 transition-all" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
// Custom SVG Illustrations for the solution cards
const DefaultIllustration = () => (
  <svg width="400" height="250" viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
    <rect width="400" height="250" fill="#EBF5FF" />
    <circle cx="200" cy="125" r="90" fill="#DBEAFE" />
    <text x="200" y="125" textAnchor="middle" fontFamily="sans-serif" fontSize="24" fill="#3B82F6">Default</text>
  </svg>
);
const FleetManagementIllustration = () => (
    <svg width="400" height="250" viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
    {/* Background with Gradient */}
    <defs>
      <linearGradient id="fleet-bg-gradient" x1="0" y1="0" x2="400" y2="250" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#EBF5FF" />
        <stop offset="100%" stopColor="#DBEAFE" />
      </linearGradient>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    
    {/* Background */}
    <rect width="400" height="250" fill="url(#fleet-bg-gradient)" />
    
    {/* City Skyline Silhouette */}
    <path d="M0,210 L40,210 L50,190 L70,200 L90,180 L100,190 L120,190 L130,170 L150,180 L170,160 L190,170 L200,150 L220,170 L240,160 L250,180 L270,170 L280,190 L300,180 L320,190 L340,170 L360,190 L380,180 L400,190 L400,250 L0,250 Z" 
      fill="#D1E5FE" opacity="0.5" />
    
    {/* Map Grid with Better Perspective */}
    <g opacity="0.15">
      {/* Horizontal Grid Lines with Perspective */}
      <path d="M50,40 C100,43 300,37 350,40" stroke="#3B82F6" strokeWidth="1" />
      <path d="M50,70 C100,75 300,65 350,70" stroke="#3B82F6" strokeWidth="1" />
      <path d="M50,100 C100,107 300,93 350,100" stroke="#3B82F6" strokeWidth="1" />
      <path d="M50,130 C100,139 300,121 350,130" stroke="#3B82F6" strokeWidth="1" />
      <path d="M50,160 C100,171 300,149 350,160" stroke="#3B82F6" strokeWidth="1" />
      <path d="M50,190 C100,203 300,177 350,190" stroke="#3B82F6" strokeWidth="1" />
      
      {/* Vertical Grid Lines with Perspective */}
      <path d="M50,40 C53,80 47,150 50,190" stroke="#3B82F6" strokeWidth="1" />
      <path d="M100,40 C105,80 95,150 100,190" stroke="#3B82F6" strokeWidth="1" />
      <path d="M150,40 C157,80 143,150 150,190" stroke="#3B82F6" strokeWidth="1" />
      <path d="M200,40 C210,80 190,150 200,190" stroke="#3B82F6" strokeWidth="1" />
      <path d="M250,40 C262,80 238,150 250,190" stroke="#3B82F6" strokeWidth="1" />
      <path d="M300,40 C315,80 285,150 300,190" stroke="#3B82F6" strokeWidth="1" />
      <path d="M350,40 C367,80 333,150 350,190" stroke="#3B82F6" strokeWidth="1" />
    </g>
    
    {/* Major Roads */}
    <path d="M50,125 C100,135 300,115 350,125" stroke="#94A3B8" strokeWidth="9" strokeLinecap="round" opacity="0.8" />
    <path d="M200,40 C210,80 190,150 200,190" stroke="#94A3B8" strokeWidth="9" strokeLinecap="round" opacity="0.8" />
    <path d="M50,125 C100,135 300,115 350,125" stroke="#CBD5E1" strokeWidth="7" strokeLinecap="round" strokeDasharray="3 3" />
    
    {/* Traffic Light */}
    <rect x="180" y="100" width="10" height="25" rx="2" fill="#64748B" />
    <rect x="177" y="90" width="16" height="12" rx="2" fill="#475569" />
    <circle cx="185" cy="93" r="3" fill="#EF4444" />
    <circle cx="185" cy="99" r="3" fill="#FBBF24" />
    
    {/* Headquarters/Warehouse */}
    <rect x="225" y="75" width="35" height="25" rx="2" fill="#3B82F6" opacity="0.8" />
    <rect x="232" y="85" width="7" height="15" fill="#1D4ED8" />
    <rect x="246" y="85" width="7" height="15" fill="#1D4ED8" />
    <path d="M225,75 L242.5,65 L260,75" fill="#2563EB" />
    
    {/* Destination Markers */}
    <circle cx="150" cy="90" r="6" fill="#2563EB" stroke="white" strokeWidth="2" />
    <circle cx="260" cy="150" r="6" fill="#2563EB" stroke="white" strokeWidth="2" />
    <circle cx="90" cy="140" r="6" fill="#2563EB" stroke="white" strokeWidth="2" />
    <circle cx="310" cy="110" r="6" fill="#2563EB" stroke="white" strokeWidth="2" />
    
    {/* Active Route */}
    <path d="M200,125 C195,115 165,95 150,90" stroke="#EF4444" strokeWidth="2.5" strokeDasharray="4 2" />
    <path d="M150,90 C130,85 100,115 90,140" stroke="#EF4444" strokeWidth="2.5" strokeDasharray="4 2" />
    <path d="M90,140 C85,155 100,165 120,168" stroke="#EF4444" strokeWidth="2.5" strokeDasharray="4 2" />
    
    {/* Alternate Routes */}
    <path d="M200,125 C220,120 250,130 260,150" stroke="#60A5FA" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.6" />
    <path d="M200,125 C230,120 290,105 310,110" stroke="#60A5FA" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.6" />
    
    {/* Main Vehicle (with animation positioning) */}
    <g transform="translate(120, 168) rotate(-5)">
      <rect x="-12" y="-8" width="24" height="14" rx="3" fill="#3B82F6" />
      <rect x="-12" y="-8" width="18" height="8" rx="1" fill="#2563EB" />
      <rect x="6" y="-6" width="6" height="10" rx="1" fill="#1E40AF" />
      <circle cx="-6" cy="6" r="3.5" fill="#1E3A8A" stroke="#60A5FA" strokeWidth="0.5" />
      <circle cx="6" cy="6" r="3.5" fill="#1E3A8A" stroke="#60A5FA" strokeWidth="0.5" />
      
      {/* Pulse Effect */}
      <circle cx="0" cy="0" r="15" fill="#EF4444" opacity="0.1">
        <animate attributeName="r" values="10;20;10" dur="1.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.1;0.3;0.1" dur="1.5s" repeatCount="indefinite" />
      </circle>
    </g>
    
    {/* Other Vehicles */}
    <g transform="translate(260, 150) rotate(10)">
      <rect x="-8" y="-5" width="16" height="9" rx="2" fill="#64748B" />
      <rect x="-8" y="-5" width="12" height="5" rx="1" fill="#475569" />
      <rect x="4" y="-4" width="4" height="7" rx="1" fill="#334155" />
      <circle cx="-4" cy="4" r="2" fill="#1E293B" />
      <circle cx="4" cy="4" r="2" fill="#1E293B" />
    </g>
    
    <g transform="translate(310, 110) rotate(-15)">
      <rect x="-8" y="-5" width="16" height="9" rx="2" fill="#64748B" />
      <rect x="-8" y="-5" width="12" height="5" rx="1" fill="#475569" />
      <rect x="4" y="-4" width="4" height="7" rx="1" fill="#334155" />
      <circle cx="-4" cy="4" r="2" fill="#1E293B" />
      <circle cx="4" cy="4" r="2" fill="#1E293B" />
    </g>
    
    {/* Dashboard Elements */}
    <rect x="45" y="45" width="90" height="30" rx="6" fill="white" filter="url(#glow)" />
    <text x="53" y="63" fontFamily="sans-serif" fontSize="10" fill="#0F172A" fontWeight="bold">Fleet Dashboard</text>
    <rect x="50" y="67" width="30" height="3" rx="1.5" fill="#3B82F6" />
    <rect x="85" y="67" width="15" height="3" rx="1.5" fill="#60A5FA" />
    <rect x="105" y="67" width="25" height="3" rx="1.5" fill="#93C5FD" />
    
    <rect x="280" y="45" width="75" height="40" rx="6" fill="white" filter="url(#glow)" />
    <rect x="287" y="52" width="60" height="5" rx="2.5" fill="#3B82F6" />
    <rect x="287" y="62" width="40" height="5" rx="2.5" fill="#60A5FA" />
    <rect x="287" y="72" width="50" height="5" rx="2.5" fill="#93C5FD" />
    
    {/* Analytics Widget */}
    <rect x="280" y="170" width="75" height="35" rx="6" fill="white" filter="url(#glow)" />
    <path d="M287,192 L302,175 L317,185 L332,170" stroke="#3B82F6" strokeWidth="2" fill="none" />
    <circle cx="302" cy="175" r="3" fill="#BFDBFE" stroke="#3B82F6" strokeWidth="1.5" />
    <circle cx="317" cy="185" r="3" fill="#BFDBFE" stroke="#3B82F6" strokeWidth="1.5" />
    <rect x="287" y="195" width="60" height="3" rx="1.5" fill="#94A3B8" />
  </svg>
);

const WhatsAppChatbotIllustration = () => (
  <svg width="400" height="250" viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
    {/* Background Elements */}
    <rect width="400" height="250" fill="#EBF5FF" />
    <circle cx="200" cy="125" r="90" fill="#DBEAFE" />
    
    {/* Phone Outline */}
    <rect x="130" y="40" width="140" height="180" rx="20" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="2" />
    <rect x="140" y="60" width="120" height="140" fill="#F1F5F9" rx="4" />
    <circle cx="200" cy="210" r="10" stroke="#94A3B8" strokeWidth="2" fill="white" />
    
    {/* Chat Header */}
    <rect x="140" y="60" width="120" height="30" fill="#25D366" rx="4 4 0 0" />
    <circle cx="160" cy="75" r="8" fill="white" />
    <rect x="175" y="71" width="70" height="8" rx="2" fill="white" opacity="0.8" />
    
    {/* Chat Bubbles */}
    <g>
      {/* Incoming Message 1 */}
      <rect x="145" y="100" width="80" height="20" rx="10" fill="white" />
      <text x="155" y="114" fontFamily="sans-serif" fontSize="10" fill="#1E293B">Hi! Need a delivery?</text>
    </g>
    
    <g>
      {/* Outgoing Message 1 */}
      <rect x="175" y="130" width="80" height="20" rx="10" fill="#DCF8C6" />
      <text x="185" y="144" fontFamily="sans-serif" fontSize="10" fill="#1E293B">Yes, package pickup</text>
    </g>
    
    <g>
      {/* Incoming Message 2 */}
      <rect x="145" y="160" width="95" height="30" rx="10" fill="white" />
      <text x="155" y="174" fontFamily="sans-serif" fontSize="10" fill="#1E293B">Great! When and where?</text>
      <text x="155" y="184" fontFamily="sans-serif" fontSize="9" fill="#64748B">Tap to select...</text>
    </g>
    
    {/* WhatsApp Icons */}
    <rect x="140" y="200" width="120" height="20" fill="#F8FAFC" />
    <circle cx="160" cy="210" r="8" stroke="#94A3B8" strokeWidth="1.5" fill="none" />
    <rect x="175" y="207" width="70" height="6" rx="3" fill="#94A3B8" />
    
    {/* Decorative Elements - Delivery Icons */}
    <g opacity="0.2" transform="translate(70, 70)">
      <rect width="30" height="30" rx="15" fill="#3B82F6" />
      <path d="M10 15H20M15 10V20" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </g>
    
    <g opacity="0.2" transform="translate(300, 70)">
      <rect width="30" height="30" rx="15" fill="#3B82F6" />
      <path d="M10 15H20" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </g>
    
    <g opacity="0.2" transform="translate(300, 160)">
      <rect width="30" height="30" rx="15" fill="#3B82F6" />
      <circle cx="15" cy="15" r="5" stroke="white" strokeWidth="2" />
    </g>
    
    <g opacity="0.2" transform="translate(70, 160)">
      <rect width="30" height="30" rx="15" fill="#3B82F6" />
      <path d="M10 13L14 17L20 11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
  
);


export default SolutionsPage;
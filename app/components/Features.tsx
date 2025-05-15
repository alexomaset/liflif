"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { IconNode } from "lucide-react";
import { 
  BarChart3, 
  Truck, 
  Bell, 
  Users, 
  MapPin, 
  CalendarCheck, 
  Clock, 
  Shield,
  Lock,
  MessageSquare,
  Zap
} from "lucide-react";

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

// Reduced to only delivery-focused features
const features: Feature[] = [
  {
    id: 1,
    title: "Real-time Tracking",
    description: "Monitor your fleet in real-time with detailed GPS tracking and status updates.",
    icon: Truck,
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 2,
    title: "Smart Notifications",
    description: "Automated alerts for delays, deliveries, and important status changes.",
    icon: Bell,
    color: "from-purple-500 to-purple-600"
  },
  {
    id: 3,
    title: "Route Optimization",
    description: "AI-powered route suggestions to save fuel and reduce delivery times.",
    icon: MapPin,
    color: "from-red-500 to-red-600"
  },
  {
    id: 4,
    title: "Delivery Scheduling",
    description: "Set delivery windows and manage appointments for maximum efficiency.",
    icon: CalendarCheck,
    color: "from-yellow-500 to-yellow-600"
  },
  {
    id: 5,
    title: "Performance Analytics",
    description: "Comprehensive reports on delivery times, efficiency, and customer satisfaction.",
    icon: BarChart3,
    color: "from-indigo-500 to-indigo-600"
  }
];

// Grid layout features focused on delivery services
const additionalFeatures = [
  {
    id: "ai",
    title: "AI Optimization",
    icon: <Zap className="h-7 w-7 text-white" />,
    description: "ML-powered logistics"
  },
  {
    id: "dynamic-pricing",
    title: "Dynamic Pricing",
    icon: <div className="flex items-center justify-center">
      <div className="text-xs bg-white text-black rounded p-1 px-2">$35</div>
    </div>,
    description: "Demand-based delivery pricing"
  },
  {
    id: "communication",
    title: "Driver Communications",
    icon: <MessageSquare className="h-7 w-7 text-white" />,
    description: "Direct driver messaging"
  }
];

const Features = () => {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

  return (
    <section className="py-20 bg-gray-900" id="features">
      <div className="container mx-auto px-6 relative z-10">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl"></div>
        </div>



        {/* Features grid layout */}
        <div className="grid grid-cols-12 gap-4 mb-12 relative">
          {/* Removed first row with Integrations, Private and Secure, and Unlimited Scale */}

          {/* Central FEATURES text */}
          <motion.div 
            className="col-span-12 flex justify-center items-center py-8 my-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative">
              <motion.h2 
                className="text-7xl md:text-8xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-red-500 to-white"
                animate={{ 
                  textShadow: ["0 0 10px rgba(244, 114, 182, 0.7)", "0 0 20px rgba(239, 68, 68, 0.8)", "0 0 10px rgba(244, 114, 182, 0.7)"]
                } as any}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  WebkitTextStroke: '1px rgba(255, 255, 255, 0.2)'
                }}
              >
                FEATURES
              </motion.h2>
            </div>
          </motion.div>



          {/* Core features in a grid */}
          <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                className="bg-gray-800/60 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300"
                onHoverStart={() => setHoveredFeature(`core-${feature.id}`)}
                onHoverEnd={() => setHoveredFeature(null)}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
                <motion.div 
                  className="w-full h-1 mt-4 bg-gradient-to-r rounded-full overflow-hidden"
                  style={{ backgroundImage: `linear-gradient(to right, ${feature.color.replace('from-', '').replace('to-', '')})` }}
                >
                  <motion.div 
                    className="h-full bg-white/30"
                    initial={{ width: "0%" }}
                    animate={hoveredFeature === `core-${feature.id}` ? { width: "100%" } : { width: "0%" }}
                    transition={{ duration: 0.8 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
          
          {/* Last row */}
          <motion.div 
            className="col-span-12 md:col-span-3 bg-gray-800/60 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-bold text-white mb-2">AI-Powered</h3>
            <div className="mt-2">
              <motion.div 
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="flex items-center justify-center"
              >
                <Zap className="w-10 h-10 text-yellow-400" />
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="col-span-12 md:col-span-6 bg-gray-800/60 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Powerful Analytics</h3>
                <p className="text-gray-400 text-sm">Track performance and optimize operations</p>
              </div>
              <BarChart3 className="w-10 h-10 text-blue-400" />
            </div>
          </motion.div>
          
          <motion.div 
            className="col-span-12 md:col-span-3 bg-gray-800/60 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-bold text-white mb-2">24/7 Support</h3>
            <div className="flex space-x-1 mt-2">
              <div className="w-2 h-8 bg-green-500 rounded-full"></div>
              <div className="w-2 h-6 bg-green-400 rounded-full"></div>
              <div className="w-2 h-4 bg-green-300 rounded-full"></div>
              <div className="w-2 h-7 bg-green-400 rounded-full"></div>
              <div className="w-2 h-5 bg-green-300 rounded-full"></div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-10 relative z-10"
        >
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-500/20"
          >
            <span className="font-medium">Explore All Features</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
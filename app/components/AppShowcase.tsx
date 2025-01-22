"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  ScanLine, 
  RefreshCw, 
  PackageCheck, 
  FileCheck, 
  Map 
} from 'lucide-react';

const AppShowcase = () => {
  const [activeTab, setActiveTab] = useState('driver');
  const [activeFeature, setActiveFeature] = useState(0);

  const tabs = [
    { id: 'driver', label: 'Driver app' },
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'customer', label: 'Customer portal' }
  ];

  const features = [
    {
      id: 'scanning',
      icon: <ScanLine className="w-6 h-6" />,
      title: 'Smart package scanning',
      highlight: 'package scanning',
      description: 'Able to scan damaged labels'
    },
    {
      id: 'updates',
      icon: <RefreshCw className="w-6 h-6" />,
      title: 'Realtime updates',
      highlight: 'updates',
      description: 'from receiver portal'
    },
    {
      id: 'overview',
      icon: <PackageCheck className="w-6 h-6" />,
      title: 'Overview of delivery statuses',
      highlight: 'delivery statuses',
      description: 'Track all deliveries in real-time'
    },
    {
      id: 'proof',
      icon: <FileCheck className="w-6 h-6" />,
      title: 'Proof of delivery and pick up',
      highlight: 'and pick up',
      description: 'Capture signatures and photos'
    },
    {
      id: 'route',
      icon: <Map className="w-6 h-6" />,
      title: 'Route planning',
      highlight: 'planning',
      description: 'Optimized delivery routes'
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* App Type Selector */}
        <div className="flex justify-center mb-16">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-full p-1.5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-cyan-500 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Features List */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 cursor-pointer
                  ${activeFeature === index ? 'bg-gray-800/30 backdrop-blur-sm' : 'hover:bg-gray-800/20'}`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="p-2 bg-cyan-500/10 rounded-lg">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">
                    <span>{feature.title.split(feature.highlight)[0]}</span>
                    <span className="text-[#b4ff3c]">{feature.highlight}</span>
                    <span>{feature.title.split(feature.highlight)[1]}</span>
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-[300px] h-[600px] mx-auto">
              {/* Phone Frame */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-[3rem] transform -rotate-6"></div>
              <div className="absolute inset-0 bg-gray-900 rounded-[2.8rem] transform rotate-3"></div>
              <div className="relative bg-gray-800 rounded-[2.5rem] h-full p-4 transform rotate-0">
                {/* App Screen Content */}
                <div className="h-full w-full rounded-[2rem] overflow-hidden bg-white">
                  {/* App Interface */}
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-gray-900 text-lg font-medium">Today</div>
                      <div className="text-gray-500">History</div>
                    </div>
                    
                    {/* Delivery Items */}
                    <div className="space-y-4">
                      <div className="bg-red-100 rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="text-sm font-medium">Delivery 001</div>
                            <div className="text-xs text-gray-500 mt-1">4450/178 Kamenge</div>
                          </div>
                          <span className="text-red-500 text-xs">Needs documents</span>
                        </div>
                      </div>
                      
                      <div className="bg-green-100 rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="text-sm font-medium">Delivery 002</div>
                            <div className="text-xs text-gray-500 mt-1">4450/178 Keza</div>
                          </div>
                          <span className="text-green-500 text-xs">Ready for delivery</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-20 right-0 bg-cyan-500/20 backdrop-blur-sm rounded-lg p-3"
            >
              <Smartphone className="w-6 h-6 text-cyan-500" />
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="absolute bottom-20 left-0 bg-[#b4ff3c]/20 backdrop-blur-sm rounded-lg p-3"
            >
              <Map className="w-6 h-6 text-[#b4ff3c]" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
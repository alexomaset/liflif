"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  Smartphone, 
  ScanLine, 
  RefreshCw, 
  PackageCheck, 
  FileCheck, 
  Map,
  Laptop
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
    <section className="relative py-24 overflow-hidden bg-blue-900">
      <div className="container mx-auto px-6">
        {/* App Type Selector */}
        <div className="flex justify-center mb-16">
          <div className="bg-blue-800/70 backdrop-blur-sm rounded-full p-1.5 shadow-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-blue-500 text-white'
                    : 'text-blue-100 hover:bg-blue-700'
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
            className="space-y-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 cursor-pointer
                  ${activeFeature === index 
                    ? 'bg-blue-800/50 backdrop-blur-sm border border-blue-700 shadow-md' 
                    : 'border border-transparent hover:bg-blue-800/30 hover:border-blue-700'}`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="p-2 bg-blue-600/30 text-blue-200 rounded-lg">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">
                    <span>{feature.title.split(feature.highlight)[0]}</span>
                    <span className="text-blue-300">{feature.highlight}</span>
                    <span>{feature.title.split(feature.highlight)[1]}</span>
                  </h3>
                  <p className="text-blue-200">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Device Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {activeTab === 'dashboard' ? (
              <div className="relative mx-auto">
                {/* Dashboard Frame */}
                <div className="relative w-[480px] h-[320px] mx-auto transform perspective-1000">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl transform -rotate-2 shadow-xl"></div>
                  <div className="absolute inset-0 bg-white rounded-lg transform rotate-1 shadow-lg"></div>
                  <div className="relative rounded-md h-full p-3 transform rotate-0 border border-gray-200 bg-gray-50">
                    <div className="h-full w-full rounded-md overflow-hidden border border-gray-200 shadow-inner">
                      <Image
                        src="/dashboard.png"
                        alt="Dashboard Interface"
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Floating elements for dashboard */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-0 right-0 bg-blue-500/20 backdrop-blur-sm rounded-lg p-3 shadow-md"
                >
                  <Laptop className="w-6 h-6 text-blue-200" />
                </motion.div>
              </div>
            ) : (
              <div className="relative w-[300px] h-[600px] mx-auto">
                {/* Phone Frame */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-[3rem] transform -rotate-6 shadow-xl"></div>
                <div className="absolute inset-0 bg-white rounded-[2.8rem] transform rotate-3 shadow-lg"></div>
                <div className="relative bg-blue-50 rounded-[2.5rem] h-full p-4 transform rotate-0 border border-blue-100">
                  {/* App Screen Content */}
                  <div className="h-full w-full rounded-[2rem] overflow-hidden bg-white shadow-inner">
                    {/* App Interface */}
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-6">
                        <div className="text-blue-600 text-lg font-medium">Today</div>
                        <div className="text-gray-500">History</div>
                      </div>
                      
                      {/* Delivery Items */}
                      <div className="space-y-4">
                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="text-sm font-medium text-gray-800">Delivery 001</div>
                              <div className="text-xs text-gray-500 mt-1">4450/178 Kamenge</div>
                            </div>
                            <span className="text-blue-600 text-xs bg-blue-100 px-2 py-1 rounded-full">Needs documents</span>
                          </div>
                        </div>
                        
                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="text-sm font-medium text-gray-800">Delivery 002</div>
                              <div className="text-xs text-gray-500 mt-1">4450/178 Keza</div>
                            </div>
                            <span className="text-blue-600 text-xs bg-blue-100 px-2 py-1 rounded-full">Ready for delivery</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Floating Elements */}
            {activeTab !== 'dashboard' && (
              <>
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-20 right-0 bg-blue-500/20 backdrop-blur-sm rounded-lg p-3 shadow-md"
                >
                  <Smartphone className="w-6 h-6 text-blue-200" />
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  className="absolute bottom-20 left-0 bg-blue-500/20 backdrop-blur-sm rounded-lg p-3 shadow-md"
                >
                  <Map className="w-6 h-6 text-blue-200" />
                </motion.div>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
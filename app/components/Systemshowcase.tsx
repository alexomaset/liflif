"use client";

import React, { ReactNode, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  LayoutDashboard, 
  Car,
  MapPin,
  Package,
  Navigation,
} from 'lucide-react';

interface AppMockupProps {
    children: ReactNode;
    isActive: boolean;
  }

const AppMockup: React.FC<AppMockupProps>  = ({ children, isActive }) => (
  <div className={`relative w-full max-w-[280px] mx-auto transition-all duration-300 ${
    isActive ? 'transform scale-105 shadow-2xl' : 'opacity-90'
  }`}>
    {/* Phone frame */}
    <div className="relative rounded-[2.5rem] overflow-hidden bg-gray-900 p-4">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-7 w-32 bg-gray-900 rounded-b-2xl z-20"></div>
      {/* Screen */}
      <div className="relative bg-white rounded-[2rem] overflow-hidden aspect-[9/19.5]">
        {/* Status Bar */}
        <div className="absolute top-0 left-0 right-0 h-7 bg-white z-10 flex justify-between items-center px-5">
          <span className="text-xs font-medium">9:41</span>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-black"></div>
          </div>
        </div>
        {children}
      </div>
    </div>
  </div>
);

const SystemShowcase = () => {
  const [activeApp, setActiveApp] = useState('dashboard');

  const apps = [
    {
      id: 'consumer',
      icon: <Users className="w-6 h-6" />,
      name: 'Consumer portal',
      color: 'bg-[#D4F82A]',
      textColor: 'text-[#D4F82A]',
      screen: (
        <div className="h-full bg-gray-50">
          {/* Header */}
          <div className="pt-7 px-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Track Delivery</h2>
              <button className="text-blue-500">History</button>
            </div>
          </div>
          {/* Map View */}
          <div className="relative h-[70%] bg-gray-100">
            {/* Map content */}
            <div className="absolute inset-0">
              <div className="h-full w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-50/50"></div>
                {/* Route visualization */}
                <svg className="absolute inset-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path
                    d="M20,50 Q40,20 60,50 T90,50"
                    fill="none"
                    stroke="#3B82F6"
                    strokeWidth="2"
                    className="animate-dash"
                  />
                </svg>
                {/* Location markers */}
                <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <MapPin className="w-6 h-6 text-blue-500" />
                    <div className="absolute -top-1 -left-1 w-8 h-8 bg-blue-500/20 rounded-full animate-ping"></div>
                  </div>
                </div>
                <div className="absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2">
                  <Navigation className="w-6 h-6 text-green-500" />
                </div>
              </div>
            </div>
          </div>
          {/* Delivery details */}
          <div className="p-4">
            <div className="bg-white rounded-xl shadow-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium">Estimated arrival</span>
                <span className="text-sm text-green-500">15 mins</span>
              </div>
              <div className="flex items-center space-x-3">
                <Package className="w-5 h-5 text-gray-500" />
                <div>
                  <p className="text-sm font-medium">Package #1234</p>
                  <p className="text-xs text-gray-500">4450/178 Kamenge</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'dashboard',
      icon: <LayoutDashboard className="w-6 h-6" />,
      name: 'Dashboard',
      color: 'bg-[#22C55E]',
      textColor: 'text-[#22C55E]',
      screen: (
        <div className="h-full bg-white">
          {/* Header with metrics */}
          <div className="pt-7 px-4 bg-green-500 text-white">
            <div className="grid grid-cols-3 gap-4 pb-4">
              <div className="text-center">
                <div className="text-2xl font-bold">28</div>
                <div className="text-xs opacity-80">Active</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">15</div>
                <div className="text-xs opacity-80">Drivers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">7</div>
                <div className="text-xs opacity-80">Minutes</div>
              </div>
            </div>
          </div>
          {/* Map Dashboard */}
          <div className="relative h-[75%] bg-gray-50">
            <div className="absolute inset-0">
              {/* Map visualization */}
              <div className="h-full w-full relative">
                <div className="absolute inset-0 bg-gray-100"></div>
                {/* Active delivery routes */}
                <svg className="absolute inset-0" viewBox="0 0 100 100">
                  <path
                    d="M10,50 Q30,30 50,50 T90,50"
                    fill="none"
                    stroke="#22C55E"
                    strokeWidth="1.5"
                    strokeDasharray="4"
                  />
                  <circle cx="10" cy="50" r="2" fill="#22C55E" />
                  <circle cx="50" cy="50" r="2" fill="#22C55E" />
                  <circle cx="90" cy="50" r="2" fill="#22C55E" />
                </svg>
                {/* Active drivers */}
                <div className="absolute top-1/3 left-1/4">
                  <div className="h-3 w-3 bg-green-500 rounded-full">
                    <div className="absolute -inset-1 bg-green-500/20 rounded-full animate-ping"></div>
                  </div>
                </div>
                <div className="absolute bottom-1/3 right-1/4">
                  <div className="h-3 w-3 bg-green-500 rounded-full">
                    <div className="absolute -inset-1 bg-green-500/20 rounded-full animate-ping"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'driver',
      icon: <Car className="w-6 h-6" />,
      name: 'Driver app',
      color: 'bg-[#0EA5E9]',
      textColor: 'text-[#0EA5E9]',
      screen: (
        <div className="h-full bg-gray-50">
          {/* Header */}
          <div className="pt-7 px-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Today</h2>
              <button className="text-gray-500">History</button>
            </div>
          </div>
          {/* Delivery List */}
          <div className="px-4 space-y-3">
            {/* Delivery Item 1 */}
            <div className="bg-red-50 rounded-xl p-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-sm font-medium">Delivery 001</span>
                    <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full">Pending</span>
                  </div>
                  <div className="flex items-center text-gray-500 text-xs">
                    <MapPin className="w-4 h-4 mr-1" />
                    4450/178 Kamenge
                  </div>
                </div>
                <button className="text-red-500 text-xs bg-red-100 px-3 py-1 rounded-full">
                  Needs documents
                </button>
              </div>
            </div>
            {/* Delivery Item 2 */}
            <div className="bg-green-50 rounded-xl p-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-sm font-medium">Delivery 002</span>
                    <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full">Active</span>
                  </div>
                  <div className="flex items-center text-gray-500 text-xs">
                    <MapPin className="w-4 h-4 mr-1" />
                    4450/178 Keza
                  </div>
                </div>
                <button className="text-green-500 text-xs bg-green-100 px-3 py-1 rounded-full">
                  Ready for delivery
                </button>
              </div>
            </div>
            {/* Delivery Item 3 */}
            <div className="bg-green-50 rounded-xl p-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-sm font-medium">Delivery 003</span>
                    <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full">Active</span>
                  </div>
                  <div className="flex items-center text-gray-500 text-xs">
                    <MapPin className="w-4 h-4 mr-1" />
                    4450/178 Kinanira
                  </div>
                </div>
                <button className="text-green-500 text-xs bg-green-100 px-3 py-1 rounded-full">
                  Ready for pickup
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Live updates with all
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-[#D4F82A]">
              functionality within one system
            </span>
          </h2>
        </motion.div>

        {/* Apps Container */}
        <div className="max-w-6xl mx-auto relative">
          {/* Connected Lines */}
          <svg className="absolute top-24 left-0 right-0 w-full" height="2">
            <line
              x1="20%"
              y1="0"
              x2="80%"
              y2="0"
              stroke="#333"
              strokeWidth="2"
              strokeDasharray="4"
            />
          </svg>

          {/* Apps Grid */}
          <div className="grid md:grid-cols-3 gap-12">
            {apps.map((app) => (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                {/* App Icon */}
                <div className="flex flex-col items-center mb-8">
                  <div className={`${app.color} bg-opacity-20 p-4 rounded-xl mb-3`}>
                    <div className={`${app.textColor}`}>
                      {app.icon}
                    </div>
                  </div>
                  <span className="text-white font-medium">{app.name}</span>
                </div>

                {/* App Screen */}
                <AppMockup isActive={activeApp === app.id}>
                  <div 
                    className="h-full"
                    onMouseEnter={() => setActiveApp(app.id)}
                  >
                    {app.screen}
                  </div>
                </AppMockup>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemShowcase;
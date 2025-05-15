"use client";

import React, { ReactNode, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
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
  deviceType: 'phone' | 'tablet';
}

const AppMockup: React.FC<AppMockupProps> = ({ children, isActive, deviceType }) => (
  <div className={`relative w-full mx-auto transition-all duration-300 ${
    isActive ? 'transform scale-105 shadow-2xl' : 'opacity-90'
  } ${deviceType === 'phone' ? 'max-w-[280px]' : 'max-w-[520px]'}`}>
    {/* Device frame */}
    <div className={`relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 p-4 ${
      deviceType === 'tablet' ? 'h-full' : ''
    } shadow-xl`}>
      {/* Notch (only for phones) */}
      {deviceType === 'phone' && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-7 w-32 bg-gray-900 rounded-b-2xl z-20"></div>
      )}
      
      {/* Screen */}
      <div className={`relative bg-white rounded-[2rem] overflow-hidden ${
        deviceType === 'phone' ? 'aspect-[9/19.5]' : 'aspect-[3/4]'
      } shadow-inner`}>
        {/* Status Bar */}
        <div className="absolute top-0 left-0 right-0 h-7 bg-white z-10 flex justify-between items-center px-5 border-b border-gray-100">
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

// Move static data outside component
const APPS_DATA = [
  {
    id: 'consumer',
    icon: <Users className="w-6 h-6" />,
    name: 'Consumer portal',
    color: 'bg-[#D4F82A]',
    textColor: 'text-[#D4F82A]',
    deviceType: 'phone' as const,
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
    deviceType: 'tablet' as const,
    screen: (
      <div className="h-full w-full relative">
        <Image 
          src="/dashboard.png"
          alt="Dashboard Screenshot"
          fill
          className="object-contain object-top"
        />
      </div>
    )
  },
  {
    id: 'driver',
    icon: <Car className="w-6 h-6" />,
    name: 'Driver app',
    color: 'bg-[#F59E0B]',
    textColor: 'text-[#F59E0B]',
    deviceType: 'phone' as const,
    screen: (
      <div className="h-full bg-gray-50">
        {/* Header */}
        <div className="pt-7 px-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">My Deliveries</h2>
            <button className="text-blue-500">Filter</button>
          </div>
        </div>
        {/* Delivery list */}
        <div className="px-4 space-y-3 overflow-y-auto max-h-[calc(100%-150px)] pb-4">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium text-sm">Order #5678</h3>
              <span className="text-xs bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full">En Route</span>
            </div>
            <p className="text-xs text-gray-500">To: 123 Main St, Rohero</p>
            <div className="flex justify-between items-center mt-3">
              <span className="text-xs text-gray-500">2 stops left</span>
              <button className="text-xs bg-blue-500 text-white px-3 py-1 rounded-full">Navigate</button>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium text-sm">Order #5679</h3>
              <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">Completed</span>
            </div>
            <p className="text-xs text-gray-500">To: 456 Ave, Ngagara</p>
            <div className="flex justify-between items-center mt-3">
              <span className="text-xs text-gray-500">Delivered at 10:15 AM</span>
              <button className="text-xs text-blue-500">View Details</button>
            </div>
          </div>
          {/* Add more delivery items... */}
        </div>
        {/* Bottom Navigation */}
        <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 h-16 flex justify-around items-center px-4">
          <button className="flex flex-col items-center text-blue-500">
            <MapPin className="w-5 h-5" />
            <span className="text-xs mt-1">Map</span>
          </button>
          <button className="flex flex-col items-center text-gray-500">
            <Car className="w-5 h-5" />
            <span className="text-xs mt-1">Deliveries</span>
          </button>
          <button className="flex flex-col items-center text-gray-500">
            <Users className="w-5 h-5" />
            <span className="text-xs mt-1">Profile</span>
          </button>
        </div>
      </div>
    )
  }
];

// Main component with client-side interactivity
const SystemShowcase = () => {
  const [activeApp, setActiveApp] = useState('dashboard');

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-900 to-blue-900">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.png')] opacity-5"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            All-in-One Delivery Management
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Platform for Modern Businesses
            </span>
          </h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Streamline your delivery operations with real-time tracking, automated routing, and seamless communication across all platforms
          </p>
        </motion.div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Real-time Tracking",
              description: "Monitor deliveries in real-time with precise location updates and ETA predictions",
              icon: <MapPin className="w-6 h-6" />
            },
            {
              title: "Smart Analytics",
              description: "Make data-driven decisions with comprehensive delivery insights and performance metrics",
              icon: <LayoutDashboard className="w-6 h-6" />
            },
            {
              title: "Automated Routing",
              description: "Optimize delivery routes automatically to reduce costs and improve efficiency",
              icon: <Navigation className="w-6 h-6" />
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-blue-400">
                  {benefit.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-blue-200">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Apps Container */}
        <div className="max-w-7xl mx-auto relative">
          {/* Connected Lines */}
          <div className="absolute top-24 left-0 right-0">
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 16V8C20.9996 7.64927 20.9071 7.3048 20.7315 7.00116C20.556 6.69752 20.3037 6.44536 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69752 3.26846 7.00116C3.09294 7.3048 3.00036 7.64927 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7.5 4.21L12 6.81L16.5 4.21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7.5 19.79V14.6L3 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12L16.5 14.6V19.79" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3.27 6.96L12 12.01L20.73 6.96" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 22.08V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Apps Grid */}
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8">
            {APPS_DATA.map((app) => (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.5 }}
                className={`relative ${app.deviceType === 'tablet' ? 'md:w-1/2 md:mx-4' : 'md:w-1/4'}`}
              >
                {/* App Icon */}
                <div className="flex flex-col items-center mb-8">
                  <div className={`${app.color} bg-opacity-20 p-3 rounded-xl mb-3 backdrop-blur-sm border border-white/10 w-12 h-12 flex items-center justify-center`}>
                    <div className={`${app.textColor} w-6 h-6`}>
                      {app.icon}
                    </div>
                  </div>
                  <span className="text-white font-medium">{app.name}</span>
                </div>

                {/* App Screen */}
                <AppMockup 
                  isActive={activeApp === app.id}
                  deviceType={app.deviceType}
                >
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

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
        </motion.div>
      </div>
    </section>
  );
};

export default SystemShowcase;
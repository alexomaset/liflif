"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  BarChart3, 
  Clock, 
  Map, 
  MessageSquare, 
  Navigation, 
  Truck 
} from "lucide-react";

const features = [
  {
    icon: <Truck className="h-8 w-8 text-blue-600" />,
    title: "Real-time Tracking",
    description: "Track deliveries in real-time with live GPS updates and status notifications."
  },
  {
    icon: <Map className="h-8 w-8 text-blue-600" />,
    title: "Route Optimization",
    description: "Automatically calculate the most efficient routes to save time and fuel."
  },
  {
    icon: <Clock className="h-8 w-8 text-blue-600" />,
    title: "Delivery Scheduling",
    description: "Schedule deliveries with precision and send automated notifications."
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-blue-600" />,
    title: "Customer Messaging",
    description: "Keep customers informed with automated SMS and email updates."
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: "Analytics Dashboard",
    description: "Gain insights into delivery performance, times, and customer satisfaction."
  },
  {
    icon: <Navigation className="h-8 w-8 text-blue-600" />,
    title: "Driver Navigation",
    description: "Turn-by-turn directions and real-time traffic updates for drivers."
  }
];

const FeaturesGrid = () => {
  return (
    <section className="py-20 bg-gray-50" id="features">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Features Designed for Modern Delivery
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Everything you need to streamline your delivery operations and delight your customers.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100 group"
              whileHover={{ y: -5 }}
              aria-label={feature.title}
            >
              <div className="mb-4 p-3 bg-blue-50 inline-block rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid; 
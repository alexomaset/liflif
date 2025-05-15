"use client";

import React, { useState } from "react";
import { Truck, Package, Users } from "lucide-react";
import { motion } from "framer-motion";

interface Feature {
  icon: React.ReactElement;
  title: string;
  description: string;
}

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  const features: Feature[] = [
    {
      icon: <Truck className="w-8 h-8 text-blue-600" />,
      title: "Last Mile Delivery",
      description:
        "Optimized routes and real-time tracking for efficient local deliveries",
    },
    {
      icon: <Package className="w-8 h-8 text-blue-600" />,
      title: "Same Day Delivery",
      description:
        "Express delivery service for urgent packages within city limits",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Multiple Dropoffs",
      description:
        "Efficient handling of multiple delivery points in a single trip",
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-blue-50 to-white"></div>
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Complete Delivery Management Solution
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to manage your delivery operations efficiently
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer relative group"
              role="article"
              aria-label={`${feature.title} feature`}
              onMouseEnter={() => setActiveFeature(index)}
              onMouseLeave={() => setActiveFeature(null)}
            >
              <div className="mb-4 bg-blue-50 p-4 rounded-xl inline-block">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
              
              {/* Tooltip */}
              {activeFeature === index && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap z-10"
                >
                  Learn more about {feature.title}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-4 border-transparent border-b-gray-900"></div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 
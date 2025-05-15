"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Connect your systems",
    description: "Seamlessly integrate with your existing systems and platforms",
  },
  {
    number: "02",
    title: "Plan your deliveries",
    description: "Optimize routes and assign drivers to maximize efficiency",
  },
  {
    number: "03",
    title: "Track in real-time",
    description: "Monitor all deliveries with live updates and notifications",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-gray-50 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started in minutes with our simple and intuitive platform
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 hidden md:block transform -translate-x-1/2"></div>

          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row items-center"
              >
                <div
                  className={`md:w-1/2 text-center ${
                    index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12 md:order-2"
                  }`}
                >
                  <div className="mb-4">
                    <span className="inline-block text-4xl font-bold text-blue-600">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 max-w-md mx-auto">
                    {step.description}
                  </p>
                </div>

                <div
                  className={`md:w-1/2 relative py-6 ${
                    index % 2 === 0 ? "md:order-2" : ""
                  }`}
                >
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto md:mx-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10">
                    <span>{index + 1}</span>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg mt-6 md:mt-0 md:mx-12">
                    <div className="h-40 bg-blue-50 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 font-medium">
                        {index === 0 && "System Integration"}
                        {index === 1 && "Route Planning"}
                        {index === 2 && "Delivery Tracking"}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection; 
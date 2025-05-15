"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Corporate Registration",
    description: "Register your company in minutes with our streamlined corporate onboarding process and verification system.",
    color: "blue",
    icon: "🏢"
  },
  {
    id: 2,
    title: "Connect Your Enterprise Fleet",
    description: "Seamlessly integrate your existing fleet management systems and onboard your corporate drivers with our enterprise mobile app.",
    color: "indigo",
    icon: "🔄"
  },
  {
    id: 3,
    title: "Enterprise Delivery Management",
    description: "Track all corporate deliveries in real-time with automated status updates, customized reporting, and stakeholder notifications.",
    color: "purple",
    icon: "📦" 
  },
  {
    id: 4,
    title: "Corporate Scaling & Optimization",
    description: "Our AI algorithms optimize routes and schedules across your entire organization, improving efficiency while reducing operational costs.",
    color: "pink",
    icon: "📈"
  }
];

const benefits = [
  "Reduce corporate delivery times by up to 30%",
  "Lower enterprise operational costs with intelligent multi-point routing",
  "Increase B2B customer satisfaction with real-time tracking and branded experiences",
  "Complete visibility across your corporate logistics network",
  "Scale your enterprise logistics operations without adding overhead",
  "AI-powered corporate analytics and executive performance dashboards"
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gray-50" id="how-it-works">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-8">
          </div>
          <span className="text-blue-600 font-semibold uppercase tracking-wider">Corporate Onboarding</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Four Steps to Transform Your Enterprise Logistics
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-powered platform streamlines corporates delivery operations from registration to execution
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-12 relative">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-start relative z-10 group">
                  <div className={`flex-shrink-0 w-14 h-14 rounded-full bg-${step.color}-500 flex items-center justify-center text-white font-bold text-xl shadow-lg transform transition-all duration-300 group-hover:scale-110`}>
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-extrabold text-gray-900 flex items-center">
                      <span className="mr-2">Step {step.id}:</span> {step.title}
                    </h3>
                    <p className="mt-2 text-gray-600">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute left-7 top-14 w-[3px] h-[calc(100%-10px)] bg-gradient-to-b from-gray-200 to-gray-300 -z-10 transform -translate-x-1/2" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 1, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true, amount: 0.1 }}
            className="bg-gradient-to-b from-white to-blue-50 rounded-xl shadow-lg p-10 border border-gray-200 relative z-10"
          >
            <h3 className="text-2xl font-extrabold text-gray-900 mb-8 tracking-tight text-center">Enterprise Benefits</h3>
            <ul className="space-y-5">
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 1, x: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-start"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-4 shadow-sm">
                    <Check className="w-5 h-5 text-green-600" />
                  </span>
                  <span className="text-gray-800 font-medium text-lg leading-relaxed">{benefit}</span>
                </motion.li>
              ))}
            </ul>
            <motion.div 
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="mt-8 pt-6 border-t border-gray-100"
            >
              <div className="flex justify-center">
                <motion.a 
                  href="https://form.typeform.com/to/corporate-demo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-xl flex items-center cursor-pointer"
                  onClick={() => {
                    // You can add analytics tracking here if needed
                    console.log('Corporate demo request clicked');
                  }}
                >
                  <span className="font-medium">Request Corporate Demo</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 
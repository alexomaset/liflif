"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Info, X } from "lucide-react";

const pricingPlans = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for small businesses just getting started with deliveries",
    monthlyPrice: 49,
    yearlyPrice: 39,
    features: [
      { name: "Up to 500 deliveries/month", included: true },
      { name: "2 admin users", included: true },
      { name: "Mobile app for drivers", included: true },
      { name: "Basic route optimization", included: true },
      { name: "Email support", included: true },
      { name: "Advanced analytics", included: false },
      { name: "API access", included: false },
      { name: "Custom branding", included: false },
      { name: "Priority support", included: false },
    ],
    ctaText: "Start Free Trial",
    highlight: false,
  },
  {
    id: "professional",
    name: "Professional",
    description: "Ideal for growing businesses with regular delivery operations",
    monthlyPrice: 99,
    yearlyPrice: 79,
    features: [
      { name: "Up to 2,000 deliveries/month", included: true },
      { name: "5 admin users", included: true },
      { name: "Mobile app for drivers", included: true },
      { name: "Advanced route optimization", included: true },
      { name: "Priority email support", included: true },
      { name: "Advanced analytics", included: true },
      { name: "API access", included: true },
      { name: "Custom branding", included: false },
      { name: "Priority support", included: false },
    ],
    ctaText: "Start Free Trial",
    highlight: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For high-volume delivery businesses requiring custom solutions",
    monthlyPrice: 199,
    yearlyPrice: 159,
    features: [
      { name: "Unlimited deliveries", included: true },
      { name: "Unlimited admin users", included: true },
      { name: "Mobile app for drivers", included: true },
      { name: "Advanced route optimization", included: true },
      { name: "24/7 phone support", included: true },
      { name: "Advanced analytics", included: true },
      { name: "API access", included: true },
      { name: "Custom branding", included: true },
      { name: "Priority support", included: true },
    ],
    ctaText: "Contact Sales",
    highlight: false,
  }
];

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  
  return (
    <section className="py-20 bg-gray-50" id="pricing">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold uppercase tracking-wider">Pricing</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that best fits your business needs
          </p>
          
          <div className="flex items-center justify-center mt-8">
            <div className="bg-gray-200 p-1 rounded-full flex items-center">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  billingCycle === "monthly" 
                    ? "bg-white shadow-sm text-blue-600" 
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  billingCycle === "yearly" 
                    ? "bg-white shadow-sm text-blue-600" 
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Yearly 
                <span className="ml-1 text-green-600">-20%</span>
              </button>
            </div>
          </div>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white rounded-xl overflow-hidden shadow-lg border ${
                plan.highlight 
                  ? "border-blue-500 relative" 
                  : "border-gray-200"
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-0 right-0 bg-blue-500 text-white text-center py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className={`p-8 ${plan.highlight ? "pt-10" : ""}`}>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold">
                    ${billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                  </span>
                  <span className="text-gray-600 ml-1">/month</span>
                  
                  {billingCycle === "yearly" && (
                    <p className="text-green-600 text-sm mt-1">
                      Billed annually (${plan.yearlyPrice * 12}/year)
                    </p>
                  )}
                </div>
                
                <button
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-all ${
                    plan.highlight
                      ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md"
                      : "bg-blue-100 hover:bg-blue-200 text-blue-800"
                  }`}
                >
                  {plan.ctaText}
                </button>
              </div>
              
              <div className="bg-gray-50 p-8 border-t border-gray-200">
                <p className="font-medium mb-4">Plan includes:</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={feature.included ? "text-gray-800" : "text-gray-500"}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 bg-white rounded-lg border border-gray-200 p-6 max-w-3xl mx-auto shadow-sm"
        >
          <div className="flex items-start">
            <Info className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-semibold mb-2">Need a custom solution?</h4>
              <p className="text-gray-600 mb-4">
                We offer tailored plans for businesses with unique requirements or high-volume delivery operations.
              </p>
              <a href="#contact" className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center">
                Contact our sales team
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing; 
"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const DemoRequest = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Reset form
    setFormData({ email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-50"></div>
      
      {/* Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[40%] -right-[10%] w-[70%] h-[70%] rounded-full bg-cyan-500/10 blur-3xl"></div>
        <div className="absolute -bottom-[40%] -left-[10%] w-[70%] h-[70%] rounded-full bg-[#D4F82A]/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Make your
              <span className="block">delivery easy</span>
            </h2>
            <p className="text-xl text-gray-400">
              Secure Your Free Demo Session Now!
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="relative group">
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm rounded-xl text-white placeholder-gray-400 
                         outline-none transition-all duration-300 focus:bg-white/20
                         border-2 border-transparent focus:border-cyan-500"
                placeholder="Email"
              />
            </div>

            <div className="relative group">
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm rounded-xl text-white placeholder-gray-400 
                         outline-none transition-all duration-300 focus:bg-white/20
                         border-2 border-transparent focus:border-cyan-500
                         min-h-[100px] resize-none"
                placeholder="Tell us about your delivery needs"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full max-w-md mx-auto mt-8 px-8 py-4 rounded-full font-medium text-lg
                       flex items-center justify-center group
                       ${isSubmitting
                         ? 'bg-gray-500 text-white cursor-not-allowed'
                         : 'bg-gradient-to-r from-cyan-500 to-[#D4F82A] text-gray-900 hover:shadow-lg hover:shadow-cyan-500/25'
                       }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <div className="w-5 h-5 border-2 border-gray-600 border-t-white rounded-full animate-spin mr-2"></div>
                  Requesting...
                </div>
              ) : (
                <div className="flex items-center">
                  Request a demo
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              )}
            </motion.button>
          </motion.form>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-12 flex flex-wrap justify-center gap-8"
          >
            <div className="flex items-center text-gray-400">
              <div className="w-5 h-5 rounded-full bg-gradient-to-r from-cyan-500 to-[#D4F82A] mr-2"></div>
              <span>Secure Form</span>
            </div>
            <div className="flex items-center text-gray-400">
              <div className="w-5 h-5 rounded-full bg-gradient-to-r from-cyan-500 to-[#D4F82A] mr-2"></div>
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center text-gray-400">
              <div className="w-5 h-5 rounded-full bg-gradient-to-r from-cyan-500 to-[#D4F82A] mr-2"></div>
              <span>Free Consultation</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DemoRequest;
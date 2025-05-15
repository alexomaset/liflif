"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, CreditCard, PlayCircle } from "lucide-react";
import Link from "next/link";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900 text-white" id="get-started">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            AI-Powered Logistics: The Future is Now
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl mb-10"
          >
            Join the logistics revolution with our AI-powered platform that evolves with your business
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-6"
          >
            <Link href="/signup" className="flex items-center justify-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-300">
              <CreditCard className="h-5 w-5" />
              Schedule a Demo
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 inline-flex items-center gap-2 text-blue-100 hover:text-white cursor-pointer transition-colors duration-300"
          >
            <PlayCircle className="h-5 w-5" />
            <span>Watch how it works (2 min)</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection; 
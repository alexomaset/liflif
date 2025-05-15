"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative h-80 w-full rounded-xl overflow-hidden shadow-xl"
          >
            <Image 
              src="/about.jpg" 
              alt="Liflif team working" 
              fill 
              className="object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent"></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="inline-block py-1 px-3 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">Who We Are</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Pioneering the Future of Logistics</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              LIFLIF is dedicated to transforming delivery management through smart technology and a customer-first approach. We empower businesses to optimize routes, track deliveries in real-time, and enhance overall operational efficiency.
            </p>
            <Link 
              href="/about"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg font-medium group"
            >
              Learn More About Us
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 
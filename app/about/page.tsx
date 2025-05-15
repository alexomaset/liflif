"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Target, Users, Zap, Heart, Eye } from 'lucide-react';
import Footer from '../components/Footer'; // Assuming Footer component exists

const AboutPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const teamMembers = [
    { name: 'Alice Johnson', role: 'CEO & Founder', image: '/placeholder-team-1.jpg' },
    { name: 'Bob Williams', role: 'CTO', image: '/placeholder-team-2.jpg' },
    { name: 'Charlie Brown', role: 'Head of Operations', image: '/placeholder-team-3.jpg' },
    { name: 'Diana Davis', role: 'Lead Designer', image: '/placeholder-team-4.jpg' },
  ];

  const values = [
    { icon: <Zap className="w-8 h-8 text-blue-500" />, title: 'Innovation', description: 'Continuously pushing boundaries to find better logistics solutions.' },
    { icon: <Heart className="w-8 h-8 text-red-500" />, title: 'Customer Focus', description: "Putting our clients' needs at the heart of everything we do." },
    { icon: <Users className="w-8 h-8 text-green-500" />, title: 'Collaboration', description: 'Working together to achieve shared goals and success.' },
    { icon: <Eye className="w-8 h-8 text-purple-500" />, title: 'Transparency', description: 'Operating with openness and integrity in all our interactions.' },
  ];

  return (
    <div className="bg-gray-50">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-blue-100"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="relative h-16 w-40 transition-transform duration-300 hover:scale-105"
            >
              <Image
                src="/logo.svg"
                alt="LIFLIF Logo"
                fill
                className="object-contain"
                priority
              />
            </Link>
            <div className="hidden md:flex items-center space-x-2">
              <div className="flex items-center mr-4">
                {[
                  { href: "/features", label: "Features" },
                  { href: "/about", label: "About Us" }, 
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg mx-1 transition-all duration-300 group ${
                      isScrolled
                        ? "text-gray-700 hover:text-blue-600"
                        : "text-white hover:text-blue-200"
                    }`}
                  >
                    {item.label}
                    <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-blue-500 transition-all duration-300 ${item.href === '/about' ? 'w-1/2' : 'w-0 group-hover:w-1/2'}`}></span>
                  </Link>
                ))}
              </div>
              <a 
                href="https://form.typeform.com/to/w7sV3LCn" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center"
              >
                <span>Get Started</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
            <button 
              className="md:hidden p-2 rounded-lg bg-blue-50 text-blue-600"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        <motion.div
          initial={false}
          animate={{ height: isMobileMenuOpen ? "auto" : 0, opacity: isMobileMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white border-t border-blue-100 shadow-lg overflow-hidden"
        >
          <div className="container mx-auto px-6 py-4 space-y-3">
            <Link href="/features" className="block py-2 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg">Features</Link>
            <Link href="/about" className="block py-2 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg">About Us</Link>
            <button className="w-full mt-2 bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors">
              <a href="https://form.typeform.com/to/w7sV3LCn" target="_blank" rel="noopener noreferrer" className="w-full h-full inline-block">Get Started</a>
            </button>
          </div>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.png')] opacity-10"></div>
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            About LIFLIF
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto"
          >
            Revolutionizing Logistics with Intelligent Solutions and Unwavering Commitment.
          </motion.p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="inline-block py-1 px-3 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">Our Purpose</span>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                To empower businesses with innovative, AI-driven logistics technology that streamlines operations, enhances efficiency, and drives growth. We aim to make complex delivery management simple, accessible, and effective for everyone.
              </p>
              <div className="flex items-center text-blue-600 font-medium">
                <Target className="w-6 h-6 mr-2" />
                <span>Simplifying complexity, enabling success.</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-80 w-full rounded-xl overflow-hidden shadow-xl"
            >
              <Image 
                src="/about.jpg"
                alt="Team collaborating on logistics planning" 
                fill 
                className="object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
             <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-80 w-full rounded-xl overflow-hidden shadow-xl order-last md:order-first"
            >
              <Image 
                src="/wallpaper.jpeg"
                alt="Timeline or early concept sketch" 
                fill 
                className="object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="inline-block py-1 px-3 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">Our Journey</span>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Founded initially in 2022 by a team passionate about solving real-world logistics challenges, LIFLIF started with a simple idea: make delivery management smarter and more efficient. 
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From humble beginnings, we've grown into a trusted platform serving businesses across industries, constantly innovating and adapting to the evolving needs of the market.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-16">
            The principles that guide our work, our interactions, and our commitment to excellence.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="flex flex-col items-center p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-5 shadow-md">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
       <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.png')] opacity-10"></div>
        <div className="container mx-auto px-6 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Join the Logistics Revolution?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Experience the LIFLIF difference. Get started today or reach out to learn more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://form.typeform.com/to/w7sV3LCn" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl text-lg font-semibold flex items-center"
              >
                Get Started Now
              </a>
              <Link 
                href="/contact" // Assuming a contact page exists or will be created
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors text-lg font-semibold flex items-center"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage; 
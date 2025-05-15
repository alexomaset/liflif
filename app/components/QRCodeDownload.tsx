"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Smartphone } from "lucide-react";

const QRCodeDownload: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100" id="download">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-blue-600 font-semibold uppercase tracking-wider">
            Download the App
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Scan to Get Started
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Download our mobile app to manage deliveries on the go. Available for both users and logistics providers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* User App QR Code */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center"
          >
            <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Smartphone className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              User App
            </h3>
            <p className="text-gray-600 text-center mb-6">
              Track your deliveries, schedule pickups, and receive real-time notifications.
            </p>
            <div className="relative w-64 h-64 mb-6 transition-transform duration-300 hover:scale-105">
              <Image 
                src="/userqr.jpeg" 
                alt="User App QR Code" 
                fill
                className="object-contain"
              />
            </div>
            <a
              href="https://play.google.com/store/apps/details?id=com.liflif.user"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="w-5 h-5 mr-2" />
              <span>Download User App</span>
            </a>
          </motion.div>

          {/* Logistics QR Code */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center"
          >
            <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Driver App
            </h3>
            <p className="text-gray-600 text-center mb-6">
              Receive delivery assignments, navigate optimized routes, and update delivery statuses in real-time.
            </p>
            <div className="relative w-64 h-64 mb-6 transition-transform duration-300 hover:scale-105">
              <Image 
                src="/lqr.jpeg" 
                alt="Driver App QR Code" 
                fill
                className="object-contain"
              />
            </div>
            <a
              href="https://play.google.com/store/apps/details?id=com.liflif.driver"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="w-5 h-5 mr-2" />
              <span>Download Driver App</span>
            </a>
          </motion.div>
        </div>

        {/* App Store and Play Store buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 mt-12"
        >
          <a 
            href="#" 
            className="flex items-center bg-black text-white px-5 py-3 rounded-lg hover:bg-gray-800 transition-colors w-48"
          >
            <div className="mr-3">
              <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                <path d="M17.707 10.708L16.586 9.587C16.211 9.212 15.702 9 15.172 9H14V7.500C14 6.119 12.881 5 11.5 5H7c-1.119 0-2 0.881-2 2v10c0 1.119 0.881 2 2 2h7.736a2 2 0 001.364-0.518l4.383-4.062C21.154 13.683 21.154 12.062 20.535 11.345L17.707 10.708zM7 7h4.5c0.276 0 0.5 0.224 0.5 0.5V9h-5V7z M7 11h9.343c0.622 0 0.148 0.024 0 0 5.656-2.155 0.676 0.856-1.177 2.906C13.99 15.6 13.068 16.983 14.736 17H7v-6zM18.586 13.036l-3.483 3.992S14.675 17.517 16.411 16.72C17.851 16.048 20.148 13.876 18.586 13.036z"/>
              </svg>
            </div>
            <div>
              <div className="text-xs">Download on the</div>
              <div className="text-lg font-semibold">App Store</div>
            </div>
          </a>
          <a 
            href="https://play.google.com/store/apps/details?id=com.liflif.user" 
            className="flex items-center bg-black text-white px-5 py-3 rounded-lg hover:bg-gray-800 transition-colors w-48"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="mr-3">
              <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 0 1-.391-.391L3 21.168V2.832l.218-.627a.996.996 0 0 1 .391-.391zM14.5 12l5-5 1.864 1.376a2.501 2.501 0 0 1 0 7.248L19.5 17l-5-5zm-4.5 5l4.5 4.5 1.547-1.089-5.308-5.308L5.739 15.089 10 17zm0-10L5.5 2.5 3.953 3.589l5.308 5.308 5-4.986L10 7z"/>
              </svg>
            </div>
            <div>
              <div className="text-xs">GET IT ON</div>
              <div className="text-lg font-semibold">Google Play</div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default QRCodeDownload;

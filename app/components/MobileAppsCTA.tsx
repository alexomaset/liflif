"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownToLine } from "lucide-react";

const MobileAppsCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/40 bg-[length:20px_20px] opacity-20"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Manage Deliveries <br />
                <span className="text-blue-600">On The Go</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto md:mx-0">
                Download our mobile apps for drivers and customers to stay connected wherever you are
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <a 
                  href="#" 
                  className="flex items-center justify-center bg-black text-white rounded-xl px-6 py-3 hover:bg-gray-800 transition-colors"
                >
                  <span className="mr-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.5227 12.0686C17.5099 9.57964 19.6214 8.15477 19.7 8.10909C18.3875 6.22477 16.3455 5.94318 15.6384 5.92045C13.9187 5.74773 12.2489 6.88636 11.375 6.88636C10.4807 6.88636 9.13239 5.94318 7.67784 5.97386C5.81307 6.00454 4.08522 7.04545 3.12784 8.67954C1.13693 11.9977 2.6517 16.8659 4.5517 19.3091C5.49034 20.5 6.60693 21.8432 8.04261 21.7898C9.43693 21.7306 9.9767 20.8761 11.642 20.8761C13.2875 20.8761 13.7966 21.7898 15.2517 21.7534C16.7517 21.7306 17.7193 20.5477 18.625 19.3432C19.7193 17.9625 20.1685 16.6125 20.1875 16.5489C20.1477 16.5364 17.5364 15.4614 17.5227 12.0686Z" fill="white"/>
                      <path d="M15.0511 4.5534C15.8023 3.63431 16.3011 2.37954 16.1613 1.09091C15.0761 1.14545 13.7148 1.84091 12.9295 2.73636C12.2364 3.52954 11.6307 4.83181 11.7886 6.08181C12.9989 6.17727 14.2716 5.46364 15.0511 4.5534Z" fill="white"/>
                    </svg>
                  </span>
                  <div className="flex flex-col items-start">
                    <span className="text-xs">Download on the</span>
                    <span className="text-lg font-semibold">App Store</span>
                  </div>
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center justify-center bg-black text-white rounded-xl px-6 py-3 hover:bg-gray-800 transition-colors"
                >
                  <span className="mr-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.8047 2.00059L5.55468 2C4.89843 2 4.36718 2.53125 4.36718 3.1875V20.8125C4.36718 21.4688 4.89843 22 5.55468 22H12.8047L19.4297 12L12.8047 2.00059Z" fill="#AAADAD"/>
                      <path d="M13.7578 2.00059L12.8047 2.00059L5.55468 2C4.89843 2 4.36718 2.53125 4.36718 3.1875V20.8125C4.36718 21.4688 4.89843 22 5.55468 22H12.8047L13.7578 22L20.3828 12L13.7578 2.00059Z" fill="#707575"/>
                      <path d="M15.0078 12L4.36719 22L14.6328 12H15.0078Z" fill="#A5A7A6"/>
                      <path d="M4.36719 2L15.0078 12H14.6328L4.36719 2Z" fill="#A5A7A6"/>
                      <path d="M4.36719 2L14.6328 12L4.36719 22V2Z" fill="white"/>
                      <path d="M12.4062 8.14062L13.4375 10.2812L16.0156 10.5625L14.2422 12.2812L14.5547 14.875L12.4062 13.6641L10.2578 14.875L10.5703 12.2812L8.79688 10.5625L11.375 10.2812L12.4062 8.14062Z" fill="#EA4335"/>
                    </svg>
                  </span>
                  <div className="flex flex-col items-start">
                    <span className="text-xs">GET IT ON</span>
                    <span className="text-lg font-semibold">Google Play</span>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
          
          <div className="md:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-20"></div>
              <div className="absolute -bottom-5 right-10 w-16 h-16 bg-blue-500 rounded-full opacity-20"></div>
              
              <div className="relative flex justify-center transform rotate-12">
                <div className="absolute w-64 h-[500px] bg-white rounded-[40px] shadow-xl p-4 transform -rotate-6 z-0">
                  <div className="w-full h-full rounded-[32px] bg-blue-50 flex items-center justify-center">
                    <ArrowDownToLine className="text-blue-500 w-10 h-10" />
                  </div>
                </div>
                <div className="w-64 h-[500px] bg-white rounded-[40px] shadow-xl border border-gray-100 p-4 z-10">
                  <div className="w-full h-full rounded-[32px] bg-gray-800 overflow-hidden relative">
                    <div className="absolute top-0 left-0 right-0 h-12 bg-black flex items-center justify-center">
                      <div className="w-20 h-6 bg-gray-800 rounded-b-xl"></div>
                    </div>
                    <div className="pt-16 px-4">
                      <div className="bg-blue-600 text-white p-3 rounded-lg text-sm mb-4">
                        Driver App
                      </div>
                      <div className="space-y-3">
                        <div className="h-8 bg-gray-700 rounded-lg"></div>
                        <div className="h-8 bg-gray-700 rounded-lg"></div>
                        <div className="h-8 bg-gray-700 rounded-lg"></div>
                      </div>
                      <div className="mt-6 p-3 bg-gray-700 rounded-lg">
                        <div className="h-4 w-3/4 bg-gray-600 rounded mb-2"></div>
                        <div className="h-4 w-1/2 bg-gray-600 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppsCTA; 
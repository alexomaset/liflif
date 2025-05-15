"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const companyLogos = [
  { name: "Company 1", logo: "/images/company-logo-1.svg" },
  { name: "Company 2", logo: "/images/company-logo-2.svg" },
  { name: "Company 3", logo: "/images/company-logo-3.svg" },
  { name: "Company 4", logo: "/images/company-logo-4.svg" },
  { name: "Company 5", logo: "/images/company-logo-5.svg" },
  { name: "Company 6", logo: "/images/company-logo-6.svg" },
];

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Operations Manager",
    company: "Global Logistics Inc.",
    image: "/images/testimonial-1.jpg",
    quote: "This delivery management system has completely transformed our operations. We've reduced delivery times by 30% and customer satisfaction is at an all-time high.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Torres",
    position: "Fleet Manager",
    company: "Quick Delivery Services",
    image: "/images/testimonial-2.jpg",
    quote: "The real-time tracking and analytics have given us unprecedented visibility into our fleet performance. Our drivers love the mobile app too!",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Zhang",
    position: "CEO",
    company: "Express Courier",
    image: "/images/testimonial-3.jpg",
    quote: "We've been able to scale our operations smoothly thanks to this platform. The customer support team has been exceptional throughout our journey.",
    rating: 4
  }
];

const SocialProof = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Trusted Companies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl font-semibold text-gray-600 mb-12">Trusted by Industry Leaders</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {companyLogos.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              >
                <div className="h-12 w-32 relative">
                  <Image 
                    src={company.logo} 
                    alt={company.name} 
                    fill
                    sizes="128px"
                    style={{ objectFit: "contain" }}
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from some of our satisfied customers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 p-8 rounded-xl shadow-lg relative"
              >
                <div className="flex items-center mb-6">
                  <div className="h-14 w-14 relative rounded-full overflow-hidden mr-4 border-2 border-blue-500">
                    <Image 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      fill
                      sizes="56px"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                
                <p className="text-gray-700 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                
                <div className="absolute top-6 right-8">
                  <svg width="40" height="40" viewBox="0 0 40 40" className="text-blue-100 fill-current">
                    <path d="M12.5 20C9.65 20 7.5 22.55 7.5 25.4C7.5 28.25 9.65 30.15 13.1 30.15C16.55 30.15 18.7 28.25 18.7 25.4L19 22.55C19 15.8 15.25 9.35 7.5 9.35V14.15C11.25 14.15 12.5 17.3 12.5 20ZM27.85 20C25 20 22.85 22.55 22.85 25.4C22.85 28.25 25 30.15 28.45 30.15C31.9 30.15 33.75 28.25 33.75 25.4L34.05 22.55C34.05 15.8 30.3 9.35 22.55 9.35V14.15C26.3 14.15 27.85 17.3 27.85 20Z"/>
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof; 
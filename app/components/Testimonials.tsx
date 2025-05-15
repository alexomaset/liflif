"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Logistics Manager, FreshDelivery Co.",
    image: "/testimonial-1.jpg",
    content: "LiftLift has transformed our delivery operations. The route optimization alone has cut our fuel costs by 30% and improved delivery times dramatically.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Operations Director, QuickServe",
    image: "/testimonial-2.jpg",
    content: "The real-time tracking and analytics have given us unprecedented visibility into our delivery process. Our customers love the accurate ETAs.",
    rating: 5
  },
  {
    name: "Amara Patel",
    role: "CEO, Local Eats Delivery",
    image: "/testimonial-3.jpg",
    content: "As a small business, we needed an affordable solution that could scale. LiftLift delivered exactly that and more. The customer support is exceptional.",
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by delivery businesses of all sizes to optimize their operations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 flex-grow italic">"{testimonial.content}"</p>
              
              <div className="flex items-center mt-auto">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 
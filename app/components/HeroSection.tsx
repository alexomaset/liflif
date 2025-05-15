import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section
      className="relative pt-20 pb-24 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/blue.png')" }}
    >
      {/* Subtle gradient overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-black/50" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-12 -left-12 w-64 h-64 rounded-full bg-blue-500 opacity-10 blur-3xl"></div>
        <div className="absolute top-1/3 -right-16 w-72 h-72 rounded-full bg-blue-300 opacity-10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left content column with improved typography and spacing */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-8"
          >
            <div className="hero-content">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
                <span className="text-blue-200 block mb-2">A Platform</span> 
                <span className="text-white">for fast, reliable delivery.</span>
              </h1>
              
              <p className="text-blue-50 text-lg mb-8 leading-relaxed">
                Streamline your logistics with our intuitive delivery management platform. Real-time tracking, optimized routes, and seamless customer experience.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a 
                  href="https://form.typeform.com/to/w7sV3LCn" 
                  className="btn btn-primary px-8 py-3 group"
                  aria-label="Get started with LIFLIF delivery platform"
                >
                  Get started 
                  <ArrowRight className="btn-icon w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="btn btn-secondary px-8 py-3 group text-white"
                  aria-label="Learn more about LIFLIF delivery platform"
                >
                  Learn more
                  <ArrowRight className="btn-icon w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Right image column with subtle floating animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 flex items-center justify-center"
          >
            <motion.div 
              className="relative w-full max-w-md"
              animate={{ y: [0, -15, 0] }}
              transition={{ 
                repeat: Infinity, 
                duration: 6,
                ease: "easeInOut"
              }}
            >
              <Image 
                src="/hero-thumb.png" 
                width={500}
                height={500}
                alt="LIFLIF delivery platform illustration" 
                className="max-w-full"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="flex flex-col items-center text-white/70">
          <span className="text-xs mb-2">Scroll to explore</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
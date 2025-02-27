import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section
      className="relative pt-36 pb-24 bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      {/* Dark overlay with reduced opacity */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left content column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 mb-12 lg:mb-0"
          >
            <div className="hero-content">
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                <span className="text-blue-200 block mb-2">A Platform</span> 
                <span className="text-white">for fast, reliable delivery.</span>
              </h1>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a 
                  href="#" 
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 flex items-center justify-center transition-colors shadow-lg hover:shadow-xl border-2 border-blue-500"
                >
                  Get started 
                  <ArrowRight className="ml-2 w-5 h-5 text-blue-200" />
                </a>
                <a 
                  href="#" 
                  className="bg-transparent text-white border-2 border-blue-300 hover:border-blue-400 hover:bg-blue-100/10 px-8 py-3 rounded-lg transition-colors shadow-lg hover:shadow-xl"
                >
                  Learn more
                  <ArrowRight className="ml-2 w-5 h-5 text-blue-200" />
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Right image column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 hero-thumb"
          >
            <img 
              src="/hero-thumb.png" 
              alt="Hero illustration" 
              className="relative lg:-top-24 max-w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
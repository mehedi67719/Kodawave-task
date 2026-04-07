
import React from 'react';
import { motion } from 'framer-motion';
import { BsArrowRight, BsPlayCircle } from 'react-icons/bs';

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-blue-50">
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-sm font-medium text-gray-700">Trusted by 800+ freelancers and 20k+ teams</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-6"
        >
          Design better, faster,{' '}
          <span className="relative inline-block">
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 blur-2xl opacity-30"></span>
            <span className="relative bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              smarter websites
            </span>
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-xl text-gray-600 mb-10 leading-relaxed"
        >
          We design clean, conversion-ready websites for teams who value clarity, detail, and longevity.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-5 justify-center"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300"
          >
            Our Work 
            <BsArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-900 rounded-full font-semibold flex items-center justify-center gap-2 hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
          >
            <BsPlayCircle size={20} />
            Schedule a call
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
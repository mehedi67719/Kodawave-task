import React from 'react';
import { motion } from 'framer-motion';

const Logos = () => {
  const logos = ["STRIPE", "MICROSOFT", "GOOGLE", "NETFLIX", "AMAZON", "OPENAI"];
  
  return (
    <div className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100/50 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-6">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center text-xs font-bold text-gray-400 mb-12 tracking-[0.2em] uppercase"
        >
          Trusted by industry leaders worldwide
        </motion.p>
        
        <div className="flex flex-wrap justify-center gap-12 md:gap-16">
          {logos.map((logo, index) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, opacity: 1 }}
              className="relative group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <span className="relative text-2xl font-black text-gray-300 group-hover:text-gray-900 transition-all duration-300">
                {logo}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Logos;
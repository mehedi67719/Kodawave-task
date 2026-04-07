
import React from 'react';
import { motion } from 'framer-motion';
import { BsArrowRight, BsHeadset, BsClock, BsShieldCheck } from 'react-icons/bs';

const ServicesCTA = () => {
  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
          className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-[3rem] p-16 text-center overflow-hidden shadow-2xl"
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          
          <div className="relative z-10">
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-8 shadow-2xl"
            >
              <BsHeadset size={36} className="text-white" />
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Ready to{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                scale your business?
              </span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-300 text-xl mb-10 max-w-2xl mx-auto"
            >
              Get a free consultation with our experts and discover how we can help you grow
            </motion.p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              <div className="flex items-center gap-2 text-gray-300">
                <BsClock size={18} className="text-blue-400" />
                <span>30-min strategy call</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <BsShieldCheck size={18} className="text-green-400" />
                <span>No obligation</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <BsHeadset size={18} className="text-purple-400" />
                <span>Expert consultation</span>
              </div>
            </div>
            
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-12 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 mx-auto"
            >
              Get a Free Consultation
              <BsArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesCTA;
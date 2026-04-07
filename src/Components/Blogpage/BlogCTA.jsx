
import React from 'react';
import { motion } from 'framer-motion';
import { BsArrowRight, BsEnvelope, BsBookmark } from 'react-icons/bs';

const BlogCTA = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
          className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl p-12 text-center overflow-hidden shadow-2xl"
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
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-8 shadow-2xl"
            >
              <BsEnvelope size={36} className="text-white" />
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Never Miss a{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Post
              </span>
            </h2>
            
            <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
              Subscribe to our newsletter and get the latest insights delivered straight to your inbox
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="group px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold flex items-center justify-center gap-2 hover:shadow-xl transition-all">
                Subscribe
                <BsArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="flex items-center justify-center gap-4 mt-6 text-gray-400 text-sm">
              <BsBookmark size={14} />
              <span>Weekly newsletter</span>
              <span>•</span>
              <span>No spam</span>
              <span>•</span>
              <span>Unsubscribe anytime</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogCTA;
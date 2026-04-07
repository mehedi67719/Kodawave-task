
import React from 'react';
import { motion } from 'framer-motion';

const TrustedBy = () => {
  const logos = ["Agency", "WebDeviation", "Identity", "Codify", "Neusa AI", "Landify", "File"];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center text-sm font-semibold text-gray-400 mb-10 tracking-wider uppercase"
        >
          Trusted by 800+ freelancers and 20k+ teams like:
        </motion.p>
        
        <div className="flex flex-wrap justify-center gap-10 md:gap-14">
          {logos.map((logo, index) => (
            <motion.span 
              key={logo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.6, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ opacity: 1, scale: 1.05 }}
              className="text-xl font-bold text-gray-500 cursor-pointer transition-all hover:text-gray-900"
            >
              {logo}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
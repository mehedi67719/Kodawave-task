
import React from 'react';
import { motion } from 'framer-motion';
import { BiBullseye, BiBulb, BiHeart, BiTrendingUp } from 'react-icons/bi';

const CompanyVision = () => {
  const visions = [
    {
      title: "Our Vision",
      icon: <BiBullseye size={28} />,
      text: "To become the most trusted digital partner for businesses worldwide, delivering innovative solutions that drive sustainable growth.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Our Mission",
      icon: <BiBulb size={28} />,
      text: "Empower businesses with cutting-edge digital solutions that combine creativity, technology, and strategy for measurable results.",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Our Values",
      icon: <BiHeart size={28} />,
      text: "Innovation, integrity, excellence, and client success are at the core of everything we do.",
      color: "from-orange-500 to-red-500"
    }
  ];

  const expertise = [
    "5+ Years of Excellence",
    "500+ Projects Completed",
    "50+ Expert Team Members",
    "20+ Industry Awards"
  ];

  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Vision & Expertise
              </span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Since our founding, we've been dedicated to helping businesses thrive in the digital age. 
              Our approach combines creative design with technical excellence to deliver exceptional results.
            </p>
            
            <div className="space-y-6">
              {visions.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-all"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-md flex-shrink-0`}>
                    <div className="text-white">{item.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                {expertise.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center p-4 bg-white rounded-xl shadow-md"
                  >
                    <BiTrendingUp size={24} className="text-blue-600 mx-auto mb-2" />
                    <span className="text-gray-700 font-semibold">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Approach</h3>
              <div className="space-y-3">
                {["Strategy First", "Data-Driven Decisions", "Client-Centric Focus", "Continuous Innovation"].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyVision;
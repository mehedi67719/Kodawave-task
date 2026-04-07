
import React from 'react';
import { motion } from 'framer-motion';
import { BiRocket, BiDollar, BiCheckShield, BiTrendingUp } from 'react-icons/bi';

const Features = () => {
  const features = [
    { title: "Speed", desc: "Get quicker turnaround on design projects without sacrificing quality at any level.", icon: <BiRocket size={32} />, color: "from-blue-500 to-cyan-500" },
    { title: "Affordability", desc: "Accessing designs directly from our platform is the fastest way to get started.", icon: <BiDollar size={32} />, color: "from-green-500 to-emerald-500" },
    { title: "Consistency", desc: "Ensure a consistent brand experience across all your digital assets.", icon: <BiCheckShield size={32} />, color: "from-purple-500 to-pink-500" },
    { title: "Scalability", desc: "Accessibility quickly design services at a fraction of traditional rates.", icon: <BiTrendingUp size={32} />, color: "from-orange-500 to-red-500" },
  ];

  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-5 text-gray-900">
            Here are a few things we do that{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              others really just don't
            </span>
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="text-center p-6 rounded-2xl hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg`}>
                <div className="text-white">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
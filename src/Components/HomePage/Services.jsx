
import React from 'react';
import { motion } from 'framer-motion';
import { BiPalette, BiCube, BiCodeAlt, BiTrendingUp, BiRocket, BiSupport } from 'react-icons/bi';

const Services = () => {
  const categories = [
    { title: "Brand", icon: <BiPalette size={28} />, items: ["Brand identity", "Positioning", "Motion design", "Animation"], color: "from-blue-500 to-cyan-500" },
    { title: "3D", icon: <BiCube size={28} />, items: ["Marketing assets", "Guidelines", "Stream Asset", "Website Asset"], color: "from-purple-500 to-pink-500" },
    { title: "Dev", icon: <BiCodeAlt size={28} />, items: ["Framer", "Nuxt", "Webflow", "Front-end"], color: "from-orange-500 to-red-500" },
  ];

  return (
    <section className="py-28 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-5 text-gray-900">
            Web projects that create{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              meaningful impact
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            We plan, design, and refine websites that feel calm, confident, and commercially useful.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 shadow-lg`}>
                <div className="text-white">{category.icon}</div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{category.title}</h3>
              <ul className="space-y-3">
                {category.items.map((item, idx) => (
                  <li key={idx} className="text-gray-600 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
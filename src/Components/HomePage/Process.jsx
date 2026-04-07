// Process.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { BiBulb, BiSearch, BiBrush, BiCodeAlt, BiRocket, BiSupport } from 'react-icons/bi';

const Process = () => {
  const steps = [
    { title: "Idea", desc: "We meet with your team to learn more about your project idea and goals.", icon: <BiBulb size={28} />, color: "from-yellow-500 to-orange-500" },
    { title: "Research", desc: "Analyze your business insights and how we can help achieve their goals.", icon: <BiSearch size={28} />, color: "from-blue-500 to-cyan-500" },
    { title: "Web design", desc: "Design detailed mockups and prototypes of your website.", icon: <BiBrush size={28} />, color: "from-purple-500 to-pink-500" },
    { title: "No-code development", desc: "Develop SEO-friendly and conversion-oriented websites.", icon: <BiCodeAlt size={28} />, color: "from-green-500 to-emerald-500" },
    { title: "Launch", desc: "Schedule a dedicated session to launch your new website.", icon: <BiRocket size={28} />, color: "from-orange-500 to-red-500" },
    { title: "Support", desc: "Keep close, long-term relationship and clear communication.", icon: <BiSupport size={28} />, color: "from-indigo-500 to-purple-500" },
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
            We guide you throughout the{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              entire process
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            From creative design to technical solutions, our services define industry excellence.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gray-50 to-transparent rounded-bl-3xl"></div>
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform`}>
                <div className="text-white">{step.icon}</div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              <div className="absolute bottom-4 right-4 text-4xl font-bold text-gray-100">0{index + 1}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
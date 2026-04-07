
import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { BiHappy, BiBriefcase, BiGlobe, BiTrophy } from 'react-icons/bi';

const ClientStats = () => {
  const stats = [
    { id: 1, value: 500, label: "Happy Clients", suffix: "+", icon: <BiHappy size={32} />, color: "from-blue-500 to-cyan-500" },
    { id: 2, value: 1200, label: "Projects Completed", suffix: "+", icon: <BiBriefcase size={32} />, color: "from-purple-500 to-pink-500" },
    { id: 3, value: 98, label: "Client Satisfaction", suffix: "%", icon: <BiTrophy size={32} />, color: "from-orange-500 to-red-500" },
    { id: 4, value: 25, label: "Countries Served", suffix: "+", icon: <BiGlobe size={32} />, color: "from-green-500 to-emerald-500" }
  ];

  const StatCounter = ({ value, suffix, label, icon, color, delay }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
      if (isInView) {
        let start = 0;
        const duration = 2000;
        const increment = value / (duration / 16);
        const timer = setInterval(() => {
          start += increment;
          if (start >= value) {
            setCount(value);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
        return () => clearInterval(timer);
      }
    }, [isInView, value]);

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        className="text-center p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all"
      >
        <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 shadow-lg`}>
          <div className="text-white">{icon}</div>
        </div>
        <div className="text-4xl font-bold text-gray-900 mb-2">
          {count}{suffix}
        </div>
        <div className="text-gray-500 font-medium">{label}</div>
      </motion.div>
    );
  };

  return (
    <section className="py-28 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-5 text-gray-900">
            Our{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Impact
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Numbers that speak for themselves
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCounter
              key={stat.id}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              icon={stat.icon}
              color={stat.color}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientStats;
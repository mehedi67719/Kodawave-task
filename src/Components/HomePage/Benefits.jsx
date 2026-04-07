// Benefits.jsx
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { BiCheckCircle, BiRocket, BiTrendingUp, BiSupport, BiPalette, BiSearchAlt, BiAward, BiHappy } from 'react-icons/bi';

const Benefits = () => {
  const benefits = [
    { text: "Modern Minimalist Design", icon: <BiPalette size={24} />, color: "from-blue-500 to-cyan-500" },
    { text: "SEO-First Approach", icon: <BiSearchAlt size={24} />, color: "from-purple-500 to-pink-500" },
    { text: "Real-time Analytics", icon: <BiTrendingUp size={24} />, color: "from-orange-500 to-red-500" },
    { text: "24/7 Dedicated Team", icon: <BiSupport size={24} />, color: "from-green-500 to-emerald-500" },
    { text: "Award-Winning Service", icon: <BiAward size={24} />, color: "from-yellow-500 to-orange-500" },
    { text: "100% Satisfaction", icon: <BiHappy size={24} />, color: "from-pink-500 to-rose-500" }
  ];

  const counters = [
    { value: 500, label: "Projects Completed", suffix: "+" },
    { value: 98, label: "Client Satisfaction", suffix: "%" },
    { value: 24, label: "Team Members", suffix: "" },
    { value: 15, label: "Industry Awards", suffix: "" }
  ];

  return (
    <section className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900"></div>
      
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full text-white text-sm font-semibold mb-6"
            >
              Why Choose Us
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
            >
              The{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Kodawave
              </span>
              <br />
              Advantage
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-300 text-xl mb-10 leading-relaxed"
            >
              We don't just build, we strategize. Your digital presence becomes beautiful, profitable, and scalable.
            </motion.p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={benefit.text}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-3 text-white group cursor-pointer"
                >
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${benefit.color} group-hover:scale-110 transition-transform`}>
                    {benefit.icon}
                  </div>
                  <span className="font-medium group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all">
                    {benefit.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:w-1/2 w-full"
          >
            <div className="grid grid-cols-2 gap-6 mb-8">
              {counters.map((counter, idx) => (
                <CounterCard key={idx} {...counter} delay={idx * 0.2} />
              ))}
            </div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-50"></div>
              <div className="relative z-10 text-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="inline-block mb-4"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <BiRocket size={40} className="text-white" />
                  </div>
                </motion.div>
                <h3 className="text-3xl font-bold text-white mb-2">Ready to Launch?</h3>
                <p className="text-gray-300 mb-6">Get started with a free consultation</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-white text-gray-900 rounded-full font-semibold hover:shadow-xl transition-all"
                >
                  Book a Call →
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CounterCard = ({ value, label, suffix, delay }) => {
  const [count, setCount] = React.useState(0);
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 text-center border border-white/20"
    >
      <div className="text-4xl font-bold text-white mb-2">
        {count}{suffix}
      </div>
      <div className="text-gray-300 text-sm">{label}</div>
    </motion.div>
  );
};

export default Benefits;
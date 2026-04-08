
import React from 'react';
import { motion } from 'framer-motion';
import { BiCodeAlt, BiSearch, BiBarChart, BiCalendar, BiRocket, BiShield } from 'react-icons/bi';

const ServicesGrid = () => {
  const services = [
    {
      id: 1,
      title: "Web Development",
      icon: <BiCodeAlt size={34} />,
      description: "Custom, high-performance websites built with React, Next.js, and modern technologies.",
      features: ["Custom Design", "Responsive Layout", "Fast Loading", "SEO Optimized"],
      color: "from-blue-500 to-cyan-500",
      delay: 0
    },
    {
      id: 2,
      title: "SEO Optimization",
      icon: <BiSearch size={34} />,
      description: "Rank higher on search engines and attract organic traffic that converts.",
      features: ["Keyword Research", "On-page SEO", "Link Building", "Technical SEO"],
      color: "from-purple-500 to-pink-500",
      delay: 0.1
    },
    {
      id: 3,
      title: "Online Advertising",
      icon: <BiBarChart size={34} />,
      description: "Data-driven campaigns that scale your ROI across all major platforms.",
      features: ["Google Ads", "Social Media Ads", "Retargeting", "A/B Testing"],
      color: "from-orange-500 to-red-500",
      delay: 0.2
    },
    {
      id: 4,
      title: "Online Booking System",
      icon: <BiCalendar size={34} />,
      description: "Seamless appointment scheduling and management system for your business.",
      features: ["24/7 Booking", "Auto Reminders", "Calendar Sync", "Payment Integration"],
      color: "from-green-500 to-emerald-500",
      delay: 0.3
    },
    {
      id: 5,
      title: "E-commerce Solutions",
      icon: <BiRocket size={34} />,
      description: "Complete online store setup with payment gateways and inventory management.",
      features: ["Product Management", "Payment Gateway", "Shopping Cart", "Order Tracking"],
      color: "from-indigo-500 to-blue-500",
      delay: 0.4
    },
    {
      id: 6,
      title: "Security & Maintenance",
      icon: <BiShield size={34} />,
      description: "Round-the-clock security monitoring and website maintenance services.",
      features: ["SSL Security", "Backup System", "Performance Monitoring", "24/7 Support"],
      color: "from-rose-500 to-pink-500",
      delay: 0.5
    }
  ];

  return (
    <section id="services-grid" className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-5 text-gray-900">
            What We{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Offer
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: service.delay }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                <div className="text-white">{service.icon}</div>
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {service.features.map((feature, idx) => (
                  <span key={idx} className="text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-600">
                    {feature}
                  </span>
                ))}
              </div>
              
              <button className="text-blue-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More
                <BiRocket size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
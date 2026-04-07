
import React from 'react';
import { motion } from 'framer-motion';
import { BiTrophy, BiAward, BiMedal, BiStar } from 'react-icons/bi';

const Achievements = () => {
  const awards = [
    {
      title: "Best Digital Agency 2023",
      organization: "Digital Excellence Awards",
      icon: <BiTrophy size={28} />,
      year: "2023",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Top Web Development Company",
      organization: "Clutch.co",
      icon: <BiAward size={28} />,
      year: "2022-2024",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Innovation in SEO",
      organization: "Search Engine Journal",
      icon: <BiMedal size={28} />,
      year: "2023",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Client Satisfaction Excellence",
      organization: "GoodFirms",
      icon: <BiStar size={28} />,
      year: "2024",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-5 text-gray-900">
            Awards &{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Recognitions
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            We're proud to be recognized by industry leaders
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 text-center shadow-lg border border-gray-100"
            >
              <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${award.color} flex items-center justify-center mb-4 shadow-lg`}>
                <div className="text-white">{award.icon}</div>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{award.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{award.organization}</p>
              <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs font-semibold text-gray-600">
                {award.year}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
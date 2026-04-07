// TeamSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { BiLineChart, BiPalette, BiCodeAlt, BiUser } from 'react-icons/bi';

const TeamSection = () => {
  const teamRoles = [
    {
      title: "Strategy & Leadership",
      icon: <BiLineChart size={24} />,
      description: "Our strategists work closely with you to understand your goals and craft a roadmap for success.",
      members: ["Creative Directors", "Project Managers", "Business Strategists"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Design & Creative",
      icon: <BiPalette size={24} />,
      description: "Creative minds that bring your vision to life with stunning visuals and intuitive interfaces.",
      members: ["UI/UX Designers", "Graphic Designers", "Motion Artists"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Development & Engineering",
      icon: <BiCodeAlt size={24} />,
      description: "Technical experts who build robust, scalable, and high-performance digital solutions.",
      members: ["Frontend Devs", "Backend Devs", "DevOps Engineers"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Support & Success",
      icon: <BiUser size={24} />,
      description: "Dedicated support team ensuring your success every step of the way.",
      members: ["Client Success", "Technical Support", "QA Specialists"],
      color: "from-green-500 to-emerald-500"
    }
  ];

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
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white text-sm font-semibold mb-4">
            Our Team
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-5 text-gray-900">
            Meet the{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Experts
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            A diverse team of passionate professionals dedicated to your success
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamRoles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${role.color} flex items-center justify-center mb-5 shadow-lg`}>
                <div className="text-white">{role.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{role.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{role.description}</p>
              <div className="border-t border-gray-100 pt-4">
                {role.members.map((member, idx) => (
                  <div key={idx} className="text-sm text-gray-500 py-1 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                    {member}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            "We believe in collaboration, transparency, and delivering excellence. 
            Our team works as an extension of yours to ensure your success."
          </p>
          <div className="mt-6 flex justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
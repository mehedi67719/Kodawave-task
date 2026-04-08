import React from 'react';
import { motion } from 'framer-motion';
import { BiPhone, BiEnvelope, BiMap, BiTime, BiChat, BiSupport } from 'react-icons/bi';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useLanguage } from '../LanguageSwitcher';

const ContactInfo = () => {
  const { t } = useLanguage();

  const contactDetails = [
    {
      icon: <BiPhone size={24} />,
      title: t('phone'),
      details: ["+880 1234-567890", "+880 9876-543210"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <BiEnvelope size={24} />,
      title: t('email'),
      details: ["hello@kodawave.com", "support@kodawave.com"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <BiMap size={24} />,
      title: t('office'),
      details: ["Chanchal Road, Puraton Jashore", "Jashore - 7400, Bangladesh"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <BiTime size={24} />,
      title: t('businessHours'),
      details: ["Sunday - Thursday: 9:00 AM - 6:00 PM", "Friday - Saturday: Closed"],
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">{t('contactInfo')}</h2>
        <p className="text-gray-500 mb-8">{t('reachOut')}</p>
        
        <div className="space-y-6">
          {contactDetails.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-4 p-4 rounded-2xl hover:bg-white transition-all"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-md flex-shrink-0`}>
                <div className="text-white">{item.icon}</div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                {item.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-xl p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <BiChat size={20} className="text-blue-600" />
          {t('liveSupport')}
        </h3>
        <p className="text-gray-600 mb-4">{t('liveSupportDesc')}</p>
        <button 
          onClick={() => window.open('https://wa.me/8801747737704?text=Hello! I need support.', '_blank')}
          className="w-full py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all"
        >
          {t('startLiveChat')}
        </button>
      </div>

      <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-xl p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">{t('followUs')}</h3>
        <p className="text-gray-600 mb-4">{t('stayConnected')}</p>
        <div className="flex gap-3">
          <motion.a whileHover={{ y: -5 }} href="https://facebook.com" target="_blank" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all">
            <FaFacebook size={18} />
          </motion.a>
          <motion.a whileHover={{ y: -5 }} href="https://twitter.com" target="_blank" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-400 hover:text-white transition-all">
            <FaTwitter size={18} />
          </motion.a>
          <motion.a whileHover={{ y: -5 }} href="https://linkedin.com" target="_blank" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-700 hover:text-white transition-all">
            <FaLinkedin size={18} />
          </motion.a>
          <motion.a whileHover={{ y: -5 }} href="https://instagram.com" target="_blank" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-pink-600 hover:text-white transition-all">
            <FaInstagram size={18} />
          </motion.a>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl shadow-xl p-8 text-center text-white">
        <BiSupport size={40} className="mx-auto mb-4" />
        <h3 className="text-xl font-bold mb-2">{t('emergencySupport')}</h3>
        <p className="text-blue-100 mb-4">{t('emergencyDesc')}</p>
        <p className="text-2xl font-bold">+880 1234-567890</p>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
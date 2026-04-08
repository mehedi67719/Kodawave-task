import React from 'react';
import { motion } from 'framer-motion';
import { BsArrowRight, BsLightningCharge, BsGift, BsShieldCheck } from 'react-icons/bs';
import { useNavigate } from 'react-router';
import { useLanguage } from '../LanguageSwitcher';

const CTASection = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
          className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-[3rem] p-16 text-center overflow-hidden shadow-2xl"
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          
          <motion.div animate={{ rotate: 360, scale: [1, 1.2, 1] }} transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }} className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mb-8">
            <BsLightningCharge size={36} className="text-white" />
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {t('unlockGrowth')}{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {t('growth')}
            </span>
          </h2>
          
          <p className="text-gray-400 text-xl mb-10 max-w-2xl mx-auto">
            {t('growthDesc')}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <span className="flex items-center gap-2 text-gray-300 text-sm"><BsGift /> {t('noHiddenFees')}</span>
            <span className="flex items-center gap-2 text-gray-300 text-sm"><BsShieldCheck /> {t('guarantee')}</span>
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }} 
            onClick={() => navigate('/contact')}
            className="group px-12 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:shadow-2xl transition-all duration-300 mx-auto"
          >
            {t('getFreeConsultation')}
            <BsArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
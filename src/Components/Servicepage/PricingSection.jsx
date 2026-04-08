import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BiCheckCircle, BiRocket } from 'react-icons/bi';
import { useNavigate } from 'react-router';
import { useLanguage } from '../LanguageSwitcher';

const PricingSection = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      id: 1,
      name: "Starter",
      price: { monthly: 499, yearly: 399 },
      description: "Perfect for small businesses just getting started",
      features: [
        "5 Pages Website",
        "Basic SEO Setup",
        "Mobile Responsive",
        "Contact Form",
        "1 Month Support",
        "Basic Analytics"
      ],
      color: "from-blue-500 to-cyan-500",
      popular: false,
      delay: 0
    },
    {
      id: 2,
      name: "Growth",
      price: { monthly: 999, yearly: 799 },
      description: "Ideal for growing businesses ready to scale",
      features: [
        "15 Pages Website",
        "Advanced SEO",
        "E-commerce Ready",
        "Blog Integration",
        "6 Months Support",
        "Advanced Analytics",
        "Social Media Integration",
        "Monthly Reports"
      ],
      color: "from-purple-500 to-pink-500",
      popular: true,
      delay: 0.1
    },
    {
      id: 3,
      name: "Premium",
      price: { monthly: 1999, yearly: 1599 },
      description: "Complete solution for established enterprises",
      features: [
        "Unlimited Pages",
        "Enterprise SEO",
        "Custom Development",
        "24/7 Priority Support",
        "12 Months Support",
        "Custom Analytics",
        "API Integration",
        "Weekly Reports",
        "Dedicated Account Manager"
      ],
      color: "from-orange-500 to-red-500",
      popular: false,
      delay: 0.2
    }
  ];

  return (
    <section id="pricing" className="py-28 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white text-sm font-semibold mb-4">
            {t('pricingPlans')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-5 text-gray-900">
            {t('simple')}{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t('transparent')}
            </span>
            <br />
            {t('pricing')}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-8">
            {t('choosePerfectPlan')}
          </p>

          <div className="inline-flex items-center gap-3 bg-white p-1.5 rounded-full shadow-md">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                billingCycle === 'monthly' 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {t('monthly')}
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                billingCycle === 'yearly' 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {t('yearly')}
              <span className="ml-1 text-xs bg-green-100 text-green-600 px-1.5 py-0.5 rounded-full">{t('save20')}</span>
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: plan.delay }}
              whileHover={{ y: -10 }}
              className={`relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden ${
                plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-4 py-1 rounded-bl-2xl">
                    {t('mostPopular')}
                  </div>
                </div>
              )}
              
              <div className="p-8">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <BiRocket size={28} className="text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-500 text-sm mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    ${billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly}
                  </span>
                  <span className="text-gray-500">/{billingCycle === 'monthly' ? t('perMonth') : t('perYear')}</span>
                </div>
                
                <button 
                  onClick={() => navigate('/contact')}
                  className={`w-full py-3 rounded-full font-semibold transition-all mb-8 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {t('getStarted')}
                </button>
                
                <div className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <BiCheckCircle size={16} className="text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
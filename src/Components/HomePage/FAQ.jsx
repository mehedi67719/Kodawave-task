
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BiChevronDown } from 'react-icons/bi';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { q: "How long does it take to build a website?", a: "Typically 4-8 weeks depending on complexity and requirements." },
    { q: "Do you offer ongoing support?", a: "Yes, we provide 24/7 dedicated support and maintenance packages." },
    { q: "What platforms do you build on?", a: "We work with React, Next.js, Webflow, Framer, and WordPress." },
    { q: "Can you help with SEO?", a: "Absolutely! SEO is integrated into every website we build." },
  ];

  return (
    <section className="py-28 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-5 text-gray-900">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
        </motion.div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex justify-between items-center text-left font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg">{faq.q}</span>
                <BiChevronDown className={`text-xl transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-5"
                  >
                    <p className="text-gray-600">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
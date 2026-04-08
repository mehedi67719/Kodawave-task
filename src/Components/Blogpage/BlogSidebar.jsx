import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BiSearch, BiTrendingUp, BiTag, BiEnvelope } from 'react-icons/bi';
import { useLanguage } from '../LanguageSwitcher';

const BlogSidebar = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email) {
      window.location.href = `mailto:hello@kodawave.com?subject=Blog Newsletter Subscription&body=Please subscribe: ${email}`;
    }
  };

  const popularPosts = [
    { title: "10 Essential SEO Strategies That Will Boost Your Rankings", views: "12.5k views", link: "#" },
    { title: "The Future of Web Development: What's Coming in 2025", views: "8.2k views", link: "#" },
    { title: "How to Create High-Converting Landing Pages That Sell", views: "6.8k views", link: "#" },
    { title: "Mastering Responsive Design: Tips from Industry Experts", views: "5.4k views", link: "#" }
  ];

  const categories = [
    { name: "Web Development", count: 24 },
    { name: "SEO", count: 18 },
    { name: "Marketing", count: 15 },
    { name: "Design", count: 12 },
    { name: "Business", count: 10 }
  ];

  const tags = ["SEO", "Web Dev", "Marketing", "Design", "React", "Next.js", "AI", "Business", "Startup", "Growth"];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-xl p-6"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <BiSearch size={20} className="text-blue-600" />
          {t('search')}
        </h3>
        <div className="relative">
          <input 
            type="text" 
            placeholder={t('searchArticles')}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-600">
            <BiSearch size={20} />
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="bg-white rounded-2xl shadow-xl p-6"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <BiTrendingUp size={20} className="text-orange-500" />
          {t('popularPosts')}
        </h3>
        <div className="space-y-4">
          {popularPosts.map((post, index) => (
            <a key={index} href={post.link} className="block group">
              <div className="flex justify-between items-start group-hover:translate-x-1 transition-transform">
                <div>
                  <p className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">{post.views}</p>
                </div>
                <span className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </div>
              {index < popularPosts.length - 1 && <div className="border-t border-gray-100 mt-3 pt-3"></div>}
            </a>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white rounded-2xl shadow-xl p-6"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <BiTag size={20} className="text-purple-500" />
          {t('categories')}
        </h3>
        <div className="space-y-3">
          {categories.map((cat, index) => (
            <a key={index} href="#" className="flex justify-between items-center group">
              <span className="text-gray-600 group-hover:text-blue-600 transition-colors">{cat.name}</span>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded-full group-hover:bg-blue-100 transition-colors">
                {cat.count}
              </span>
            </a>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-white rounded-2xl shadow-xl p-6"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">{t('popularTags')}</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <a key={index} href="#" className="px-3 py-1.5 bg-gray-100 text-gray-600 text-sm rounded-full hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all">
              #{tag}
            </a>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-xl p-6 text-center text-white"
      >
        <BiEnvelope size={40} className="mx-auto mb-4" />
        <h3 className="text-xl font-bold mb-2">{t('subscribeNewsletter')}</h3>
        <p className="text-sm text-blue-100 mb-4">{t('getLatestPosts')}</p>
        <input 
          type="email" 
          placeholder={t('yourEmail')}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 rounded-xl text-gray-900 mb-3 focus:outline-none"
        />
        <button 
          onClick={handleSubscribe}
          className="w-full bg-white text-purple-600 py-2 rounded-xl font-semibold hover:shadow-lg transition-all"
        >
          {t('subscribe')}
        </button>
      </motion.div>
    </div>
  );
};

export default BlogSidebar;
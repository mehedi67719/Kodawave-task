
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BiCalendar, BiUser, BiTime, BiRightArrowAlt } from 'react-icons/bi';

const BlogGrid = () => {
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'Web Development', 'SEO', 'Marketing', 'Design', 'Business'];

  const posts = [
    {
      id: 1,
      title: "10 Essential SEO Strategies That Will Boost Your Rankings in 2024",
      description: "Discover the latest SEO techniques that are actually working right now. From core web vitals to AI content optimization, learn how to dominate search results.",
      excerpt: "Discover the latest SEO techniques that are actually working right now. Learn how to dominate search results with these proven strategies...",
      image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800",
      category: "SEO",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      readTime: "8 min read",
      tags: ["SEO", "Marketing", "Strategy"]
    },
    {
      id: 2,
      title: "The Future of Web Development: What's Coming in 2025",
      description: "Explore upcoming trends in web development including AI-powered development, WebAssembly, and the rise of Jamstack architecture.",
      excerpt: "Explore upcoming trends in web development including AI-powered development, WebAssembly, and the rise of Jamstack architecture...",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800",
      category: "Web Development",
      author: "Michael Chen",
      date: "March 12, 2024",
      readTime: "10 min read",
      tags: ["Development", "Technology", "Future"]
    },
    {
      id: 3,
      title: "How to Create High-Converting Landing Pages That Sell",
      description: "Learn the psychology behind effective landing pages and discover proven frameworks that turn visitors into customers.",
      excerpt: "Learn the psychology behind effective landing pages and discover proven frameworks that turn visitors into customers...",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      category: "Marketing",
      author: "Emma Rodriguez",
      date: "March 10, 2024",
      readTime: "6 min read",
      tags: ["Marketing", "Design", "Conversion"]
    },
    {
      id: 4,
      title: "Mastering Responsive Design: Tips from Industry Experts",
      description: "Best practices for creating flawless responsive websites that work perfectly on every device and screen size.",
      excerpt: "Best practices for creating flawless responsive websites that work perfectly on every device and screen size...",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800",
      category: "Design",
      author: "David Kim",
      date: "March 8, 2024",
      readTime: "7 min read",
      tags: ["Design", "CSS", "Responsive"]
    },
    {
      id: 5,
      title: "The Complete Guide to Local SEO for Small Businesses",
      description: "Step-by-step guide to optimizing your local search presence and attracting more customers in your area.",
      excerpt: "Step-by-step guide to optimizing your local search presence and attracting more customers in your area...",
      image: "https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?w=800",
      category: "SEO",
      author: "Lisa Wong",
      date: "March 5, 2024",
      readTime: "9 min read",
      tags: ["SEO", "Local Business", "Marketing"]
    },
    {
      id: 6,
      title: "Building Scalable E-commerce Platforms: Best Practices",
      description: "Learn how to build e-commerce platforms that can handle growth and provide seamless shopping experiences.",
      excerpt: "Learn how to build e-commerce platforms that can handle growth and provide seamless shopping experiences...",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800",
      category: "Web Development",
      author: "James Wilson",
      date: "March 3, 2024",
      readTime: "11 min read",
      tags: ["E-commerce", "Development", "Scalability"]
    }
  ];

  const filteredPosts = filter === 'all' ? posts : posts.filter(post => post.category === filter);

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-10">
        {categories.map((cat, index) => (
          <motion.button
            key={cat}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-full font-semibold transition-all ${
              filter === cat
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {cat === 'all' ? 'All Posts' : cat}
          </motion.button>
        ))}
      </div>

      <div className="space-y-8">
        {filteredPosts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/5 relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="md:w-3/5 p-6 md:p-8">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <BiCalendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BiUser size={14} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BiTime size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {post.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <button className="text-blue-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read More
                  <BiRightArrowAlt size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="flex justify-center gap-3 mt-12">
        <button className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all">
          1
        </button>
        <button className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all">
          2
        </button>
        <button className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all">
          3
        </button>
        <button className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          →
        </button>
      </div>
    </div>
  );
};

export default BlogGrid;
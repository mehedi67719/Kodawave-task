
import React from 'react';
import { Link } from 'react-router';
import { BiMap, BiPhone, BiEnvelope, BiTime, BiChevronRight, BiHeart } from 'react-icons/bi';
import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/service' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    { name: 'Web Development', path: '/service' },
    { name: 'SEO Optimization', path: '/service' },
    { name: 'Online Advertising', path: '/service' },
    { name: 'Online Booking System', path: '/service' },
    { name: 'E-commerce Solutions', path: '/service' },
  ];

  const contactInfo = [
    { icon: <BiMap size={18} />, text: 'Chanchal Road, Puraton Jashore, Jashore - 7400', href: '#' },
    { icon: <BiPhone size={18} />, text: '+880 1747737704', href: 'tel:+8801747737704' },
    { icon: <BiEnvelope size={18} />, text: 'meh67719@gmail.com', href: 'meh67719@gmail.com' },
    { icon: <BiTime size={18} />, text: 'Sun - Thu: 9AM - 6PM', href: '#' },
  ];
  

  return (
    <footer className="bg-white  pt-20 pb-8 border-t border-gray-100">
      <div className="max-w-7xl px-2 md:px-0 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link to="/" className="inline-block mb-6">
             <Logo/>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              We design clear, confident websites for creatives, startups, and growing online brands. Your success is our priority.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:text-white transition-all duration-300">
                <span>f</span>
              </a>
              <a href="#" className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-blue-400 hover:text-white transition-all duration-300">
                <span>t</span>
              </a>
              <a href="#" className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-blue-700 hover:text-white transition-all duration-300">
                <span>in</span>
              </a>
              <a href="#" className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-pink-600 hover:text-white transition-all duration-300">
                <span>ig</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-gray-800 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-gray-500 hover:text-blue-600 transition-colors flex items-center gap-2 group"
                  >
                    <BiChevronRight size={16} className="text-blue-500 opacity-0 group-hover:opacity-100 transition-all" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-gray-800 relative inline-block">
              Our Services
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.path} 
                    className="text-gray-500 hover:text-blue-600 transition-colors flex items-center gap-2 group"
                  >
                    <BiChevronRight size={16} className="text-blue-500 opacity-0 group-hover:opacity-100 transition-all" />
                    <span className="group-hover:translate-x-1 transition-transform">{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-gray-800 relative inline-block">
              Contact Info
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className="text-gray-500 hover:text-blue-600 transition-colors flex items-start gap-3 group"
                  >
                    <span className="text-blue-500 mt-0.5 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </span>
                    <span className="text-sm group-hover:translate-x-1 transition-transform">
                      {item.text}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Kodawave. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-blue-600 transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-blue-600 transition-colors">Terms of Service</Link>
              <Link to="/refund-policy" className="text-gray-400 hover:text-blue-600 transition-colors">Refund Policy</Link>
            </div>
            <div className="flex items-center gap-4">
              <LanguageSwitcher />
              <p className="text-gray-400 text-sm flex items-center gap-1">
                Made with <BiHeart size={14} className="text-red-500 animate-pulse" /> in Bangladesh
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
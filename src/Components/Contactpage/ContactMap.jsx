
import React from 'react';
import { motion } from 'framer-motion';

const ContactMap = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Find Us{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Here
            </span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Visit our office in the heart of Jashore, Bangladesh
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden shadow-2xl"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14741.702445287673!2d89.1487533!3d23.1634006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff10529b2c2e3b%3A0x9b7b0e8f8e7e7e7e!2sJashore%20Sadar%20Police%20Station!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Kodawave Office - Jashore, Bangladesh"
            className="w-full"
          ></iframe>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="text-center p-5 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-md hover:shadow-lg transition-all">
            <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
              <span className="text-white font-bold text-xl">📍</span>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Our Address</h3>
            <p className="text-gray-600 text-sm">House #123, Chanchal Road</p>
            <p className="text-gray-600 text-sm">Puraton Jashore, Jashore Sadar</p>
            <p className="text-gray-600 text-sm">Jashore - 7400, Bangladesh</p>
          </div>
          
          <div className="text-center p-5 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-md hover:shadow-lg transition-all">
            <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
              <span className="text-white font-bold text-xl">🚗</span>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Getting Here</h3>
            <p className="text-gray-600 text-sm">Free parking available</p>
            <p className="text-gray-600 text-sm">Near Jashore Bus Terminal</p>
            <p className="text-gray-600 text-sm">5 min from Jashore Railway Station</p>
          </div>
          
          <div className="text-center p-5 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-md hover:shadow-lg transition-all">
            <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
              <span className="text-white font-bold text-xl">⏰</span>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Office Hours</h3>
            <p className="text-gray-600 text-sm">Sunday - Thursday: 9AM - 6PM</p>
            <p className="text-gray-600 text-sm">Friday - Saturday: Closed</p>
            <p className="text-gray-600 text-sm">Emergency: +880 1234-567890</p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-center text-white"
        >
          <p className="text-lg">
            📍 <span className="font-semibold">Kodawave Bangladesh</span> — Your trusted digital partner in Jashore
          </p>
          <p className="text-sm text-blue-100 mt-2">
            Visit us or give us a call — we'd love to meet you!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMap;
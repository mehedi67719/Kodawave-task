
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const AboutTestimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO at TechFlow",
      text: "Working with this team has been transformative for our business. Their expertise and dedication are unmatched.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      company: "TechFlow"
    },
    {
      name: "Michael Chen",
      role: "Founder at Nexus AI",
      text: "The best decision we made was partnering with them. They delivered beyond our expectations.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      company: "Nexus AI"
    },
    {
      name: "Emma Rodriguez",
      role: "CMO at Landify",
      text: "Incredible team to work with. They truly care about their clients' success.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      company: "Landify"
    }
  ];

  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-5 text-gray-900">
            What{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Don't just take our word for it
          </p>
        </motion.div>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          modules={[Pagination, Autoplay]}
          className="about-testimonial-swiper"
          style={{ padding: '20px 0 60px 0' }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-xl h-full">
                <FaQuoteLeft className="text-blue-200 text-3xl mb-4" />
                <p className="text-gray-600 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                  <div className="flex gap-1 ml-auto">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-sm" />
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <style>{`
          .about-testimonial-swiper .swiper-pagination-bullet {
            background: #cbd5e1;
            opacity: 1;
            width: 8px;
            height: 8px;
            transition: all 0.3s ease;
          }
          .about-testimonial-swiper .swiper-pagination-bullet-active {
            background: linear-gradient(135deg, #3b82f6, #8b5cf6);
            width: 24px;
            border-radius: 4px;
          }
        `}</style>
      </div>
    </section>
  );
};

export default AboutTestimonials;